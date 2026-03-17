import fs from "node:fs/promises";
import path from "node:path";

const baseUrl = "https://slowroads.io";
const outDir = process.argv[2] ? path.resolve(process.argv[2]) : process.cwd();

const visited = new Set();
const queue = ["/"];

const textContentTypes = [
  "text/html",
  "text/css",
  "application/javascript",
  "text/javascript",
  "application/json",
  "application/manifest+json",
  "image/svg+xml",
];

const textExtensions = new Set([
  ".html",
  ".js",
  ".css",
  ".json",
  ".svg",
  ".txt",
  ".webmanifest",
  ".map",
]);

function toOutputPath(urlPath) {
  const cleanPath = urlPath.split("?")[0].split("#")[0];
  if (cleanPath === "/") {
    return path.join(outDir, "index.html");
  }
  return path.join(outDir, cleanPath.replace(/^\//, ""));
}

function shouldParseText(urlPath, contentType) {
  if (contentType) {
    const lower = contentType.toLowerCase();
    if (textContentTypes.some((value) => lower.includes(value))) {
      return true;
    }
  }
  return textExtensions.has(path.extname(urlPath).toLowerCase());
}

function resolveRef(ref, currentPath) {
  if (
    !ref ||
    ref.includes("${") ||
    ref.startsWith("data:") ||
    ref.startsWith("mailto:") ||
    ref.startsWith("javascript:")
  ) {
    return null;
  }

  try {
    const resolved = new URL(ref, new URL(currentPath, baseUrl));
    if (resolved.origin !== baseUrl) {
      return null;
    }
    return resolved.pathname;
  } catch {
    return null;
  }
}

function extractRefs(body, currentPath) {
  const refs = new Set();
  const patterns = [
    /(href|src)=["']([^"'#?][^"']*)["']/g,
    /url\((['"]?)([^)"']+)\1\)/g,
    /import\((['"])([^"']+)\1\)/g,
    /from\s*(['"])([^"']+)\1/g,
    /new URL\((['"])([^"']+)\1\s*,\s*import\.meta\.url\)/g,
  ];

  for (const pattern of patterns) {
    for (const match of body.matchAll(pattern)) {
      const raw = match[2];
      const resolved = resolveRef(raw, currentPath);
      if (resolved) {
        refs.add(resolved);
      }
    }
  }

  return refs;
}

async function ensureParent(filePath) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
}

async function writeFile(filePath, body) {
  await ensureParent(filePath);
  await fs.writeFile(filePath, body);
}

while (queue.length > 0) {
  const currentPath = queue.shift();
  if (!currentPath || visited.has(currentPath)) {
    continue;
  }
  visited.add(currentPath);

  const url = new URL(currentPath, baseUrl);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }

  const contentType = response.headers.get("content-type") ?? "";
  const filePath = toOutputPath(currentPath);

  if (shouldParseText(currentPath, contentType)) {
    const text = await response.text();
    await writeFile(filePath, text);
    for (const ref of extractRefs(text, currentPath)) {
      if (!visited.has(ref)) {
        queue.push(ref);
      }
    }
  } else {
    const buffer = Buffer.from(await response.arrayBuffer());
    await writeFile(filePath, buffer);
  }
}

console.log(`Mirrored ${visited.size} paths into ${outDir}`);
