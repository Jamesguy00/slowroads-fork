var Rn=Object.defineProperty;var Un=(s,e,t)=>e in s?Rn(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var F=(s,e,t)=>(Un(s,typeof e!="symbol"?e+"":e,t),t);import{f as js,s as Ye,n as ve,h as Rt,i as za,r as ot,c as Ce,o as nt,b as wt,j as On,k as Ci,l as Vn}from"../chunks/scheduler.05185c5f.js";import{S as Ke,i as Xe,g as _,s as I,e as De,h as b,j as C,f as g,c as M,y as K,k as f,l as re,a as P,x as c,z as G,A as bt,m as ee,n as te,B as R,o as be,H as Fa,C as Ga,d as W,t as ie,r as Ne,u as xe,v as Re,w as Ue,p as Fe,b as Ge,D as Ys,E as Wl,F as ei,G as Vs,I as Hs,J as Ba,K as qa}from"../chunks/index.2e86b85f.js";import{V as gi,E as Hn,O as fs,G as qe,a as ne,A as hs,I as Le,M as at,L as jl,T as Je,b as Ft,S as Aa,D as zn,c as $i,d as Di,e as Fn,l as Gt,f as Et,g as Es,h as Oi,C as As,i as Js,n as Yl,j as Wa,N as Gn,k as Bn,m as qn,o as ja,p as pi,q as Wt,r as Kl,B as Ya,F as es,s as Wn,t as Xl,P as jn,R as Io,u as Yn,v as Kn,W as Xn,w as Qn,x as $t,y as Ka,z as Ql,H as Zl,J as Jl,K as Zn,Q as Ta,U as Xa,X as $l,Y as en,Z as tn,_ as sn,$ as an,a0 as Qa,a1 as Pa,a2 as Li,a3 as Ks,a4 as _s,a5 as Jn,a6 as $n,a7 as ed,a8 as td,a9 as id,aa as sd,ab as on,ac as rn,ad as ln,ae as ad,af as od,ag as rd,ah as Mo,ai as ld}from"../chunks/conifers.3f25b06c.js";import{C as Ae,P as xi,u as Eo,F as lt,I as nd,N as dd,R as nn,a as dn,T as Ao,H as cd,O as hd,D as fd,b as To,c as Ai,S as zs,d as Xi,e as Mi,f as ud}from"../chunks/SettingsManager.b2309b24.js";import{V as H,a as ws,C as ni,G as _e,L as di,c as cn,E as Po,M as Me,I as hn,b as We,R as Fs,S as Na,i as Za,d as Ja,e as Da,s as xa,f as Ra,P as Be,W as Ve,g as fn,h as un,j as vn,u as Ss,k as us,p as vd,v as gd,l as md,m as $s,H as pd,A as _d,n as bd,o as yd,D as wd,q as bs,r as vi,U as No,t as Ei,w as Ts,x as Sd,y as Dd,z as $a,B as Ri,F as Xt,J as xo,K as ti,N as Xs,O as gn,Q as Qs,T as mn,X as Ua,Y as pn,Z as Ro,_ as Uo,$ as it,a0 as qs,a1 as La,a2 as Ld,a3 as Ds,a4 as Cd,a5 as kd,a6 as Oa,a7 as Va,a8 as Id,a9 as Jt,aa as Md,ab as _t,ac as Ni,ad as Ed,ae as Oo,af as Qi,ag as Ad,ah as Td,ai as Pd,aj as Nd,ak as _n,al as Vo}from"../chunks/DevMidlineGenerator.33e318ed.js";import{Q as bn,a as ts}from"../chunks/DriftmasMidlineGenerator.95b0a73b.js";import"../chunks/IsStaticRoute.ed7acde0.js";import{w as xd}from"../chunks/index.205d685d.js";import{e as Oe}from"../chunks/each.e59479a4.js";const Ho=["Chase","ChaseFar","FirstPerson","Bonnet","Bumper"],zo={pitch:{near:.25,far:.15},yOffset:{near:1,far:2},posOffset:new gi(0,0,0),range:{min:2,near:7,far:10,max:50},hasCollisions:!1,farSpeed:45,smoothFactor:1.25,nearPlane:.35,yawLimit:0,minPitch:0,maxPitch:1.57,invertDrag:!1,firstPerson:!1},Rd=new gi(-4,3,0),Ud=68;let Ti=.95,Zi=1-Ti,ys=Zi/4,Ca=1-ys;const Fo=()=>{};class Od{constructor(e){F(this,"container");F(this,"cameraWrapper");F(this,"seatPosition",0);F(this,"seatHeight",0);F(this,"orientation",new Hn(0,0,0,"YXZ"));F(this,"vCenter",new gi);F(this,"camFwd",new gi);F(this,"uLerpA",0);F(this,"uLerpB",0);F(this,"uDist",0);F(this,"uSmoothA",0);F(this,"uSmoothB",0);F(this,"uH",0);F(this,"w",1);F(this,"h",1);F(this,"driverSide",1);F(this,"mode",zo);F(this,"minGroundPitch",0);F(this,"groundPitchUpdateTimer",0);F(this,"vehicleYaw",0);F(this,"vehiclePitch",0);F(this,"vehicleTargets",{x:0,y:0,z:0});F(this,"userYaw",0);F(this,"userYawTarget",0);F(this,"userPitch",0);F(this,"userPitchTarget",0);F(this,"userSmooth",.8);F(this,"userSmoothA",1-this.userSmooth);F(this,"userZoom",0);F(this,"userZoomTarget",0);F(this,"groundPitch",0);F(this,"dragSense",2.5);F(this,"tppDragSense",2);F(this,"fppDragSense",.8);F(this,"yawSense",3);F(this,"pitchSense",2);F(this,"isCinecam",!1);F(this,"cinecam",{targetPos:new gi,targetRot:new gi,uiWasHidden:!1,baseSpeed:120,boostFactor:2,speed:20,verticalSpeed:20,smoothMode:!1,sense:.001,zoomSense:4,targetZoom:1,curZoom:1,maxZoom:Math.sqrt(8),minZoom:Math.sqrt(.75)});F(this,"profileGeneration",0);F(this,"tHeading");F(this,"tDif");F(this,"smoothSpeed",0);F(this,"isRotated",!1);F(this,"fovTarget",0);F(this,"fovLerped",0);F(this,"lockChangeAlertBound",this.lockChangeAlert.bind(this));F(this,"onMouseMoveBound",this.onMouseMove.bind(this));F(this,"onDriverSideBound",this.onDriverSide.bind(this));F(this,"onNextCameraModeBound",this.onNextCameraMode.bind(this));this.cameraWrapper=new fs,this.camera=Ae,this.cameraWrapper.add(this.camera),this.camera.zoom=1,this.camera.updateProjectionMatrix(),this.camera.rotation.y=Math.PI,this.container=new fs,this.container.add(this.cameraWrapper),this.container.rotation.order="ZYX",Ae.rotation.order="ZYX",e.requestPointerLock=e.requestPointerLock||e.mozRequestPointerLock,document.exitPointerLock=document.exitPointerLock||document.mozExitPointerLock||Fo,this.cinecam.canvas=e,H.addListener(ws.Reset,this.reset.bind(this)),H.addListener(ws.Ready,this.refreshSettings.bind(this)),H.addListener(ws.ModelChanged,this.onVehicleChanged.bind(this)),qe.addListener("verticalFov",this.setFov.bind(this)),qe.addListener("fovEffectStrength",this.setFovEffectStrength.bind(this)),ne.addListener("cameraMode",this.onCameraModeChanged.bind(this)),ne.addListener("hideUI",()=>this.onToggleUI()),ne.addListener("touchscreen",()=>this.setSize(this.w,this.h)),ne.addListener("seatPosition",this.onSeatPosChanged.bind(this)),ne.addListener("seatHeight",this.onSeatPosChanged.bind(this)),ne.addListener("driverSide",this.onDriverSideBound),xi.addListener(this.refreshSettings.bind(this)),ni.set("isCinecam",!1),_e.addListener("CameraMode",this.onNextCameraModeBound),_e.addListener("ToggleCinecam",this.onCinecamChanged.bind(this)),di.addListener(t=>{t==1&&this.refreshSettings(!0)}),cn.subscribe(t=>{t>0&&this.onNextCameraMode()})}init(){this.reset(),hs.hasInit?this.initAudio():hs.addInitListener(this.initAudio.bind(this))}initAudio(){this.camera.add(hs.listener)}refreshSettings(e=!1){!e&&this.profileGeneration==xi.value||(this.profileGeneration=xi.value,this.setFov(qe.verticalFov),this.setFovEffectStrength(qe.verticalFov),this.onCameraModeChanged(ne.cameraMode),this.onToggleUI(ne.hideUI),this.setSize(this.w,this.h),this.onSeatPosChanged(),this.onDriverSide(ne.driverSide),this.isCinecam&&this.onCinecamChanged())}reset(){let e=0;isNaN(this.vehicleYaw+this.vehicleTargets.y)||(e=this.vehicleTargets.y-this.vehicleYaw),e%=Math.TAU,this.smoothSpeed=H.speed,this.uLerpA=this.smoothLerp(H.speed/this.mode.farSpeed),this.uLerpB=1-this.uLerpA,this.vehicleTargets.x=this.mode.pitch.near*this.uLerpA+this.mode.pitch.far*this.uLerpB-H.pitch,this.vehiclePitch=this.vehicleTargets.x,this.vehicleTargets.y=H.heading+Math.HALFPI,this.vehicleYaw=this.vehicleTargets.y,this.vehicleTargets.y-=e,this.vehicleTargets.z=0,this.mode.rollFactor&&(this.vehicleTargets.z=H.roll*this.mode.rollFactor),this.orientation.x=this.vehiclePitch,this.orientation.y=this.vehicleYaw,this.orientation.z=this.vehicleTargets.z,this.updateVehicleVisibility(),this.updateFov(!0),this.updateNear(),di.value>=1&&this.update(.1),this.orientation.x-=this.groundPitch,this.groundPitch=0,this.camera.updateProjectionMatrix()}updateVehicleVisibility(){H.container.visible=!this.mode.hideVehicle||ni.isCinecam}handleInput(e){(_e.signal.CameraLeft>0||_e.signal.CameraRight>0)&&(this.mode.isInterior?this.userYawTarget+=(_e.signal.CameraLeft-_e.signal.CameraRight)*this.yawSense*e*.5:this.userYawTarget+=(_e.signal.CameraLeft-_e.signal.CameraRight)*this.yawSense*e),(_e.signal.CameraUp>0||_e.signal.CameraDown>0)&&(this.mode.isInterior?this.userPitchTarget+=(_e.signal.CameraDown-_e.signal.CameraUp)*this.pitchSense*e*.3:this.userPitchTarget+=(_e.signal.CameraDown-_e.signal.CameraUp)*this.pitchSense*e,this.userPitchTarget=Math.min(Math.max(this.mode.minPitch+this.minGroundPitch,this.userPitchTarget),this.mode.maxPitch)),Le.drag.x!=0&&(this.userYawTarget!==0||Math.abs(Le.drag.x)>.003)&&(this.mode.static||(document.body.style.cursor="grabbing"),this.mode.isInterior?this.userYawTarget+=Le.drag.x*this.yawSense*this.dragSense:this.userYawTarget-=Le.drag.x*this.yawSense*this.dragSense),this.userYawTarget<-Math.PI?(this.userYawTarget+=Math.TAU,this.userYaw+=Math.TAU):this.userYawTarget>Math.PI&&(this.userYawTarget-=Math.TAU,this.userYaw-=Math.TAU),Le.drag.y!=0&&(this.userPitchTarget!==0||Math.abs(Le.drag.y)>.005)&&(this.mode.static||(document.body.style.cursor="grabbing"),this.mode.isInterior?this.userPitchTarget-=Le.drag.y*this.pitchSense*this.dragSense:this.userPitchTarget+=Le.drag.y*this.pitchSense*this.dragSense,this.userPitchTarget=Math.min(Math.max(this.mode.minPitch+this.minGroundPitch,this.userPitchTarget),this.mode.maxPitch)),Le.mouseEnabled&&Le.scroll!==0&&Le.scrollLock=="cam"&&(this.userZoomTarget+=Le.scrollDelta*Math.max(.1,Math.sqrt((this.userZoomTarget-this.mode.range.min)/(this.mode.range.max-this.mode.range.min))*3),this.userZoomTarget=Math.min(Math.max(this.mode.range.min,this.userZoomTarget),this.mode.range.max)),this.mode.yawLimit>=0&&(this.userYawTarget=Math.min(Math.max(-this.mode.yawLimit,this.userYawTarget),this.mode.yawLimit)),this.userYaw=this.userYaw*this.userSmooth+this.userYawTarget*this.userSmoothA,this.userPitch=this.userPitch*this.userSmooth+this.userPitchTarget*this.userSmoothA,this.userZoom=this.userZoom*this.userSmooth+this.userZoomTarget*this.userSmoothA}update(e){if(di.value<1)return;if(ni.isCinecam)return this.updateCinecam(e);if(at.useMouse||this.handleInput(e),this.mode.isInterior)return this.updateFirstPerson(e);this.smoothSpeed=this.smoothSpeed*.9+H.speed*.1,this.uLerpA=this.smoothLerp(this.smoothSpeed/this.mode.farSpeed),this.uLerpB=1-this.uLerpA,this.uSmoothA=Math.min(e/(qe.cameraSmoothing*this.mode.smoothFactor),1),this.uSmoothC=this.uSmoothA/2,this.uSmoothB=1-this.uSmoothA,this.uSmoothD=1-this.uSmoothC,this.vCenter.set(this.mode.posOffset.x,this.mode.posOffset.y,this.mode.posOffset.z*this.driverSide).applyQuaternion(H.quaternion).add(H.position),this.vCenter.y+=this.mode.yOffset.near*this.uLerpA+this.mode.yOffset.far*this.uLerpB,this.cameraWrapper.position.copy(this.vCenter),this.tHeading=H.heading+Math.HALFPI,this.tHeading>Math.PI&&(this.tHeading-=Math.TAU),this.mHeading=Math.atan2(H.motionDir.z,-H.motionDir.x)-Math.HALFPI,this.mHeading<-Math.PI&&(this.mHeading+=Math.TAU);let t=this.mHeading-this.tHeading;if(t<-Math.PI?t+=Math.TAU:t>Math.PI&&(t-=Math.TAU),H.speed<2){if(H.speed>1){let i=(H.speed-1)*qe.motionDirBlend;this.tHeading=this.mHeading*i+(1-i)*this.tHeading,this.tHeading-=t*qe.steerDirBlend*(H.speed-1)}}else this.tHeading-=t*qe.steerDirBlend,this.tHeading=this.tHeading*(1-qe.motionDirBlend)+qe.motionDirBlend*this.mHeading;if(this.tDif=this.tHeading-this.vehicleTargets.y,this.tDif<-Math.PI?(this.vehicleTargets.y-=Math.TAU,this.vehicleYaw-=Math.TAU):this.tDif>Math.PI&&(this.vehicleTargets.y+=Math.TAU,this.vehicleYaw+=Math.TAU),this.vehicleTargets.y=this.tHeading,this.vehicleYaw=this.vehicleTargets.y*this.uSmoothA+this.vehicleYaw*this.uSmoothB,this.vehicleTargets.x=this.mode.pitch.near*this.uLerpA+this.mode.pitch.far*this.uLerpB-H.pitch,this.vehiclePitch=this.vehicleTargets.x*this.uSmoothC+this.vehiclePitch*this.uSmoothD,this.vehicleTargets.z=H.roll*this.mode.rollFactor,this.orientation.z=this.vehicleTargets.z*this.uSmoothA+this.orientation.z*this.uSmoothB,this.orientation.x=this.vehiclePitch+this.userPitch,this.orientation.y=this.vehicleYaw+this.userYaw,this.uDist=this.mode.range.near*this.uLerpA+this.mode.range.far*this.uLerpB+this.userZoom,this.mode.hasCollisions){let a=Po.getXZ(Ae.worldPos.x,Ae.worldPos.z,Me.vehicleNode)-this.vCenter.y+1+this.uDist/10;this.minGroundPitch=Math.atan(a/this.uDist),this.groundContact=!1,this.orientation.x<this.minGroundPitch?(this.groundContact=!0,this.groundPitch=this.groundPitch*.9+.1*(this.minGroundPitch-this.orientation.x)):this.groundPitch*=.9,this.orientation.x+=this.groundPitch}this.updateWrapperState(),this.cameraWrapper.position.add(this.camFwd.multiplyScalar(-this.uDist)),this.cameraWrapper.getWorldDirection(this.camFwd),!this.isCinecam&&qe.fovEffectStrength>0&&this.updateFov(),this.updateCamState()}updateCinecam(e){this.cinecam.dx=Math.cos(-Ae.rotation.y-Math.PI/2),this.cinecam.dz=Math.sin(-Ae.rotation.y-Math.PI/2),this.cinecam.useVehicleHeading&&(this.cinecam.dx=Math.cos(-H.rotation.y),this.cinecam.dz=Math.sin(-H.rotation.y));let t=Po.getXZ(Ae.worldPos.x,Ae.worldPos.z),a=(Ae.worldPos.y-t)/100;a<.01&&(a=.01),a>1&&(a=1),Le.key.Digit1?(this.cinecam.baseSpeed/=2,Le.key.Digit1=!1,this.cinecam.useVehicleSpeed=!1):Le.key.Digit3?(this.cinecam.baseSpeed*=2,Le.key.Digit3=!1,this.cinecam.useVehicleSpeed=!1):Le.key.CapsLock?(Le.key.CapsLock=!1,this.cinecam.useVehicleSpeed=!this.cinecam.useVehicleSpeed):Le.key.Tab&&(Le.key.Tab=!1,this.cinecam.smoothMode=!this.cinecam.smoothMode,this.cinecam.smoothMode?Ti=.95:Ti=.8,Zi=1-Ti,ys=Zi/2,Ca=1-ys),this.cinecam.useVehicleSpeed?(this.cinecam.baseSpeed=H.speed,this.cinecam.speed=this.cinecam.baseSpeed):this.cinecam.speed=Math.max(.1,a)*this.cinecam.baseSpeed,this.cinecam.smoothMode?this.cinecam.verticalSpeed=this.cinecam.speed/2:this.cinecam.verticalSpeed=this.cinecam.speed,_e.signal.Boost&&(this.cinecam.speed*=this.cinecam.boostFactor);let r=0,o=0;_e.signal.Forward&&(r=this.cinecam.dx,o=this.cinecam.dz),_e.signal.Backward&&(r-=this.cinecam.dx,o-=this.cinecam.dz),_e.signal.Left&&(this.cinecam.useVehicleHeading?(r+=this.cinecam.dz*.4,o-=this.cinecam.dx*.4):(r+=this.cinecam.dz,o-=this.cinecam.dx)),_e.signal.Right&&(this.cinecam.useVehicleHeading?(r-=this.cinecam.dz*.4,o+=this.cinecam.dx*.4):(r-=this.cinecam.dz,o+=this.cinecam.dx));let l=Math.sqrt(r*r+o*o);l>0&&(r=r/l,o=o/l,this.cinecam.targetPos.x+=r*e*this.cinecam.speed,this.cinecam.targetPos.z+=o*e*this.cinecam.speed),_e.signal.CinecamUp&&(this.cinecam.targetPos.y+=e*this.cinecam.verticalSpeed),_e.signal.CinecamDown&&(this.cinecam.targetPos.y-=e*this.cinecam.verticalSpeed),Ae.rotation.x=Ae.rotation.x*Ti+this.cinecam.targetRot.x*Zi,Ae.rotation.y=Ae.rotation.y*Ti+this.cinecam.targetRot.y*Zi,_e.signal.CameraZoom!=0&&(this.cinecam.targetZoom-=this.cinecam.zoomSense*e*_e.signal.CinecamZoom,this.cinecam.targetZoom=Math.max(Math.min(this.cinecam.maxZoom,this.cinecam.targetZoom),this.cinecam.minZoom)),this.cinecam.curZoom=this.cinecam.curZoom*.95+this.cinecam.targetZoom*.05,this.cinecam.curZoom!=Ae.zoom&&(Ae.zoom=this.cinecam.curZoom*this.cinecam.curZoom,Ae.near=.1+(Ae.zoom-.75),Ae.updateProjectionMatrix()),Ae.position.x=Ae.position.x*Ti+this.cinecam.targetPos.x*Zi,this.cinecam.useVehicleHeading?Ae.position.y=Ae.position.y*Ca+(H.position.y+this.cinecam.targetPos.y)*ys:Ae.position.y=Ae.position.y*Ca+this.cinecam.targetPos.y*ys,Ae.position.z=Ae.position.z*Ti+this.cinecam.targetPos.z*Zi,this.updateWrapperState(),this.updateCamState()}updateFirstPerson(e){this.vCenter.set(this.mode.posOffset.x+this.seatPosition,this.mode.posOffset.y+this.seatHeight,this.mode.posOffset.z*this.driverSide-H.roll*this.mode.rollFactor*.5).applyQuaternion(H.quaternion).add(H.position),this.cameraWrapper.position.copy(this.vCenter),this.tHeading=H.heading+Math.HALFPI,this.tDif=this.tHeading-this.vehicleTargets.y,this.tDif<-Math.PI?(this.vehicleTargets.y-=Math.TAU,this.vehicleYaw-=Math.TAU):this.tDif>Math.PI&&(this.vehicleTargets.y+=Math.TAU,this.vehicleYaw+=Math.TAU),this.vehicleTargets.y=this.tHeading,this.vehicleTargets.x=-H.pitch+this.mode.pitch.near,this.vehicleYaw=this.vehicleTargets.y*.2+this.vehicleYaw*.8,this.vehiclePitch=this.vehicleTargets.x*.1+this.vehiclePitch*.9,this.orientation.x=this.vehiclePitch+this.userPitch,this.orientation.y=this.vehicleYaw+this.userYaw,this.orientation.z=this.orientation.z*.9+H.roll*this.mode.rollFactor*.1,this.updateWrapperState(),this.updateCamState()}updateWrapperState(){this.cameraWrapper.setRotationFromEuler(this.orientation),this.cameraWrapper.getWorldDirection(this.camFwd)}updateCamState(){Ae.fwd.copy(this.camFwd).normalize().negate(),Ae.speed=H.speed,Ae.updateMatrixWorld(),Ae.worldPos.setFromMatrixPosition(Ae.matrixWorld)}setSize(e,t){this.w=e,this.h=t,e<t&&ne.touchscreen?(this.camera.rotation.z=-Math.PI/2,this.isRotated=!0):(this.isRotated=!1,this.camera.rotation.z=0),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}setFovEffectStrength(e){e==0&&this.setFov(qe.verticalFov)}updateFov(e=!1){qe.fovEffectStrength==0||hn?this.fovLerped=0:(this.fovTarget=(1-this.smoothLerp(H.speedLerp))*H.tuning.topSpeed*this.mode.fovFactor,e?this.fovLerped=this.fovTarget:this.fovLerped=this.fovLerped*.95+this.fovTarget*.05),this.setFov(qe.verticalFov+this.fovLerped*qe.fovEffectStrength)}setFov(e){this.camera.aspect<1?(e*=Math.D2R,e=2*Math.atan(Math.tan(e/2)/this.camera.aspect),e*=Math.R2D,Eo(e,this.camera.far,1/this.camera.aspect)):Eo(e,this.camera.far,this.camera.aspect),this.camera.fov=e,this.updateNear(),this.camera.updateProjectionMatrix()}updateNear(){this.mode.isInterior?this.camera.near=this.mode.nearPlane+(100-this.camera.fov)/1e3:this.camera.near=this.mode.nearPlane+(100-this.camera.fov)/200}onToggleUI(){this.isCinecam&&!ne.hideUI&&document.exitPointerLock(),ne.hideUI&&this.isCinecam&&this.cinecam.canvas.requestPointerLock()}onCinecamChanged(){this.isCinecam=!this.isCinecam,ni.set("isCinecam",this.isCinecam),Ae.isCinecam=this.isCinecam,this.isCinecam?(this.hadMouseControl=at.useMouse,at.set("useMouse",!1)):this.hadMouseControl&&at.set("useMouse",!0),this.isCinecam?(this.setFov(Ud),this.cameraWrapper.remove(Ae),this.container.add(Ae),this.cinecam.uiWasHidden=ne.hideUI,ne.set("hideUI",!0),this.cinecam.curZoom=1,this.cinecam.targetZoom=1,this.cinecam.targetPos.copy(Rd).applyQuaternion(H.quaternion).add(H.position),this.cinecam.targetRot.x=-.25,this.cinecam.targetRot.y=H.heading-1.57,this.cinecam.useVehicleSpeed=!1,this.cinecam.useVehicleHeading=!1,Ae.position.copy(this.cinecam.targetPos),Ae.rotation.x=this.cinecam.targetRot.x,Ae.rotation.y=this.cinecam.targetRot.y,this.cinecam.canvas.onclick=e=>{e.target.id=="ui-fixed"&&this.cinecam.canvas.requestPointerLock()},document.addEventListener("pointerlockchange",this.lockChangeAlertBound,!1)):(this.setFov(qe.verticalFov),this.cinecam.uiWasHidden||ne.set("hideUI",!1),document.exitPointerLock(),this.cinecam.canvas.onclick=Fo,document.removeEventListener("pointerlockchange",this.lockChangeAlertBound),document.removeEventListener("mousemove",this.onMouseMoveBound),this.container.remove(Ae),this.cameraWrapper.add(Ae),this.camera.zoom=1,this.camera.updateProjectionMatrix(),Ae.position.set(0,0,0),Ae.rotation.set(0,Math.PI,0),this.reset()),this.updateVehicleVisibility()}lockChangeAlert(){document.pointerLockElement===this.cinecam.canvas||document.mozPointerLockElement===this.cinecam.canvas?document.addEventListener("mousemove",this.onMouseMoveBound,!1):document.removeEventListener("mousemove",this.onMouseMoveBound,!1)}onMouseMove(e){this.cinecam.targetRot.y-=e.movementX*this.cinecam.sense/this.cinecam.curZoom,this.cinecam.targetRot.x-=e.movementY*this.cinecam.sense*Ae.aspect/this.cinecam.curZoom}onCameraModeChanged(){let e=H.cameras[Ho[ne.cameraMode]];e?this.mode={...e}:this.mode={...zo},this.mode.posOffset=new gi().fromArray(this.mode.posOffset),this.mode.isInterior?(ni.set("isInterior",!0),this.dragSense=this.fppDragSense):(ni.set("isInterior",!1),this.dragSense=this.tppDragSense),this.mode.firstPerson&&(this.dragSense=this.fppDragSense),this.mode.invertDrag&&(this.dragSense*=-1),this.mode.range.max?Le.lockScroll("cam"):Le.unlockScroll("cam"),this.updateFov(),this.updateNear(),this.camera.updateProjectionMatrix(),this.reset()}onVehicleChanged(){this.onCameraModeChanged()}onSeatPosChanged(){this.seatHeight=(ne.seatHeight-.5)*.1,this.seatPosition=(ne.seatPosition-.5)*.2}onDriverSide(){this.driverSide=ne.driverSide*2-1}onNextCameraMode(){if(!ni.isCinecam){if(this.userPitchTarget!==0||this.userYawTarget!==0||this.userZoomTarget!==0){this.userPitchTarget=0,this.userYawTarget=0,this.userZoomTarget=0;return}ne.set("cameraMode",(ne.cameraMode+1)%Ho.length)}}smoothLerp(e){return e=Math.min(1,e),-1*(3-e*2)*e*e+1}}const Te={None:0,Intro:1,Reset:2,Boost:3,UTurn:4,Onward:5};let Ws=!!localStorage.getItem("skip-controls");localStorage.setItem("skip-controls",!1);const tt=new jl(Ws?Te.None:Te.Intro);function yn(s,e=5e3){setTimeout(()=>{tt.value==s&&tt.set(Te.None)},e)}Ws||di.addListener(s=>{!Ws&&s==1&&(tt.set(Te.Intro),yn(Te.Intro,7e3),Ws=!0)});const Vd=20*20,Hd=120*120,vt={};class zd{constructor(){F(this,"targetVehicleNodeIndex",0);F(this,"wrongWay",!1);F(this,"isRogue",!1);F(this,"hasAutodrive",!1);F(this,"prompts",{reset:{timerStarted:!1,didPrompt:!1,startTime:null},boost:{didPrompt:!1}});F(this,"profileGeneration",0);F(this,"hasInit",!1);F(this,"sceneReady",!1);F(this,"maxPhysDT",.05);F(this,"minPhysDT",.001);F(this,"physDT",0);F(this,"canDisableAutodrive",!0);F(this,"nodeCheckFrame",0);F(this,"reversingTooFar",!1);F(this,"update",this.updatePending);Je.addSlowListener(this.updateUI.bind(this)),H.addListener(ws.Reset,this.onReset.bind(this)),H.addListener(ws.Ready,this.onVehicleReady.bind(this)),We.addListener("mode",H.setDriveMode.bind(H),!0),We.addListener("speedControl",this.updateSpeedControl.bind(this)),We.addListener("speedControlTarget",this.updateSpeedControl.bind(this)),We.addListener("speedControlMode",this.updateSpeedControl.bind(this)),Ft.addListener(this.onAutodrive.bind(this)),ni.addListener("isInterior",H.onCameraInteriorChangedBound),ni.addListener("isCinecam",H.onCameraInteriorChangedBound),ne.addListener("touchscreen",this.updateSpeedControl.bind(this)),ne.addListener("units",this.updateSpeedControl.bind(this)),ne.addListener("showWheel",H.setShowWheel.bind(H)),ne.addListener("driverSide",H.setDriverSide.bind(H)),ne.addListener("gripFactor",this.updateGripFactor.bind(this)),ne.addListener("speedFactor",this.updateSpeedFactor.bind(this)),ne.addListener("driveLane",this.updateDriveLane.bind(this)),Fs.addListener("lanes",this.updateDriveLane.bind(this))}applySettings(){this.profileGeneration!=xi.value&&(this.profileGeneration=xi.value,H.setDriveMode(We.mode),this.updateSpeedControl(),H.onCameraInteriorChanged(),H.setShowWheel(ne.showWheel),H.setDriverSide(ne.driverSide),console.log("Apply settings",ne.driverSide),this.updateGripFactor(ne.gripFactor),this.updateSpeedFactor(ne.speedFactor),this.updateDriveLane())}updateGripFactor(e){H.setGripFactor(e)}updateSpeedFactor(e){H.setSpeedFactor(e)}updateSpeedControl(){H.hasSpeedControl=We.speedControl&&!ne.touchscreen,H.hasCruiseTarget=H.hasSpeedControl&&We.speedControlMode==Na.Cruise,H.hasSpeedLimit=H.hasSpeedControl&&We.speedControlMode==Na.Max,H.speedControlTarget=We.speedControlTarget/3.6,H.speedControlTarget*=Aa[ne.units],H.speedControlTarget/=5,H.speedControlTarget=Math.round(H.speedControlTarget),H.speedControlTarget*=5,H.speedControlTarget/=Aa[ne.units],We.set("speedControlTargetMS",H.speedControlTarget)}updateDriveLane(){Fs.lanes<=1||ne.driveLane==zn.CENTER?H.driveLaneOffset=0:H.driveLaneOffset=(ne.driveLane*2-1)*Fs.width/2,Fs.lanes>1&&H.inAutodrive&&Me.vehicleNode&&this.reset()}onAutodrive(e){this.hasAutodrive=e,H.setAutodrive(this.hasAutodrive)}init(){this.targetVehicleNodeIndex=Me.vehicleIndex,this.hasInit?(this.applySettings(),this.reset()):(We.addListener("type",H.setVehicle.bind(H)),this.sceneReady=!0,this.hasInit=!0)}onSceneLoading(){this.sceneReady=!1,this.update=this.updatePending}onSceneReady(){this.sceneReady=!0,H.setVehicle(We.type)}onVehicleReady(){this.applySettings()}updatePending(e,t){H.hasInit&&this.sceneReady&&(this.update=this.updateLive,this.update(e,t))}updateLive(e,t){_e.signal.Reset&&(lt.hasUsedReset||(lt.set("hasUsedReset",!0),tt.value==Te.Reset&&tt.set(Te.None)),this.reset()),_e.signal.Headlights&&H.setHeadlights(!H.headlights,!0),_e.signal.Autodrive?Le.key.ShiftLeft||Le.key.ShiftRight?ne.set("autodriveMode",(ne.autodriveMode+1)%3):(Ft.set(!this.hasAutodrive),this.canDisableAutodrive=!1):this.hasAutodrive&&(!_e.hasScreenInput&&!ni.isCinecam&&(ne.autodriveMode==$i.STEER&&(_e.signal.Left||_e.signal.Right)||ne.autodriveMode==$i.FULL&&(_e.gamepadSignal.Forward||_e.gamepadSignal.Backward||_e.signal.Forward||_e.signal.Backward||_e.signal.Left||_e.signal.Right))?this.canDisableAutodrive&&(this.hasAutodrive=!1,Ft.set(this.hasAutodrive),H.setAutodrive(this.hasAutodrive)):this.canDisableAutodrive||(this.canDisableAutodrive=!0)),_e.signal.ToggleSpeedControl&&We.set("speedControl",!We.speedControl),H.hasSpeedControl&&Le.scrollDelta!=0&&Le.scrollLock==null&&(Le.scrollDelta<0?Za():Ja(),Le.scrollDelta=0),!lt.hasUsedReset&&!H.onRoad?this.prompts.reset.timerStarted?!this.prompts.reset.didPrompt&&Je.appTime-this.prompts.reset.startTime>3&&(this.prompts.reset.didPrompt=!0,tt.set(Te.Reset)):(this.prompts.reset.timerStarted=!0,this.prompts.reset.startTime=Je.appTime):this.prompts.reset.timerStarted&&(this.prompts.reset.timerStarted=!1,this.prompts.reset.didPrompt=!1),tt.value==Te.None?!H.inAutodrive&&!lt.hasUsedBoost&&H.pitch>.12&&H.onRoad&&H.speed>5&&!this.prompts.boost.didPrompt&&(this.prompts.boost.didPrompt=!0,tt.set(Te.Boost),yn(Te.Boost,3e3)):tt.value==Te.Reset&&H.onRoad&&H.onRoad&&tt.set(Te.None),H.update(e,t),this.updateProgress(),this.updateVehicleState(e),this.updateUI()}updateProgress(){if(Me.vehicleNodeDidChange=!1,Me.vehicleNode.i<this.targetVehicleNodeIndex){this.wrongWay=!1,Me.vehicleNode=Me.vehicleNode.next,Me.vehicleIndex=Me.vehicleNode.i,Me.vehicleNodeDidChange=!0;return}vt.d1=H.position.distanceToSquared(Me.vehicleNode.p),vt.d2=H.position.distanceToSquared(Me.vehicleNode.next.next.p),H.isRogue=!1,vt.d2>Hd?(H.isRogue=!0,this.nodeCheckFrame--,this.nodeCheckFrame<=0&&(this.nodeCheckFrame=60,vt.closest=Da(H.position.x,H.position.z,Me.vehicleNode),vt.closest.n.i>Me.vehicleNode.i&&vt.closest.n.i<Me.vehicleNode.i+100&&(this.targetVehicleNodeIndex!==vt.closest.n.i&&Di.add("VEHICLE: Leaping ahead to node "+vt.closest.n.i),this.targetVehicleNodeIndex=vt.closest.n.i))):vt.d2<vt.d1?(this.wrongWay=!1,(tt.value==Te.UTurn||tt.value==Te.Onward)&&tt.set(Te.None),Me.vehicleNode=Me.vehicleNode.next,Me.vehicleIndex=Me.vehicleNode.i,Me.vehicleNodeDidChange=!0):vt.d1>Vd&&H.onRoad?(H.isRogue=!0,vt.closest=Da(H.position.x,H.position.z,Me.vehicleNode),vt.alignment=Math.abs(vt.closest.n.a+H.heading),this.wrongWay?vt.alignment<.5&&(this.wrongWay=!1,tt.value==Te.UTurn&&tt.set(Te.None)):vt.alignment>1.8&&(this.wrongWay=!0,tt.set(Te.UTurn)),!this.wrongWay&&vt.alignment<1&&H.direction<0&&H.speed>5&&(this.reversingTooFar=!0,tt.set(Te.Onward)),this.reversingTooFar&&H.direction>0&&(this.reversingTooFar=!1,tt.set(Te.None))):this.wrongWay?(vt.closest=Da(H.position.x,H.position.z,Me.vehicleNode),vt.alignment=Math.abs(vt.closest.n.a+H.heading),vt.alignment<1?(this.wrongWay=!1,tt.value==Te.UTurn&&tt.set(Te.None)):H.isRogue=!0):this.reversingTooFar&&(this.reversingTooFar=!1,tt.value==Te.Onward&&tt.set(Te.None))}updateVehicleState(e){H.dS=Math.sqrt((H.pPosition.x-H.position.x)**2+(H.pPosition.z-H.position.z)**2),H.speed=H.dS/e,H.speedLerp=Math.min(H.speed/H.tuning.topSpeed),H.velocity.subVectors(H.position,H.pPosition).multiplyScalar(1/e),H.accel.subVectors(H.velocity,H.pVelocity).multiplyScalar(1/e),H.motionDir.copy(H.velocity).normalize(),H.motionHeading=Math.atan2(H.motionDir.z,H.motionDir.x),H.pitch=H.rotation.z,H.roll=H.rotation.x,H.pPosition.copy(H.position),H.pVelocity.copy(H.velocity)}updateUI(){H.hasSpeedControl&&Math.abs(H.speed-H.speedControlTarget)<Math.max(.1,H.speed*.004)?xa.set(H.speedControlTarget):xa.set(H.speed),ne.odomMode==Fn.TOTAL?Ra.set((Be.totalDist+Be.sr1Distance)/1e3):Ra.set((Me.vehicleNode.i-Me.initIndex)/100+Ve.accumulatedDistance),fn.set(H.hasBoost),!lt.hasUsedBoost&&H.hasBoost&&(lt.set("hasUsedBoost",!0),tt.value==Te.Boost&&tt.set(Te.None)),un.set(_e.toggled.Handbrake),vn.set(_e.toggled.StickySteer),Me.vehicleNodeDidChange&&Ss(Me.vehicleNode.i),at.useMouse&&at.set("currentSteer",_e.gamepadSignal.Left-_e.gamepadSignal.Right)}onCrash(){}reset(){H.reset()}onReset(){this.wrongWay=!1,tt.set(Te.None),Ss(Me.vehicleNode.i,!0),this.updateVehicleState(1)}}var Ls=function(){var s=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(h){h.preventDefault(),i(++s%e.children.length)},!1);function t(h){return e.appendChild(h.dom),h}function i(h){for(var u=0;u<e.children.length;u++)e.children[u].style.display=u===h?"block":"none";s=h}var a=(performance||Date).now(),r=a,o=0,l=t(new Ls.Panel("FPS","#0ff","#002")),n=t(new Ls.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=t(new Ls.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:t,showPanel:i,begin:function(){a=(performance||Date).now()},end:function(){o++;var h=(performance||Date).now();if(n.update(h-a,200),h>=r+1e3&&(l.update(o*1e3/(h-r),100),r=h,o=0,d)){var u=performance.memory;d.update(u.usedJSHeapSize/1048576,u.jsHeapSizeLimit/1048576)}return h},update:function(){a=this.end()},domElement:e,setMode:i}};Ls.Panel=function(s,e,t){var i=1/0,a=0,r=Math.round,o=r(window.devicePixelRatio||1),l=80*o,n=48*o,d=3*o,h=2*o,u=3*o,m=15*o,p=74*o,v=30*o,y=document.createElement("canvas");y.width=l,y.height=n,y.style.cssText="width:80px;height:48px";var w=y.getContext("2d");return w.font="bold "+9*o+"px Helvetica,Arial,sans-serif",w.textBaseline="top",w.fillStyle=t,w.fillRect(0,0,l,n),w.fillStyle=e,w.fillText(s,d,h),w.fillRect(u,m,p,v),w.fillStyle=t,w.globalAlpha=.9,w.fillRect(u,m,p,v),{dom:y,update:function(D,L){i=Math.min(i,D),a=Math.max(a,D),w.fillStyle=t,w.globalAlpha=1,w.fillRect(0,0,l,m),w.fillStyle=e,w.fillText(r(D)+" "+s+" ("+r(i)+"-"+r(a)+")",d,h),w.drawImage(y,u+o,m,p-o,v,u,m,p-o,v),w.fillRect(u+p-o,m,o,v),w.fillStyle=t,w.globalAlpha=.9,w.fillRect(u+p-o,m,o,r((1-D/L)*v))}}};const Fd=Ls,Gd=`
    uniform float time;
    uniform vec3 camPos;
    uniform float shelfHeight0;
    uniform float shelfHeight1;
    uniform float skyScale0;
    uniform float skyScale1;
    uniform float altitude;

    varying vec4 wPos;
    varying vec2 vUv;
    varying vec2 vUUv;
    varying vec2 vUUUv;
    varying vec2 vUUUUv;

    varying float dist;

`,Bd=`
    wPos = modelMatrix * vec4( position, 1.0 );

    // Distance (height) from camera to virtual plane
    // Big hmm here, these values may intersect with road on rare occasions, could min them
    float h0 = shelfHeight0 - camPos.y;

    // Distance from camera to image plane
    float h1 = shelfHeight1 - camPos.y;

    vUv = uv;

    // First shelf...
    vUUv.x = wPos.x + time;
    vUUv.y = wPos.z + time;
    vUUv /= skyScale0 * altitude;

    float scale1 = skyScale1 * altitude;
    float lowerScale = scale1 * h1 / h0;
    float motionScale = (h1 - h0) / h0;

    // Second shelf
    vUUUv.x = ((wPos.x + camPos.x * motionScale ) / lowerScale) + time / scale1;
    vUUUv.y = ((wPos.z + camPos.z * motionScale ) / lowerScale) + time / scale1;


    // Offset copy of second shelf used for shading?
    vUUUUv.x = vUUUv.x + 0.001;
    vUUUUv.y = vUUUv.y - 0.001;


    //// EXPERIMENT
    // float h2 = ((shelfHeight0 + shelfHeight1) / 2.0) - camPos.y;
    // float scale2 = ((skyScale0 + skyScale1) / 2.0) * altitude;
    // float midScale = scale2 * h2 / h0;
    // float motionScale2 = (h2 - h0) / h0;
    // vUUUUv.x = ((wPos.x + camPos.x * motionScale2 ) / midScale);// + (time) / scale1;
    // vUUUUv.y = ((wPos.z + camPos.z * motionScale2 ) / midScale);// + (time) / scale1;


    // Mid-point experimentation
    // vUUUUv.x = (vUUUv.x + vUUv.x) / 2.0;
    // vUUUUv.y = (vUUUv.y + vUUv.y) / 2.0);


    // Use UVs to  look up  distance from camera...
    float vX = (uv.x - 0.5) * 2.0;
    float vY = (uv.y - 0.5) * 2.0;
    dist = max(0.0, 1.0 - sqrt((vX * vX) + (vY * vY)));
`,qd=`

    transformed.z += (1.0 - dist)*(1.0 - dist) * altitude;

    vec4 mvPosition = vec4( transformed, 1.0 );

    #ifdef USE_BATCHING

        mvPosition = batchingMatrix * mvPosition;

    #endif

    #ifdef USE_INSTANCING

        mvPosition = instanceMatrix * mvPosition;

    #endif

    mvPosition = modelViewMatrix * mvPosition;

    gl_Position = projectionMatrix * mvPosition;
`,Wd=`
#ifdef USE_FOG

	varying float vFogDepth;
    varying float vFogBlend;
    varying vec3 vFogPos;
    uniform float fogFar;
    varying float vHaze;

    #ifdef FOG_EXP2
        uniform float fogDensity;
    #endif

    uniform float fogNear;
    uniform float hazeHeight;
    uniform float hazeIntensity;

#endif
`,jd=`
    #ifdef USE_FOG

        vFogDepth = fogFar;

        vFogPos = (modelMatrix * vec4(transformed, 1.0)).xyz;

        vHaze = 0.0;

        vFogBlend = 1.0;
        float fogAvg = (fogFar + fogNear) / 2.0;
        if(fogAvg < 500.0) {
            if(fogAvg <  50.0) {
                vFogBlend = 0.0;
            } else {
                vFogBlend = (fogAvg-50.0) / 450.0;
            }
        }
        if(hazeHeight < 0.0) {
            vFogBlend *= (1.0 - hazeIntensity);
        }

        #ifdef FOG_EXP2
            vFogDepth = max(0.0, (vFogDepth - fogNear) * (fogFar / (fogFar - fogNear)));
        #endif

        #ifdef FOG_EXP2

            vFogDepth = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

        #else

            vFogDepth = smoothstep( fogNear, fogFar, vFogDepth );

        #endif

    #endif
`,Yd=`
    uniform vec3 highlight;
    uniform vec3 lowlight;
    uniform float mode;

    varying vec2 vUv;
    varying vec2 vUUv;
    varying vec2 vUUUv;
    varying vec2 vUUUUv;
    varying float dist;

    highp float random(vec2 coords) {
        return (fract(sin(dot(coords.xy, vec2(12.9898,78.233))) * 43758.5453) * 0.2) - 0.1;
    }

    float remap(float value, float min1, float max1, float min2, float max2) {
        return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
    }
`,Kd=`

    vec4 c1 = texture2D(map, vUUv);
    vec4 c2 = texture2D(map, vUUUv);

    vec4 cloudCol = c1;

    //////////////////////////// BLEND MODES ///////////////////////////

    //// MAX

    // vec4 cloudCol = max(c1, c2);

    //// MIN

    // vec4 cloudCol = min(c1, c2);

    //// MULTIPLY

    // vec4 cloudCol = c1 * c2;

    /// ADD

    // vec4 cloudCol = c1 + c2;

    //// AVERAGE

    // vec4 cloudCol = (c1 + c2) / 2.0;

    //// SCREEN

    // vec4 ic1 = vec4(1.0) - c1;
    // vec4 ic2 = vec4(1.0) - c2;
    // cloudCol = vec4(1.0) - (ic1 * ic2);

    // gl_FragColor.rgb = mix(gl_FragColor.rgb, cloudCol.rgb, cloudCol.a * dist * (1.0-fogDepth));

    ///////////////////// ITERATIONS /////////////////////////

    if(mode == 0.0) {

        vec4 c3 = texture2D(map, vUUUUv);

        // Remapping makes them a little sharper
        // c1.a = remap(c1.a, 0.0, 0.9, 0.0, 1.0);
        // c1.a = min(1.0, max(c1.a, 0.0));
        // c1.a = sqrt(c1.a);
        // c2.a = remap(c2.a, 0.0, 0.9, 0.0, 1.0);
        // c2.a = min(1.0, max(c2.a, 0.0));
        // c2.a = sqrt(c2.a);

        // Testing density

        // Density works like this kind of - might need to transition lowlight into highlighy as density lowers though
        // Also should use this to affect the blend between fog/cloud colour. At -1 density, should be full cloud.
        // float density = -0.5;

        // if(density > 0.0) {
        //     c1.a = remap(c1.a, density, 1.0, 0.0, 1.0);
        //     c1.a = min(1.0, max(c1.a, 0.0));

        //     c2.a = remap(c2.a, density, 1.0, 0.0, 1.0);
        //     c2.a = min(1.0, max(c2.a, 0.0));

        //     c3.a = remap(c3.a, density, 1.0, 0.0, 1.0);
        //     c3.a = min(1.0, max(c3.a, 0.0));
        // } else {
        //     c1.a = remap(c1.a, 0.0, 1.0, -density, 1.0);
        //     c1.a = min(1.0, max(c1.a, 0.0));

        //     c2.a = remap(c2.a, 0.0, 1.0, -density, 1.0);
        //     c2.a = min(1.0, max(c2.a, 0.0));

        //     c3.a = remap(c3.a, 0.0, 1.0, -density, 1.0);
        //     c3.a = min(1.0, max(c3.a, 0.0));
        // }


        float ic1 = 1.0 - c1.a;
        float ic2 = 1.0 - c2.a;
        float ic = 1.0 - ic1 * ic2;

        // ic *= c1.a * c3.a;// * c2.a;
        ic *= c3.a;

        cloudCol = vec4(lowlight, ic);

        cloudCol.rgb = mix(cloudCol.rgb, highlight, c3.a * ic);

        gl_FragColor.rgb = mix(gl_FragColor.rgb, cloudCol.rgb, cloudCol.a * min(1.0,fogBlend)*dist);

    } else if(mode == 1.0)  {

        vec4 c3 = texture2D(map, vUUUUv);

        cloudCol.rgb = lowlight;

        // Screen alpha
        cloudCol.a = 1.0 - (1.0 - c1.a) * (1.0 - c2.a);

        cloudCol.rgb = mix(lowlight, highlight,  c1.a * cloudCol.a * c3.a);

        gl_FragColor.rgb = mix(gl_FragColor.rgb, cloudCol.rgb, cloudCol.a * dist * dist);

    } else if(mode == 2.0) {
        vec4 c3 = texture2D(map, vUUUUv);

        // Two-tone

        c1.a = remap(c1.a, 0.0, 1.0, 0.0, 1.0);
        c2.a = remap(c2.a, 0.0, 1.0, 0.25, 1.0);
        c3.a = remap(c3.a, 0.0, 1.0, 0.0, 0.5);

        c2.a *= c1.a;
        c3.a *= c1.a;

        cloudCol.rgb = lowlight;

        // Screen blend the initial alpha
        float ic1 = 1.0 - c1.a;
        float ic2 = 1.0 - c2.a;
        cloudCol.a = 1.0 - (ic1 * ic2);

        cloudCol.rgb = mix(cloudCol.rgb, highlight*1.5, c3.a * (dist * 2.0)); // More pink above


        gl_FragColor.rgb = mix(gl_FragColor.rgb, cloudCol.rgb, cloudCol.a * min(1.0,fogBlend)*dist);

    } else if(mode == 3.0) {

        vec4 c3 = texture2D(map, vUUUUv);

        float c23 = 1.0 - (1.0 - c3.a) * (1.0 - c2.a);

        cloudCol.rgb = mix(lowlight, highlight, min(c2.a, c3.a));

        cloudCol.a = max(c2.a, c1.a * c3.a);


        gl_FragColor.rgb = mix(gl_FragColor.rgb, cloudCol.rgb, cloudCol.a * dist * dist);
    } else if(mode == 4.0) {


    }



    //// FAR HIGHLIGHT THING SUNSET

    /*

        vec4 highlight = vec4(1.0,0.7,0.4,1.0);

        c1 *= highlight;
        c2 *= highlight;

        c1.a = remap(c1.a, 0.0, 1.0, 0.0, 1.0);
        c2.a = remap(c2.a, 0.0, 1.0, 0.0, 1.0);

        vec4 cloudCol = (c1 + c2) / 2.0;

        if(cloudCol.a > 0.25) {
            cloudCol = mix(cloudCol, highlight*8.0, (cloudCol.a - 0.25) * (0.5 - (dist*dist)));
            cloudCol.a = min(1.0, cloudCol.a);
        }

        gl_FragColor.rgb = mix(gl_FragColor.rgb, cloudCol.rgb, cloudCol.a * dist);

    */

    //// CIRRUS/MIN

    // c1 = remap(c1, 0.0, 1.0, 0.0, 1.0);
    // c2 = remap(c2, 0.0, 1.0, 0.0, 1.0);

    // cloudCol = max(vec4(c1), vec4(c2));
    // cloudCol /= 2;

    // cloudCol2.a = cloudCol.a;
    // if(cloudCol.a > 0.75) {
    //     // cloudCol = mix(cloudCol, cloudCol2, (cloudCol.a - 0.75) * 4.0);
    // }

    // vec4 cloudCol = texture2D( map, vUUv ) * texture2D(map, vUUUv); // MULTIPLY
    // vec4 cloudCol = (texture2D(map, vUUv) + texture2D( map, vUUUv )) / 2.0; // AVERAGE

    // Apply colour if we have it?

    /////////////////////// FINAL COLOUR APPLICATION //////////////////////////////////

    // gl_FragColor.rgb = mix(gl_FragColor.rgb, cloudCol.rgb * vec3(1.0,0.7,0.4) * 1.0 * cloudCol.a, cloudCol.a * dist);


    // diffuseColor = vec4(0.5,0.6,0.8,);

`,Xd=`

attribute float roadProximity;
attribute float treeMask;
attribute vec2 roadUv;
attribute float overlap;

varying float height;
varying float steepness;
varying float roadProx;
varying float vTreeMask;
varying vec2 vUv;
varying vec2 vUUv;
varying vec2 vWv;
varying vec2 vWWv;
varying vec2 rUv;
varying float vLightGrass;
varying float vDarkGrass;
varying float vShadow;
varying float vCamDepth;

float wuvSize = 800.0;

uniform sampler2D displacementMap;
uniform sampler2D fadeFine;
uniform float sinkDist;
uniform float vehicleIndex;
uniform float shadowFactor;

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

float screen(float a, float b) {
  return 1.0 - ((1.0 - a) * (1.0 - b));
}

float distSquared( vec3 A, vec3 B ) {
    vec3 C = A - B;
    return dot( C, C );
}

vec3 upvec = vec3(0.0,1.0,0.0);

`,Qd=`

vec4 wPos = modelMatrix * vec4( position, 1.0 );

vFresnelPos = wPos.xyz;
vFresnelNorm = normalize( vec3( vec4( normal, 0.0) * modelMatrix ) );

height = wPos.y;

// Set UVs from world pos
vUv.x = wPos.x / 10.0;
vUv.y = wPos.z / 10.0;

vUUv.x = vUv.x / 8.0;
vUUv.y = vUv.y / 8.0;

// 0 is perfectly flat, 1 is 90 degrees
steepness = 1.0 - dot(normal, upvec);
steepness = clamp(steepness * 1.25, 0.0, 1.0); // was multiplied by 2 before..?

vWv.x = wPos.x / wuvSize;
vWv.y = wPos.z / wuvSize;

vWWv.x = vWv.x / 8.0;
vWWv.y = vWv.y / 8.0;

rUv = roadUv;


//// GET FADES

float fade0 = texture2D(fadeFine, vWv).r;
float fade1 = texture2D(fadeFine, vWWv).r;



//// GRASSES

float heightVal = min(1.0, max(0.0, (height - (20.0 + fade1 * 40.0))/160.0));

vLightGrass = min(1.0, heightVal * (fade0 + heightVal * 0.5));

// Keep it green close to road?
if(roadProximity > 0.0 && roadProximity < 0.5 + fade1) {
  vLightGrass *= roadProximity / (0.5 + fade1);
}

vDarkGrass = min(max(0.0,(fade1 - 0.25) * 2.0), 1.0);

//// ROAD PROX

roadProx = roadProximity;

// Prevent rocks forming below the road, e.g. at bridges.
// Not perfect...
if(roadProx < 0.0) {
  steepness = 0.0;
}



//// SHADOW

vShadow = min(1.0, treeMask * min(1.0, max(0.0, height / 4.0)));


//// TREE MASK

vTreeMask = vShadow;

if(vTreeMask > 0.1) {
  vTreeMask = max(0.2, vTreeMask);
} else {
  vTreeMask = 0.0;
}

// if(roadProx > 0.0 && roadProx < 2.0) {
//   vTreeMask *= roadProx / 2.0;
// } else if(roadProx < 0.0) {
//   vTreeMask = 0.0;
// }

// Experimenting with displacement map
if(roadProx > 0.0 && roadProx < 20.0) {
  transformed += normalize( objectNormal ) * ( (texture2D( displacementMap, vUv ).x - 0.3) * steepness * 3.0 );
}

//// MV POSITION

vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );

//// OVERLAP SINK

// TODO Use actual distance probably?

//// Curvature
// float ddist = -mvPosition.z;
// float ssink = ddist / 1000.0;
// ssink *= ssink;
// transformed.y -= ssink * 50.0;
// // Recalc mvPosition
//   mvPosition = modelViewMatrix * vec4( transformed, 1.0 );

if(overlap > 0.0) {

    float overlapDist = overlap - vehicleIndex;

    if(overlapDist > 0.0) {

      if(overlapDist < sinkDist) {

          float halfSinkDist = sinkDist * 0.75;

          if(overlapDist < halfSinkDist) {
            transformed.y -= 20.0;
          } else {
            transformed.y -= 20.0 * (sinkDist - overlapDist) / (sinkDist - halfSinkDist);
          }
      }

    } else {

      float fSinkDist = -sinkDist/2.0;

      if(overlapDist > fSinkDist) {

        float halfSinkDist = fSinkDist / 2.0;

        if(overlapDist > halfSinkDist) {
          transformed.y -= 20.0;
        } else {
          transformed.y -= 20.0 * (fSinkDist - overlapDist) / halfSinkDist;
        }

      }

    }

    // Recalc mvPosition
    mvPosition = modelViewMatrix * vec4( transformed, 1.0 );
}

gl_Position = projectionMatrix * mvPosition;

vCamDepth = -mvPosition.z;

// vLightGrass = 0.0;
// vDarkGrass = 0.0;

 vShadow *= shadowFactor;


`,Zd=`

varying float height;
varying float steepness;
varying float roadProx;
varying float vTreeMask;
varying vec2 vUv;
varying vec2 vUUv;
varying vec2 vWv;
varying vec2 vWWv;
varying vec2 rUv;
varying float vLightGrass;
varying float vDarkGrass;
varying float vShadow;
varying float vCamDepth;

uniform int seasonIndex;

uniform sampler2D grassMap;
uniform sampler2D sandMap;
uniform sampler2D rockMap;
uniform sampler2D rockMapBump;
uniform sampler2D gravelMap;
uniform sampler2D forestMap;
uniform sampler2D roadMap;

uniform sampler2D fadeFine;

uniform vec3 roadCol;

uniform vec3 grassColA;
uniform vec3 grassColB;
uniform vec3 peakColA;
uniform vec3 peakColB;

uniform vec3 fieldDiscolouration;

uniform float radiance;

vec4 rockTex;

vec4 terrainBlend(vec4 tx1, float w1, vec4 tx2, float w2, float depth) {

  // Perform the blending

  float ma = max(tx1.a + w1, tx2.a + w2) - depth;
  float b1 = max(tx1.a + w1 - ma, 0.0);
  float b2 = max(tx2.a + w2 - ma, 0.0);

  return ((tx1 * b1) + (tx2 * b2)) / (b1 + b2);
}

// the ws are the height of that texture; biggest w wins
// The depth is the transition between them? maybe?

// The height goes in the alpha channel of the textures 1 and 2
// the w is the weight? the weight should be the transition?
// depth is.. I don't know, a weird offset? No idea tbh

float screen(float a, float b) {
  return 1.0 - ((1.0 - a) * (1.0 - b));
}

`,Jd=`

// if(vFresnelPos.y < 0.0) {
//   discard;
// }

// TODO Pack multiple resolutions into one to prevent this nonsense
float fade0 = texture2D(fadeFine, vUv).r;
float fade1 = texture2D(fadeFine, vUUv).r;
float fade2 = texture2D(fadeFine, vWv).r;

//// PREP MAP

vec4 texelColor = texture2D( grassMap, vUv );

//// SCALED TEXTURE

float blendVal = fade2 * (0.5 + vLightGrass);

float depthLerp = 0.0;
if(vCamDepth > 500.0) {
  depthLerp = 1.0;
} else {
  depthLerp = 0.5 + (vCamDepth / 2.0) / 500.0;
}

texelColor *= 1.0 - (blendVal * depthLerp);

//// GRASS BASE

// Blend them into two colours

float grassBlend = (screen(fade1, fade0) + vDarkGrass) / 2.0;

vec3 grassCol = mix(
  mix(grassColA, grassColB, grassBlend),
  mix(peakColA, peakColB, grassBlend),
  vLightGrass
);

//// APPLY GRASS COLOUR

texelColor.rgb *= grassCol;

texelColor.r = max(0.0, min(1.0, texelColor.r));
texelColor.g = max(0.0, min(1.0, texelColor.g));
texelColor.b = max(0.0, min(1.0, texelColor.b));

//// TREE MASK

vec4 forestCol = texture2D(forestMap, vUv);
forestCol.a = forestCol.r * 2.0 * fade2;

float fTreeMask = min(1.0, vTreeMask);

if(fTreeMask > 0.0) {
  // texelColor.a = texelColor.g - 0.2;
  texelColor = terrainBlend(
    texelColor,
    1.0-fTreeMask,
    forestCol,
    fTreeMask,
    0.1 + (1.0 - fTreeMask) * fade0 * 0.9
  );
  // texelColor = mix(texelColor, forestCol, fTreeMask);

  texelColor.a = 1.0;
}


//// SAND BLEND

float vHeight = height + min(1.0, height+0.5) * (fade2 * 2.0 + (fade0 + fade2) * 0.5);

if(vHeight < 4.0) {

  float dark = 1.0;

  if(vHeight < 0.0) {
    texelColor = texture2D(sandMap, vUv) * 0.75;
  } else {

    if(vHeight < 2.0) {

      // Darken toward water
      dark = min(dark, 1.0 - (2.0 - vHeight) / 8.0);

    } else if(vHeight > 2.5) {

      // Darken into the grass
      dark = 1.0 - (vHeight-2.5) / 2.0;

    }

    // Lerp from grass to thingy
    float lerp = max(0.0, (vHeight - 1.0) / 3.0);

    vec4 sandCol = texture2D(sandMap, vUv);

    texelColor.a = texelColor.r;

    sandCol.a = sandCol.r;

    // Apply shading based on water/grass proximity
    sandCol.rgb *= dark;

    texelColor = terrainBlend(
      texelColor,
      lerp,
      sandCol,
      1.0 - lerp,
      0.05
    );


    // texelColor = mix(texture2D(sandMap, vUv) * dark, texelColor, height / 4.0);

    // texelColor = terrainBlend(
    //   texture2D(sandMap, vUv) * dark,
    //   dark,
    //   texelColor,
    //   texelColor.g,
    //   height / 4.0
    // );
  }
}

//// ROAD GRAVEL

if(seasonIndex < 3) {

  if(roadProx != 0.0 && roadProx < 0.25 + fade0 * 2.0) {

    float rp = roadProx / (0.25 + fade0 * 2.0);

    // Mix into forest colour if we're under trees
    if(seasonIndex == 2 && vShadow > 0.0) {

      texelColor = mix(

        mix(texture2D(gravelMap, vUv*2.0), forestCol, min(1.0, vShadow * 2.0)),

        texelColor,
        smoothstep(
          rp + 0.35,
          rp - 0.35,
          1.0 - texelColor.g
        )
      );

    } else {

      texelColor = mix(
        texture2D(gravelMap, vUv*2.0),
        texelColor,
        smoothstep(
          0.0,
          1.0,
          rp
        )
      );

    }

  }

}

//// ROAD SURFACE?

if(roadProx < 0.0) {

  vec4 roadSurface = texture2D(roadMap, rUv);

  if(roadProx < -1.0) {
    texelColor = mix(texelColor, roadSurface, roadSurface.a);
  } else {
    texelColor = mix(texelColor, roadSurface, roadSurface.a * abs(roadProx));//roadSurface.a * (abs(roadProx)); / -0.5));
  }
}

//// STEEPNESS CLIFF


// Oh here's where I do the distance thing?
if(roadProx == 0.0) {
  rockTex = texture2D(rockMap, vWv) * (1.0 - fTreeMask * 0.5);
  rockTex.a = (1.0 - texture2D(rockMapBump, vWv).r) * 0.95;
} else {
  rockTex = texture2D(rockMap, vUv) * (1.0 - fTreeMask * 0.5);
  rockTex.a = texture2D(rockMapBump, vUv).r;
}


  texelColor.a = 0.2 + fade2 * 0.2;
texelColor = terrainBlend(texelColor,0.6, rockTex, steepness, 0.05);
texelColor.a = 1.0;

//// PREP EMISSIVE?

// NOTE this must match the grass sprites. Ideally share a chunk?


totalEmissiveRadiance = texelColor.rgb * radiance;

//// FINAL COMPOSITION

diffuseColor *= texelColor;

// DEBUG COLOURS
// diffuseColor.rgb = vNormal.rgb;

// Clamp to reduce glittering pixels? Needs a better fix though... this is a last resort

// diffuseColor.r = min(max(0.0, diffuseColor.r), 1.0);
// diffuseColor.g = min(max(0.0, diffuseColor.g), 1.0);
// diffuseColor.b = min(max(0.0, diffuseColor.b), 1.0);



`,$d=`
    uniform sampler2D noiseMap;
	uniform float dissolveFar;
    uniform float dissolveNear;
    uniform float dissolveInterval;
	uniform float shadowFactor;
	uniform float discolourationFactor;
    // uniform float time;

    varying float discolouration;
    varying float vShadow;
    varying float vDissolve;
    varying vec3 vCenterNormal;

    float distanceSq(vec3 a, vec3 b) {
        return (b.x - a.x)*(b.x - a.x) + (b.y - a.y)*(b.y - a.y) + (b.z - a.z)*(b.z - a.z);
    }

    float distanceSqFlat(vec3 a, vec3 b) {
        return (b.x - a.x)*(b.x - a.x) + (b.z - a.z)*(b.z - a.z);
    }

    // vec2 getRotatePivot2d(vec2 uv, float rotation, vec2 pivot) {
    //     return vec2(
    //         cos(rotation) * (uv.x - pivot.x) + sin(rotation) * (uv.y - pivot.y) + pivot.x,
    //         cos(rotation) * (uv.y - pivot.y) - sin(rotation) * (uv.x - pivot.x) + pivot.y
    //     );
    // }

`,ec=`
    discolouration = 1.0 + (texture2D(noiseMap, vec2(wPos.x/256.0,wPos.z/256.0)).r - 0.5) * discolourationFactor;

	// SPECIAL HANDLING FOR CYPRESS TO AVOID IT BEING TOO DARK
	if(vMapUv.x > 0.76) {
	  discolouration = (discolouration / 2.0) + 0.5;
	}
`,tc=`

	// Cone effect on the shadow
	// TODO - set up different parameters for different trees, they have different coniness.

	// Heightlerp controls how high up the effect takes hold
	float shadowRadius = 3.2 - max(0.2,heightLerp*1.4) * 1.8;
	vShadow = shadowRadius - centerDist;

	// Assume trunk sunk, handle it specially
	if(heightLerp < 0.0 && centerDist < 0.5) {
		vShadow = 0.5;
	}

	// vShadow *= shadowFactor;
`,ic=`

	// Note - can use instance matrix 1, 1 for scale proxy?

    vec4 wPos = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);

    // Assumes trees are 10m tall
    // float heightLerp = min(1.0, (position.y - instanceMatrix[1][1]) / 10.0);
	float heightLerp = position.y / 10.0;

    float centerDist = sqrt(position.x*position.x + position.z*position.z);

	// Angled upwards in a constant cone
	if(centerDist < 0.0001) {
		// Trunk
		vCenterNormal = normalize(normalMatrix * mat3(instanceMatrix) * vec3(position.x, 1.0, position.z));
	} else {
	    if(position.y < 0.0) {
			vCenterNormal = normalize(normalMatrix * mat3(instanceMatrix) * vec3(position.x,0.0, position.z));
		} else {
			vCenterNormal = normalize(normalMatrix * mat3(instanceMatrix) * vec3(position.x, max(0.5, heightLerp*1.5)*centerDist, position.z));
		}
	}

	if(heightLerp > 1.0) { heightLerp = 1.0; }

	// Straight up
	// vCenterNormal = normalize(normalMatrix * mat3(instanceMatrix) * vec3(0.0,1.0,0.0));


`+tc+`



`+ec+`

    // IF WEIGHED DOWN BY SNOW UNCOMMENT THIS!?
	// if(centerDist > 0.1) {
	// 	transformed.y -= centerDist / 2.0 + heightLerp * 1.0;
	// }

    // Need to get mvPosition here
    #include <project_vertex>



    if(-mvPosition.z < dissolveNear) {
        vDissolve = 0.0;
    } else {
        if(-mvPosition.z > dissolveFar) {
            vDissolve = 1.0;
        } else {
            vDissolve = (-mvPosition.z - dissolveNear) / dissolveInterval;
        }

    }

`,sc=`

    uniform sampler2D noiseMap;

    varying float discolouration;
    varying float vShadow;
    varying float vDissolve;

    varying vec3 vCenterNormal;

    float fShadow;

`,ac=`

if(vMapUv.x > 0.125) {
	diffuseColor.g *= discolouration;
	// if(diffuseColor.g > diffuseColor.r) {
}

`,oc=`

	diffuseColor.g *= discolouration;

`,rc=`

	if(vDissolve == 1.0 || texture2D(noiseMap, vMapUv).r < vDissolve) {
		discard;
	}

    fShadow = max(0.0, min(1.0, vShadow));

	fShadow = sqrt(fShadow) * 0.65;


`+ac+`

	diffuseColor.rgb *= 1.0 - fShadow;
	// totalEmissiveRadiance = vec3(0.5, diffuseColor.gb * 8.0);//diffuseColor.rgb;

`,lc=`
GeometricContext geometry;

geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

#ifdef USE_CLEARCOAT

	geometry.clearcoatNormal = clearcoatNormal;

#endif

#ifdef USE_IRIDESCENCE

	float dotNVi = saturate( dot( normal, geometry.viewDir ) );

	if ( material.iridescenceThickness == 0.0 ) {

		material.iridescence = 0.0;

	} else {

		material.iridescence = saturate( material.iridescence );

	}

	if ( material.iridescence > 0.0 ) {

		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );

		// Iridescence F0 approximation
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );

	}

#endif

IncidentLight directLight;

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointLightInfo( pointLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;

	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

        // TODO Could have some fun here to improve the night lighting?
		getSpotLightInfo( spotLight, geometry, directLight );

		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif

		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif

		#undef SPOT_LIGHT_MAP_INDEX

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif

		// spot lights shine through the shadow
		directLight.color *= 1.0 + fShadow;

		RE_DirectSpot( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalLightInfo( directionalLight, geometry, directLight );

		//// MAGIC LINE TO OVERRIDE DIRECTIONAL LIGHT SHADOW ////

        // if(fShadow > 0.5) {
            // directLight.color *= 1.0 - fShadow;
        // }

        // Normal dot comparison

        //// Even normal (bit weak)
        // directLight.color *= max(0.0, 1.0-((dot(directLight.direction, vCenterNormal) + 1.0) / 2.0));

        //// 1.2x normal (about right?)
        // float dotDirLightFactor = min(1.0, max(0.0, -dot(directLight.direction, vCenterNormal) + 0.2));
        // directLight.color *= min(1.0, dotDirLightFactor + 0.0);


        //// Cross vecs - idea is to mix to tangent by dot factor
        // vec3 cross1 = cross(vCenterNormal, geometry.normal);
        // vec3 cross2 = cross(cross1, vCenterNormal);
        // geometry.normal = mix(geometry.normal, cross2, min(1.0, max(0.0, ddot * -2.0)));


        //// WORKING SQUASH - ONLY IF DOT < 0
        // When the dot is 1, it's in shadow
        // When the dot is -1, it's in full light
        // So when the dot is > 0.0 we want to reduce the amount of light by dot * 2.0
        // which means multiplying by 1.0 - dot * 2.0
        // Oh -- If we use the cylinder test for centernormal, with overhead light, the dot here will never be > 0

        // Problem is we still want it lit up to like -0.1 dot

        // directLight.color *= min(1.0, max(0.25, dot(directLight.direction, vCenterNormal) * -2.0));

        // directLight.color *= max(0.0, min(1.0, dot(directLight.direction, vCenterNormal) + 0.25));


        // Direct normal (bit severe)
        directLight.color *= max(0.0, dot(directLight.direction, vCenterNormal));

        /////////////////////////////////////////////////////////

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );

		}
		#pragma unroll_loop_end

	#endif

    //// SHADOW EFFECT ON AMBIENT

	if(fShadow > 0.25) {
		// irradiance *= 1.25 - fShadow;
	}

	////

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`,nc=`

float faceDirection = gl_FrontFacing ? 1.0 :  1.0;

#ifdef FLAT_SHADED

	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );

#else

	vec3 normal = normalize( vCenterNormal );

	#ifdef DOUBLE_SIDED

		normal *= faceDirection;

	#endif

#endif

#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )

	#ifdef USE_TANGENT

		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

	#else

		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);

	#endif

	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;

	#endif

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	#ifdef USE_TANGENT

		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

	#else

		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );

	#endif

	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;

	#endif

#endif

// non perturbed normal for clearcoat among others

vec3 geometryNormal = normal;
`,dc=`
varying vec3 vViewPosition;

struct LambertMaterial {

	vec3 diffuseColor;
	float specularStrength;

};

void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_Direct_Lambert_Spot( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( min(1.0, dot( geometry.normal, directLight.direction ) + 0.25) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}


void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Lambert
#define RE_DirectSpot           RE_Direct_Lambert_Spot
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert

`,cc=`
    uniform sampler2D noiseMap;
    uniform float dissolveFar;
    uniform float dissolveNear;
    uniform float dissolveInterval;
    uniform float shadowFactor;
    uniform float discolourationFactor;
    uniform float alphaTest;
    // uniform float time;

    varying float discolouration;
    varying float vShadow;
    varying float vDissolve;
    varying vec3 vCenterNormal;
    varying vec3 vCameraUp;
    varying float vAlphaTest;

    float distanceSq(vec3 a, vec3 b) {
        return (b.x - a.x)*(b.x - a.x) + (b.y - a.y)*(b.y - a.y) + (b.z - a.z)*(b.z - a.z);
    }

    // vec2 getRotatePivot2d(vec2 uv, float rotation, vec2 pivot) {
    //     return vec2(
    //         cos(rotation) * (uv.x - pivot.x) + sin(rotation) * (uv.y - pivot.y) + pivot.x,
    //         cos(rotation) * (uv.y - pivot.y) - sin(rotation) * (uv.x - pivot.x) + pivot.y
    //     );
    // }

`,wn=`
    discolouration = 1.0 + (texture2D(noiseMap, vec2(wPos.x/256.0,wPos.z/256.0)).r - 0.5) * discolourationFactor;
`,hc=`
    // Get the direction to the center, in a pill shape to preserve the trunk normals?

    #if defined(USE_INSTANCING)

        // INSTANCED VERSION USED FOR LIVE

        if(vMapUv.y > 0.25) {
            vCenterNormal =  normalMatrix * mat3(modelMatrix * instanceMatrix) * normalize(position - vec3(0.0, min(position.y, 5.0), 0.0));
        } else {
            vCenterNormal = normalMatrix * mat3(instanceMatrix) * normalize(position - vec3(0.0, 7.0, 0.0));
        }

    #else

        // NON-INSTANCE VERSION USED FOR IMPOSTER GENERATION

        if(vMapUv.y > 0.25) {
            vCenterNormal = normalMatrix * normalize(vec3(0.0, 5.0, 0.0) - position);
        } else {
            // Trunk - test against leaf center
        }

    #endif

    vCameraUp = normalMatrix * vec3(0.0, 1.0, 0.0);


`,fc=`

    vec4 wPos = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);

    vShadow = 0.0;
    // What if we say all trees are 10m tall by default? center at 5.0?

    // Fake shadow by testing against direction to center..?
    // Works nicely but not great for directional light and normal light

    float distToCenter = distanceSq(position, vec3(0.0, 5.0, 0.0));//min(position.y, 5.0), 0.0));

    if(distToCenter < 36.0) {
        if(distToCenter < 8.0) {
            vShadow = 1.0;
        } else {
            // distToCenter = sqrt(distToCenter);
            // vShadow = 1.0 - (distToCenter - 3.0) / 3.0;
            vShadow = 1.0 - (distToCenter - 8.0) / 28.0;
        }
    }
    if(position.y < 1.0) {
        vShadow = min(1.0, 1.0 - position.y);
    }


`+hc+`
`+wn+`


    // if(uv.y > 0.25) {
    //     vec4 wPos2 = modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
    //     float angleToCamera = atan(wPos2.x - cameraPosition.x, wPos2.z - cameraPosition.z);
    //     transformed.xz = getRotatePivot2d(transformed.xz, angleToCamera, vec2(0.0,0.0));
    // }

    // ANIMATION TESTING
    // vec4 wPos2 = modelMatrix * instanceMatrix * vec4(position, 1.0);
    // float tt = time * 0.01;
    // vec2 blowUV = vec2(wPos2.x / 20.0 + tt, wPos2.z / 80.0 + tt / 4.0);
    // if(uv.y > 0.26) {
    //     float blow = texture2D(noiseMap, blowUV).r;
    //     transformed.x += sin(blow) * 2.0 * uv.x;//sin(blow) * 0.2;
    //     transformed.y += sin(blow) * 2.0;
    //     transformed.z += cos(blow) * 2.0 * (1.0 - uv.x);//cos(blow) * 0.2;
    // }

    // Need to get mvPosition here
    #include <project_vertex>


    if(-mvPosition.z < dissolveNear) {
        vDissolve = 0.0;
    } else {

        if(-mvPosition.z > dissolveFar) {
            vDissolve = 1.0;
        } else {
            vDissolve = (-mvPosition.z - dissolveNear) / dissolveInterval;
        }
    }

    // Dynamic alpha test... just testing for now? can't decide if it's worthwhile
    vAlphaTest = alphaTest;
    if(dissolveFar > 200.0) {
        if(-mvPosition.z < dissolveFar) {
            // Second term is 0 at dissolveFar, 0.5 at half way to dissolve...
            vAlphaTest = max(0.3, alphaTest * (1.0 + mvPosition.z / (dissolveFar + dissolveInterval)));
        }
    } else {
        if(-mvPosition.z < 200.00) {
            // Second term is 0 at dissolveFar, 0.5 at half way to dissolve...
            vAlphaTest = max(0.3, alphaTest * (1.0 + mvPosition.z / (300.0)));
        }
    }


    float vShadowFade = 0.0;

    if(-mvPosition.z < 25.0) {
        vShadowFade = 1.0;
    } else {
        vShadowFade = 1.0 - (-mvPosition.z - 25.0) / 125.0;
    }

    vShadow *= vShadowFade * shadowFactor;



`,uc=`

    uniform sampler2D noiseMap;
    uniform float radiance;
    uniform bool hasSnow;

    varying float discolouration;
    varying float vShadow;
    varying float vDissolve;

    varying vec3 vCenterNormal;
    varying vec3 vCameraUp;
    varying float vAlphaTest;


`,vc=`

    if(vDissolve == 1.0 || texture2D(noiseMap, vMapUv).r < vDissolve) {
        discard;
    }

    if(diffuseColor.g > diffuseColor.b * 1.5) {
        // We have a leaf? Not very reliable.. might need a leafmap eventually

        // Recolour...
        diffuseColor.rg *= discolouration;

        // Emissive...
        totalEmissiveRadiance = vec3(diffuseColor.rg * 8.0, 0.5) * radiance;
    }
`,gc=`
    if(diffuseColor.a < vAlphaTest) discard;
`,mc=`

    // Use the normal to blend with snow colours

    // ONLY DO THIS ON SNOW VIBES
    if(hasSnow) {
        float dotUp = dot(normal, vCameraUp );
        if(dotUp > 0.1) {
            diffuseColor.rgb = mix(diffuseColor.rgb, vec3(min(1.0, 0.5 + dotUp)), min(1.0, (dotUp - 0.1) * 8.0));
        }
    }


`,pc=`

    if(vType < 0.5) {
        // We have a leaf
        // if(diffuseColor.g > diffuseColor.b * 1.5) { // For some reason it looks better if it's darker than regular tree?
            diffuseColor.rg *= discolouration;
            // Emissive... unclear why this needs to be different to the regular tree emissive. Suspicious. Just a shadowmap diff?
            totalEmissiveRadiance = vec3(diffuseColor.rg * 8.0, 0.5) * radiance;
        // }
    } else {
        `+oc+`
    }
`,_c=`
GeometricContext geometry;

geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

#ifdef USE_CLEARCOAT

	geometry.clearcoatNormal = clearcoatNormal;

#endif

#ifdef USE_IRIDESCENCE

	float dotNVi = saturate( dot( normal, geometry.viewDir ) );

	if ( material.iridescenceThickness == 0.0 ) {

		material.iridescence = 0.0;

	} else {

		material.iridescence = saturate( material.iridescence );

	}

	if ( material.iridescence > 0.0 ) {

		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );

		// Iridescence F0 approximation
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );

	}

#endif

IncidentLight directLight;

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointLightInfo( pointLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;

	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

    geometry.normal = normalize((normal));// + vCenterNormal) / 2.0);

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

        // TODO Could have some fun here to improve the night lighting?
		getSpotLightInfo( spotLight, geometry, directLight );

		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif

		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif

		#undef SPOT_LIGHT_MAP_INDEX

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif

        // if(vShadow > 0.5) {
            directLight.color *= vShadow;
        // }

		RE_DirectSpot( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

    geometry.normal = normal;

#endif

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalLightInfo( directionalLight, geometry, directLight );

		//// MAGIC LINE TO OVERRIDE DIRECTIONAL LIGHT SHADOW ////

        if(vMapUv.y > 0.25) {
            directLight.color *= 1.0 - vShadow * 0.5;
        }

        // Normal dot comparison

        //// Even normal (bit weak)
        // directLight.color *= max(0.0, 1.0-((dot(directLight.direction, vCenterNormal) + 1.0) / 2.0));

        //// 1.2x normal (about right?)
        // float dotDirLightFactor = min(1.0, max(0.0, -dot(directLight.direction, vCenterNormal) + 0.2));
        // directLight.color *= min(1.0, dotDirLightFactor + 0.0);


        //// Cross vecs - idea is to mix to tangent by dot factor
        // vec3 cross1 = cross(vCenterNormal, geometry.normal);
        // vec3 cross2 = cross(cross1, vCenterNormal);
        // geometry.normal = mix(geometry.normal, cross2, min(1.0, max(0.0, ddot * -2.0)));



        //// WORKING SQUASH - ONLY IF DOT < 0
        // When the dot is 1, it's in shadow
        // When the dot is -1, it's in full light
        // So when the dot is > 0.0 we want to reduce the amount of light by dot * 2.0
        // which means multiplying by 1.0 - dot * 2.0
        // Oh -- If we use the cylinder test for centernormal, with overhead light, the dot here will never be > 0


        directLight.color *= min(1.0, max(0.25, dot(directLight.direction, vCenterNormal) * 2.0));


        // Direct normal (bit severe)
        // directLight.color *= max(0.0, -dot(directLight.direction, vCenterNormal));

        /////////////////////////////////////////////////////////

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif


		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );

		}
		#pragma unroll_loop_end

	#endif

    //// SHADOW EFFECT ON AMBIENT
	if(vShadow > 0.5) {
		irradiance *= 1.5 - vShadow;
	}
	////

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`,bc=`
varying vec3 vViewPosition;

struct LambertMaterial {

	vec3 diffuseColor;
	float specularStrength;

};

void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_Direct_Lambert_Spot( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

    // Scale and square to keep the txture and detail in the leaves in headlights

    float dotty = (max(-0.5, -0.5 + dot( geometry.normal, directLight.direction )));// / 2.0 ) + 0.25;
	float dotNL = saturate( dotty );
    dotNL = max(0.1, dotNL);
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}


void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Lambert
#define RE_DirectSpot           RE_Direct_Lambert_Spot
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert

`,yc=`

    uniform sampler2D noiseMap;

    attribute float variant;
    attribute float type;
    attribute float orientation;
    attribute float dissolve;

    varying vec2 vUv;
    varying vec2 vUvOffset;
    varying float vDissolve;
    varying float vAngleBlend;
    varying vec3 vCameraUp;
    varying float vType;
    // varying float vDist;

    varying float discolouration;

    uniform float dissolveFar;
    uniform float dissolveNear;
    uniform float dissolveInterval;
    uniform float discolourationFactor;

    vec2 getRotatePivot2d(vec2 uv, float rotation, vec2 pivot) {
        return vec2(
            cos(rotation) * (uv.x - pivot.x) + sin(rotation) * (uv.y - pivot.y) + pivot.x,
            cos(rotation) * (uv.y - pivot.y) - sin(rotation) * (uv.x - pivot.x) + pivot.y
        );
    }
`,wc=`
    // Use the world position of the camera to derive the angle
    vec4 wPos = modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
    float angleToCamera = atan(wPos.x - cameraPosition.x, wPos.z - cameraPosition.z);
`,Sc=`

    vUv = uv;

    vType = type;

`+wn,Dc=`

    vec3 objectNormal = normalize(vec3( (cameraPosition.x - wPos.x), 0.0, (cameraPosition.z - wPos.z)));

`,Lc=`


    // Rotate the vertices to face the camera
    transformed.xz = getRotatePivot2d(transformed.xz, angleToCamera, vec2(0.0,0.0));

    // Account for rotational offset in model
    angleToCamera -= orientation;

    // Normalise to inverval [-PI, PI]
    if(angleToCamera > PI) {
        angleToCamera -= PI*2.0;
    } else if(angleToCamera < -PI) {
        angleToCamera += PI*2.0;
    }

    // Choose tile from texture based on angle
    float tileIndex = (angleToCamera + PI) / (PI * 2.0 / 16.0);

    // Should be 0 when angle is exactly face-on, 1 when exactly betwen tiles
    // Note that this should be scaled to the alphaTest value?



    vUvOffset.x = (1.0 / 16.0) * floor(tileIndex);

    // Set vertical offset by variant type
    vUvOffset.y = variant / 4.0;

    // Need to get mvPosition here
    #include <project_vertex>

    if(-mvPosition.z > 500.0) {
        vAngleBlend = 0.0;
    } else {
        vAngleBlend = (tileIndex - floor(tileIndex));
    }


    if(-mvPosition.z < dissolveNear) {
        vDissolve = 1.0;
    } else {
        if(-mvPosition.z > dissolveFar) {
            vDissolve = 0.0;
        } else {
            vDissolve = 1.0 - (-mvPosition.z - dissolveNear) / dissolveInterval;
        }
    }

    // vDist = min(0.75, max(0.4, 1.0 - -mvPosition.z / 1000.0));

    vDissolve *= dissolve;

    vCameraUp = normalMatrix * vec3(0.0, 1.0, 0.0);
`,Cc=`

    varying vec2 vUv;
    varying vec2 vUvOffset;
    varying float vDissolve;
    varying float vAngleBlend;
    varying vec3 vCameraUp;
    varying float vType;
    // varying float vDist;

    varying float discolouration;

    uniform sampler2D noiseMap;
    uniform sampler2D mapB;
    uniform sampler2D normalMapB;
    uniform float radiance;
    uniform bool hasSnow;
`,kc=`


    vec4 texelColor;

    if(vType < 0.5) {
        texelColor = texture2D( map, vUv + vUvOffset );
    } else {
        // Map B
        texelColor = texture2D( mapB, vUv + vUvOffset );
    }

    // Transform uvs to square to  sample from noise texture
    float blendNoise = texture2D(noiseMap, vec2(vUv.x*5.33*4.0, vUv.y*4.0)).r;

    // Blend to next texture by angle offset?
    if(blendNoise < vAngleBlend) {
        vec2 blendUV = vUv + vUvOffset + vec2(1.0 / 16.0, 0.0);
        if(blendUV.x > 1.0) {
            blendUV.x -= 1.0;
        }

        if(vType < 0.5) {
            texelColor = textureGrad(map, blendUV, dFdx(vUv), dFdy(vUv));
        } else {
            texelColor = textureGrad(mapB, blendUV, dFdx(vUv), dFdy(vUv));
        }
    }

    if(blendNoise < vDissolve) {
        texelColor.a = 0.0;
    }

    diffuseColor *= texelColor;

`+pc,Ic=`
    vec2 vNormalMapUvOffset = vNormalMapUv + vUvOffset;

    #ifdef USE_NORMALMAP_OBJECTSPACE

        if(blendNoise <= vAngleBlend) {
            vNormalMapUvOffset.x += 1.0/16.0;
            if(vNormalMapUvOffset.x > 1.0) {
                vNormalMapUvOffset.x -= 1.0;
            }
        }

        // vNormalMapUvOffset.x = min(max(vNormalMapUvOffset.x, 0.0), 1.0);

        // normal = texture2D( normalMap, vNormalMapUvOffset ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

        if(vType < 0.5) {
            normal = textureGrad(normalMap, vNormalMapUvOffset, dFdx(vNormalMapUv), dFdy(vNormalMapUv)).xyz * 2.0 - 1.0;
        } else {
            normal = textureGrad(normalMapB, vNormalMapUvOffset, dFdx(vNormalMapUv), dFdy(vNormalMapUv)).xyz * 2.0 - 1.0;
        }

        #ifdef DOUBLE_SIDED
            normal = normal * faceDirection;
        #endif

        normal = normalize( normal );

        diffuseColor.rgb = vec3(normal.x);

    #elif defined( USE_NORMALMAP_TANGENTSPACE )

        if(blendNoise <= vAngleBlend) {
            vNormalMapUvOffset.x += 1.0/16.0;
            if(vNormalMapUvOffset.x > 1.0) {
                vNormalMapUvOffset.x -= 1.0;
            }
        }


        vec3 mapN;

        if(vType < 0.5) {
            mapN = textureGrad(normalMap, vNormalMapUvOffset, dFdx(vNormalMapUv), dFdy(vNormalMapUv)).xyz * 2.0 - 1.0;
        } else {
            mapN = textureGrad(normalMapB, vNormalMapUvOffset, dFdx(vNormalMapUv), dFdy(vNormalMapUv)).xyz * 2.0 - 1.0;
        }

        mapN.xy *= normalScale;

        normal = normalize( tbn * mapN );

    #elif defined( USE_BUMPMAP )

        normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );

    #endif

    // SNOW
    if(vType < 0.5 && hasSnow) {
        float dotUp = dot(normal, vCameraUp );
        // Note that we use different parameters to the regular trees
        if(dotUp > 0.0) {
            diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0), min(1.0, dotUp * 8.0));
        }
    }
`,Mc=`
GeometricContext geometry;

geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

#ifdef USE_CLEARCOAT

	geometry.clearcoatNormal = clearcoatNormal;

#endif

#ifdef USE_IRIDESCENCE

	float dotNVi = saturate( dot( normal, geometry.viewDir ) );

	if ( material.iridescenceThickness == 0.0 ) {

		material.iridescence = 0.0;

	} else {

		material.iridescence = saturate( material.iridescence );

	}

	if ( material.iridescence > 0.0 ) {

		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );

		// Iridescence F0 approximation
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );

	}

#endif

IncidentLight directLight;

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalLightInfo( directionalLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

        reflectedLight.directSpecular = reflectedLight.directDiffuse;

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointLightInfo( pointLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;

	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotLightInfo( spotLight, geometry, directLight );

		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif

		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif

		#undef SPOT_LIGHT_MAP_INDEX

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif

        //// SR EDIT - FAKE DIM SPOTLIGHTS ON IMPOSTERS
        directLight.color *= 0.2;
        ////

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );

		}
		#pragma unroll_loop_end

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`,Ec=`
    // attribute float variant;
    attribute vec3 groundNormal;
    attribute float shadow;
    attribute float roadProx;

    uniform float sproutNear;
    uniform float sproutFar;
    uniform sampler2D noiseMap;
    uniform float shadowFactor;
    // uniform float time;

    varying vec2 vUv;

    varying vec2 vGv;
    varying vec2 vGGv;
    varying vec2 vWv;
    varying vec2 vWWv;

    varying float doDiscard;
    varying float doColor;
    varying float vShadow;
    varying float vRoadProx;

    varying float vLightGrass;
    varying float vDarkGrass;

    varying vec2 vUvOffset;

    // Must match the ground shader
    float wuvSize = 800.0;

    float screen(float a, float b) {
        return 1.0 - ((1.0 - a) * (1.0 - b));
    }
`,Ac=`

    vUv = uv;

    vec4 wPos = modelMatrix * instanceMatrix * vec4(1.0);

    vFresnelPos = wPos.xyz;
    vFresnelPos.y -= 1.5; // Subtract the sprite midpoint to get the ground position?

    vFresnelNorm = groundNormal;

    // Grass colouration UVs
    vGv.x = wPos.x / 10.0;
    vGv.y = wPos.z / 10.0;

    vGGv.x = vGv.x / 16.0;
    vGGv.y = vGv.y / 16.0;

    vWv.x = wPos.x / wuvSize;
    vWv.y = wPos.z / wuvSize;

    vWWv.x = vWv.x / 8.0;
    vWWv.y = vWv.y / 8.0;



    // objectNormal = groundNormal;
    vNormal = normalMatrix * groundNormal; // mat3(inverse(transpose(modelMatrix * instanceMatrix)));

    vRoadProx = roadProx;

    vShadow = min(1.0, shadow * min(1.0, max(0.0, wPos.y / 4.0)));

    // Get uvLookup  from variant
    /* Indexed into the texture as such:

        2 | 3
        - + -
        0 | 1

    */

    //// VARIANT SELECTION

    float fade0 = texture2D(noiseMap, vWv).r;
    float fade1 = texture2D(noiseMap, vWWv).r;
    float v = texture2D(noiseMap, vGGv).r;

    float variant = 1.0;

    // CHECK HEATHER - has to match the ground function
    // Might want to find something cheaper to do here?
    float heather = smoothstep(0.4, 1.0, ((wPos.y + fade1 * 350.0) - 60.0) / 500.0);
    heather *= screen(fade1, fade0);
    // heather = smoothstep(0.3, 0.6, heather);
    if(vShadow < 0.1 && heather > 0.4 + v / 5.0 ) {
        variant = 3.0;

        if(roadProx > 1.0) {
            transformed.y -= v * 0.2;
        } else {
            transformed.y -= v * 0.2 * roadProx;
        }
    }


    if(vRoadProx < v * 2.0 + 0.2) {
        // Little grass
        variant = 0.0;
    } else if(variant < 3.0 && ( wPos.y > 100.0 && v + fade0 > 1.75 - (wPos.y - 50.0) / 250.0 ) || vShadow > v * 2.0 ) {

       // big grass

        variant = 2.0;
    } else if(variant == 3.0) {
        transformed.xyz *= 0.5 + fade0 * 1.5;
    }



    doDiscard = 0.0;
    doColor = 0.0;
    if(variant < 3.0) {
        doColor = 1.0;

        // SET UP GRASS COLOURATION PARAMS


        float heightVal = min(1.0, max(0.0, (wPos.y - (20.0 + fade1 * 40.0))/160.0));

        vLightGrass = min(1.0, heightVal * (fade0 + heightVal * 0.5));

        vDarkGrass =  min( max( 0.0, (fade1 - 0.25) * 2.0), 1.0);

        if(vRoadProx < 0.5 + fade1) {
            vLightGrass *= max(0.5, vRoadProx / (0.5 + fade1));
        }
    }

    vUvOffset.x = variant * 0.25;
    vUvOffset.y = 0.0;

    // Need to replace projectVertex here so we can get mvPosition




    // Limit darkness by thingy
    // darkness = min(0.5, -tPos.z / sproutNear);

    //// MODIFY MV POSITION

    float dist = (wPos.x - cameraPosition.x)*(wPos.x - cameraPosition.x) + (wPos.z - cameraPosition.z)*(wPos.z - cameraPosition.z);

    if(dist > sproutNear) {

        transformed.y -= (dist - sproutNear) / (sproutFar - sproutNear) * 0.5;

        if(dist > sproutFar) {
            doDiscard = 1.0;
        }
    }

    #include <project_vertex>


    // ANIMATION TESTING
    // float tt = time * 0.05;
    // vec2 blowUV = vec2(vGGv.x + tt, vGGv.y + tt);
    // if(uv.y > 0.5) {
    //     float blow = texture2D(noiseMap, blowUV).r;
    //     transformed.x += blow * 0.2;//sin(blow) * 0.2;
    //     transformed.z += blow * 0.2;//cos(blow) * 0.2;
    // }

    vShadow *= shadowFactor;

`,Tc=`

    uniform sampler2D noiseMap;

    varying vec2 vUv;

    varying vec2 vGv;
    varying vec2 vGGv;
    varying vec2 vWv;
    varying vec2 vWWv;

    varying float doDiscard;
    varying float doColor;
    varying float vShadow;
    varying float vRoadProx;

    varying float vLightGrass;
    varying float vDarkGrass;

    varying vec2 vUvOffset;

    uniform vec3 grassColA;
    uniform vec3 grassColB;
    uniform vec3 peakColA;
    uniform vec3 peakColB;

    uniform float radiance;

    float screen(float a, float b) {
        return 1.0 - ((1.0 - a) * (1.0 - b));
    }


`,Pc=`
    float faceDirection = 1.0;
    vec3 normal = normalize(vNormal);
`,Nc=`

    // Don't draw grass beyond view dist
    if(doDiscard > 0.0) {
        discard;
    }

    // Need to alter vLightGrass
    vec4 texelColor = texture2D( map, vUv + vUvOffset );// * (1.0 - vLightGrass * 0.25);

    // Limit darkness by distance?
    // texelColor.rgb = vec3(max(texelColor.r, darkness));

    if(doColor > 0.5) {

        // Shared with ground.glsl - TODO share a chunk instead?

        float grassBlend = (screen(texture2D(noiseMap, vGv).r, texture2D(noiseMap, vGGv).r) + vDarkGrass) / 2.0;

        vec3 grassCol = mix(
            mix(grassColA, grassColB, grassBlend),
            mix(peakColA, peakColB, grassBlend),
            vLightGrass
        );

        texelColor.rgb *= grassCol;

    } else if(texelColor.a < 0.98) {
        // Lazy fix for heather white pixels
        discard;
        // texelColor.rgb = vec3(0.05, 0.04, 0.03);
    }

    diffuseColor *= texelColor;


    //// PREP EMISSIVE?

    // NOTE this must match the ground. Ideally share a chunk?
    totalEmissiveRadiance = texelColor.rgb * radiance;


`,xc=`
    attribute vec3 groundNormal;
    attribute float shadow;
    attribute float variant;
    // attribute float roadProx;

    uniform float sproutNear;
    uniform float sproutFar;
    uniform float sproutMargin;
    uniform sampler2D noiseMap;
    uniform float shadowFactor;
    // uniform float time;

    varying vec2 vUv;
    varying vec2 vWv;


    varying float vAlphaTest;
    varying float vShadow;
    varying float doDiscard;

    varying float vAO;

    varying vec2 vUvOffset;

    float wuvSize = 512.0;

    float screen(float a, float b) {
        return 1.0 - ((1.0 - a) * (1.0 - b));
    }
`,Rc=`

    vUv = uv;

    vec4 wPos = modelMatrix * instanceMatrix * vec4(1.0);

    vWv.x = wPos.x / wuvSize;
    vWv.y = wPos.z / wuvSize;

    // objectNormal = groundNormal;
    vNormal = normalMatrix * groundNormal; // mat3(inverse(transpose(modelMatrix * instanceMatrix)));

    vShadow = min(1.0, shadow * min(1.0, max(0.0, wPos.y / 4.0)));

    vAO = max(0.0, min(0.5, position.y)) * 2.0;

    // Get uvLookup  from variant

    //// VARIANT SELECTION

    float fade0 = texture2D(noiseMap, vWv).r;

    // The fade is normally distributed; look up the variant from type thingy whatsit
    float vVariant = variant;

    // If variant is unset in the buffer, set it procedurally
    if(vVariant == 0.0) {
        if(vShadow > 0.1) {
            // Higher chance of fern
            if(fade0 > 0.41) {
                if(fade0 > 0.52) {
                    vVariant = 2.0;
                } else {
                    vVariant = 1.0;
                }
            }
        } else {
            // Lower chance for ferns
            if(fade0 > 0.46) {
                if(fade0 > 0.54) {
                    vVariant = 1.0;
                } else {
                    vVariant = 2.0;
                }
            }

            // Also check for gorse
            // if(wPos.y > 150.0) {
            //     if(wPos.y > 200.0) {
            //         if(wPos.y > 230.0) {
            //             vVariant = 3.0;
            //         } else {
            //             // Really high up, bushes must be gorse or generic?
            //             if(vVariant < 2.0) {
            //                 vVariant = 0.0;
            //             } else {
            //                 vVariant = 3.0;
            //             }
            //         }
            //     } else if(vVariant == 2.0) {
            //         vVariant = 3.0;
            //     }
            // }
        }
    }

    vShadow *= shadowFactor;

    // Thinking about rules...
    //  - Gorse higher up
    //  - Soft things alongside the road regardless of elevation
    //  - Ferns only close to trees

    // Should I add more variants?
    //  - nettles and brambles
    //  - cow parsley and generic
    //  - ferns
    //  - two types of gorse
    //  - dock
    //  - ..?

    // Could do variant-specific things here like flattening ferns?
    if(vVariant == 2.0) {
        transformed.y -= 0.1;
    }

    vUvOffset.x = vVariant * 0.25;
    vUvOffset.y = 0.0;

    // Need to replace projectVertex here so we can get mvPosition

    //// MODIFY MV POSITION

    doDiscard = 0.0;

    // TODO can this be done once somewhere?
    float dist = (wPos.x - cameraPosition.x)*(wPos.x - cameraPosition.x) + (wPos.z - cameraPosition.z)*(wPos.z - cameraPosition.z);
    if(dist > sproutNear) {

        transformed.y -= (dist - sproutNear) / sproutMargin;

        if(dist > sproutFar) {
            doDiscard = 1.0;
        }
    }


    #include <project_vertex>

    // Keeping this here as a maybe.
    if(-mvPosition.z < 10.0) {
        vAlphaTest = 0.5;
    } else {
        vAlphaTest = max(0.2, 0.5 - (-mvPosition.z-10.0) / 110.0);
    }

    // ANIMATION TESTING
    // float tt = time * 0.05;
    // vec2 blowUV = vec2(vGGv.x + tt, vGGv.y + tt);
    // if(uv.y > 0.5) {
    //     float blow = texture2D(noiseMap, blowUV).r;
    //     transformed.x += blow * 0.2;//sin(blow) * 0.2;
    //     transformed.z += blow * 0.2;//cos(blow) * 0.2;
    // }


`,Uc=`

    uniform sampler2D noiseMap;
    uniform float radiance;

    varying vec2 vUv;
    varying vec2 vUvOffset;
    varying float vAlphaTest;

    varying float vShadow;
    varying float vAO;
    varying float doDiscard;

    float screen(float a, float b) {
        return 1.0 - ((1.0 - a) * (1.0 - b));
    }


`,Oc=`
    float faceDirection = 1.0;
    vec3 normal = normalize(vNormal);
`,Vc=`

    // Don't draw beyond view dist?
    if(doDiscard > 0.0) {
        discard;
    }

    // Need to alter vLightGrass
    vec4 texelColor = texture2D( map, vUv + vUvOffset );// * (1.0 - vLightGrass * 0.25);

    if(texelColor.a < vAlphaTest) {
        discard;
    }

    diffuseColor *= texelColor;

    //// PREP EMISSIVE?

    totalEmissiveRadiance = texelColor.rgb * radiance * vAO;//texelColor.rgb * 2.0; // * (1.0 - vLightGrass * 0.8);

`,eo=`
    varying vec3 vFresnelPos;
    varying vec3 vFresnelNorm;
`,Hc=`
    vFresnelPos = vec4(modelMatrix * vec4( position, 1.0 )).xyz;
    vFresnelNorm = normalize( vec3( vec4( normal, 0.0) * modelMatrix ) );

`,to=`

    uniform float fresnelIntensity;

    varying vec3 vFresnelPos;
    varying vec3 vFresnelNorm;

`,io=`
    float fresnel = 1.0 - max( 0.0, dot( normalize(cameraPosition - vFresnelPos), vFresnelNorm ) );

    if(fresnel > 0.75) {

        // Highlights

        fresnel = (fresnel - 0.75) * 4.0;
        fresnel *= fresnel * fresnel;

        diffuseColor.rgb *= 1.0 + fresnel * fresnelIntensity * (1.0 - vShadow);

    } else {

        // Lowlights

        // fresnel = 1.0 - max(0.0, (fresnel - 0.25) * 2.0);

        fresnel = 1.0 - fresnel * 1.3333;

        // fresnel *= fresnel;

        fresnel *= fresnelIntensity;

        if(fresnel > 0.25) {
            fresnel = 0.25 + (fresnel - 0.25) * 0.5;
            if(fresnel > 0.5) {
                fresnel = 0.5;
            }
        }

        diffuseColor.rgb *= 1.0 - fresnel;

    }
`,zc=`
    attribute float bridge;
    varying float vBridge;
`,Fc=`
    vBridge = bridge;
`,Gc=`
    uniform sampler2D shadowMap;
    uniform bool useShadowBlend;
    uniform sampler2D bridgeMap;
    uniform bool useBridgeBlend;

    varying float vBridge;
`,Bc=`

#ifdef USE_MAP

	vec4 texelColor = texture2D( map, vMapUv );

    if(useBridgeBlend && vBridge > 0.0) {
        texelColor = mix(texelColor, texture2D( bridgeMap, vMapUv), vBridge);
    }

    if(useShadowBlend && vShadow > 0.0) {
        texelColor = mix(texelColor, texture2D(shadowMap, vMapUv), vShadow);
    }

    totalEmissiveRadiance = texelColor.rgb * radiance;

	diffuseColor *= texelColor;

#endif
`,Sn=`
varying vec3 vViewPosition;

struct LambertMaterial {

	vec3 diffuseColor;
	float specularStrength;

};

void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_Direct_Lambert_Spot( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight, float blend ) {

	// Might be something more intelligent I could do here?

	//saturate( (0.1 - abs(dot( geometry.normal, directLight.direction )) * 0.1 ) * blend );

	float dotNL = 0.1 + (1.0 - abs(dot( geometry.normal, directLight.direction ))) * 0.1;
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Lambert
#define RE_Direct_Spot          RE_Direct_Lambert_Spot
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
`,Dn=`

GeometricContext geometry;

geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

#ifdef USE_CLEARCOAT

	geometry.clearcoatNormal = clearcoatNormal;

#endif

#ifdef USE_IRIDESCENCE

	float dotNVi = saturate( dot( normal, geometry.viewDir ) );

	if ( material.iridescenceThickness == 0.0 ) {

		material.iridescence = 0.0;

	} else {

		material.iridescence = saturate( material.iridescence );

	}

	if ( material.iridescence > 0.0 ) {

		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );

		// Iridescence F0 approximation
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );

	}

#endif

IncidentLight directLight;

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointLightInfo( pointLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;

	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotLightInfo( spotLight, geometry, directLight );

		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif

		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif

		#undef SPOT_LIGHT_MAP_INDEX

		// Could darken it at the bottom...
		// directLight.color *= vUv.y*2.0;

		// Could also pass this in so we know what to do with the normal?

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif

		// - max(0.0, (1.0 - vRoadProx)) * (1.0 - vUv.y)
		RE_Direct_Spot( directLight, geometry, material, reflectedLight, 1.0);

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalLightInfo( directionalLight, geometry, directLight );

        //// MAGIC LINE TO OVERRIDE DIRECTIONAL LIGHT SHADOW ////

        // TODO - might be best to change the underlying fragment for the scene?

        directLight.color *= 1.0 - vShadow;

        /////////////////////////////////////////////////////////

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );

		}
		#pragma unroll_loop_end

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`,qc=""+new URL("../assets/noise_fine.9cdaf478.webp",import.meta.url).href,Wc=""+new URL("../assets/noise_finer.56c77b62.webp",import.meta.url).href,Ui="data:image/webp;base64,UklGRowAAABXRUJQVlA4WAoAAAAAAAAAAAAAAAAAVlA4IBgAAABQAQCdASoBAAEAAUAmJaQABAAAAJrDyABQU0FJTgAAADhCSU0D7QAAAAAAEABIAAAAAQACAEgAAAABAAI4QklNBCgAAAAAAAwAAAACP/AAAAAAAAA4QklNBEMAAAAAAA5QYmVXARAABgBQAAAAAA==",jc=""+new URL("../assets/sea_waves.63ff8729.webp",import.meta.url).href,Go=""+new URL("../assets/signs.c90afd62.webp",import.meta.url).href,Yc="data:image/webp;base64,UklGRlgBAABXRUJQVlA4WAoAAAAQAAAADwAADwAAQUxQSMQAAAANgGPb2rHnPO/7f7/tKlZnlU6mmiH8bezKSWnbH97fGUNETAD1IiCmTGN/vqcn9X57fXHn1MUnZnK/tj8Vu1o8tkFPzv2Vwe9P9vct7/2SnrfLgDL4Z/pKJ1JMGk+EsnLN64J/u6yEMmBEBbWEH3mRuAYoG239eAHeLnpFKc8nLr6HR833fmcsiMZWnn85DM6mmfNALPPFsQWcb420aLzf8M9SVAB7bXu2zTJvKycRP/VvpSUrgolZQuPvs5M3pfh3uUxTVlA4IBgAAAAwAQCdASoQABAAAUAmJaQAA3AA/vz0AABQU0FJTgAAADhCSU0D7QAAAAAAEABIAAAAAQACAEgAAAABAAI4QklNBCgAAAAAAAwAAAACP/AAAAAAAAA4QklNBEMAAAAAAA5QYmVXARAABgBQAAAAAA==",Kc=`

uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];

// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere
// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {

	// normal is assumed to have unit length

	float x = normal.x, y = normal.y, z = normal.z;

	// band 0
	vec3 result = shCoefficients[ 0 ] * 0.886227;

	// band 1
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;

	// band 2
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );

	return result;

}

vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {

	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );

	return irradiance;

}

vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {

	vec3 irradiance = ambientLightColor;

	return irradiance;

}

float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

	#if defined ( LEGACY_LIGHTS )

		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {

			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );

		}

		return 1.0;

	#else

		// based upon Frostbite 3 Moving to Physically-based Rendering
		// page 32, equation 26: E[window1]
		// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );

		if ( cutoffDistance > 0.0 ) {

			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

		}

		return distanceFalloff;

	#endif

}

float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {

	return smoothstep( coneCosine, penumbraCosine, angleCosine );

}

#if NUM_DIR_LIGHTS > 0

	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};

	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];

	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {

		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;

	}

#endif


#if NUM_POINT_LIGHTS > 0

	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};

	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {

		vec3 lVector = pointLight.position - geometry.position;

		light.direction = normalize( lVector );

		float lightDistance = length( lVector );

		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );

	}

#endif


#if NUM_SPOT_LIGHTS > 0

	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};

	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {

		vec3 lVector = spotLight.position - geometry.position;

		light.direction = normalize( lVector );

		float angleCos = dot( light.direction, spotLight.direction );

		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );

		if ( spotAttenuation > 0.0 ) {

			float lightDistance = length( lVector );

			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );

		} else {

			light.color = vec3( 0.0 );
			light.visible = false;

		}

	}

#endif


#if NUM_RECT_AREA_LIGHTS > 0

	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};

	// Pre-computed values of LinearTransformedCosine approximation of BRDF
	// BRDF approximation Texture is 64x64
	uniform sampler2D ltc_1; // RGBA Float
	uniform sampler2D ltc_2; // RGBA Float

	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];

#endif


#if NUM_HEMI_LIGHTS > 0

	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};

	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];

	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {

		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;

		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );

		return irradiance;

	}

#endif
`,xt=Gt(Ui),Ms=Gt(qc,4,void 0,Wa),Xc=Gt(Wc,4,void 0,Wa);Gt(Yc,1);const ke=new Et({map:Gt(Ui),displacementMap:Gt(Ui),fog:!0});ke.needsCameraPosition=!0;ke.userData.grassMap={value:null};ke.userData.sandMap={value:null};ke.userData.rockMap={value:null};ke.userData.rockMapBump={value:null};ke.userData.gravelMap={value:null};ke.userData.roadMap={value:null};ke.userData.forestMap={value:null};ke.userData.fadeFine={value:Ms};ke.userData.roadCol={value:[]};ke.userData.fresnelIntensity={value:.5};ke.userData.radiance={value:0};ke.userData.grassColA={value:[]};ke.userData.grassColB={value:[]};ke.userData.peakColA={value:[]};ke.userData.peakColB={value:[]};ke.userData.vehicleIndex={value:0};ke.userData.sinkDist={value:400};ke.userData.seasonIndex={value:1};ke.onBeforeCompile=s=>(s.uniforms.grassMap=ke.userData.grassMap,s.uniforms.sandMap=ke.userData.sandMap,s.uniforms.rockMap=ke.userData.rockMap,s.uniforms.rockMapBump=ke.userData.rockMapBump,s.uniforms.gravelMap=ke.userData.gravelMap,s.uniforms.roadMap=ke.userData.roadMap,s.uniforms.forestMap=ke.userData.forestMap,s.uniforms.fadeFine=ke.userData.fadeFine,s.uniforms.grassColA=ke.userData.grassColA,s.uniforms.grassColB=ke.userData.grassColB,s.uniforms.peakColA=ke.userData.peakColA,s.uniforms.peakColB=ke.userData.peakColB,s.uniforms.roadCol=ke.userData.roadCol,s.uniforms.fresnelIntensity=ke.userData.fresnelIntensity,s.uniforms.radiance=ke.userData.radiance,s.uniforms.sinkDist=ke.userData.sinkDist,s.uniforms.vehicleIndex=ke.userData.vehicleIndex,s.uniforms.shadowFactor=us,s.uniforms.seasonIndex=ke.userData.seasonIndex,s.vertexShader=s.vertexShader.replace("#include <displacementmap_pars_vertex>",Xd+eo),s.vertexShader=s.vertexShader.replace("#include <displacementmap_vertex>",Qd),s.vertexShader=s.vertexShader.replace("#include <project_vertex>",""),s.fragmentShader=s.fragmentShader.replace("#include <lights_fragment_begin>","#include <lights_fragment_begin_shadow>"),s.fragmentShader=s.fragmentShader.replace("#include <map_pars_fragment>",Zd+to),s.fragmentShader=s.fragmentShader.replace("#include <map_fragment>",Jd+io),s.fragmentShader=s.fragmentShader.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;","vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directDiffuse * totalEmissiveRadiance;"),s);const mi=new Et({map:Gt(Ui),alphaTest:.75});mi.needsCameraPosition=!0;mi.userData.shadowMap={value:xt};mi.userData.bridgeMap={value:xt};mi.userData.useShadowBlend={value:!1};mi.userData.useBridgeBlend={value:!1};mi.onBeforeCompile=s=>(s.uniforms.fresnelIntensity=ke.userData.fresnelIntensity,s.uniforms.radiance=ke.userData.radiance,s.uniforms.shadowMap=mi.userData.shadowMap,s.uniforms.useShadowBlend=mi.userData.useShadowBlend,s.uniforms.bridgeMap=mi.userData.bridgeMap,s.uniforms.useBridgeBlend=mi.userData.useBridgeBlend,s.uniforms.shadowFactor=us,s.vertexShader=s.vertexShader.replace("#include <displacementmap_pars_vertex>",`#include <displacementmap_pars_vertex>
`+zc+vd+eo),s.vertexShader=s.vertexShader.replace("#include <displacementmap_vertex>",`#include <displacementmap_vertex>
`+Fc+gd+Hc),s.fragmentShader=s.fragmentShader.replace("#include <map_pars_fragment>",`#include <map_pars_fragment>
uniform float radiance;
`+Gc+md+to),s.fragmentShader=s.fragmentShader.replace("#include <map_fragment>",Bc+io),s.fragmentShader=s.fragmentShader.replace("#include <lights_fragment_begin>","#include <lights_fragment_begin_shadow>"),s.fragmentShader=s.fragmentShader.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;","vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directDiffuse * totalEmissiveRadiance;"),s);const Qc=new Es({depthTest:!0,fog:!0,wireframe:!1,toneMapped:!0});Qc.needsCameraPosition=!0;const rt=new Es({depthTest:!1,fog:!0,map:xt,toneMapped:!0,side:Oi});rt.needsCameraPosition=!0;rt.userData.highlight={value:new As(16777215)};rt.userData.lowlight={value:new As(15658734)};rt.userData.hasClouds={value:!0};rt.userData.camPos={value:new gi};rt.userData.time={value:0};rt.userData.shelfHeight0={value:1e3};rt.userData.shelfHeight1={value:1200};rt.userData.skyScale0={value:6e3};rt.userData.skyScale1={value:3e3};rt.userData.mode={value:0};rt.userData.altitude={value:200};rt.customProgramCacheKey=()=>"clouds";rt.onBeforeCompile=s=>(s.uniforms.highlight=rt.userData.highlight,s.uniforms.lowlight=rt.userData.lowlight,s.uniforms.hasClouds=rt.userData.hasClouds,s.uniforms.camPos=rt.userData.camPos,s.uniforms.time=rt.userData.time,s.uniforms.shelfHeight0=rt.userData.shelfHeight0,s.uniforms.shelfHeight1=rt.userData.shelfHeight1,s.uniforms.skyScale0=rt.userData.skyScale0,s.uniforms.skyScale1=rt.userData.skyScale1,s.uniforms.mode=rt.userData.mode,s.uniforms.altitude=rt.userData.altitude,s.vertexShader=s.vertexShader.replace("#include <uv_pars_vertex>",`#include <uv_pars_vertex>
`+Gd),s.vertexShader=s.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
`+Bd),s.vertexShader=s.vertexShader.replace("#include <fog_pars_vertex>",Wd),s.vertexShader=s.vertexShader.replace("#include <fog_vertex>",jd),s.vertexShader=s.vertexShader.replace("#include <project_vertex>",qd),s.fragmentShader=s.fragmentShader.replace("#include <uv_pars_fragment>",`#include <uv_pars_fragment>
`+Yd),s.fragmentShader=s.fragmentShader.replace("#include <fog_fragment>",`#include <fog_fragment>
`+Kd),s);let gs=new Es({});gs.userData.camPos={value:new gi};gs.userData.waves={value:Gt(jc,4,void 0,Gn)};gs.userData.body={value:new As};gs.userData.highlight={value:new As};gs.userData.time={value:0};gs.needsCameraPosition=!0;const Yt={dissolveNear:{value:175},dissolveFar:{value:250},dissolveInterval:{value:75},radiance:{value:.5},discolourationFactor:{value:1},hasSnow:{value:!1}};function Bo(s=!1){let e=new Et({map:xt,normalMap:s?null:xt,alphaMap:s?xt:null,alphaTest:s?.4:.5,side:Oi,normalMapType:s?null:Js,forceSinglePass:!0,customProgramCacheKey:()=>"tree"});return e.needsCameraPosition=!0,s?e.onBeforeCompile=t=>(t.uniforms.noiseMap={value:Ms},t.uniforms.dissolveNear=Yt.dissolveNear,t.uniforms.dissolveFar=Yt.dissolveFar,t.uniforms.dissolveInterval=Yt.dissolveInterval,t.uniforms.discolourationFactor=Yt.discolourationFactor,t.uniforms.shadowFactor=us,t.vertexShader=t.vertexShader.replace("#include <uv_pars_vertex>",`#include <uv_pars_vertex>
`+$d),t.vertexShader=t.vertexShader.replace("#include <project_vertex>",ic),t.fragmentShader=t.fragmentShader.replace("#include <normal_fragment_begin>",nc),t.fragmentShader=t.fragmentShader.replace("#include <uv_pars_fragment>",`#include <uv_pars_fragment>
`+sc),t.fragmentShader=t.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
`+rc),t.fragmentShader=t.fragmentShader.replace("#include <lights_lambert_pars_fragment>",dc),t.fragmentShader=t.fragmentShader.replace("#include <lights_fragment_begin>",lc),t.fragmentShader=t.fragmentShader.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;","vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directDiffuse * totalEmissiveRadiance;"),t):e.onBeforeCompile=t=>(t.uniforms.noiseMap={value:Ms},t.uniforms.dissolveNear=Yt.dissolveNear,t.uniforms.dissolveFar=Yt.dissolveFar,t.uniforms.dissolveInterval=Yt.dissolveInterval,t.uniforms.radiance=Yt.radiance,t.uniforms.discolourationFactor=Yt.discolourationFactor,t.uniforms.shadowFactor=us,t.uniforms.hasSnow=Yt.hasSnow,t.vertexShader=t.vertexShader.replace("#include <uv_pars_vertex>",`#include <uv_pars_vertex>
`+cc),t.vertexShader=t.vertexShader.replace("#include <project_vertex>",fc),t.fragmentShader=t.fragmentShader.replace("#include <normal_fragment_begin>",Yl),t.fragmentShader=t.fragmentShader.replace("#include <alphatest_fragment>",gc),t.fragmentShader=t.fragmentShader.replace("#include <uv_pars_fragment>",`#include <uv_pars_fragment>
`+uc),t.fragmentShader=t.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
`+vc),t.fragmentShader=t.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
`+mc),t.fragmentShader=t.fragmentShader.replace("#include <lights_lambert_pars_fragment>",bc),t.fragmentShader=t.fragmentShader.replace("#include <lights_fragment_begin>",_c),t.fragmentShader=t.fragmentShader.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;","vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directDiffuse * totalEmissiveRadiance;"),t),e}Bo(),Bo(!0);new Et({map:xt,alphaTest:.25,side:Oi,forceSinglePass:!0});new Et({color:110832});const zt=new Et({map:Gt(Ui,0,Bn),normalMap:Gt(Ui,0,void 0,Wa),normalMapType:Js,alphaTest:.5,forceSinglePass:!0});zt.needsCameraPosition=!0;zt.userData.noiseMap={value:Ms};zt.userData.mapB={value:Gt(Ui)};zt.userData.normalMapB={value:Gt(Ui)};zt.userData.dissolveNear={value:100};zt.userData.dissolveFar={value:200};zt.userData.dissolveInterval={value:100};zt.onBeforeCompile=s=>{s.uniforms.noiseMap=zt.userData.noiseMap,s.uniforms.mapB=zt.userData.mapB,s.uniforms.normalMapB=zt.userData.normalMapB,s.uniforms.dissolveNear=zt.userData.dissolveNear,s.uniforms.dissolveFar=zt.userData.dissolveFar,s.uniforms.dissolveInterval=zt.userData.dissolveInterval,s.uniforms.radiance=Yt.radiance,s.uniforms.discolourationFactor=Yt.discolourationFactor,s.uniforms.hasSnow=Yt.hasSnow,s.vertexShader=s.vertexShader.replace("#define LAMBERT",`#define LAMBERT
`+yc),s.vertexShader=s.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
`+Sc),s.vertexShader=s.vertexShader.replace("#include <beginnormal_vertex>",wc+`
`+Dc),s.vertexShader=s.vertexShader.replace("#include <project_vertex>",Lc),s.fragmentShader=s.fragmentShader.replace("#include <normal_fragment_begin>",Yl),s.fragmentShader=s.fragmentShader.replace("#include <normal_fragment_maps>",Ic),s.fragmentShader=s.fragmentShader.replace("#define LAMBERT",`#define LAMBERT
`+Cc),s.fragmentShader=s.fragmentShader.replace("#include <map_fragment>",kc),s.fragmentShader=s.fragmentShader.replace("#include <lights_fragment_begin>",Mc),s.fragmentShader=s.fragmentShader.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;","vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular * totalEmissiveRadiance;")};let Zc=.25;const _i=new Et({map:xt,alphaTest:Zc,side:Oi,forceSinglePass:!0});_i.needsCameraPosition=!0;_i.userData.noiseMap={value:Ms};_i.userData.sproutNear={value:100*100};_i.userData.sproutFar={value:200*200};_i.customProgramCacheKey=()=>"grass";_i.onBeforeCompile=s=>{s.uniforms.noiseMap=_i.userData.noiseMap,s.uniforms.sproutNear=_i.userData.sproutNear,s.uniforms.sproutFar=_i.userData.sproutFar,s.uniforms.grassColA=ke.userData.grassColA,s.uniforms.grassColB=ke.userData.grassColB,s.uniforms.peakColA=ke.userData.peakColA,s.uniforms.peakColB=ke.userData.peakColB,s.uniforms.fresnelIntensity=ke.userData.fresnelIntensity,s.uniforms.radiance=ke.userData.radiance,s.uniforms.shadowFactor=us,s.vertexShader=s.vertexShader.replace("#include <common>","#include <common>"+Ec+eo),s.vertexShader=s.vertexShader.replace("#include <project_vertex>",""+Ac),s.fragmentShader=s.fragmentShader.replace("#include <common>","#include <common>"+Tc+to),s.fragmentShader=s.fragmentShader.replace("#include <map_fragment>",Nc+`
`+io),s.fragmentShader=s.fragmentShader.replace("#include <normal_fragment_begin>",Pc),s.fragmentShader=s.fragmentShader.replace("#include <lights_lambert_pars_fragment>",Sn),s.fragmentShader=s.fragmentShader.replace("#include <lights_fragment_begin>",Dn),s.fragmentShader=s.fragmentShader.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;","vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directDiffuse * totalEmissiveRadiance;")};let Jc=.5;const Kt=new Et({map:xt,alphaTest:Jc,side:Oi,forceSinglePass:!0});Kt.needsCameraPosition=!0;Kt.userData.noiseMap={value:Xc};Kt.userData.sproutNear={value:100*100};Kt.userData.sproutFar={value:200*200};Kt.userData.sproutMargin={value:Kt.userData.sproutFar.value-Kt.userData.sproutNear.value};Kt.onBeforeCompile=s=>{s.uniforms.noiseMap=Kt.userData.noiseMap,s.uniforms.sproutNear=Kt.userData.sproutNear,s.uniforms.sproutFar=Kt.userData.sproutFar,s.uniforms.sproutMargin=Kt.userData.sproutMargin,s.uniforms.radiance=ke.userData.radiance,s.uniforms.shadowFactor=us,s.vertexShader=s.vertexShader.replace("#include <common>","#include <common>"+xc),s.vertexShader=s.vertexShader.replace("#include <project_vertex>",""+Rc),s.fragmentShader=s.fragmentShader.replace("#include <common>","#include <common>"+Uc),s.fragmentShader=s.fragmentShader.replace("#include <map_fragment>",Vc),s.fragmentShader=s.fragmentShader.replace("#include <normal_fragment_begin>",Oc),s.fragmentShader=s.fragmentShader.replace("#include <lights_lambert_pars_fragment>",Sn),s.fragmentShader=s.fragmentShader.replace("#include <lights_fragment_begin>",Dn),s.fragmentShader=s.fragmentShader.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;","vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directDiffuse * totalEmissiveRadiance;")};const Ln=new Et({map:xt,normalMap:xt,alphaTest:.5,side:Oi,normalMapType:Js,forceSinglePass:!0,customProgramCacheKey:()=>"barrier"});Ln.onBeforeCompile=$s();Ln.needsCameraPosition=!0;const Cn=new Et({map:xt,flatShading:!0});Cn.onBeforeCompile=$s();Cn.needsCameraPosition=!0;const kn=new Et({map:xt,normalMap:xt,flatShading:!0,alphaTest:.25,side:Oi,normalMapType:Js,forceSinglePass:!0,customProgramCacheKey:()=>"fence"});kn.onBeforeCompile=$s();kn.needsCameraPosition=!0;const In=new Et({map:xt,flatShading:!0});In.onBeforeCompile=$s();In.needsCameraPosition=!0;const $c=new Et({map:xt,flatShading:!0,side:Oi});$c.needsCameraPosition=!0;const so={white:new Et({color:16777215,emissive:16777215,emissiveIntensity:.2}),black:new Et({color:3355443,flatShading:!0}),reflect:new Et({color:16720418,emissive:16720418,emissiveIntensity:.2})};so.white.needsCameraPosition=!0;so.black.needsCameraPosition=!0;so.reflect.needsCameraPosition=!0;const ao=new Et({map:Gt(Go,4),flatShading:!0,alphaTest:.75,emissive:16777215,emissiveMap:Gt(Go,4),emissiveIntensity:0});ao.onBeforeCompile=s=>(s.fragmentShader=s.fragmentShader.replace("#include <lights_pars_begin>",Kc),s);ao.needsCameraPosition=!0;const eh=new Et({map:xt,color:12303291,flatShading:!0});eh.needsCameraPosition=!0;const th=new Es({color:0,transparent:!0,opacity:.4});th.needsCameraPosition=!0;let qo,Wo=16,ih=0,Ki=5e3,ka=11,jo=4,sh=2,ms=1e4,Ia=.8,ps=4e3;const S={id:0},Lt={},Ct={};class ah extends pd{constructor(t={}){super(t);F(this,"debug",!0);F(this,"config",{seed:"a",scale:1,offset:0,resolution:5,upresFactor:2,depth:3,depthHeightFactor:1,layerResolutions:[],squared:!1,temper:!1,temperBelow:100,temperMin:.25,spiralise:!0,maxCached:32,tileScaleRandom:0,tileSize:3e3,repeated:!1});F(this,"distortMap");this.config={...this.config,...t},this.config.layerResolutions.length?this.config.depth=this.config.layerResolutions.length:this.generateLayerResolutions()}generateLayerResolutions(){let t=this.config.resolution;for(let i=0;i<this.config.depth;i++)this.layerResolutions.push(t),t=t+this.config.upresFactor*(i+1)}generateTile(t,i){let a=[],r=new window.alea(this.config.seed+"#"+this.curLayer[t<0?0:1]+"#"+t+"#"+i),o=1+r()*this.config.tileScaleRandom-this.config.tileScaleRandom/2,l,n,d,h=this.config.depthHeightFactor;for(l=0;l<this.config.depth;l++){n=this.config.layerResolutions[l],d=this.config.resolution/n*h,h*=this.config.depthHeightFactor;let u=[],m=1/n,p;for(Lt.i=0;Lt.i<n;Lt.i++){for(p=[],Lt.j=0;Lt.j<n;Lt.j++)Lt.h=r()*2-1,this.config.squared&&(Lt.h<0?Lt.h*=-(Lt.h*(1+Lt.h))*4:Lt.h*=Lt.h*(1-Lt.h)*4),Lt.h*=d,p.push({x:(Lt.i+.5)/n,y:Lt.h*this.config.scale*o,z:(Lt.j+.5)/n,r:m,r2:m*m});u.push(p)}a.push(u)}return a}getRoadBlendedXZ(t,i,a){return Ct.h=0,a.h=a.n.h+a.t*(a.n.next.h-a.n.h),a.gfa=a.n.gfa+a.t*(a.n.next.gfa-a.n.gfa),a.ga=Math.max(Math.abs(a.g),Math.abs(a.h))/3.6,a.w=qo+ih+a.ga,a.y-=.01+.01*a.gfa,a.ga=1-a.ga*a.ga,Ct.rm=Wo*.25+Wo*Math.min(.75,Math.max(.4,a.ga)),a.d<a.w+S.rm?a.d<qo&&!a.n.bridge?a.y:(Ct.lt=Math.max(0,Math.min(1,2*(a.d-a.w)/S.rm)),Ct.lt=this.roadLerp(Ct.lt),Ct.h=this.getXZ(t,i),a.n.bridge&&Ct.h<0&&(Ct.h>-a.y?Ct.lt=Math.max(Ct.lt,Ct.h/-a.y):Ct.lt=1),Ct.h*Ct.lt+a.y*(1-Ct.lt)):this.getXZ(t,i)}roadLerp(t){return t>.3333?(Ct.lerp=1-(t-.3333)/.6667,1-Ct.lerp*Ct.lerp*.5):t*1.5}getCurvature(t,i){return 0}getTile(t,i){return this.config.repeated?super.getTile(0,0):super.getTile(t,i)}getXZ(t,i,a=null,r=!1){S.d=0,S.h=0,S.heightFactor=1,S.sq=this.config.layerResolutions[0],S.sqb=S.sq-1,S.wx=t/this.config.tileSize,S.wz=i/this.config.tileSize,S.ox=Math.floor(S.wx),S.oz=Math.floor(S.wz),S.px=S.wx-S.ox,S.pz=S.wz-S.oz,S.tile=this.getTile(S.ox,S.oz),a=a||this.config.depth,S.depth=0;for(S.layer of S.tile){if(S.depth==a)break;S.ix=Math.floor(S.px*S.sq-.5),S.iz=Math.floor(S.pz*S.sq-.5),S.th=0,S.ix>=0?(S.iz>=0?S.th+=this.lerpHeight(S.d,S.px,S.pz,S.layer[S.ix][S.iz]):S.th+=this.lerpHeight(S.d,S.px,S.pz+1,this.getTile(S.ox,S.oz-1)[S.depth][S.ix][S.sqb]),S.iz<S.sqb?S.th+=this.lerpHeight(S.d,S.px,S.pz,S.layer[S.ix][S.iz+1]):S.th+=this.lerpHeight(S.d,S.px,S.pz-1,this.getTile(S.ox,S.oz+1)[S.depth][S.ix][0])):(S.iz>=0?S.th+=this.lerpHeight(S.d,S.px+1,S.pz,this.getTile(S.ox-1,S.oz)[S.depth][S.sqb][S.iz]):S.th+=this.lerpHeight(S.d,S.px+1,S.pz+1,this.getTile(S.ox-1,S.oz-1)[S.depth][S.sqb][S.sqb]),S.iz<S.sqb?S.th+=this.lerpHeight(S.d,S.px+1,S.pz,this.getTile(S.ox-1,S.oz)[S.depth][S.sqb][S.iz+1]):S.th+=this.lerpHeight(S.d,S.px+1,S.pz-1,this.getTile(S.ox-1,S.oz+1)[S.depth][S.sqb][0])),S.ix<S.sqb?(S.iz>=0?S.th+=this.lerpHeight(S.d,S.px,S.pz,S.layer[S.ix+1][S.iz]):S.th+=this.lerpHeight(S.d,S.px,S.pz+1,this.getTile(S.ox,S.oz-1)[S.depth][S.ix+1][S.sqb]),S.iz<S.sqb?S.th+=this.lerpHeight(S.d,S.px,S.pz,S.layer[S.ix+1][S.iz+1]):S.th+=this.lerpHeight(S.d,S.px,S.pz-1,this.getTile(S.ox,S.oz+1)[S.depth][S.ix+1][0])):(S.iz>=0?S.th+=this.lerpHeight(S.d,S.px-1,S.pz,this.getTile(S.ox+1,S.oz)[S.depth][0][S.iz]):S.th+=this.lerpHeight(S.d,S.px-1,S.pz+1,this.getTile(S.ox+1,S.oz-1)[S.depth][0][S.sqb]),S.iz<S.sqb?S.th+=this.lerpHeight(S.d,S.px-1,S.pz,this.getTile(S.ox+1,S.oz)[S.depth][0][S.iz+1]):S.th+=this.lerpHeight(S.d,S.px-1,S.pz-1,this.getTile(S.ox+1,S.oz+1)[S.depth][0][0])),S.temper=1,this.config.temper&&S.depth>0&&(S.temper=Math.min(Math.max(this.config.temperMin,(S.h+this.config.offset+this.config.temperBase)/this.config.temperBelow),1)),S.h+=S.th*S.temper,S.depth++,S.sq=this.config.layerResolutions[S.depth],S.sqb=S.sq-1}return S.h+this.config.offset}getXZLayer(t,i,a,r=this.config.depth){S.d=0,S.h=0,S.heightFactor=1,S.sq=this.config.layerResolutions[0],S.sqb=S.sq-1,S.wx=t/this.config.tileSize,S.wz=i/this.config.tileSize,S.ox=Math.floor(S.wx),S.oz=Math.floor(S.wz),S.px=S.wx-S.ox,S.pz=S.wz-S.oz,S.tile=this.getTile(S.ox,S.oz),r=r||this.config.depth,S.depth=0,S.i=0;for(S.layer of S.tile){if(S.depth==r)break;if(S.i++!==a){S.depth++,S.sq=this.config.layerResolutions[S.depth],S.sqb=S.sq-1;continue}S.ix=Math.floor(S.px*S.sq-.5),S.iz=Math.floor(S.pz*S.sq-.5),S.th=0,S.ix>=0?(S.iz>=0?S.th+=this.lerpHeight(S.d,S.px,S.pz,S.layer[S.ix][S.iz]):S.th+=this.lerpHeight(S.d,S.px,S.pz+1,this.getTile(S.ox,S.oz-1)[S.depth][S.ix][S.sqb]),S.iz<S.sqb?S.th+=this.lerpHeight(S.d,S.px,S.pz,S.layer[S.ix][S.iz+1]):S.th+=this.lerpHeight(S.d,S.px,S.pz-1,this.getTile(S.ox,S.oz+1)[S.depth][S.ix][0])):(S.iz>=0?S.th+=this.lerpHeight(S.d,S.px+1,S.pz,this.getTile(S.ox-1,S.oz)[S.depth][S.sqb][S.iz]):S.th+=this.lerpHeight(S.d,S.px+1,S.pz+1,this.getTile(S.ox-1,S.oz-1)[S.depth][S.sqb][S.sqb]),S.iz<S.sqb?S.th+=this.lerpHeight(S.d,S.px+1,S.pz,this.getTile(S.ox-1,S.oz)[S.depth][S.sqb][S.iz+1]):S.th+=this.lerpHeight(S.d,S.px+1,S.pz-1,this.getTile(S.ox-1,S.oz+1)[S.depth][S.sqb][0])),S.ix<S.sqb?(S.iz>=0?S.th+=this.lerpHeight(S.d,S.px,S.pz,S.layer[S.ix+1][S.iz]):S.th+=this.lerpHeight(S.d,S.px,S.pz+1,this.getTile(S.ox,S.oz-1)[S.depth][S.ix+1][S.sqb]),S.iz<S.sqb?S.th+=this.lerpHeight(S.d,S.px,S.pz,S.layer[S.ix+1][S.iz+1]):S.th+=this.lerpHeight(S.d,S.px,S.pz-1,this.getTile(S.ox,S.oz+1)[S.depth][S.ix+1][0])):(S.iz>=0?S.th+=this.lerpHeight(S.d,S.px-1,S.pz,this.getTile(S.ox+1,S.oz)[S.depth][0][S.iz]):S.th+=this.lerpHeight(S.d,S.px-1,S.pz+1,this.getTile(S.ox+1,S.oz-1)[S.depth][0][S.sqb]),S.iz<S.sqb?S.th+=this.lerpHeight(S.d,S.px-1,S.pz,this.getTile(S.ox+1,S.oz)[S.depth][0][S.iz+1]):S.th+=this.lerpHeight(S.d,S.px-1,S.pz-1,this.getTile(S.ox+1,S.oz+1)[S.depth][0][0])),S.h+=S.th*S.temper;break}return S.h+this.config.offset}lerpHeight(t,i,a,r){return t=(r.x-i)*(r.x-i)+(r.z-a)*(r.z-a),t<r.r2?this.smootherLerp(t/r.r2)*r.y:0}}const ui=new qn,ks=class ks extends nd{constructor(t){super(t);F(this,"container",new fs);F(this,"treeMesh");F(this,"instanceVariant");F(this,"instanceOrientation");F(this,"instanceDissolve");F(this,"maxCount",Ki);F(this,"curIndex",0);F(this,"isFull",!1);this.treeMesh=new ja(ks.protoGeo.clone(),zt,Ki),this.treeMesh.renderOrder=20,this.treeMesh.geometry.setAttribute("variant",new pi(new Float32Array(Ki),1)),this.treeMesh.geometry.setAttribute("orientation",new pi(new Float32Array(Ki),1)),this.treeMesh.geometry.setAttribute("dissolve",new pi(new Float32Array(Ki),1)),this.treeMesh.geometry.setAttribute("type",new pi(new Float32Array(Ki),1)),this.instanceVariant=this.treeMesh.geometry.attributes.variant,this.instanceVariant.setUsage(Wt),this.instanceOrientation=this.treeMesh.geometry.attributes.orientation,this.instanceOrientation.setUsage(Wt),this.instanceDissolve=this.treeMesh.geometry.attributes.dissolve,this.instanceDissolve.setUsage(Wt),this.instanceType=this.treeMesh.geometry.attributes.type,this.instanceType.setUsage(Wt),this.instanceMatrix=this.treeMesh.instanceMatrix,this.treeMesh.instanceMatrix.setUsage(Wt),this.treeMesh.boundingSphere=new Kl,this.treeMesh.computeBoundingSphere=()=>{},this.treeMesh.geometry.computeBoundingSphere=()=>{},this.container.add(this.treeMesh)}reset(){this.curIndex=0,this.treeMesh.count=0,this.isFull=!1}retire(){super.retire(),this.reset()}destroy(){super.destroy(),this.treeMesh.geometry.dispose(),delete this.instanceVariant,delete this.instanceOrientation,delete this.instanceDissolve,delete this.instanceType,delete this.instanceMatrix}setBoundingSphere(t){this.treeMesh.boundingSphere.center.copy(t.center),this.treeMesh.boundingSphere.radius=t.radius}addInstance(t,i,a,r=0,o=0){this.isFull||(this.treeMesh.setMatrixAt(this.curIndex,t),this.instanceVariant.array[this.curIndex]=i,this.instanceOrientation.array[this.curIndex]=a,this.instanceType.array[this.curIndex]=r,this.instanceDissolve.array[this.curIndex]=o,this.curIndex++,this.isFull=this.curIndex>=Ki)}hideInstance(t){this.treeMesh.getMatrixAt(t,ui),ui.setPosition(ui.elements[12],-1e5,ui.elements[14]),this.treeMesh.setMatrixAt(t,ui),this.instanceMatrix.needsUpdate=!0}prepCellInstance(t,i,a){this.treeMesh.getMatrixAt(t,ui),ui.setPosition(ui.elements[12],i,ui.elements[14]),this.treeMesh.setMatrixAt(t,ui),a?this.instanceDissolve.array[t]=1:this.instanceDissolve.array[t]=0}finalise(){this.instanceMatrix.needsUpdate=!0,this.instanceVariant.needsUpdate=!0,this.instanceOrientation.needsUpdate=!0,this.instanceType.needsUpdate=!0,this.instanceDissolve.needsUpdate=!0,this.treeMesh.count=Math.min(this.maxCount,Math.max(0,this.curIndex)),this.treeMesh.count==0?this.treeMesh.visible=!1:this.treeMesh.visible=!0}finaliseChunk(){this.instanceMatrix.needsUpdate=!0,this.instanceDissolve.needsUpdate=!0}static makeProtoGeo(){let t=new Ya,i=new Float32Array([-.5,0,0,-.5,1,0,.5,1,0,.5,0,0]);t.setAttribute("position",new es(i,3));let a=new Float32Array([.0625,0,.0625,1/jo-.002,0,1/jo-.002,0,0]);t.setAttribute("uv",new es(a,2));let r=[0,1,2,0,2,3];return t.setIndex(r),t.scale(ka,ka,ka),t}};F(ks,"protoGeo",ks.makeProtoGeo());let Yo=ks;const oh=3,rh=20,lh=Math.PI*2,Ko=2,he={};class nh{constructor(e=oh,t=rh,i="perlin"){F(this,"layers",[]);F(this,"amplitudeFactor",1);this.depth=e,this.res=t;let a=new _d(i);for(let l=0;l<e;l++){let n=[];for(let d=0;d<t;d++){let h=[];for(let u=0;u<t;u++){let m=a.next()*lh;h.push({x:Math.cos(m),y:Math.sin(m)})}h.push({...h[0]}),n.push(h)}n.push([...n[0]]),this.layers.push(n),t*=Ko}let r=0,o=1;for(let l=0;l<e;l++)r+=o,o/=2;this.amplitudeFactor=1/r,this.amplitudeFactor=.5+this.amplitudeFactor*.5}get(e,t){he.x=e-Math.floor(e),he.z=t-Math.floor(t),he.res=this.res,he.v=0,he.a=this.amplitudeFactor;for(he.l of this.layers)he.sx=he.x*he.res,he.sz=he.z*he.res,he.ix=Math.floor(he.sx),he.ix1=he.ix+1,he.iz=Math.floor(he.sz),he.iz1=he.iz+1,he.qx=he.sx-he.ix,he.qz=he.sz-he.iz,he.n0=this.dotGridGradient(he.l[he.ix][he.iz],he.ix,he.iz,he.sx,he.sz),he.n1=this.dotGridGradient(he.l[he.ix1][he.iz],he.ix1,he.iz,he.sx,he.sz),he.int0=this.smoothLerp(he.n0,he.n1,he.qx),he.n2=this.dotGridGradient(he.l[he.ix][he.iz1],he.ix,he.iz1,he.sx,he.sz),he.n3=this.dotGridGradient(he.l[he.ix1][he.iz1],he.ix1,he.iz1,he.sx,he.sz),he.int1=this.smoothLerp(he.n2,he.n3,he.qx),he.v+=this.smoothLerp(he.int0,he.int1,he.qz)*he.a,he.a/=2,he.res*=Ko;return he.v+.5}dotGridGradient(e,t,i,a,r){return(a-t)*e.x+(r-i)*e.y}smootherLerp(e,t,i){return(t-e)*((i*(i*6-15)+10)*i*i*i)+e}smoothLerp(e,t,i){return e+(t-e)*(i*i*(3-2*i))}}const Xo=new jl([0,0]);let Qo=[[[5.28,8.81],[4.07,4.7],[8.36,8.29],[.73,6.62]],[[4.81,3.69],[2.11,6.46],[8.58,2.78],[7.66,8.88]],[[2.04,2.85],[5.76,7.39],[6.07,2.44],[3.46,5.57]],[[3.91,7.36],[3.93,2.11],[7.27,9.11],[7.9,4.54]],[[4.81,7.08],[1.42,8.06],[1.36,4.91],[8.31,7.76]],[[4.77,4.89],[1.14,2.74],[7.4,2.45],[7.49,9.23]],[[1.64,8.36],[5.85,2.37],[6.85,7.86],[2.42,2.18]],[[7.25,6.91],[3.67,4.08],[7.77,2.79],[2.88,6.94]]],Zo=[[[.97,1.21],[4.37,1.4],[3.03,1.17],[.33,1.77]],[[1.91,1.11],[5.23,1.17],[5.35,1.08],[2.88,1.51]],[[4.78,1.12],[5.24,1.27],[.42,1.48],[1.46,1.51]],[[3.26,1.16],[1.42,1.3],[6.06,1.34],[.08,1.48]]],Jo=[[1,3,0,0],[0,2,1,0],[2,3,1,2],[3,1,3,2],[2,0,3,0],[3,3,0,1]];const dh=[[[0,0,1,0],[0,3,0,0],[0,0,0,0],[0,0,2,0]],[[1,3,1,1],[1,3,1,0],[3,1,0,1],[0,1,1,1]],[[2,2,0,2],[1,2,2,2],[2,3,2,2],[2,2,2,2]],[[3,1,3,3],[0,3,3,3],[3,0,2,3],[1,3,3,3]]];let ch=[[[2,2,2,1],[2,0,2,2],[2,2,2,2],[0,2,2,2]],[[3,0,3,3],[3,3,3,0],[1,3,3,3],[3,3,3,3]],[[0,0,1,0],[1,0,0,0],[2,0,0,0],[0,0,0,0]],[[1,0,1,0],[0,1,3,1],[1,1,3,1],[1,1,1,1]]],hh=.46,fh=.58,uh=.7,vh=.46,gh=.58,mh=.7,ph=4;const Cs=[];for(let s=0;s<sh;s++){let e=[];for(let t=0;t<Qo.length;t++)for(let i=0;i<Zo.length;i++)for(let a=0;a<Jo.length;a++)e.push({t:Qo[t],p:Zo[i],v:Jo[a]});Cs.push(e)}const $o=Cs[0].length,er=new nh(4,4),tr=new bn("slowroads",$o*3,$o),ir=new bn("slowroads",31,ph),_h=new ts("slowroads",101),Se={get:{i:0,a:[],c:0,t:0},vs:[0,0,0,0]};class bh{constructor(){F(this,"map");F(this,"onHeightmapLayersChangedBound",this.onHeightmapLayersChanged.bind(this));Xo.addListener(this.onHeightmapLayersChangedBound)}onHeightmapLayersChanged(e){this.map&&this.map.setLayers(e)}init(e,t){this.map=new ah({seed:e,...t}),this.map.setLayers(Xo.value),this.typeMap=new bd({seed:e,scale:1,resolution:11,depth:4,upscale:2,offset:.45})}getDensityAt(e,t){return 1-Math.max(Math.min(1,this.map.getXZ(e,t)),0)}getShadowDensityAt(e,t){return Se.d=1-Math.max(Math.min(1,this.map.getXZ(e,t)),0),Se.d>.05?Math.min(1,Se.d*1.5+.3):0}getTypeAt(e,t){return Math.max(Math.min(1,Math.round(this.typeMap.getXZ(e,t))),0)}getTreesAt(e,t){return Se.get.d=this.getDensityAt(e,t),Se.dd=(Se.get.d-.001)*4,Se.ddd=Se.dd%1,Se.dd*=.8,Se.dd=Math.floor(Se.dd),_h.next()<Se.ddd&&Se.dd++,Se.get.c=Se.dd,Se.get.c<=0?(Se.get.c=0,Se.get):(qe.detail<2&&Se.get.c>2?Se.get.c=2:Se.get.c>3&&(Se.get.c=3),Se.get.i=tr.next(),Se.get.y=this.getTypeAt(e,t),Se.get.a=Cs[Se.get.y][Se.get.i],Se.get.y==0?(Se.pn=er.get(e/1e3,t/1e3),Se.vn=0,Se.pn>hh&&(Se.pn<fh?Se.vn=1:Se.pn<uh?Se.vn=2:Se.vn=3),Se.get.v=dh[Se.vn][ir.next()]):(Se.pn=er.get(e/2e3,t/2e3),Se.get.c<2&&qe.detail>0&&(Se.get.c=2),Se.vn=0,Se.pn>vh&&(Se.pn<gh?Se.vn=1:Se.pn<mh?Se.vn=2:Se.vn=3),Se.get.v=ch[Se.vn][ir.next()]),Se.get.t=0,Se.get)}getArrangementIndex(e,t){return 0}getArrangement(e,t=0){return Cs[t][e]}getTreesForDensity(e,t=0){return e<.2?[]:Cs[t][tr.next()]}addExtraTree(e,t,i,a,r,o,l){return-1}removeExtraTree(e,t,i){}}new bh;new ts("slowroads",119,Math.PI*2);new ts("slowroads",97,.4,-.8);new dd;const Pi=new fs;Pi.rotation.order="XZY";const Ji=class Ji extends nn{constructor(){super(...arguments);F(this,"matrixNeedsUpdate",!1)}init(t){this.maxCount=ms,this.mesh=new ja(Ji.protoGeo.clone(),_i,ms),this.mesh.matrixAutoUpdate=!1,this.mesh.geometry.setAttribute("groundNormal",new pi(new Float32Array(ms*3),3)),this.instanceNormal=this.mesh.geometry.attributes.groundNormal,this.instanceNormal.setUsage(Wt),this.mesh.geometry.setAttribute("shadow",new pi(new Float32Array(ms*1),1)),this.instanceShadow=this.mesh.geometry.attributes.shadow,this.instanceShadow.setUsage(Wt),this.mesh.geometry.setAttribute("roadProx",new pi(new Float32Array(ms*1),1)),this.instanceRoadProx=this.mesh.geometry.attributes.roadProx,this.instanceRoadProx.setUsage(Wt),this.mesh.instanceMatrix.setUsage(Wt),this.mesh.receiveShadow=!0,t.add(this.mesh),this.reset(),this.postInit()}addGrass(t,i,a,r,o,l,n,d,h,u,m){this.curIndex==0&&(this.matrixNeedsUpdate=!0,this.ox=t,this.oz=a),m>this.retireIndex&&(this.retireIndex=m),Pi.position.set(t-this.ox,i,a-this.oz),this.instanceNormal.array[this.curIndex*3]=r,this.instanceNormal.array[this.curIndex*3+1]=o,this.instanceNormal.array[this.curIndex*3+2]=l,this.instanceShadow.array[this.curIndex]=h,this.instanceRoadProx.array[this.curIndex]=u,Pi.rotation.y=n,Pi.rotation.z=-Math.asin(r),Pi.rotation.x=Math.asin(l),Pi.scale.set(d,d,d),Pi.updateMatrix(),this.mesh.setMatrixAt(this.curIndex,Pi.matrix),this.curIndex++,this.isFull=this.curIndex>=this.maxCount,this.updateBounds(t-this.ox,i,a-this.oz)}update(){super.update(),this.instanceNormal.needsUpdate=!0,this.instanceShadow.needsUpdate=!0,this.instanceRoadProx.needsUpdate=!0,this.matrixNeedsUpdate&&(this.matrixNeedsUpdate=!1,this.mesh.position.x=this.ox,this.mesh.position.z=this.oz,this.mesh.updateMatrix())}static makeProtoGeo(){let t=new Ya,i=new Float32Array([-.5,0,0,-.5,1,0,.5,1,0,.5,0,0,0,0,.5,0,1,.5,0,1,-.5,0,0,-.5]);t.setAttribute("position",new es(i,3));let a=new Float32Array([0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]);t.setAttribute("normal",new es(a,3));let r=new Float32Array([.01,0,.01,.99,.24,.99,.24,0,.01,0,.01,.99,.24,.99,.24,0]);t.setAttribute("uv",new es(r,2));let o=[0,1,2,0,2,3,4,5,6,4,6,7];return t.setIndex(o),t.scale(Ia,Ia,Ia),t.computeBoundingSphere=()=>{},t.boundingSphere=new Kl,t}destroy(){Ji.protoGeo&&Ji.protoGeo.dispose(),this.mesh.geometry.dispose()}};F(Ji,"protoGeo",Ji.makeProtoGeo());let Ha=Ji;class yh extends dn{addGrass(e,t,i,a,r,o,l,n,d,h,u){this.curInstance.addGrass(e,t,i,a,r,o,l,n,d,h,u),this.checkCycleInstances()}}new yh(Ha,3,"grass");const wh="data:model/obj;base64,IyBCbGVuZGVyIDMuNi4yCiMgd3d3LmJsZW5kZXIub3JnCm8gQ3ViZQp2IDAuMDAwMDAwIC0wLjI1OTQ1MiAtMC4wMDQwNjcKdiAtMC41MDY4ODcgMS4wNzIzOTIgLTAuNzE5MTk1CnYgMC41MDkzMDMgMS4yMTM2NTYgMC43MTU5ODYKdiAwLjAwMDAwMCAtMC4yMzE4ODggLTAuMDA0MDY4CnYgLTAuNjg5MjEyIDEuMDY4NjAxIDAuNTc1ODA0CnYgMC42ODkyMTIgMS4wNjg2MDAgLTAuNTgzOTM5CnYgMC40ODU3MDggMS4wMzYzNDQgMC40MDA5MDIKdiAtMC4wNDY2MTkgMC44OTM1ODMgLTAuNjMxODEzCnYgMC4wNzgwMjAgLTAuMjg5ODA3IC0wLjEwMzM5Nwp2IC0wLjUzNjYzOCAwLjg4MzQ0OSAwLjI1MTQwNwp2IDAuMDUwMTA0IDAuODc2MDc5IC0wLjYyODgwNgp2IC0wLjEzMjYxNCAtMC4yMjQ3NjkgLTAuMDIxODc5CnYgLTAuNjc5MDg2IDAuOTI3NDgwIDAuMjg0ODUzCnYgMC42Njc2MTYgMS4wNTI2NDEgMC4yODU3NjcKdiAwLjA0NDc4MyAtMC4zNzk2MTQgMC4wNTkyODkKdm4gLTAuODE2MSAtMC4wMDAzIDAuNTc3OQp2biAwLjY0MzggLTAuMDAwMCAwLjc2NTIKdm4gMC44ODk4IC0wLjEwNDYgLTAuNDQ0Mgp2biAwLjgyMTMgMC4xNjQ4IDAuNTQ2MQp2biAwLjAxNDQgLTAuMTYyMyAwLjk4NjYKdnQgMC4wMzIzOTggMC44NzA2NjkKdnQgMC4wMDAxMTQgMC4wMDE1NTYKdnQgMC4yMTc3NjUgMC4xMjkyODUKdnQgMC4wNjg5NjQgMC43MjQwNjkKdnQgMC4xODA2NDQgMC4yNzQ4NTgKdnQgMC4yNTEzNjQgMS4wMDI3MDEKcyAwCmYgMi8xLzEgMS8yLzEgMy8zLzEKZiA1LzEvMiA0LzIvMiA2LzMvMgpmIDgvNC8zIDcvNS8zIDkvNi8zCmYgMTEvNC80IDEwLzUvNCAxMi82LzQKZiAxNC80LzUgMTMvNS81IDE1LzYvNQo=",ds=new fs;ds.rotation.order="XZY";const Sh=new Wn;let Dh=0;const li=class li extends nn{constructor(){super();F(this,"matrixNeedsUpdate",!1);F(this,"parent");F(this,"hasInit",!1);this.id=Dh++,li.protoGeo===void 0&&li.makeProtoGeo()}init(t){this.parent=t,this.hasInit&&(this.maxCount=ps,this.mesh=new ja(li.protoGeo.clone(),Kt,ps),this.mesh.matrixAutoUpdate=!1,this.mesh.geometry.setAttribute("variant",new pi(new Float32Array(ps),1)),this.instanceVariant=this.mesh.geometry.attributes.variant,this.instanceVariant.setUsage(Wt),this.mesh.geometry.setAttribute("groundNormal",new pi(new Float32Array(ps*3),3)),this.instanceNormal=this.mesh.geometry.attributes.groundNormal,this.instanceNormal.setUsage(Wt),this.mesh.geometry.setAttribute("shadow",new pi(new Float32Array(ps*1),1)),this.instanceShadow=this.mesh.geometry.attributes.shadow,this.instanceShadow.setUsage(Wt),this.mesh.instanceMatrix.setUsage(Wt),t.add(this.mesh),this.reset(),this.postInit())}addBush(t,i,a,r,o,l,n,d,h,u,m=0){this.hasInit||(this.hasInit=!0,this.init(this.parent)),this.curIndex==0&&(this.matrixNeedsUpdate=!0,this.ox=t,this.oz=a),u>this.retireIndex&&(this.retireIndex=u),ds.position.set(t-this.ox,i,a-this.oz),this.instanceNormal.array[this.curIndex*3]=r,this.instanceNormal.array[this.curIndex*3+1]=o,this.instanceNormal.array[this.curIndex*3+2]=l,this.instanceShadow.array[this.curIndex]=h,this.instanceVariant.array[this.curIndex]=m,ds.rotation.y=n,ds.scale.set(d,d,d),ds.updateMatrix(),this.mesh.setMatrixAt(this.curIndex,ds.matrix),this.curIndex++,this.isFull=this.curIndex>=this.maxCount,this.updateBounds(t-this.ox,i,a-this.oz)}update(){this.hasInit&&(this.instanceNormal.needsUpdate=!0,this.instanceShadow.needsUpdate=!0,this.instanceVariant.needsUpdate=!0,this.matrixNeedsUpdate&&(this.matrixNeedsUpdate=!1,this.mesh.position.x=this.ox,this.mesh.position.z=this.oz,this.mesh.updateMatrix()),super.update())}static makeProtoGeo(){li.protoGeo===void 0&&(li.protoGeo=null,Sh.load(wh,t=>{let i=t.children[0].geometry;i.computeBoundingSphere(),li.protoGeo=i}))}destroy(){li.protoGeo&&li.protoGeo.dispose(),this.mesh&&this.mesh.geometry.dispose()}};F(li,"protoGeo");let Zs=li;class Lh extends dn{constructor(){super(...arguments);F(this,"bushesAwaiting",[]);F(this,"addBush",this.addBushLoading)}addBushLoading(...t){if(this.bushesAwaiting.push(t),Zs.protoGeo){this.addBush=this.addBushLive;for(let i of this.bushesAwaiting)this.addBush(...i);delete this.bushesAwaiting}}addBushLive(t,i,a,r,o,l,n,d,h,u,m){this.curInstance.addBush(t,i,a,r,o,l,n,d,h,u,m),this.checkCycleInstances()}}new Lh(Zs,3,"bush");new ts(Ve.seed,251);new ts;const sr={Left:0,Right:1,LeftDouble:2,RightDouble:3,Uphill15:4,Uphill20:5,Downhill15:6,Downhill20:7,ChevronLeft:8,ChevronRight:9},qt=1/6,kt=1/2,Gs=.7,ai=.7/2,Ma=-.2,oi=1.8,It=.04,Is=class Is{constructor(){F(this,"mesh");this.geo=Is.protoGeo.clone(),this.uvs=this.geo.attributes.uv.array,this.mesh=new Xl(this.geo,ao),this.curVariant=null}static makeProtoGeo(){let e=[-ai,oi+Gs,It,ai,oi+Gs,It,-ai,oi,It,ai,oi,It,ai,oi+Gs,It,-ai,oi+Gs,It,ai,oi,It,-ai,oi,It,It,oi+ai,It-.01,-It,oi+ai,It-.01,0,oi+ai,-It,It,Ma,It-.01,-It,Ma,It-.01,0,Ma,-It],t=[qt,kt*2,qt*2,kt*2,qt,kt,qt*2,kt,0,kt*2,qt,kt*2,0,kt,qt,kt,.06,.48,.08,.48,.1,.48,.06,0,.08,0,.1,0],i=[0,2,1,1,2,3,4,6,5,5,6,7,8,9,11,11,9,12,9,10,12,12,10,13,10,8,13,13,8,11],a=new Ya;return a.setAttribute("position",new es(e,3)),a.setAttribute("uv",new es(t,2)),a.attributes.uv.setUsage(Wt),a.setIndex(i),a}setVariant(e){if(e==this.curVariant)return;let t,i;e%2==0?i=1:i=0,t=1+Math.floor(e/2),this.uvs[0]=qt*t,this.uvs[1]=kt*(i+1),this.uvs[2]=qt*(t+1),this.uvs[3]=kt*(i+1),this.uvs[4]=qt*t,this.uvs[5]=kt*i,this.uvs[6]=qt*(t+1),this.uvs[7]=kt*i,e==sr.ChevronLeft||e==sr.ChevronRight?(this.uvs[8]=0,this.uvs[9]=kt,this.uvs[10]=qt,this.uvs[11]=kt,this.uvs[12]=0,this.uvs[13]=0,this.uvs[14]=qt,this.uvs[15]=0):(this.uvs[8]=0,this.uvs[9]=kt*2,this.uvs[10]=qt,this.uvs[11]=kt*2,this.uvs[12]=0,this.uvs[13]=kt,this.uvs[14]=qt,this.uvs[15]=kt),this.curVariant=e,this.geo.attributes.uv.needsUpdate=!0}};F(Is,"protoGeo",Is.makeProtoGeo());let ar=Is;new ts;new ts("wall",31,.2,.1);new gi;new As(0);const Mn=new xd,Ch=""+new URL("../assets/noentry.71ff3d6f.webp",import.meta.url).href;class kh extends fs{constructor(){super();F(this,"d");F(this,"opacity",0);ni.addListener("isCinecam",()=>{})}init(){this.matrixAutoUpdate=!1,this.mesh=new Xl(new jn(2.4,2.4,1,1),new Es({map:Gt(Ch),transparent:!0,opacity:0})),this.mesh.material.needsCameraPosition=!0,this.mesh.position.y=1.3,this.add(this.mesh),this.mesh.matrixAutoUpdate=!1,this.mesh.updateMatrix()}update(){this.position.copy(Me.head.p),this.rotation.y=-Me.head.a+Math.PI/2,this.updateMatrix()}updateVisibility(){this.visible&&(this.d=this.position.distanceToSquared(H.position),this.d<1e4?this.d<2500?(this.mesh.material.opacity=1,this.opacity=1):(this.mesh.material.opacity=Math.max(0,1-(Math.sqrt(this.d)-50)/50),this.opacity=this.mesh.material.opacity):this.mesh.material.opacity!=this.opacity&&(this.mesh.material.opacity=0,this.opacity=0))}}const Bs=new kh,cs=new yd({fps:!1,hwa:!1});function En(){return(navigator.userAgent.indexOf("Opera")||navigator.userAgent.indexOf("OPR"))!=-1?"Opera":navigator.userAgent.indexOf("Edg")!=-1?"Edge":navigator.userAgent.indexOf("Chrome")!=-1?"Chrome":navigator.userAgent.indexOf("Safari")!=-1?"Safari":navigator.userAgent.indexOf("Firefox")!=-1?"Firefox":navigator.userAgent.indexOf("MSIE")!=-1||document.documentMode?"IE":"Unknown"}const or=[cd,hd,fd];class Ih{constructor(){F(this,"canvas");F(this,"dom");F(this,"renderScene");F(this,"renderer");F(this,"debug",!1);F(this,"scene");F(this,"curSettings",{});F(this,"subs",[]);F(this,"stats");F(this,"hasInit",!1);F(this,"confirmHWA",!1);F(this,"updatePixelRatio",()=>{qe.useNativeRenderScale?(this.renderer.setPixelRatio(window.devicePixelRatio),Di.add("Setting device pixel ratio "+window.devicePixelRatio)):(this.renderer.setPixelRatio(Io[qe.renderScale]),Di.add("Setting device pixel ratio "+Io[qe.renderScale]))});F(this,"updateMaxFramerate",()=>{qe.maxFramerate>0&&(this.targetFrameTime=1e3/Yn[qe.maxFramerate])});F(this,"pausedInterval",null);F(this,"onTickerStateBound",this.onTickerState.bind(this));F(this,"onWorldSettingsChangedBound",this.onWorldSettingsChanged.bind(this));F(this,"frameCounter",0);F(this,"targetFrameTime",1e3/60);F(this,"updateBound",this.rawUpdate.bind(this));F(this,"update",()=>{});F(this,"maxPhysDT",.05);F(this,"minPhysDT",.001);F(this,"physDT",0);F(this,"debugUpdateTimer",.1);F(this,"debugFrameTimer",1);F(this,"debugFrame",0);F(this,"lastTimeCheck",Date.now());F(this,"lastVehicleIndexCheck",0);F(this,"driveTimer",0);F(this,"driveStartIndex",0);F(this,"onSceneInit");F(this,"profileGeneration",0);Math.TAU=Math.PI*2,Math.HALFPI=Math.PI/2,Math.D2R=Math.PI/180,Math.R2D=180/Math.PI,Math.getHeading=(e,t)=>{}}onMount(e,t,i){var a,r;this.canvas=e,this.dom=t,this.uiDom=i,this.renderScene=new Kn,this.renderScene.add(wd),this.cameraController=new Od(t),this.camera=Ae,this.renderScene.add(this.cameraController.container),this.vehicleManager=new zd,this.renderScene.add(H),this.stats=new Fd,this.stats.dom.style.left="282px",this.stats.dom.style.zIndex="9999",document.body.appendChild(this.stats.dom),ne.addListener("showDebug",o=>{this.stats&&(this.stats.dom.style.display=o?"block":"none")}),ne.addListener("roadWidth",o=>{var l;if(this.initLoad(),js(bs)){this.setScene(Ve.scene);return}(l=this.scene)==null||l.onRoadWidthChanged(),this.vehicleManager.reset()},!0),ne.addListener("fullscreen",o=>{o?t.requestFullscreen&&t.requestFullscreen():document.fullscreenElement&&document.exitFullscreen()},!0),ne.set("fullscreen",!1),this.renderer=new Xn({canvas:this.canvas,antialias:!0,powerPreference:"high-performance",stencil:!1,logarithmicDepthBuffer:!1}),this.renderer.setClearColor(4473924),this.toneMapped=!0,this.renderer.toneMapping=Qn,this.renderer.shadowMap.enabled=!0,qe.addListener("renderScale",this.updatePixelRatio),qe.addListener("useNativeRenderScale",this.updatePixelRatio),qe.addListener("viewDistance",this.onGraphicsSettingsChanged.bind(this),!0),qe.addListener("detail",this.onGraphicsSettingsChanged.bind(this),!0),qe.addListener("maxFramerate",this.updateMaxFramerate),Je.init(),Je.addListener(this.updateBound),Le.init(t,e,i),_e.initialise(),_e.addListener(vi.NextScene,()=>{var o;(o=this.scene)==null||o.nextStyle()}),_e.addListener(vi.PrevScene,()=>{var o;(o=this.scene)==null||o.prevStyle()}),_e.addListener(vi.ToggleUI,()=>{ne.set("hideUI",!ne.hideUI)}),_e.addListener(vi.Pause,()=>{Je.toggle()}),_e.addListener(vi.IncSpeedControl,()=>Za()),_e.addListener(vi.DecSpeedControl,()=>Ja()),_e.addListener(vi.ToggleSpeedControlMode,()=>{We.set("speedControlMode",(We.speedControlMode+1)%2)}),_e.addListener(vi.AutodriveMode,()=>{ne.set("autodriveMode",(ne.autodriveMode+1)%3)}),Je.addStateListener(this.onTickerStateBound),No.onMount(),No.registerAction(this.onBeforeUnload.bind(this)),di.addListener(o=>{o<1?Le.lockKeys("load"):(Le.unlockKeys("load"),this.vehicleManager.onSceneReady(),this.prevRender=performance.now(),this.update=this.updateLive,this.render=this.renderLive,bs.set(!1))}),Ei.onInitialiseFinished=()=>{this.prevRender=performance.now(),this.renderer.render(this.renderScene,this.camera),!$t&&!lt.hasSeenHWAWarning&&(this.confirmHWA=!0,this.confirmHWATime=performance.now(),this.confirmHWACount=5),lt.hasSeenSettings||this.initFPSCheck(),Ei.addJob(()=>Je.initSample(),0,"Ticket.initSample")},Ve.addListener("any",this.onWorldSettingsChangedBound),Ss(Ve.startNode),Bs.init(),this.renderScene.add(Bs),setInterval(this.onMinutePassed.bind(this),6e4),this.hasInit=!0,Ts.set(!0),Di.add("HW: Browser is "+En()),Di.add("HW: Screen res is "+((a=window.screen)==null?void 0:a.width)+" x "+((r=window.screen)==null?void 0:r.height))}initComp(){this.initLoad(),this.setScene(Sd.Driftmas)}initFPSCheck(){clearTimeout(this.fpsTimeout),this.fpsTimeout=setTimeout(()=>{Je.paused||Je.blurred||lt.hasSeenSettings||this.fps*Je.speedFactor<40&&cs.set("fps",!0)},1e4)}onTickerState(e){clearInterval(this.pausedInterval),e&&(this.pausedInterval=setInterval(()=>{_e.update(.01)},10)),this.fpsTimeout&&(clearTimeout(this.fpsTimeout),this.initFPSCheck())}onWorldSettingsChanged(e){this.hasInit&&this.onCheckJourney(),this.initLoad(),bs.set(!0),this.curSettings.scene!=e.scene?this.setScene(Ve.scene):this.curSettings.roadStyle!=e.roadStyle||this.curSettings.seed!=e.seed?this.setScene(Ve.scene):this.curSettings.startNode!=e.startNode&&this.setScene(Ve.scene),this.curSettings={...e}}onGraphicsSettingsChanged(){var e;if(this.initLoad(),js(bs)){this.setScene(Ve.scene);return}(e=this.scene)==null||e.onGraphicsSettingsChanged()}initLoad(){this.update=this.updateLoad,this.render=this.renderLoad,Ei.reset(),clearTimeout(this.fpsTimeout)}setScene(e){if(e>=or.length){console.error("Attempting to load unknown scene ",e);return}let t=or[e];this.scene&&(this.scene.destroy(),Dd(this.scene.container),this.renderScene.remove(this.scene.container),delete this.scene),this.scene=new t(this.renderer,this.renderScene),this.renderScene.add(this.scene.container),this.scene.initialise(this.onMidlineReady.bind(this),this.onSceneReady.bind(this)),this.vehicleManager.onSceneLoading(),Ss(Ve.startNode)}render(){}renderLive(){if(qe.maxFramerate>0){if(this.renderDT=performance.now()-this.prevRender,this.frameCounter+this.renderDT<this.targetFrameTime)return;this.frameCounter=this.frameCounter+this.renderDT-this.targetFrameTime,this.frameCounter%=this.targetFrameTime}this.prevRender=performance.now(),this.renderer.render(this.renderScene,this.camera)}renderLoad(){}rawUpdate(e){this.update(Je.smoothDT),ne.showDebug&&this.stats.update()}updateLoad(e){try{Ei.update(e*1e3),this.scene.updateLoad(e)}catch(t){this.onCrash("SCENE LOAD",t)}}updateScene(e){this.scene.update(e)}onCrash(e,t){this.update=()=>{},Je.destroy(),this.vehicleManager.onCrash(),console.error(e),console.error(t),console.log(Di.get()),Mn.set({type:e,msg:t.message,log:Di.get()})}updateLive(e,t){if(this.confirmHWA){let i=performance.now()-this.confirmHWATime;i>100?(this.confirmHWACount++,i>250&&this.confirmHWACount++):(this.confirmHWACount--,i<30&&this.confirmHWACount--),this.confirmHWACount<0?(this.confirmHWA=!1,lt.set("hasSeenHWAWarning",!0)):this.confirmHWACount>10&&(this.confirmHWA=!1,lt.set("hasSeenHWAWarning",!0),cs.set("hwa",!0),Je.lock()),this.confirmHWATime=performance.now()}_e.update(e);try{this.vehicleManager.update(e,t)}catch(i){this.onCrash("VEHICLE UPDATE",i);return}try{this.cameraController.update(e)}catch(i){this.onCrash("CAMERA UPDATE",i);return}try{this.updateScene(e)}catch(i){this.onCrash("SCENE UPDATE",i);return}if(this.render(),this.debugFrameTimer-=e,this.debugFrameTimer<0&&(this.fps=this.renderer.info.render.frame-this.debugFrame,this.vehicleManager.fps=this.fps,Ka.set(this.renderer.info.render.frame-this.debugFrame),this.debugFrame=this.renderer.info.render.frame,this.debugFrameTimer+=1),this.debugUpdateTimer-=e,this.debugUpdateTimer<0){Ql.set(this.renderer.info.render.calls),Zl.set(Math.floor(this.renderer.info.render.triangles)),Jl.set(this.renderer.info.memory.geometries),Zn.set(this.renderer.info.memory.textures),Ta.set(Ei.priority.length),Xa.set(Me.vehicleNode),$l.set(Me.tail),en.set(Me.head),tn.set(H.position.x.toFixed(1)+", "+H.position.y.toFixed(1)+", "+H.position.z.toFixed(1));let i=H.position.x/Ao,a=Math.floor(i),r=Math.floor((i-a)*To),o=H.position.z/Ao,l=Math.floor(o),n=Math.floor((o-l)*To);sn.set(a+", "+l),an.set(r+", "+n),Qa.set(Ei.queue.length),Ta.set(Ei.priority.length),this.debugUpdateTimer=.1}try{Ei.update(e*1e3)}catch(i){this.onCrash("SCENE LOAD",i)}this.postUpdate()}postUpdate(){Le.resetState(),Me.vehicleNodeDidChange&&this.onVehicleNodeChanged(),(!H.onRoad||H.isRogue)&&Bs.updateVisibility(),Me.vehicleNodeDidChange=!1}onMinutePassed(){let e=Math.min(61e4,Date.now()-this.lastTimeCheck);H.speed>0&&(Ft.value?Be.set("autodriveTime",Be.autodriveTime+e):Be.set("manualTime",Be.manualTime+e),Be.set("totalTime",Be.autodriveTime+Be.manualTime),this.driveTimer+=e),this.lastTimeCheck=Date.now()}onVehicleNodeChanged(){Ft.value?Be.set("autodriveDist",Be.autodriveDist+(Me.vehicleNode.i-this.lastVehicleIndexCheck)*10):Be.set("manualDist",Be.manualDist+(Me.vehicleNode.i-this.lastVehicleIndexCheck)*10),Be.set("totalDist",Be.manualDist+Be.autodriveDist),this.onCheckJourney(),Ss(Me.vehicleNode.i),Bs.update(),this.lastVehicleIndexCheck=Me.vehicleNode.i}onCheckJourney(){let e=this.driveTimer,t=(this.lastVehicleIndexCheck-this.driveStartIndex)*10;e>Be.longestDrive&&Be.set("longestDrive",e),t>Be.furthestDrive&&Be.set("furthestDrive",t)}onBeforeUnload(){this.onCheckJourney()}onMidlineReady(){return Di.add("Midline ready"),!0}onSceneReady(){return this.vehicleManager.init(),this.cameraController.init(),this.update=this.updateLive,localStorage.removeItem("loading-flag"),this.profileGeneration!==xi.value&&(this.updatePixelRatio(),this.updateMaxFramerate(),this.profileGeneration=xi.value),this.driveStartTime=Date.now(),this.driveStartIndex=Ve.startNode,this.driveTimer=0,this.lastVehicleIndexCheck=Ve.startNode,!0}setSize(e,t){this.cameraController.setSize(e,t),this.renderer.setSize(e,t),Le.setSize(e,t),this.render()}onDestroy(){for(;this.renderScene.children.length;)this.renderScene.remove(this.renderScene.children[this.renderScene.children.length-1]);for(this.renderer&&(this.renderer.dispose(),this.renderer.forceContextLoss());this.subs.length;)this.subs.pop()();Je.destroy(),Le.destroy()}}function Mh(s,e,t){const i=s.slice();return i[3]=e[t],i[5]=t,i}function Eh(s,e,t){const i=s.slice();return i[6]=e[t],i}function Ah(s){let e=s[3].version+"",t;return{c(){t=ee(e)},l(i){t=te(i,e)},m(i,a){P(i,t,a)},d(i){i&&g(t)}}}function Th(s){let e,t=s[3].version+"",i;return{c(){e=_("a"),i=ee(t),this.h()},l(a){e=b(a,"A",{class:!0,href:!0});var r=C(e);i=te(r,t),r.forEach(g),this.h()},h(){f(e,"class","changelog-version-number-link svelte-bsztam"),f(e,"href",s[3].permalink)},m(a,r){P(a,e,r),c(e,i)},d(a){a&&g(e)}}}function Ph(s){let e,t,i="-",a,r,o,l;return{c(){e=_("div"),t=_("span"),t.textContent=i,a=I(),r=_("span"),o=ee(s[6]),l=I(),this.h()},l(n){e=b(n,"DIV",{class:!0});var d=C(e);t=b(d,"SPAN",{class:!0,"data-svelte-h":!0}),K(t)!=="svelte-zrnetw"&&(t.textContent=i),a=M(d),r=b(d,"SPAN",{});var h=C(r);o=te(h,s[6]),h.forEach(g),l=M(d),d.forEach(g),this.h()},h(){f(t,"class","list-dot svelte-bsztam"),f(e,"class","changelog-list-item svelte-bsztam")},m(n,d){P(n,e,d),c(e,t),c(e,a),c(e,r),c(r,o),c(e,l)},p:ve,d(n){n&&g(e)}}}function Nh(s){let e,t,i,a,r,o=s[3].date+"",l,n,d,h;function u(w,D){return w[3].permalink&&!Pa?Th:Ah}let p=u(s)(s),v=Oe(s[3].changes),y=[];for(let w=0;w<v.length;w+=1)y[w]=Ph(Eh(s,v,w));return{c(){e=_("div"),t=_("div"),i=_("div"),p.c(),a=I(),r=_("div"),l=ee(o),n=I(),d=_("div");for(let w=0;w<y.length;w+=1)y[w].c();h=I(),this.h()},l(w){e=b(w,"DIV",{class:!0});var D=C(e);t=b(D,"DIV",{class:!0});var L=C(t);i=b(L,"DIV",{class:!0});var A=C(i);p.l(A),A.forEach(g),a=M(L),r=b(L,"DIV",{class:!0});var E=C(r);l=te(E,o),E.forEach(g),L.forEach(g),n=M(D),d=b(D,"DIV",{class:!0});var T=C(d);for(let x=0;x<y.length;x+=1)y[x].l(T);T.forEach(g),h=M(D),D.forEach(g),this.h()},h(){f(i,"class","changelog-version-number svelte-bsztam"),R(i,"changelog-version-new",Ri&&s[5]==0),f(r,"class","changelog-date svelte-bsztam"),f(t,"class","changelog-title svelte-bsztam"),f(d,"class","changelog-list svelte-bsztam"),f(e,"class","changelog "+(Ri&&s[5]==0?"new-version":"")+" svelte-bsztam")},m(w,D){P(w,e,D),c(e,t),c(t,i),p.m(i,null),c(t,a),c(t,r),c(r,l),c(e,n),c(e,d);for(let L=0;L<y.length;L+=1)y[L]&&y[L].m(d,null);c(e,h)},p:ve,d(w){w&&g(e),p.d(),bt(y,w)}}}function rr(s){let e,t,i;return{c(){e=_("div"),this.h()},l(a){e=b(a,"DIV",{class:!0}),C(e).forEach(g),this.h()},h(){f(e,"class","splash-changelog-close svelte-bsztam")},m(a,r){P(a,e,r),t||(i=G(e,"mousedown",s[1]),t=!0)},p:ve,d(a){a&&g(e),t=!1,i()}}}function xh(s){let e,t,i,a,r="Close",o,l,n,d,h=Oe($a),u=[];for(let p=0;p<h.length;p+=1)u[p]=Nh(Mh(s,h,p));let m=s[0]&&rr(s);return{c(){e=_("div"),t=_("div");for(let p=0;p<u.length;p+=1)u[p].c();i=I(),a=_("div"),a.textContent=r,o=I(),m&&m.c(),l=De(),this.h()},l(p){e=b(p,"DIV",{id:!0,style:!0,class:!0});var v=C(e);t=b(v,"DIV",{class:!0});var y=C(t);for(let w=0;w<u.length;w+=1)u[w].l(y);y.forEach(g),i=M(v),a=b(v,"DIV",{class:!0,"data-svelte-h":!0}),K(a)!=="svelte-1la5l1i"&&(a.textContent=r),v.forEach(g),o=M(p),m&&m.l(p),l=De(),this.h()},h(){f(t,"class","changelog-scrollable svelte-bsztam"),f(a,"class","changelog-close svelte-bsztam"),f(e,"id","splash-changelog"),re(e,"transform","translateX("+(s[0]?0:100)+"%)"),f(e,"class","svelte-bsztam")},m(p,v){P(p,e,v),c(e,t);for(let y=0;y<u.length;y+=1)u[y]&&u[y].m(t,null);c(e,i),c(e,a),P(p,o,v),m&&m.m(p,v),P(p,l,v),n||(d=G(a,"click",s[1]),n=!0)},p(p,[v]){v&1&&re(e,"transform","translateX("+(p[0]?0:100)+"%)"),p[0]?m?m.p(p,v):(m=rr(p),m.c(),m.m(l.parentNode,l)):m&&(m.d(1),m=null)},i:ve,o:ve,d(p){p&&(g(e),g(o),g(l)),bt(u,p),m&&m.d(p),n=!1,d()}}}function Rh(s,e,t){let{showChangelog:i=!1}=e,{onShowChangelog:a=()=>{}}=e;function r(){t(0,i=!1),a(!1)}return s.$$set=o=>{"showChangelog"in o&&t(0,i=o.showChangelog),"onShowChangelog"in o&&t(2,a=o.onShowChangelog)},[i,r,a]}class An extends Ke{constructor(e){super(),Xe(this,e,Rh,xh,Ye,{showChangelog:0,onShowChangelog:2})}}function Uh(s){let e;return{c(){e=ee("-")},l(t){e=te(t,"-")},m(t,i){P(t,e,i)},d(t){t&&g(e)}}}function Oh(s){let e,t="+";return{c(){e=_("span"),e.textContent=t,this.h()},l(i){e=b(i,"SPAN",{style:!0,"data-svelte-h":!0}),K(e)!=="svelte-1y249x7"&&(e.textContent=t),this.h()},h(){re(e,"transform","rotate(45deg)")},m(i,a){P(i,e,a)},d(i){i&&g(e)}}}function lr(s){let e,t;return{c(){e=_("div"),t=new Fa(!1),this.h()},l(i){e=b(i,"DIV",{class:!0});var a=C(e);t=Ga(a,!1),a.forEach(g),this.h()},h(){t.a=null,f(e,"class","faq-a svelte-1yu3ye")},m(i,a){P(i,e,a),t.m(s[1],e)},p(i,a){a&2&&t.p(i[1])},d(i){i&&g(e)}}}function Vh(s){let e,t,i,a,r,o,l;function n(m,p){return m[2]?Oh:Uh}let d=n(s),h=d(s),u=!s[2]&&lr(s);return{c(){e=_("div"),t=_("div"),i=ee(s[0]),a=_("div"),h.c(),r=I(),u&&u.c(),this.h()},l(m){e=b(m,"DIV",{class:!0});var p=C(e);t=b(p,"DIV",{class:!0});var v=C(t);i=te(v,s[0]),a=b(v,"DIV",{class:!0});var y=C(a);h.l(y),y.forEach(g),v.forEach(g),r=M(p),u&&u.l(p),p.forEach(g),this.h()},h(){f(a,"class","faq-expand svelte-1yu3ye"),f(t,"class","faq-q svelte-1yu3ye"),f(e,"class","faq-qa svelte-1yu3ye")},m(m,p){P(m,e,p),c(e,t),c(t,i),c(t,a),h.m(a,null),c(e,r),u&&u.m(e,null),o||(l=G(t,"mousedown",s[3]),o=!0)},p(m,[p]){p&1&&be(i,m[0]),d!==(d=n(m))&&(h.d(1),h=d(m),h&&(h.c(),h.m(a,null))),m[2]?u&&(u.d(1),u=null):u?u.p(m,p):(u=lr(m),u.c(),u.m(e,null))},i:ve,o:ve,d(m){m&&g(e),h.d(),u&&u.d(),o=!1,l()}}}function Hh(s,e,t){let{q:i="Question?"}=e,{a="Answer"}=e,r=!0;const o=()=>t(2,r=!r);return s.$$set=l=>{"q"in l&&t(0,i=l.q),"a"in l&&t(1,a=l.a)},[i,a,r,o]}class zh extends Ke{constructor(e){super(),Xe(this,e,Hh,Vh,Ye,{q:0,a:1})}}const Fh=[{q:"Why do I get such a poor performance?",a:"Make sure you have hardware acceleration enabled in your browser, and in your OS settings if necessary. If you're on a laptop, check power settings to make sure your browser performance isn't being throttled."},{q:"How much will the Steam version cost?",a:"It depends on how many extra features are added, but probably between $8 and $16. Could be lower, could be higher - you'll know nearer to release."},{q:"When will the Steam version be released?",a:"I'm aiming to have it out by Summer 2026 but can't be certain; solo development is just too unpredictable."},{q:"Will the web version still be freely available?",a:"Yes! The Steam version will have extra features and higher-quality assets, but the web version will continue to get the same core updates."},{q:"Is there an offline version of the web game that I can play without an internet connection?",a:"Yes, it's called Slow Roads: Web Edition and is available on itch.io for a small price. Find it on the <a style='color: #418fa4' href='https://topographinteractive.itch.io/slow-roads'>Slow Roads itch.io page</a>"},{q:"What's the background on the game's development?",a:"I wanted a simple, relaxing driving game to play while listening to podcasts or music, but the existing options were too serious and ended too soon. At the time I had been working on a vehicle physics engine in a separate project, and at some point became interested in the idea of procedurally-generated environments. I realised I could combine the two, and within a week I had a basic version of Slow Roads working."},{q:"Who's the developer?",a:"Hi, I'm Anslo, a creative generalist developer interested in graphics programming, procedural generation, and 3D design. Slow Roads began as one of my hobby projects, and I'm developing it solo. You can find some details on my other projects at anslo.dev. The Slow Roads property is owned by my independent, solo-owned company, Topograph Interactive Ltd, for the purpose of publishing via Steam."},{q:"How and why is the web version free, and without ads?",a:"Slow Roads is a game about escapism and peace, letting you take a break from the stress of the modern world, and intrusive ads don't belong in this context. In general I think web advertising has spiralled into something of a capitalist hellscape which makes everyone's experience online worse, all in the name of greed. It's unfortunate that so many talented creators depend on these broken systems to earn revenue for their work, and I think there's a lot of room for reform in online advertising. I want to use this small platform to remind people that there is a better way - it can be a choice, and there can be a simpler, more human-centric approach. If you'd like to support me, aside from wishlisting/purchasing the Steam version you can also pay an optional price for the Web Edition on itch.io"},{q:"Have you thought about adding a competitive or rally mode?",a:"Yes, I've run multiple community rally events over the past few winters - check out driftmas.slowroads.io. I may bring more competitive modes in future, especially to the Steam version."},{q:"Why can I drive through trees, or glitch into the sky by going backwards?",a:"The game engine only really works on the assumption that you stay on the road and follow it in the correct direction. Making that assumption allows for critical performance savings for rendering, environment generation, and physics calculations. I decided it would be no fun to force-reset people for driving offroad, though; sometimes glitches are the best part of a game."},{q:"Why are all the cars electric?",a:"They're a lot more peaceful and simple to drive, which suits the context of the game. Combustion engines are complex to code and design audio for, and are quickly becoming old-fashioned - EVs are just how cars are nowadays. That said, combustion engines are a highly-requested feature, so will be added as an option in the Steam version."},{q:"Can you add a radio or music player, or connect to Spotify etc.?",a:"I don't have any plans to add a radio or music player for now, to avoid the complexity of licensing or API integration. Perhaps this could come in future; it may be more worthwhile in the Steam release."},{q:"I have a great idea for a feature, how can I tell you?",a:"It's probably already on the list - I have a lot of things I want to work on already, so it's unlikely I'll be adding new things to the list now, sorry. If you think it's something I truly haven't thought of, you can mention it in the Discord and I'm sure someone will let you know."},{q:"Can I contribute to the development of the game?",a:"This is still mostly a hobby project for me, so I'm not looking for contributors at this stage. In the future I might be looking for certain specialists, so make sure you follow on social media for updates there."},{q:"Can I have permission to host the game on my own site, make an app of the game with a web-view, or otherwise distribute the game myself?",a:"No, sorry. Unfortunately many are abusing the BY-NC-ND license and I now prefer people not to rehost the game in any context. However, if you would like to purchase a commercial license, please email hello@topograph.io"},{q:"Will you make it open-source?",a:"There are no plans at this stage to open-source the game, but I may look into supporting mods for the Steam version in future."},{q:"Which tech/language was used to make Slow Roads?",a:"The whole thing is written in plain JavaScript, using Three.js as a rendering library and SvelteKit as an SPA framework. It all runs client-side, in a WebGL canvas. The core engine is custom-written to be optimised for efficient environment generation, realistic road generation, and minimal physics computation. As for why - I think the browser is underrated as a platform for interactive 3D apps, and I wanted to make a point of that with Slow Roads. Plus JS dev is super accessible and flexible, and that suits my style."},{q:"How does the environment generation algorithm work?",a:"It uses a modified noise generator, similar to Perlin Noise, and then traces a road in 10m increments by testing gradients and choosing the best direction to go at each step. That decision is weighted by a lot of factors, like curvature, gradient, progress, water avoidance, self-intersection avoidance, and so on. There's a lot more complexity to it, but that's the gist - one day I'll get around to writing some proper devlogs!"},{q:"I miss the old slow roads - is there a way to still play it?",a:"Yes, it's still live at old.slowroads.io"},{q:"I miss a specific previous version - is there a way to still play it?",a:"Yes, click the version number in the lower-right of the main splash page to open the changelog, then click the version number for the version you wish to play. It will link to the specific version on slowroads-io.pages.dev. You may receive a warning from your browser about navigating to this page, but it is safe to do so."},{q:"Will there ever be a SR3?",a:"At present I don't plan to make any significant changes to the underlying engine, so updates for the foreseeable future will simple be expansions of version 2."}];function Gh(s,e,t){const i=s.slice();return i[12]=e[t],i}function nr(s,e,t){const i=s.slice();return i[15]=e[t],i}function dr(s){let e,t="Failed to initialise - please ensure your system supports WebGL2";return{c(){e=_("div"),e.textContent=t,this.h()},l(i){e=b(i,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),K(e)!=="svelte-jv3955"&&(e.textContent=t),this.h()},h(){f(e,"id","splash-error"),f(e,"class","svelte-1gadttx")},m(i,a){P(i,e,a)},d(i){i&&g(e)}}}function Bh(s){let e,t,i,a,r,o,l,n,d,h,u="See full details",m,p,v=Oe(s[3]),y=[];for(let w=0;w<v.length;w+=1)y[w]=cr(nr(s,v,w));return{c(){e=_("div"),t=ee("New version - "),i=ee(Xt),a=I(),r=_("hr"),o=I();for(let w=0;w<y.length;w+=1)y[w].c();l=I(),n=_("hr"),d=I(),h=_("div"),h.textContent=u,this.h()},l(w){e=b(w,"DIV",{class:!0});var D=C(e);t=te(D,"New version - "),i=te(D,Xt),a=M(D),r=b(D,"HR",{class:!0}),o=M(D);for(let L=0;L<y.length;L+=1)y[L].l(D);l=M(D),n=b(D,"HR",{class:!0}),d=M(D),h=b(D,"DIV",{class:!0,"data-svelte-h":!0}),K(h)!=="svelte-5v1n0f"&&(h.textContent=u),D.forEach(g),this.h()},h(){f(r,"class","svelte-1gadttx"),f(n,"class","svelte-1gadttx"),f(h,"class","splash-version-see-more svelte-1gadttx"),f(e,"class","splash-new-version svelte-1gadttx")},m(w,D){P(w,e,D),c(e,t),c(e,i),c(e,a),c(e,r),c(e,o);for(let L=0;L<y.length;L+=1)y[L]&&y[L].m(e,null);c(e,l),c(e,n),c(e,d),c(e,h),m||(p=G(h,"click",s[8]),m=!0)},p(w,D){if(D&8){v=Oe(w[3]);let L;for(L=0;L<v.length;L+=1){const A=nr(w,v,L);y[L]?y[L].p(A,D):(y[L]=cr(A),y[L].c(),y[L].m(e,l))}for(;L<y.length;L+=1)y[L].d(1);y.length=v.length}},d(w){w&&g(e),bt(y,w),m=!1,p()}}}function cr(s){let e,t=s[15]+"",i;return{c(){e=_("div"),i=ee(t),this.h()},l(a){e=b(a,"DIV",{class:!0});var r=C(e);i=te(r,t),r.forEach(g),this.h()},h(){f(e,"class","splash-version-change svelte-1gadttx")},m(a,r){P(a,e,r),c(e,i)},p(a,r){r&8&&t!==(t=a[15]+"")&&be(i,t)},d(a){a&&g(e)}}}function qh(s){let e,t;return e=new An({props:{showChangelog:s[2],onShowChangelog:s[9]}}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,a){Re(e,i,a),t=!0},p(i,a){const r={};a&4&&(r.showChangelog=i[2]),a&4&&(r.onShowChangelog=i[9]),e.$set(r)},i(i){t||(W(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function Wh(s){let e,t='<span style="font-size: 1.2rem; color: var(--sr-primary)">Prefer the old version?</span> <br/> <span style="font-size: 0.9rem">Find it at <a class="splash-smallprint-link svelte-1gadttx" href="https://old.slowroads.io">old.slowroads.io</a></span>',i,a;return{c(){e=_("div"),e.innerHTML=t,this.h()},l(r){e=b(r,"DIV",{class:!0,"data-svelte-h":!0}),K(e)!=="svelte-fgyrc"&&(e.innerHTML=t),this.h()},h(){f(e,"class","splash-old svelte-1gadttx")},m(r,o){P(r,e,o),i||(a=G(e,"mouseover",s[10]),i=!0)},p:ve,d(r){r&&g(e),i=!1,a()}}}function jh(s){let e,t=`<a target="_blank" rel="noopener noreferrer" href="https://discord.gg/TNf9bBrZmR" alt="" class="splash-main-button svelte-1gadttx"><img src="/img/icon_discord.svg" alt="" class="splash-main-button-icon svelte-1gadttx"/> <br/>
                    Join the Discord</a> <a href="#about" class="splash-main-button svelte-1gadttx" style="padding-top: 2rem;"><span style="font-size: 1.5rem">About</span> <br/> <span style="font-size: 2rem">▾</span></a> <a target="_blank" rel="noopener noreferrer" href="https://store.steampowered.com/app/3431300/Slow_Roads/" alt="" class="splash-main-button splash-main-button-highlight svelte-1gadttx"><div class="splash-main-steam-notice svelte-1gadttx">Store page is live!</div> <img src="/img/icon_steam.svg" alt="" class="splash-main-button-icon svelte-1gadttx"/> <br/>
                    Wishlist on Steam</a>`;return{c(){e=_("div"),e.innerHTML=t,this.h()},l(i){e=b(i,"DIV",{class:!0,"data-svelte-h":!0}),K(e)!=="svelte-1tpituv"&&(e.innerHTML=t),this.h()},h(){f(e,"class","splash-main-buttons svelte-1gadttx")},m(i,a){P(i,e,a)},d(i){i&&g(e)}}}function Yh(s){let e,t;return e=new zh({props:{q:s[12].q,a:s[12].a}}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,a){Re(e,i,a),t=!0},p:ve,i(i){t||(W(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function hr(s){let e,t,i;return{c(){e=_("div"),t=I(),i=_("div"),this.h()},l(a){e=b(a,"DIV",{id:!0,class:!0}),C(e).forEach(g),t=M(a),i=b(a,"DIV",{id:!0,class:!0}),C(i).forEach(g),this.h()},h(){f(e,"id","splash-bg-overlay"),f(e,"class","svelte-1gadttx"),f(i,"id","splash-bg"),f(i,"class","svelte-1gadttx")},m(a,r){P(a,e,r),P(a,t,r),P(a,i,r)},d(a){a&&(g(e),g(t),g(i))}}}function Kh(s){let e,t,i,a,r,o,l,n,d="endless driving zen",h,u,m=s[5]?"continue":"begin",p,v,y,w,D,L,A,E,T,x,j="CC BY-NC-ND 4.0 International License",X,O,$,Z,U,q=`from <a class="splash-smallprint-link svelte-1gadttx" href="https://topograph.io" target="_blank" rel="noopener noreferrer">topograph.io</a> © 2026 	
                <span style="margin: 0 0.5rem;">·</span> <a class="splash-smallprint-link svelte-1gadttx" href="/privacy" target="_blank" rel="noopener noreferrer">privacy policy</a>`,V,z,k,N,B='<div class="splash-body-wrapper svelte-1gadttx" style="margin: 5rem 0"><div class="splash-blurb-corner-tl svelte-1gadttx"></div> <div class="splash-blurb-corner-tr svelte-1gadttx"></div> <div class="splash-blurb svelte-1gadttx"><strong>Slow Roads</strong> is a casual driving game all about finding peace in a long, scenic journey. No ads, no interruptions, and no end to the road. Set the weather to suit your mood, throw on some music, and <strong>just drive.</strong></div> <div class="splash-blurb-corner-bl svelte-1gadttx"></div> <div class="splash-blurb-corner-br svelte-1gadttx"></div></div>',se,oe,le=`<div class="splash-body-wrapper svelte-1gadttx" style="color: var(--sr-secondary)"><div class="splash-body-header svelte-1gadttx" style="color: #6dcff6; text-shadow: 0 0 1rem #6dcff688">Coming soon to Steam!
                        <a class="splash-visit-steam svelte-1gadttx" target="_blank" rel="noopener noreferrer" href="https://store.steampowered.com/app/3431300/Slow_Roads/"><img src="/img/icon_steam_white.svg" class="splash-body-steam-icon svelte-1gadttx" alt=""/>
                            Visit store page</a></div> <div class="splash-body-text svelte-1gadttx">While Slow Roads is fundamentally designed as a lightweight web experience, and the web version will remain freely available, there&#39;s a lot of potential to go beyond the limits of the browser.
                        Over the years I&#39;ve also had a lot of requests for features which would break the core design of Slow Roads as a simple, quick get-away— and which would demand more time than I can give as a hobby.
                        That&#39;s why I&#39;m soon to be releasing an expanded version on Steam, featuring all the things that wouldn&#39;t belong in the web.</div> <div class="splash-body-subheader svelte-1gadttx" style="color: #6dcff6;">Targeted for the first release:</div> <div class="splash-body-bullets svelte-1gadttx"><div class="splash-body-bullet svelte-1gadttx">Combustion engine sounds and manual transmission</div> <div class="splash-body-bullet svelte-1gadttx">Expanded vehicle configuration for both physics and aesthetic</div> <div class="splash-body-bullet svelte-1gadttx">Optional traffic on the road</div> <div class="splash-body-bullet svelte-1gadttx">A scene editor which lets you craft your ideal road</div> <div class="splash-body-bullet svelte-1gadttx">Profiles for saving progress and customisations</div> <div class="splash-body-bullet svelte-1gadttx">Achievements</div> <div class="splash-body-bullet svelte-1gadttx">High-resolution assets</div></div> <div class="splash-body-text svelte-1gadttx">This first release is cautiously targeted for <strong>early 2026</strong> - the goal is to get a simple version out soon and then, like the web version, continue to iterate long into the future. Solo dev can be unpredictable, though, so this date could easily slip to later in the year. Check the #dev-log channel on the discord server for the latest news!</div> <div class="splash-body-subheader svelte-1gadttx" style="color: #6dcff6;">Longer-term targets:</div> <div class="splash-body-bullets svelte-1gadttx"><div class="splash-body-bullet svelte-1gadttx">Extra graphics settings, including added features like post-processing effects</div> <div class="splash-body-bullet svelte-1gadttx">Extra locations and vehicles not available in the web version</div> <div class="splash-body-bullet svelte-1gadttx">Multiplayer game modes</div> <div class="splash-body-bullet svelte-1gadttx">Competitive/rally game modes (check out <a class="splash-body-link svelte-1gadttx" href="https://driftmas.slowroads.io">driftmas.slowroads.io</a>!)</div> <div class="splash-body-bullet svelte-1gadttx">Enhanced scene editing tools for full world customisation</div></div> <div class="splash-body-text svelte-1gadttx">If this sounds good to you, please support me by <a class="splash-body-link svelte-1gadttx" href="https://store.steampowered.com/app/3431300/Slow_Roads/" target="_blank" rel="noopener noreferrer">wishlisting Slow Roads on Steam!</a></div> <div class="splash-body-header svelte-1gadttx" style="text-align: left; position: relative; color: #6dcff6; margin-top: 2rem; text-shadow: 0 0 1rem #6dcff688">Slow Roads: Web Edition
                        <a class="splash-visit-steam svelte-1gadttx" style="top:-0.5rem;" target="_blank" rel="noopener noreferrer" href="https://topographinteractive.itch.io/slow-roads"><img src="/img/icon_itch_white.svg" class="splash-body-steam-icon svelte-1gadttx" style="width: 1.5rem; margin-left: 0.5rem;" alt=""/>
                            Purchase here</a></div> <div class="splash-body-text svelte-1gadttx">In the meantime, if you want to play the web version offline, you can find the downloadable Slow Roads: Web Edition available for a small price on the <a class="splash-body-link svelte-1gadttx" href="https://topographinteractive.itch.io/slow-roads" target="_blank" rel="noopener noreferrer">Slow Roads page on itch.io</a>. This version won&#39;t receive the Steam-exclusive features, but does include the high-resolution textures unavailable on the web. Available for Windows, Linux, and MacOS.
                        <br/> <br/>
                        If you want to transfer your progress and settings from slowroads.io to the Web Edition, you can download your save file from the Profile settings and upload that in the app.</div></div>`,pe,ye,ge='<div class="splash-body-wrapper svelte-1gadttx"><div class="splash-body-header svelte-1gadttx">Background</div> <div class="splash-body-text svelte-1gadttx">Hey, I&#39;m <a class="splash-body-link svelte-1gadttx" href="https://anslo.dev">Anslo</a>, a generalist developer interested in 3D graphics and procedural generation. Slow Roads is my hobby project to generate endless scenic landscapes, packaged as a chill driving game. I made it partly as an experiment in procedural generation, partly to prove that browsers are actually quite capable at 3D, and partly to scratch a very specific itch to mindlessly drive forever, as a kind of active meditation.</div> <div class="splash-body-text svelte-1gadttx">I started the project in July 2021, released a rough version 1 in October 2022, then spent the last couple of years rewriting the engine from scratch into something much more powerful. The original goal has always been to support dozens of different locations, I expect to keep working on the game until I fulfil that. But, ultimately, my hope is that those in need of a simple escape will find it here.</div></div>',Q,ae,ce='<div class="splash-body-wrapper svelte-1gadttx"><div class="splash-body-header svelte-1gadttx">Development Roadmap</div> <div class="splash-body-text svelte-1gadttx">Slow Roads is a living project under continuous development. Here&#39;s a look at what&#39;s coming in the next few months. As a solo developer, it&#39;s impossible to estimate when these features will be finished, but know that I&#39;m working on the game every week. I post regular updates to the #dev-log channel in the <a class="splash-body-link svelte-1gadttx" href="https://discord.gg/TNf9bBrZmR" target="_blank" rel="noopener noreferrer">Discord server</a>, so check there for the latest.</div> <div class="splash-body-subheader svelte-1gadttx">Next up:</div> <div class="splash-body-bullets svelte-1gadttx"><div class="splash-body-bullet svelte-1gadttx">Development and release of the Steam version</div></div> <div class="splash-body-subheader svelte-1gadttx">Future goals:</div> <div class="splash-body-bullets svelte-1gadttx"><div class="splash-body-bullet svelte-1gadttx">Improved weather effects, including rain</div> <div class="splash-body-bullet svelte-1gadttx">Continued environmental detail upgrades, such as structures, buildings, and wildlife</div> <div class="splash-body-bullet svelte-1gadttx">Development of new locations</div> <div class="splash-body-bullet svelte-1gadttx">Development of new vehicles</div> <div class="splash-body-bullet svelte-1gadttx">Regular community events</div></div> <div class="splash-body-text svelte-1gadttx"><a class="splash-body-link svelte-1gadttx" href="https://discord.gg/TNf9bBrZmR" target="_blank" rel="noopener noreferrer">Join the Discord</a> or <a class="splash-body-link svelte-1gadttx" href="https://bsky.app/profile/slowroads.io" target="_blank" rel="noopener noreferrer">follow slowroads.io on Bluesky</a> to keep updated and share feedback!</div></div>',Y,de,J,me,Ee="FAQ",ze,He,Qe,$e=`<div class="splash-body-wrapper svelte-1gadttx"><div class="splash-body-header svelte-1gadttx">Contact</div> <div class="splash-body-text svelte-1gadttx" style="text-align:center; user-select: default;">Email
                        <br/> <span style="font-size: 1.2rem; font-weight: 400; color: var(--sr-white); user-select: all;">hello@slowroads.io</span> <br/> <br/>
                        Discord
                        <br/> <span style="font-size: 1.2rem; font-weight: 400; color: var(--sr-white)"><a class="splash-body-link svelte-1gadttx" href="https://discord.gg/TNf9bBrZmR" target="_blank" rel="noopener noreferrer">Join the server here</a></span> <br/> <br/>
                        Bluesky
                        <br/> <span style="font-size: 1.2rem; font-weight: 400; color: var(--sr-white)"><a class="splash-body-link svelte-1gadttx" href="https://bsky.app/profile/slowroads.io" target="_blank" rel="noopener noreferrer">Follow slowroads.io here</a></span></div></div>`,dt,et,ci=`<div class="splash-body-wrapper svelte-1gadttx"><div class="splash-body-header svelte-1gadttx">Attributions</div> <div class="splash-body-text svelte-1gadttx" style="text-align: center">Rendering library - <a class="splash-body-link svelte-1gadttx" href="https://threejs.org/">three.js</a> <br/>
                        Brand design - <a class="splash-body-link svelte-1gadttx" href="https://benj-design.com">benj-design.com</a> <br/>
                        Off-world textures - <a class="splash-body-link svelte-1gadttx" href="https://mars.nasa.gov/mars2020/multimedia/raw-images/">Nasa Perseverance</a> <br/>
                        Brake audio - <a class="splash-body-link svelte-1gadttx" href="https://freesound.org/people/WavJunction.com/sounds/456764/">WavJunction.com on freesound.org</a> <br/>
                        Ambient audio - <a class="splash-body-link svelte-1gadttx" href="https://freesound.org/people/InspectorJ/sounds/401543/">InspectorJ on freesound.org</a> <br/>
                        Tyre audio - <a class="splash-body-link svelte-1gadttx" href="https://freesound.org/people/fractanimal/sounds/614627/">fractanimal on freesound.org</a> <br/>
                        Gravel audio - <a class="splash-body-link svelte-1gadttx" href="https://freesound.org/people/seth-m/sounds/341069/">seth-m on freesound.org</a> <br/>
                        Boost audio - <a class="splash-body-link svelte-1gadttx" href="https://freesound.org/people/YleArkisto/sounds/342892/">YleArkisto on freesound.org</a> <br/>
                        Suspension audio - <a class="splash-body-link svelte-1gadttx" href="https://freesound.org/people/ingudios/sounds/119468/">ingudios on freesound.org</a> <br/>
                        Collision sounds - <a class="splash-body-link svelte-1gadttx" href="https://freesound.org/people/jakobthiesen/sounds/174836/">jakobthiesen on freesound.org</a> <br/>
                        Collision sounds - <a class="splash-body-link svelte-1gadttx" href="https://freesound.org/people/jakobthiesen/sounds/174837/">jakobthiesen on freesound.org</a> <br/>
                        Collision sounds - <a class="splash-body-link svelte-1gadttx" href="https://freesound.org/people/SubwaySandwitch420/sounds/538947/">SubwaySandwitch420 on freesound.org</a> <br/>
                        Barrier scrape sound - <a class="splash-body-link svelte-1gadttx" href="https://freesound.org/people/eyenorth/sounds/464846/">eyenorth on freesound.org</a> <br/>
                        Misc sound effects - <a class="splash-body-link svelte-1gadttx" href="https://freesound.org/people/HECKFRICKER/sounds/625312/">HECKFRICKER on freesound.org</a> <br/></div></div>`,Vt,we,st='<div class="splash-body-wrapper svelte-1gadttx"><div class="splash-body-header svelte-1gadttx" style="font-size: 1rem">Thank you for playing</div></div>',Tt,St,Qt,jt,hi,ht=s[1]&&dr(),yt=!$t&&Ri&&Bh(s),ft=!$t&&qh(s),Bt=xo&&Wh(s),Dt=!$t&&jh(),fi=Oe(Fh),pt=[];for(let je=0;je<fi.length;je+=1)pt[je]=Yh(Gh(s,fi,je));let gt=!s[5]&&hr();return{c(){e=_("div"),t=_("div"),i=_("div"),a=_("div"),r=_("img"),l=I(),n=_("div"),n.textContent=d,h=I(),u=_("div"),p=ee(m),v=I(),ht&&ht.c(),y=I(),w=_("div"),D=_("span"),L=ee(Xt),A=I(),E=_("br"),T=ee(`\r
                This work is licensed under a `),x=_("a"),x.textContent=j,X=I(),yt&&yt.c(),O=I(),ft&&ft.c(),$=I(),Bt&&Bt.c(),Z=I(),U=_("div"),U.innerHTML=q,V=I(),Dt&&Dt.c(),z=I(),k=_("div"),N=_("div"),N.innerHTML=B,se=I(),oe=_("div"),oe.innerHTML=le,pe=I(),ye=_("div"),ye.innerHTML=ge,Q=I(),ae=_("div"),ae.innerHTML=ce,Y=I(),de=_("div"),J=_("div"),me=_("div"),me.textContent=Ee,ze=I();for(let je=0;je<pt.length;je+=1)pt[je].c();He=I(),Qe=_("div"),Qe.innerHTML=$e,dt=I(),et=_("div"),et.innerHTML=ci,Vt=I(),we=_("div"),we.innerHTML=st,Tt=I(),gt&&gt.c(),this.h()},l(je){e=b(je,"DIV",{id:!0,class:!0});var Ze=C(e);t=b(Ze,"DIV",{id:!0,class:!0});var Ut=C(t);i=b(Ut,"DIV",{id:!0,class:!0});var ct=C(i);a=b(ct,"DIV",{id:!0,class:!0});var Ht=C(a);r=b(Ht,"IMG",{class:!0,src:!0,alt:!0}),l=M(Ht),n=b(Ht,"DIV",{class:!0,"data-svelte-h":!0}),K(n)!=="svelte-1fl8x43"&&(n.textContent=d),h=M(Ht),u=b(Ht,"DIV",{id:!0,class:!0});var ki=C(u);p=te(ki,m),ki.forEach(g),v=M(Ht),ht&&ht.l(Ht),Ht.forEach(g),y=M(ct),w=b(ct,"DIV",{class:!0});var Ot=C(w);D=b(Ot,"SPAN",{class:!0});var Zt=C(D);L=te(Zt,Xt),Zt.forEach(g),A=M(Ot),E=b(Ot,"BR",{}),T=te(Ot,`\r
                This work is licensed under a `),x=b(Ot,"A",{rel:!0,class:!0,href:!0,target:!0,"data-svelte-h":!0}),K(x)!=="svelte-u8p6bq"&&(x.textContent=j),Ot.forEach(g),X=M(ct),yt&&yt.l(ct),O=M(ct),ft&&ft.l(ct),$=M(ct),Bt&&Bt.l(ct),Z=M(ct),U=b(ct,"DIV",{class:!0,"data-svelte-h":!0}),K(U)!=="svelte-1hyzgr8"&&(U.innerHTML=q),V=M(ct),Dt&&Dt.l(ct),ct.forEach(g),z=M(Ut),k=b(Ut,"DIV",{id:!0,class:!0});var mt=C(k);N=b(mt,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),K(N)!=="svelte-d3ky94"&&(N.innerHTML=B),se=M(mt),oe=b(mt,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),K(oe)!=="svelte-h5ieqt"&&(oe.innerHTML=le),pe=M(mt),ye=b(mt,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),K(ye)!=="svelte-wymdbf"&&(ye.innerHTML=ge),Q=M(mt),ae=b(mt,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),K(ae)!=="svelte-1ghmk4k"&&(ae.innerHTML=ce),Y=M(mt),de=b(mt,"DIV",{class:!0,style:!0});var ii=C(de);J=b(ii,"DIV",{class:!0});var si=C(J);me=b(si,"DIV",{class:!0,"data-svelte-h":!0}),K(me)!=="svelte-1oguvct"&&(me.textContent=Ee),ze=M(si);for(let bi=0;bi<pt.length;bi+=1)pt[bi].l(si);si.forEach(g),ii.forEach(g),He=M(mt),Qe=b(mt,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),K(Qe)!=="svelte-15699nf"&&(Qe.innerHTML=$e),dt=M(mt),et=b(mt,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),K(et)!=="svelte-1krubna"&&(et.innerHTML=ci),Vt=M(mt),we=b(mt,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),K(we)!=="svelte-18ds10l"&&(we.innerHTML=st),mt.forEach(g),Tt=M(Ut),gt&&gt.l(Ut),Ut.forEach(g),Ze.forEach(g),this.h()},h(){f(r,"class","splash-logo svelte-1gadttx"),Rt(r.src,o="/img/logo-stacked.svg")||f(r,"src",o),f(r,"alt",""),f(n,"class","splash-subtitle svelte-1gadttx"),f(u,"id","splash-begin"),f(u,"class","svelte-1gadttx"),f(a,"id","splash-title"),f(a,"class","svelte-1gadttx"),f(D,"class","splash-smallprint-link svelte-1gadttx"),f(x,"rel","license noopener noreferrer"),f(x,"class","splash-smallprint-link svelte-1gadttx"),f(x,"href","http://creativecommons.org/licenses/by-nc-nd/4.0/"),f(x,"target","_blank"),f(w,"class","splash-smallprint splash-lr svelte-1gadttx"),f(U,"class","splash-smallprint splash-ll svelte-1gadttx"),f(i,"id","splash-main"),f(i,"class","svelte-1gadttx"),f(N,"class","splash-body-section svelte-1gadttx"),re(N,"background","none"),f(oe,"class","splash-body-section svelte-1gadttx"),re(oe,"background","linear-gradient(135deg, #233848, #23262c, #23262c)"),f(ye,"class","splash-body-section svelte-1gadttx"),re(ye,"background","none"),f(ae,"class","splash-body-section svelte-1gadttx"),re(ae,"background","var(--sr-primary-50)"),f(me,"class","splash-body-header svelte-1gadttx"),f(J,"class","splash-body-wrapper svelte-1gadttx"),f(de,"class","splash-body-section svelte-1gadttx"),re(de,"background","none"),f(Qe,"class","splash-body-section svelte-1gadttx"),re(Qe,"background","var(--sr-primary-50)"),f(et,"class","splash-body-section svelte-1gadttx"),re(et,"background","none"),f(we,"class","splash-body-section svelte-1gadttx"),re(we,"background","var(--sr-primary)"),f(k,"id","about"),f(k,"class","svelte-1gadttx"),f(t,"id",St=s[4]?"splash-dynamic":"splash-fixed"),f(t,"class","svelte-1gadttx"),f(e,"id","splash"),f(e,"class","svelte-1gadttx")},m(je,Ze){P(je,e,Ze),c(e,t),c(t,i),c(i,a),c(a,r),c(a,l),c(a,n),c(a,h),c(a,u),c(u,p),c(a,v),ht&&ht.m(a,null),c(i,y),c(i,w),c(w,D),c(D,L),c(w,A),c(w,E),c(w,T),c(w,x),c(i,X),yt&&yt.m(i,null),c(i,O),ft&&ft.m(i,null),c(i,$),Bt&&Bt.m(i,null),c(i,Z),c(i,U),c(i,V),Dt&&Dt.m(i,null),c(t,z),c(t,k),c(k,N),c(k,se),c(k,oe),c(k,pe),c(k,ye),c(k,Q),c(k,ae),c(k,Y),c(k,de),c(de,J),c(J,me),c(J,ze);for(let Ut=0;Ut<pt.length;Ut+=1)pt[Ut]&&pt[Ut].m(J,null);c(k,He),c(k,Qe),c(k,dt),c(k,et),c(k,Vt),c(k,we),c(t,Tt),gt&&gt.m(t,null),Qt=!0,jt||(hi=[G(u,"touchstart",s[6],{passive:!0}),G(u,"click",function(){za(s[0])&&s[0].apply(this,arguments)}),G(D,"click",s[7])],jt=!0)},p(je,[Ze]){s=je,(!Qt||Ze&32)&&m!==(m=s[5]?"continue":"begin")&&be(p,m),s[1]?ht||(ht=dr(),ht.c(),ht.m(a,null)):ht&&(ht.d(1),ht=null),!$t&&Ri&&yt.p(s,Ze),$t||ft.p(s,Ze),xo&&Bt.p(s,Ze),s[5]?gt&&(gt.d(1),gt=null):gt||(gt=hr(),gt.c(),gt.m(t,null)),(!Qt||Ze&16&&St!==(St=s[4]?"splash-dynamic":"splash-fixed"))&&f(t,"id",St)},i(je){if(!Qt){W(ft);for(let Ze=0;Ze<fi.length;Ze+=1)W(pt[Ze]);Qt=!0}},o(je){ie(ft),pt=pt.filter(Boolean);for(let Ze=0;Ze<pt.length;Ze+=1)ie(pt[Ze]);Qt=!1},d(je){je&&g(e),ht&&ht.d(),yt&&yt.d(),ft&&ft.d(),Bt&&Bt.d(),Dt&&Dt.d(),bt(pt,je),gt&&gt.d(),jt=!1,ot(hi)}}}function Xh(s,e,t){let i,a;Ce(s,ti,y=>t(4,i=y)),Ce(s,Ts,y=>t(5,a=y));let{toggleSplash:r=()=>{}}=e,{webglError:o=!1}=e,l=!1,n=[],d=Ri&&Xs[2]==Xt[2];for(let y of $a)if(gn(y.version,Xs)>0)y.quickChanges&&(y.version[4]==0||d)&&n.push(...y.quickChanges);else break;n.length>12&&(n=n.slice(0,12));const h=()=>{ne.set("touchscreen",!0)},u=()=>t(2,l=!l),m=()=>t(2,l=!l),p=y=>t(2,l=y),v=()=>{localStorage.setItem("hasSeenOld",!0)};return s.$$set=y=>{"toggleSplash"in y&&t(0,r=y.toggleSplash),"webglError"in y&&t(1,o=y.webglError)},[r,o,l,n,i,a,h,u,m,p,v]}class Qh extends Ke{constructor(e){super(),Xe(this,e,Xh,Kh,Ye,{toggleSplash:0,webglError:1})}}function Zh(s){let e,t,i,a,r,o,l,n,d,h,u,m,p,v,y,w="RESET",D,L;return{c(){e=_("div"),t=_("div"),i=I(),a=_("div"),r=I(),o=_("div"),l=I(),n=_("div"),d=_("div"),h=I(),u=_("div"),m=I(),p=_("div"),v=I(),y=_("div"),y.textContent=w,this.h()},l(A){e=b(A,"DIV",{class:!0});var E=C(e);t=b(E,"DIV",{class:!0,style:!0});var T=C(t);T.forEach(g),i=M(E),a=b(E,"DIV",{class:!0}),C(a).forEach(g),r=M(E),o=b(E,"DIV",{class:!0,style:!0}),C(o).forEach(g),E.forEach(g),l=M(A),n=b(A,"DIV",{class:!0});var x=C(n);d=b(x,"DIV",{class:!0,style:!0});var j=C(d);j.forEach(g),h=M(x),u=b(x,"DIV",{class:!0}),C(u).forEach(g),m=M(x),p=b(x,"DIV",{class:!0,style:!0}),C(p).forEach(g),x.forEach(g),v=M(A),y=b(A,"DIV",{class:!0,"data-svelte-h":!0}),K(y)!=="svelte-jv83gf"&&(y.textContent=w),this.h()},h(){f(t,"class","steer-slider-thumb svelte-1fln1t4"),re(t,"top",s[0]*100+"%"),R(t,"steer-dragging",s[4]),f(a,"class","steer-slider-track svelte-1fln1t4"),f(o,"class","steer-slider-zero svelte-1fln1t4"),re(o,"top",Mt*100+"%"),f(e,"class","steer-slider left-steer svelte-1fln1t4"),f(d,"class","steer-slider-thumb svelte-1fln1t4"),re(d,"top",s[1]*100+"%"),R(d,"steer-dragging",s[5]),f(u,"class","steer-slider-track svelte-1fln1t4"),f(p,"class","steer-slider-zero svelte-1fln1t4"),re(p,"top",Mt*100+"%"),f(n,"class","steer-slider right-steer svelte-1fln1t4"),f(y,"class","touch-reset svelte-1fln1t4")},m(A,E){P(A,e,E),c(e,t),c(e,i),c(e,a),c(e,r),c(e,o),s[12](e),P(A,l,E),P(A,n,E),c(n,d),c(n,h),c(n,u),c(n,m),c(n,p),s[15](n),P(A,v,E),P(A,y,E),D||(L=[G(e,"mousedown",s[13]),G(e,"touchstart",s[14]),G(n,"mousedown",s[16]),G(n,"touchstart",s[17]),G(y,"click",s[18])],D=!0)},p(A,E){E[0]&1&&re(t,"top",A[0]*100+"%"),E[0]&16&&R(t,"steer-dragging",A[4]),E[0]&2&&re(d,"top",A[1]*100+"%"),E[0]&32&&R(d,"steer-dragging",A[5])},i:ve,o:ve,d(A){A&&(g(e),g(l),g(n),g(v),g(y)),s[12](null),s[15](null),D=!1,ot(L)}}}const Mt=.9;function fr(s=[],e){for(let t of s)if(t.target==e)return t;return null}function Jh(s,e,t){let{enabled:i=!0}=e,a=null,r=null,o=0,l=0,n=!1,d=!1,h=Mt,u=Mt,m,p,v=window.innerWidth<window.innerHeight;function y(){v=window.innerWidth<window.innerHeight}function w(V){fr(V.changedTouches,a)&&(t(4,n=!0),m=a.getBoundingClientRect(),E(V))}function D(V){fr(V.changedTouches,r)&&(t(5,d=!0),p=r.getBoundingClientRect(),E(V))}function L(V,z){}function A(V){t(4,n=!1),h>Mt&&t(0,h=Mt),t(5,d=!1),u>Mt&&t(1,u=Mt)}function E(V){if(i){for(let z of V.changedTouches)n&&z.target==a&&(v?t(0,h=Math.max(Math.min(1,(m.right-z.clientX)/m.width),0)):t(0,h=Math.max(Math.min(1,(z.clientY-m.top)/m.height),0))),d&&z.target==r&&(v?t(1,u=Math.max(Math.min(1,(p.right-z.clientX)/p.width),0)):t(1,u=Math.max(Math.min(1,(z.clientY-p.top)/p.height),0)));V.preventDefault(),V.stopImmediatePropagation()}}function T(V){for(let z of V.changedTouches)n&&z.target==a&&(t(4,n=!1),h>Mt&&t(0,h=Mt)),d&&z.target==r&&(t(5,d=!1),u>Mt&&t(1,u=Mt))}function x(V){n?t(0,h=Math.max(Math.min(1,(V.clientY-m.top)/m.height),0)):d&&t(1,u=Math.max(Math.min(1,(V.clientY-p.top)/p.height),0))}nt(()=>(window.addEventListener("mousemove",x),window.addEventListener("mouseup",A),window.addEventListener("touchmove",E,{passive:!1}),window.addEventListener("touchend",T),window.addEventListener("resize",y),Qs.set(!0),()=>{window.removeEventListener("mousemove",x),window.removeEventListener("mouseup",A),window.removeEventListener("touchmove",E),window.removeEventListener("touchend",T),window.removeEventListener("resize",y),Qs.set(!1)}));function j(V){wt[V?"unshift":"push"](()=>{a=V,t(2,a)})}const X=V=>{},O=V=>{w(V)};function $(V){wt[V?"unshift":"push"](()=>{r=V,t(3,r)})}const Z=V=>{},U=V=>{D(V)},q=()=>{t(0,h=Mt),t(1,u=Mt),pn.update(V=>V+1)};return s.$$set=V=>{"enabled"in V&&t(9,i=V.enabled)},s.$$.update=()=>{s.$$.dirty[0]&3075&&(t(10,o=(Mt-h)/Mt),t(11,l=(Mt-u)/Mt),mn.set((o+l)/2),Ua.set(o-l))},[h,u,a,r,n,d,w,D,L,i,o,l,j,X,O,$,Z,U,q]}class $h extends Ke{constructor(e){super(),Xe(this,e,Jh,Zh,Ye,{enabled:9},null,[-1,-1])}}function ef(s){let e,t,i,a,r,o,l,n,d,h,u,m='<div class="steer-thumb svelte-if0uoq"></div>',p,v,y="",w,D,L="RESET",A,E,T="BRAKE",x,j,X="BOOST",O,$,Z="CAM",U,q;return{c(){e=_("div"),t=_("div"),i=_("div"),a=I(),r=_("div"),o=I(),l=_("div"),n=I(),d=_("div"),h=_("div"),u=_("div"),u.innerHTML=m,p=I(),v=_("div"),v.innerHTML=y,w=I(),D=_("div"),D.textContent=L,A=I(),E=_("div"),E.textContent=T,x=I(),j=_("div"),j.textContent=X,O=I(),$=_("div"),$.textContent=Z,this.h()},l(V){e=b(V,"DIV",{class:!0});var z=C(e);t=b(z,"DIV",{class:!0});var k=C(t);i=b(k,"DIV",{class:!0,style:!0});var N=C(i);N.forEach(g),a=M(k),r=b(k,"DIV",{class:!0}),C(r).forEach(g),o=M(k),l=b(k,"DIV",{class:!0,style:!0}),C(l).forEach(g),k.forEach(g),n=M(z),d=b(z,"DIV",{class:!0});var B=C(d);h=b(B,"DIV",{class:!0});var se=C(h);u=b(se,"DIV",{class:!0,"data-svelte-h":!0}),K(u)!=="svelte-htckc0"&&(u.innerHTML=m),p=M(se),v=b(se,"DIV",{class:!0,"data-svelte-h":!0}),K(v)!=="svelte-1npfju5"&&(v.innerHTML=y),se.forEach(g),B.forEach(g),w=M(z),D=b(z,"DIV",{class:!0,"data-svelte-h":!0}),K(D)!=="svelte-leux23"&&(D.textContent=L),A=M(z),E=b(z,"DIV",{class:!0,"data-svelte-h":!0}),K(E)!=="svelte-10pe3fz"&&(E.textContent=T),x=M(z),j=b(z,"DIV",{class:!0,"data-svelte-h":!0}),K(j)!=="svelte-6q7fx7"&&(j.textContent=X),O=M(z),$=b(z,"DIV",{class:!0,"data-svelte-h":!0}),K($)!=="svelte-cjqwr0"&&($.textContent=Z),z.forEach(g),this.h()},h(){f(i,"class","slider-thumb svelte-if0uoq"),re(i,"top",s[0]*100+"%"),R(i,"slider-dragging",s[4]),f(r,"class","accel-slider-track svelte-if0uoq"),f(l,"class","accel-slider-zero svelte-if0uoq"),re(l,"top",ri*100+"%"),f(t,"class","accel-slider svelte-if0uoq"),f(u,"class","steer-thumb-container svelte-if0uoq"),f(v,"class","steer-bar-zero svelte-if0uoq"),f(h,"class","steer-bar svelte-if0uoq"),f(d,"class","steer svelte-if0uoq"),f(D,"class","touch-btn touch-reset svelte-if0uoq"),f(E,"class","touch-btn touch-brake svelte-if0uoq"),f(j,"class","touch-btn touch-boost svelte-if0uoq"),f($,"class","touch-btn touch-cam svelte-if0uoq"),f(e,"class","touch-visible svelte-if0uoq"),R(e,"touch-hidden",s[5])},m(V,z){P(V,e,z),c(e,t),c(t,i),c(t,a),c(t,r),c(t,o),c(t,l),s[13](t),c(e,n),c(e,d),c(d,h),c(h,u),s[16](u),c(h,p),c(h,v),s[17](d),c(e,w),c(e,D),c(e,A),c(e,E),c(e,x),c(e,j),c(e,O),c(e,$),U||(q=[G(t,"mousedown",s[14]),G(t,"touchstart",s[15]),G(d,"mousedown",s[18]),G(d,"touchstart",s[19]),G(D,"click",s[20]),G(E,"touchstart",s[21],{passive:!0}),G(E,"touchend",s[22],{passive:!0}),G(j,"touchstart",s[23],{passive:!0}),G(j,"touchend",s[24],{passive:!0}),G($,"click",s[25])],U=!0)},p(V,z){z[0]&1&&re(i,"top",V[0]*100+"%"),z[0]&16&&R(i,"slider-dragging",V[4]),z[0]&32&&R(e,"touch-hidden",V[5])},i:ve,o:ve,d(V){V&&g(e),s[13](null),s[16](null),s[17](null),U=!1,ot(q)}}}const ri=.9;function ur(s=[],e){for(let t of s)if(t.target==e)return t;return null}function tf(s,e,t){let{enabled:i=!0}=e;const a=Math.PI/4,r=Math.PI/2;let o=null,l=null,n=null,d=0,h=0,u=!1,m=!1,p=ri,v,y,w=window.innerWidth<window.innerHeight;function D(){w=window.innerWidth<window.innerHeight}function L(Q){O(),ur(Q.changedTouches,o)&&(t(4,u=!0),v=o.getBoundingClientRect(),x(Q))}function A(Q){O(),ur(Q.changedTouches,l)&&(m=!0,y=l.getBoundingClientRect(),x(Q))}function E(Q,ae){}function T(Q){t(4,u=!1),p>ri&&t(0,p=ri),m=!1,Ai.sticky||(t(12,h=0),t(3,n.style.transform="rotate(-"+a+"rad)",n))}function x(Q){if(i){for(let ae of Q.changedTouches)if(u&&ae.target==o&&(w?t(0,p=Math.max(Math.min(1,(v.right-ae.clientX)/v.width),0)):t(0,p=Math.max(Math.min(1,(ae.clientY-v.top)/v.height),0))),m&&ae.target==l){let ce,Y;w?(ce=(y.bottom-ae.clientY)/y.width,Y=(ae.clientX-y.left)/y.width):(ce=(y.right-ae.clientX)/y.height,Y=1-(ae.clientY-y.top)/y.height);let de=Math.atan2(Y,ce);de=Math.min(Math.max(0,de),r),t(12,h=(de-a)/a),t(3,n.style.transform="rotate(-"+(r-de)+"rad)",n)}Q.preventDefault(),Q.stopImmediatePropagation()}}function j(Q){for(let ae of Q.changedTouches)u&&ae.target==o&&(t(4,u=!1),p>ri&&t(0,p=ri)),m&&ae.target==l&&(m=!1,Ai.sticky||(t(12,h=0),t(3,n.style.transform="rotate(-"+a+"rad)",n)))}function X(Q){u&&t(0,p=Math.max(Math.min(1,(Q.clientY-v.top)/v.height),0))}function O(){hs.hasInit||hs.init()}let $=!1;function Z(Q){t(5,$=Ft.value&&ne.autodriveMode==$i.FULL),Ft.value&&ne.autodriveMode!=$i.STEER&&t(0,p=ri)}nt(()=>(window.addEventListener("mousemove",X),window.addEventListener("mouseup",T),window.addEventListener("touchmove",x,{passive:!1}),window.addEventListener("touchend",j),window.addEventListener("resize",D),Ft.addListener(Z),ne.addListener("autodriveMode",Z),Qs.set(!0),()=>{window.removeEventListener("mousemove",X),window.removeEventListener("mouseup",T),window.removeEventListener("touchmove",x),window.removeEventListener("touchend",j),window.removeEventListener("resize",D),Ft.removeListener(Z),ne.removeListener("autodriveMode",Z),Qs.set(!1)}));function U(Q){wt[Q?"unshift":"push"](()=>{o=Q,t(1,o)})}const q=Q=>{},V=Q=>{L(Q)};function z(Q){wt[Q?"unshift":"push"](()=>{n=Q,t(3,n)})}function k(Q){wt[Q?"unshift":"push"](()=>{l=Q,t(2,l)})}const N=Q=>{},B=Q=>{A(Q)},se=()=>{O(),Ai.resetMaintainsAccel||t(0,p=ri),pn.update(Q=>Q+1)},oe=()=>{O(),Ro.set(1)},le=()=>Ro.set(0),pe=()=>{O(),Uo.set(1)},ye=()=>Uo.set(0),ge=()=>{O(),cn.update(Q=>Q+1)};return s.$$set=Q=>{"enabled"in Q&&t(10,i=Q.enabled)},s.$$.update=()=>{s.$$.dirty[0]&2049&&(t(11,d=(ri-p)/ri),d<0?t(11,d*=ri*10):t(11,d=d*d),mn.set(d)),s.$$.dirty[0]&4096&&(h<0?Ua.set(h*h*-(1-Ai.linearity)+h*Ai.linearity):Ua.set(h*h*(1-Ai.linearity)+h*Ai.linearity))},[p,o,l,n,u,$,L,A,E,O,i,d,h,U,q,V,z,k,N,B,se,oe,le,pe,ye,ge]}class sf extends Ke{constructor(e){super(),Xe(this,e,tf,ef,Ye,{enabled:10},null,[-1,-1])}}function vr(s,e,t){const i=s.slice();return i[5]=e[t],i}function gr(s){let e,t,i,a,r,o;function l(){return s[3](s[5])}return{c(){e=_("div"),t=_("img"),a=I(),this.h()},l(n){e=b(n,"DIV",{class:!0});var d=C(e);t=b(d,"IMG",{class:!0,src:!0}),a=M(d),d.forEach(g),this.h()},h(){f(t,"class","option-icon svelte-lk6ame"),Rt(t.src,i=s[5].icon)||f(t,"src",i),R(t,"option-icon-selected",s[2]==s[5].key),f(e,"class","style-selection-option svelte-lk6ame"),R(e,"style-selection-option-selected",s[2]==s[5].key)},m(n,d){P(n,e,d),c(e,t),c(e,a),r||(o=G(e,"mousedown",l),r=!0)},p(n,d){s=n,d&1&&!Rt(t.src,i=s[5].icon)&&f(t,"src",i),d&5&&R(t,"option-icon-selected",s[2]==s[5].key),d&5&&R(e,"style-selection-option-selected",s[2]==s[5].key)},d(n){n&&g(e),r=!1,o()}}}function af(s){let e,t=Oe(s[0].options),i=[];for(let a=0;a<t.length;a+=1)i[a]=gr(vr(s,t,a));return{c(){e=_("div");for(let a=0;a<i.length;a+=1)i[a].c();this.h()},l(a){e=b(a,"DIV",{class:!0});var r=C(e);for(let o=0;o<i.length;o+=1)i[o].l(r);r.forEach(g),this.h()},h(){f(e,"class","style-selection svelte-lk6ame")},m(a,r){P(a,e,r);for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(e,null)},p(a,[r]){if(r&7){t=Oe(a[0].options);let o;for(o=0;o<t.length;o+=1){const l=vr(a,t,o);i[o]?i[o].p(l,r):(i[o]=gr(l),i[o].c(),i[o].m(e,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=t.length}},i:ve,o:ve,d(a){a&&g(e),bt(i,a)}}}function of(s,e,t){let{meta:i}=e,{live:a}=e,r="";function o(n){t(2,r=n)}nt(()=>(t(2,r=a[i.key]),a.addListener(i.key,o),()=>{a.removeListener(i.key,o)}));const l=n=>a.set(i.key,n.key);return s.$$set=n=>{"meta"in n&&t(0,i=n.meta),"live"in n&&t(1,a=n.live)},[i,a,r,l]}class rf extends Ke{constructor(e){super(),Xe(this,e,of,af,Ye,{meta:0,live:1})}}function mr(s,e,t){const i=s.slice();return i[5]=e[t],i}function lf(s){let e,t,i=s[5].type+"",a;return{c(){e=_("div"),t=ee("Unrecognised type "),a=ee(i)},l(r){e=b(r,"DIV",{});var o=C(e);t=te(o,"Unrecognised type "),a=te(o,i),o.forEach(g)},m(r,o){P(r,e,o),c(e,t),c(e,a)},p(r,o){o&1&&i!==(i=r[5].type+"")&&be(a,i)},i:ve,o:ve,d(r){r&&g(e)}}}function nf(s){let e,t;return e=new rf({props:{meta:s[5],live:s[1]}}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,a){Re(e,i,a),t=!0},p(i,a){const r={};a&1&&(r.meta=i[5]),a&2&&(r.live=i[1]),e.$set(r)},i(i){t||(W(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function pr(s){let e,t,i=s[5].readable+"",a,r,o,l,n,d;const h=[nf,lf],u=[];function m(p,v){return p[5].type==Li.Selection?0:1}return o=m(s),l=u[o]=h[o](s),{c(){e=_("div"),t=_("div"),a=ee(i),r=I(),l.c(),n=I(),this.h()},l(p){e=b(p,"DIV",{class:!0});var v=C(e);t=b(v,"DIV",{class:!0});var y=C(t);a=te(y,i),y.forEach(g),r=M(v),l.l(v),n=M(v),v.forEach(g),this.h()},h(){f(t,"class","style-subtitle svelte-p9ui73"),f(e,"class","style-group svelte-p9ui73")},m(p,v){P(p,e,v),c(e,t),c(t,a),c(e,r),u[o].m(e,null),c(e,n),d=!0},p(p,v){(!d||v&1)&&i!==(i=p[5].readable+"")&&be(a,i);let y=o;o=m(p),o===y?u[o].p(p,v):(Fe(),ie(u[y],1,1,()=>{u[y]=null}),Ge(),l=u[o],l?l.p(p,v):(l=u[o]=h[o](p),l.c()),W(l,1),l.m(e,n))},i(p){d||(W(l),d=!0)},o(p){ie(l),d=!1},d(p){p&&g(e),u[o].d()}}}function df(s){let e,t,i=Oe(s[0]),a=[];for(let o=0;o<i.length;o+=1)a[o]=pr(mr(s,i,o));const r=o=>ie(a[o],1,1,()=>{a[o]=null});return{c(){e=_("div");for(let o=0;o<a.length;o+=1)a[o].c();this.h()},l(o){e=b(o,"DIV",{class:!0});var l=C(e);for(let n=0;n<a.length;n+=1)a[n].l(l);l.forEach(g),this.h()},h(){f(e,"class","style-main svelte-p9ui73")},m(o,l){P(o,e,l);for(let n=0;n<a.length;n+=1)a[n]&&a[n].m(e,null);t=!0},p(o,[l]){if(l&3){i=Oe(o[0]);let n;for(n=0;n<i.length;n+=1){const d=mr(o,i,n);a[n]?(a[n].p(d,l),W(a[n],1)):(a[n]=pr(d),a[n].c(),W(a[n],1),a[n].m(e,null))}for(Fe(),n=i.length;n<a.length;n+=1)r(n);Ge()}},i(o){if(!t){for(let l=0;l<i.length;l+=1)W(a[l]);t=!0}},o(o){a=a.filter(Boolean);for(let l=0;l<a.length;l+=1)ie(a[l]);t=!1},d(o){o&&g(e),bt(a,o)}}}function cf(s,e,t){let i=[],a;function r(l){let n=[];for(let d in l)d!="presets"&&n.push(l[d]);t(0,i=n)}function o(l){t(1,a=l)}return nt(()=>(zs.addListener("metaConfig",r),zs.addListener("liveConfig",o),()=>{zs.removeListener("metaConfig",r),zs.removeListener("liveConfig",o)})),[i,a]}class hf extends Ke{constructor(e){super(),Xe(this,e,cf,df,Ye,{})}}function _r(s,e,t){const i=s.slice();return i[9]=e[t],i[11]=t,i}function ff(s){let e=s[9].label+"",t;return{c(){t=ee(e)},l(i){t=te(i,e)},m(i,a){P(i,t,a)},p(i,a){a&1&&e!==(e=i[9].label+"")&&be(t,e)},d(i){i&&g(t)}}}function uf(s){let e,t;return{c(){e=_("img"),this.h()},l(i){e=b(i,"IMG",{class:!0,src:!0}),this.h()},h(){f(e,"class","enum-option-icon svelte-1ey7984"),Rt(e.src,t=s[9].icon)||f(e,"src",t),R(e,"icon-selected",s[2]==s[11]&&!s[1])},m(i,a){P(i,e,a)},p(i,a){a&1&&!Rt(e.src,t=i[9].icon)&&f(e,"src",t),a&6&&R(e,"icon-selected",i[2]==i[11]&&!i[1])},d(i){i&&g(e)}}}function br(s){let e,t,i,a;function r(d,h){return d[9].icon?uf:ff}let o=r(s),l=o(s);function n(){return s[7](s[11])}return{c(){e=_("div"),l.c(),t=I(),this.h()},l(d){e=b(d,"DIV",{class:!0});var h=C(e);l.l(h),t=M(h),h.forEach(g),this.h()},h(){f(e,"class","enum-option svelte-1ey7984"),R(e,"selected",s[2]==s[11]&&!s[1])},m(d,h){P(d,e,h),l.m(e,null),c(e,t),i||(a=G(e,"click",n),i=!0)},p(d,h){s=d,o===(o=r(s))&&l?l.p(s,h):(l.d(1),l=o(s),l&&(l.c(),l.m(e,t))),h&6&&R(e,"selected",s[2]==s[11]&&!s[1])},d(d){d&&g(e),l.d(),i=!1,a()}}}function vf(s){let e,t=Oe(s[0]),i=[];for(let a=0;a<t.length;a+=1)i[a]=br(_r(s,t,a));return{c(){e=_("div");for(let a=0;a<i.length;a+=1)i[a].c();this.h()},l(a){e=b(a,"DIV",{class:!0});var r=C(e);for(let o=0;o<i.length;o+=1)i[o].l(r);r.forEach(g),this.h()},h(){f(e,"class","enum-container svelte-1ey7984")},m(a,r){P(a,e,r);for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(e,null)},p(a,[r]){if(r&15){t=Oe(a[0]);let o;for(o=0;o<t.length;o+=1){const l=_r(a,t,o);i[o]?i[o].p(l,r):(i[o]=br(l),i[o].c(),i[o].m(e,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=t.length}},i:ve,o:ve,d(a){a&&g(e),bt(i,a)}}}function gf(s,e,t){let{liveSetting:i}=e,{settingKey:a}=e,{settingLabel:r}=e,{options:o}=e,{disabled:l=!1}=e,n=i[a];const d=m=>{t(2,n=m)},h=m=>{i.set(a,m)};nt(()=>(i.addListener(a,d),()=>{i.removeListener(a,d)}));const u=m=>{h(m)};return s.$$set=m=>{"liveSetting"in m&&t(4,i=m.liveSetting),"settingKey"in m&&t(5,a=m.settingKey),"settingLabel"in m&&t(6,r=m.settingLabel),"options"in m&&t(0,o=m.options),"disabled"in m&&t(1,l=m.disabled)},[o,l,n,h,i,a,r,u]}class mf extends Ke{constructor(e){super(),Xe(this,e,gf,vf,Ye,{liveSetting:4,settingKey:5,settingLabel:6,options:0,disabled:1})}}function pf(s){let e,t,i="▲",a,r,o=(s[3]?"1.0":s[4].toFixed(s[2]))+"",l,n,d,h,u="▼",m,p;return{c(){e=_("div"),t=_("div"),t.textContent=i,a=I(),r=_("div"),l=ee(o),n=ee("x"),d=I(),h=_("div"),h.textContent=u,this.h()},l(v){e=b(v,"DIV",{class:!0});var y=C(e);t=b(y,"DIV",{class:!0,"data-svelte-h":!0}),K(t)!=="svelte-iy1368"&&(t.textContent=i),a=M(y),r=b(y,"DIV",{class:!0});var w=C(r);l=te(w,o),n=te(w,"x"),w.forEach(g),d=M(y),h=b(y,"DIV",{class:!0,"data-svelte-h":!0}),K(h)!=="svelte-cd1zbb"&&(h.textContent=u),y.forEach(g),this.h()},h(){f(t,"class","range-arrow svelte-zwoxeg"),f(r,"class","range-value svelte-zwoxeg"),f(h,"class","range-arrow svelte-zwoxeg"),f(e,"class","range-container svelte-zwoxeg")},m(v,y){P(v,e,y),c(e,t),c(e,a),c(e,r),c(r,l),c(r,n),c(e,d),c(e,h),m||(p=[G(t,"mousedown",s[8]),G(h,"mousedown",s[9])],m=!0)},p(v,[y]){y&28&&o!==(o=(v[3]?"1.0":v[4].toFixed(v[2]))+"")&&be(l,o)},i:ve,o:ve,d(v){v&&g(e),m=!1,ot(p)}}}function _f(s,e,t){let{liveSetting:i}=e,{settingKey:a}=e,{settingLabel:r}=e,{min:o=0}=e,{max:l=1}=e,{precision:n=1}=e,{disabled:d=!1}=e,h=i[a];const u=v=>{t(4,h=v)};nt(()=>(i.addListener(a,u),()=>{i.removeListener(a,u)}));const m=()=>i.set(a,h+1/Math.pow(10,n)),p=()=>i.set(a,h-1/Math.pow(10,n));return s.$$set=v=>{"liveSetting"in v&&t(0,i=v.liveSetting),"settingKey"in v&&t(1,a=v.settingKey),"settingLabel"in v&&t(5,r=v.settingLabel),"min"in v&&t(6,o=v.min),"max"in v&&t(7,l=v.max),"precision"in v&&t(2,n=v.precision),"disabled"in v&&t(3,d=v.disabled)},[i,a,n,d,h,r,o,l,m,p]}class bf extends Ke{constructor(e){super(),Xe(this,e,_f,pf,Ye,{liveSetting:0,settingKey:1,settingLabel:5,min:6,max:7,precision:2,disabled:3})}}function yr(s,e,t){const i=s.slice();return i[3]=e[t],i}function yf(s){let e,t,i=it[s[3]].label+"",a,r,o,l,n;return o=new bf({props:{liveSetting:We,settingKey:s[3],settingLabel:it[s[3]].label,min:it[s[3]].min,max:it[s[3]].max,precision:it[s[3]].precision,disabled:it[s[3]].disabledForBike&&s[1]==2}}),{c(){e=_("div"),t=_("div"),a=ee(i),r=I(),Ne(o.$$.fragment),l=I(),this.h()},l(d){e=b(d,"DIV",{class:!0});var h=C(e);t=b(h,"DIV",{class:!0});var u=C(t);a=te(u,i),u.forEach(g),r=M(h),xe(o.$$.fragment,h),l=M(h),h.forEach(g),this.h()},h(){f(t,"class","config-group-title svelte-yoqhax"),f(e,"class","config-group svelte-yoqhax"),R(e,"config-group-disabled",it[s[3]].disabledForBike&&s[1]==2)},m(d,h){P(d,e,h),c(e,t),c(t,a),c(e,r),Re(o,e,null),c(e,l),n=!0},p(d,h){(!n||h&1)&&i!==(i=it[d[3]].label+"")&&be(a,i);const u={};h&1&&(u.settingKey=d[3]),h&1&&(u.settingLabel=it[d[3]].label),h&1&&(u.min=it[d[3]].min),h&1&&(u.max=it[d[3]].max),h&1&&(u.precision=it[d[3]].precision),h&3&&(u.disabled=it[d[3]].disabledForBike&&d[1]==2),o.$set(u),(!n||h&3)&&R(e,"config-group-disabled",it[d[3]].disabledForBike&&d[1]==2)},i(d){n||(W(o.$$.fragment,d),n=!0)},o(d){ie(o.$$.fragment,d),n=!1},d(d){d&&g(e),Ue(o)}}}function wf(s){let e,t,i=it[s[3]].label+"",a,r,o,l,n;return o=new mf({props:{liveSetting:We,settingKey:s[3],settingLabel:it[s[3]].label,options:it[s[3]].options,disabled:it[s[3]].disabledForBike&&s[1]==2}}),{c(){e=_("div"),t=_("div"),a=ee(i),r=I(),Ne(o.$$.fragment),l=I(),this.h()},l(d){e=b(d,"DIV",{class:!0});var h=C(e);t=b(h,"DIV",{class:!0});var u=C(t);a=te(u,i),u.forEach(g),r=M(h),xe(o.$$.fragment,h),l=M(h),h.forEach(g),this.h()},h(){f(t,"class","config-group-title svelte-yoqhax"),f(e,"class","config-group svelte-yoqhax"),R(e,"config-group-disabled",it[s[3]].disabledForBike&&s[1]==2)},m(d,h){P(d,e,h),c(e,t),c(t,a),c(e,r),Re(o,e,null),c(e,l),n=!0},p(d,h){(!n||h&1)&&i!==(i=it[d[3]].label+"")&&be(a,i);const u={};h&1&&(u.settingKey=d[3]),h&1&&(u.settingLabel=it[d[3]].label),h&1&&(u.options=it[d[3]].options),h&3&&(u.disabled=it[d[3]].disabledForBike&&d[1]==2),o.$set(u),(!n||h&3)&&R(e,"config-group-disabled",it[d[3]].disabledForBike&&d[1]==2)},i(d){n||(W(o.$$.fragment,d),n=!0)},o(d){ie(o.$$.fragment,d),n=!1},d(d){d&&g(e),Ue(o)}}}function wr(s){let e,t,i,a;const r=[wf,yf],o=[];function l(n,d){return it[n[3]].type==Li.Enum?0:it[n[3]].type==Li.Range?1:-1}return~(e=l(s))&&(t=o[e]=r[e](s)),{c(){t&&t.c(),i=De()},l(n){t&&t.l(n),i=De()},m(n,d){~e&&o[e].m(n,d),P(n,i,d),a=!0},p(n,d){let h=e;e=l(n),e===h?~e&&o[e].p(n,d):(t&&(Fe(),ie(o[h],1,1,()=>{o[h]=null}),Ge()),~e?(t=o[e],t?t.p(n,d):(t=o[e]=r[e](n),t.c()),W(t,1),t.m(i.parentNode,i)):t=null)},i(n){a||(W(t),a=!0)},o(n){ie(t),a=!1},d(n){n&&g(i),~e&&o[e].d(n)}}}function Sf(s){let e,t,i=Oe(s[0]),a=[];for(let o=0;o<i.length;o+=1)a[o]=wr(yr(s,i,o));const r=o=>ie(a[o],1,1,()=>{a[o]=null});return{c(){e=_("div");for(let o=0;o<a.length;o+=1)a[o].c();this.h()},l(o){e=b(o,"DIV",{class:!0});var l=C(e);for(let n=0;n<a.length;n+=1)a[n].l(l);l.forEach(g),this.h()},h(){f(e,"class","config-main svelte-yoqhax")},m(o,l){P(o,e,l);for(let n=0;n<a.length;n+=1)a[n]&&a[n].m(e,null);t=!0},p(o,[l]){if(l&3){i=Oe(o[0]);let n;for(n=0;n<i.length;n+=1){const d=yr(o,i,n);a[n]?(a[n].p(d,l),W(a[n],1)):(a[n]=wr(d),a[n].c(),W(a[n],1),a[n].m(e,null))}for(Fe(),n=i.length;n<a.length;n+=1)r(n);Ge()}},i(o){if(!t){for(let l=0;l<i.length;l+=1)W(a[l]);t=!0}},o(o){a=a.filter(Boolean);for(let l=0;l<a.length;l+=1)ie(a[l]);t=!1},d(o){o&&g(e),bt(a,o)}}}function Df(s,e,t){let i=[],a=0;return nt(()=>{t(0,i=Object.keys(it));const r=o=>{t(1,a=o)};return We.addListener("type",r),()=>{We.removeListener("type",r)}}),[i,a]}class Lf extends Ke{constructor(e){super(),Xe(this,e,Df,Sf,Ye,{})}}function Sr(s){let e,t,i;return{c(){e=_("div"),this.h()},l(a){e=b(a,"DIV",{class:!0}),C(e).forEach(g),this.h()},h(){f(e,"class","conf-mouseover svelte-101otrq")},m(a,r){P(a,e,r),t||(i=[G(e,"mouseenter",s[30]),G(e,"mouseleave",s[31])],t=!0)},p:ve,d(a){a&&g(e),t=!1,ot(i)}}}function Cf(s){let e,t;return e=new Lf({}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,a){Re(e,i,a),t=!0},p:ve,i(i){t||(W(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function kf(s){let e,t;return e=new hf({}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,a){Re(e,i,a),t=!0},p:ve,i(i){t||(W(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function If(s){let e,t,i,a,r="LOCATION",o,l,n,d,h="◂",u,m,p="▸",v,y=Oa[s[2]]+"",w,D,L,A,E="ROAD STYLE",T,x,j,X,O="◂",$,Z,U="▸",q,V=Va[s[3]]+"",z,k,N,B,se,oe,le,pe="GENERATE",ye,ge,Q=s[6]&&Dr(s),ae=s[19]==!1&&Lr(s);return{c(){e=_("div"),t=_("div"),i=_("div"),a=_("div"),a.textContent=r,o=I(),l=_("div"),n=_("div"),d=_("div"),d.textContent=h,u=I(),m=_("div"),m.textContent=p,v=I(),w=ee(y),D=I(),L=_("div"),A=_("div"),A.textContent=E,T=I(),x=_("div"),j=_("div"),X=_("div"),X.textContent=O,$=I(),Z=_("div"),Z.textContent=U,q=I(),z=ee(V),k=I(),Q&&Q.c(),N=I(),B=_("div"),se=_("div"),ae&&ae.c(),oe=I(),le=_("div"),le.textContent=pe,this.h()},l(ce){e=b(ce,"DIV",{class:!0});var Y=C(e);t=b(Y,"DIV",{class:!0});var de=C(t);i=b(de,"DIV",{class:!0});var J=C(i);a=b(J,"DIV",{class:!0,"data-svelte-h":!0}),K(a)!=="svelte-1qs4nti"&&(a.textContent=r),o=M(J),l=b(J,"DIV",{class:!0});var me=C(l);n=b(me,"DIV",{class:!0});var Ee=C(n);d=b(Ee,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),K(d)!=="svelte-hdk0bx"&&(d.textContent=h),u=M(Ee),m=b(Ee,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),K(m)!=="svelte-smravs"&&(m.textContent=p),Ee.forEach(g),v=M(me),w=te(me,y),me.forEach(g),J.forEach(g),D=M(de),L=b(de,"DIV",{class:!0});var ze=C(L);A=b(ze,"DIV",{class:!0,"data-svelte-h":!0}),K(A)!=="svelte-19ddluq"&&(A.textContent=E),T=M(ze),x=b(ze,"DIV",{class:!0});var He=C(x);j=b(He,"DIV",{class:!0});var Qe=C(j);X=b(Qe,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),K(X)!=="svelte-zkw8xm"&&(X.textContent=O),$=M(Qe),Z=b(Qe,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),K(Z)!=="svelte-1bfzabd"&&(Z.textContent=U),Qe.forEach(g),q=M(He),z=te(He,V),He.forEach(g),ze.forEach(g),k=M(de),Q&&Q.l(de),de.forEach(g),N=M(Y),B=b(Y,"DIV",{class:!0});var $e=C(B);se=b($e,"DIV",{class:!0});var dt=C(se);ae&&ae.l(dt),dt.forEach(g),oe=M($e),le=b($e,"DIV",{class:!0,"data-svelte-h":!0}),K(le)!=="svelte-1usevhp"&&(le.textContent=pe),$e.forEach(g),Y.forEach(g),this.h()},h(){f(a,"class","wld-option-label svelte-101otrq"),f(d,"class","wld-option-arrow svelte-101otrq"),re(d,"text-align","left"),f(m,"class","wld-option-arrow svelte-101otrq"),re(m,"text-align","right"),f(n,"class","wld-option-arrows svelte-101otrq"),f(l,"class","wld-option-tile svelte-101otrq"),R(l,"wld-option-tile-changed",s[14]),f(i,"class","wld-option svelte-101otrq"),f(A,"class","wld-option-label svelte-101otrq"),f(X,"class","wld-option-arrow svelte-101otrq"),re(X,"text-align","left"),f(Z,"class","wld-option-arrow svelte-101otrq"),re(Z,"text-align","right"),f(j,"class","wld-option-arrows svelte-101otrq"),f(x,"class","wld-option-tile svelte-101otrq"),R(x,"wld-option-tile-changed",s[13]),f(L,"class","wld-option svelte-101otrq"),f(t,"class","wld-options svelte-101otrq"),f(se,"class","wld-hash-box svelte-101otrq"),f(le,"class","ui-btn"),R(le,"ui-btn-active",s[11]),f(B,"class","wld-generate svelte-101otrq"),f(e,"class","wld-main svelte-101otrq")},m(ce,Y){P(ce,e,Y),c(e,t),c(t,i),c(i,a),c(i,o),c(i,l),c(l,n),c(n,d),c(n,u),c(n,m),c(l,v),c(l,w),c(t,D),c(t,L),c(L,A),c(L,T),c(L,x),c(x,j),c(j,X),c(j,$),c(j,Z),c(x,q),c(x,z),c(t,k),Q&&Q.m(t,null),c(e,N),c(e,B),c(B,se),ae&&ae.m(se,null),c(B,oe),c(B,le),ye||(ge=[G(d,"click",s[43]),G(m,"click",s[44]),G(X,"click",s[45]),G(Z,"click",s[46]),G(le,"click",s[28])],ye=!0)},p(ce,Y){Y[0]&4&&y!==(y=Oa[ce[2]]+"")&&be(w,y),Y[0]&16384&&R(l,"wld-option-tile-changed",ce[14]),Y[0]&8&&V!==(V=Va[ce[3]]+"")&&be(z,V),Y[0]&8192&&R(x,"wld-option-tile-changed",ce[13]),ce[6]?Q?Q.p(ce,Y):(Q=Dr(ce),Q.c(),Q.m(t,null)):Q&&(Q.d(1),Q=null),ce[19]==!1?ae?ae.p(ce,Y):(ae=Lr(ce),ae.c(),ae.m(se,null)):ae&&(ae.d(1),ae=null),Y[0]&2048&&R(le,"ui-btn-active",ce[11])},i:ve,o:ve,d(ce){ce&&g(e),Q&&Q.d(),ae&&ae.d(),ye=!1,ot(ge)}}}function Dr(s){let e,t,i,a,r="randomise",o,l,n,d,h=s[5]?"Invalid seed":"",u,m,p;return{c(){e=_("div"),t=_("div"),i=ee("SEED"),a=_("span"),a.textContent=r,o=I(),l=_("input"),n=I(),d=_("div"),u=ee(h),this.h()},l(v){e=b(v,"DIV",{class:!0});var y=C(e);t=b(y,"DIV",{class:!0});var w=C(t);i=te(w,"SEED"),a=b(w,"SPAN",{class:!0,"data-svelte-h":!0}),K(a)!=="svelte-nkzfel"&&(a.textContent=r),w.forEach(g),o=M(y),l=b(y,"INPUT",{type:!0,maxlength:!0,onkeydown:!0,class:!0}),n=M(y),d=b(y,"DIV",{class:!0});var D=C(d);u=te(D,h),D.forEach(g),y.forEach(g),this.h()},h(){f(a,"class","wld-option-label-btn svelte-101otrq"),f(t,"class","wld-option-label svelte-101otrq"),f(l,"type","text"),f(l,"maxlength","16"),f(l,"onkeydown","return /[a-z]|[0-9]/i.test(event.key)"),f(l,"class","wld-option-tile wld-option-seed svelte-101otrq"),l.value=s[4],R(l,"wld-option-tile-changed",s[12]),f(d,"class","seed-warn svelte-101otrq"),f(e,"class","wld-option svelte-101otrq")},m(v,y){P(v,e,y),c(e,t),c(t,i),c(t,a),c(e,o),c(e,l),c(e,n),c(e,d),c(d,u),m||(p=[G(a,"click",s[22]),G(l,"input",s[23]),G(l,"focus",s[26]),G(l,"blur",s[27])],m=!0)},p(v,y){y[0]&16&&l.value!==v[4]&&(l.value=v[4]),y[0]&4096&&R(l,"wld-option-tile-changed",v[12]),y[0]&32&&h!==(h=v[5]?"Invalid seed":"")&&be(u,h)},d(v){v&&g(e),m=!1,ot(p)}}}function Lr(s){let e,t,i,a,r="COPY",o,l,n,d,h=s[10]&&Cr();return{c(){e=ee(`CODE:\r
                        `),t=_("input"),i=I(),a=_("div"),a.textContent=r,o=I(),h&&h.c(),l=De(),this.h()},l(u){e=te(u,`CODE:\r
                        `),t=b(u,"INPUT",{type:!0,disable:!0,maxlength:!0,class:!0,id:!0,key:!0}),i=M(u),a=b(u,"DIV",{class:!0,"data-svelte-h":!0}),K(a)!=="svelte-1fyfy5j"&&(a.textContent=r),o=M(u),h&&h.l(u),l=De(),this.h()},h(){f(t,"type","text"),f(t,"disable",s[19]),f(t,"maxlength","26"),f(t,"class","wld-hash svelte-101otrq"),f(t,"id",s[7]),f(t,"key",s[7]),t.value=s[7],R(t,"wld-hash-invalid",s[8]),R(t,"wld-hash-changed",s[9]&&!s[8]),f(a,"class","wld-hash-copy svelte-101otrq")},m(u,m){P(u,e,m),P(u,t,m),P(u,i,m),P(u,a,m),P(u,o,m),h&&h.m(u,m),P(u,l,m),n||(d=[G(t,"keydown",s[32]),G(t,"input",s[24]),G(t,"focus",s[26]),G(t,"blur",s[27]),G(a,"click",s[25])],n=!0)},p(u,m){m[0]&524288&&f(t,"disable",u[19]),m[0]&128&&f(t,"id",u[7]),m[0]&128&&f(t,"key",u[7]),m[0]&128&&t.value!==u[7]&&(t.value=u[7]),m[0]&256&&R(t,"wld-hash-invalid",u[8]),m[0]&768&&R(t,"wld-hash-changed",u[9]&&!u[8]),u[10]?h||(h=Cr(),h.c(),h.m(l.parentNode,l)):h&&(h.d(1),h=null)},d(u){u&&(g(e),g(t),g(i),g(a),g(o),g(l)),h&&h.d(u),n=!1,ot(d)}}}function Cr(s){let e,t="copied";return{c(){e=_("div"),e.textContent=t,this.h()},l(i){e=b(i,"DIV",{class:!0,"data-svelte-h":!0}),K(e)!=="svelte-1y72z4c"&&(e.textContent=t),this.h()},h(){f(e,"class","wld-hash-copied svelte-101otrq")},m(i,a){P(i,e,a)},d(i){i&&g(e)}}}function Mf(s){let e,t,i,a,r,o,l="-",n,d,h="-",u,m,p,v,y,w,D="-",L,A,E="-",T,x,j,X,O,$,Z="-",U,q,V="-",z,k,N,B,se,oe,le,pe,ye,ge=s[19]==!1&&Sr(s);const Q=[If,kf,Cf],ae=[];function ce(Y,de){return Y[1]==0?0:Y[1]==1?1:Y[1]==2?2:-1}return~(se=ce(s))&&(oe=ae[se]=Q[se](s)),{c(){ge&&ge.c(),e=I(),t=_("div"),i=_("div"),a=_("div"),r=_("div"),o=_("span"),o.textContent=l,n=ee(" WORLD "),d=_("span"),d.textContent=h,u=I(),m=_("div"),p=I(),v=_("div"),y=_("div"),w=_("span"),w.textContent=D,L=ee(" STYLE "),A=_("span"),A.textContent=E,T=I(),x=_("div"),j=I(),X=_("div"),O=_("div"),$=_("span"),$.textContent=Z,U=ee(" VEHICLE "),q=_("span"),q.textContent=V,z=I(),k=_("div"),N=I(),B=_("div"),oe&&oe.c(),this.h()},l(Y){ge&&ge.l(Y),e=M(Y),t=b(Y,"DIV",{class:!0});var de=C(t);i=b(de,"DIV",{class:!0});var J=C(i);a=b(J,"DIV",{class:!0});var me=C(a);r=b(me,"DIV",{class:!0,style:!0});var Ee=C(r);o=b(Ee,"SPAN",{class:!0,"data-svelte-h":!0}),K(o)!=="svelte-1rdtb9c"&&(o.textContent=l),n=te(Ee," WORLD "),d=b(Ee,"SPAN",{class:!0,"data-svelte-h":!0}),K(d)!=="svelte-1rdtb9c"&&(d.textContent=h),Ee.forEach(g),u=M(me),m=b(me,"DIV",{class:!0}),C(m).forEach(g),me.forEach(g),p=M(J),v=b(J,"DIV",{class:!0});var ze=C(v);y=b(ze,"DIV",{class:!0,style:!0});var He=C(y);w=b(He,"SPAN",{class:!0,"data-svelte-h":!0}),K(w)!=="svelte-1krg1xv"&&(w.textContent=D),L=te(He," STYLE "),A=b(He,"SPAN",{class:!0,"data-svelte-h":!0}),K(A)!=="svelte-1krg1xv"&&(A.textContent=E),He.forEach(g),T=M(ze),x=b(ze,"DIV",{class:!0}),C(x).forEach(g),ze.forEach(g),j=M(J),X=b(J,"DIV",{class:!0});var Qe=C(X);O=b(Qe,"DIV",{class:!0,style:!0});var $e=C(O);$=b($e,"SPAN",{class:!0,"data-svelte-h":!0}),K($)!=="svelte-1n9h5xc"&&($.textContent=Z),U=te($e," VEHICLE "),q=b($e,"SPAN",{class:!0,"data-svelte-h":!0}),K(q)!=="svelte-1n9h5xc"&&(q.textContent=V),$e.forEach(g),z=M(Qe),k=b(Qe,"DIV",{class:!0}),C(k).forEach(g),Qe.forEach(g),J.forEach(g),N=M(de),B=b(de,"DIV",{class:!0});var dt=C(B);oe&&oe.l(dt),dt.forEach(g),de.forEach(g),this.h()},h(){f(o,"class","svelte-101otrq"),R(o,"invisible",!s[17]),f(d,"class","svelte-101otrq"),R(d,"invisible",!s[17]),f(r,"class","conf-tab-header-label svelte-101otrq"),re(r,"opacity",s[18]?"1":"0"),f(m,"class","conf-tab-pip svelte-101otrq"),R(m,"pip-selected",s[17]),f(a,"class","conf-tab-header svelte-101otrq"),R(a,"tab-selected",s[17]),f(w,"class","svelte-101otrq"),R(w,"invisible",!s[16]),f(A,"class","svelte-101otrq"),R(A,"invisible",!s[16]),f(y,"class","conf-tab-header-label svelte-101otrq"),re(y,"opacity",s[18]?"1":"0"),f(x,"class","conf-tab-pip svelte-101otrq"),R(x,"pip-selected",s[16]),f(v,"class","conf-tab-header svelte-101otrq"),R(v,"tab-selected",s[16]),f($,"class","svelte-101otrq"),R($,"invisible",!s[15]),f(q,"class","svelte-101otrq"),R(q,"invisible",!s[15]),f(O,"class","conf-tab-header-label svelte-101otrq"),re(O,"opacity",s[18]?"1":"0"),f(k,"class","conf-tab-pip svelte-101otrq"),R(k,"pip-selected",s[15]),f(X,"class","conf-tab-header svelte-101otrq"),R(X,"tab-selected",s[15]),f(i,"class","conf-header svelte-101otrq"),R(i,"conf-header-visible",s[0]),f(B,"class","conf-body svelte-101otrq"),R(B,"conf-body-open",s[0]),f(t,"class","conf-main svelte-101otrq"),R(t,"conf-main-active",s[0])},m(Y,de){ge&&ge.m(Y,de),P(Y,e,de),P(Y,t,de),c(t,i),c(i,a),c(a,r),c(r,o),c(r,n),c(r,d),c(a,u),c(a,m),c(i,p),c(i,v),c(v,y),c(y,w),c(y,L),c(y,A),c(v,T),c(v,x),c(i,j),c(i,X),c(X,O),c(O,$),c(O,U),c(O,q),c(X,z),c(X,k),c(t,N),c(t,B),~se&&ae[se].m(B,null),le=!0,pe||(ye=[G(a,"mousedown",s[40]),G(v,"mousedown",s[41]),G(X,"mousedown",s[42]),G(t,"mouseenter",s[30]),G(t,"mouseleave",s[31])],pe=!0)},p(Y,de){Y[19]==!1?ge?ge.p(Y,de):(ge=Sr(Y),ge.c(),ge.m(e.parentNode,e)):ge&&(ge.d(1),ge=null),(!le||de[0]&131072)&&R(o,"invisible",!Y[17]),(!le||de[0]&131072)&&R(d,"invisible",!Y[17]),(!le||de[0]&262144)&&re(r,"opacity",Y[18]?"1":"0"),(!le||de[0]&131072)&&R(m,"pip-selected",Y[17]),(!le||de[0]&131072)&&R(a,"tab-selected",Y[17]),(!le||de[0]&65536)&&R(w,"invisible",!Y[16]),(!le||de[0]&65536)&&R(A,"invisible",!Y[16]),(!le||de[0]&262144)&&re(y,"opacity",Y[18]?"1":"0"),(!le||de[0]&65536)&&R(x,"pip-selected",Y[16]),(!le||de[0]&65536)&&R(v,"tab-selected",Y[16]),(!le||de[0]&32768)&&R($,"invisible",!Y[15]),(!le||de[0]&32768)&&R(q,"invisible",!Y[15]),(!le||de[0]&262144)&&re(O,"opacity",Y[18]?"1":"0"),(!le||de[0]&32768)&&R(k,"pip-selected",Y[15]),(!le||de[0]&32768)&&R(X,"tab-selected",Y[15]),(!le||de[0]&1)&&R(i,"conf-header-visible",Y[0]);let J=se;se=ce(Y),se===J?~se&&ae[se].p(Y,de):(oe&&(Fe(),ie(ae[J],1,1,()=>{ae[J]=null}),Ge()),~se?(oe=ae[se],oe?oe.p(Y,de):(oe=ae[se]=Q[se](Y),oe.c()),W(oe,1),oe.m(B,null)):oe=null),(!le||de[0]&1)&&R(B,"conf-body-open",Y[0]),(!le||de[0]&1)&&R(t,"conf-main-active",Y[0])},i(Y){le||(W(oe),le=!0)},o(Y){ie(oe),le=!1},d(Y){Y&&(g(e),g(t)),ge&&ge.d(Y),~se&&ae[se].d(),pe=!1,ot(ye)}}}function Ef(s,e,t){let i,a,r,o,l,n,d,h,u;Ce(s,ti,we=>t(19,u=we));let{showConfig:m}=e,{openConfig:p}=e,{closeConfig:v}=e,y=!0,w=!1,D=Ks.value,L=0,A=Ve.scene;function E(we){js(La)||(A+we>1?t(2,A=-1):A+we<0&&t(2,A=2)),t(2,A=Ve._sanitise("scene",A+we)),z()}let T=Ve.roadStyle;function x(we){t(3,T=Ve._sanitise("roadStyle",T+we)),z()}let j=Ve.seed,X=j,O=!1,$=!1,Z=Ve.startNode,U=Ve.startNode==0?-1:Ve.startNode,q=!1;function V(){t(4,j=Ld()),X=j,t(5,O=!1),z()}function z(){var we,st,Tt,St;(st=(we=Ds.history[A])==null?void 0:we[T])!=null&&st[j]?(t(38,Z=(St=(Tt=Ds.history[A])==null?void 0:Tt[T])==null?void 0:St[j].startNode),U=Z):(t(38,Z=0),U=-1),t(7,B=qs(A,T,j,U)),t(8,oe=!1),t(9,le=!1),t(10,ye=!1)}function k(we){N(we.target.value)}function N(we){let st=Ve._sanitise("seed",we);if(!js(La)&&st.toLowerCase()=="unlockdriftmas"){La.set(!0),console.log("Enabling driftmas scene and vehicle");return}if(!Ve._validate("seed",st)){t(5,O=!0),t(4,j=X),z();return}t(5,O=!1),t(4,j=st),X=j,z()}let B=qs(A,T,j,Me.vehicleIndex),se="",oe=!1,le=!1,pe=!1,ye=!1;function ge(we){let st=Id(we);if(!st){t(8,oe=!0);return}t(2,A=st.scene),t(3,T=st.roadStyle),t(4,j=st.seed),t(38,Z=st.startNode)}function Q(we){let st=Cd(we.target.value);t(8,oe=!st),!oe&&(ge(we.target.value),se=we.target.value,t(9,le=se!==B))}function ae(we){B&&(navigator.clipboard.writeText(B),t(10,ye=!0))}function ce(){Le.lockKeys("config")}function Y(){Le.unlockKeys("config")}function de(){O||q||(v(),kd(),Ve.setMany({...Ve._value,scene:A,seed:j,startNode:Z,roadStyle:T}),_e.unlockMouse(!0))}function J(we){if(lt.set("hasSeenConfig",!0),we==L&&m){v();return}lt.set("hasSeenConfig",!0),t(35,y=!1),p(),t(1,L=we)}nt(()=>{Ve.addListener("any",we=>{t(4,j=Ve.seed),t(11,h=!1),t(5,O=!1)}),di.addListener(we=>{q=we<1}),ne.addListener("touchscreen",we=>{t(6,$=!we)}),Ks.addListener(we=>{t(37,D=we)}),setTimeout(()=>{lt.hasSeenConfig&&t(35,y=!1)},1e4)});const me=()=>{t(36,w=!0),_e.lockMouse()},Ee=()=>{t(36,w=!1),_e.unlockMouse(!1)},ze=we=>{(we.code=="Enter"||we.code=="NumpadEnter")&&de()},He=()=>{J(0)},Qe=()=>{J(1)},$e=()=>{J(2)},dt=()=>{E(-1)},et=()=>{E(1)},ci=()=>{x(-1)},Vt=()=>{x(1)};return s.$$set=we=>{"showConfig"in we&&t(0,m=we.showConfig),"openConfig"in we&&t(33,p=we.openConfig),"closeConfig"in we&&t(34,v=we.closeConfig)},s.$$.update=()=>{s.$$.dirty[0]&1&&(m||Y()),s.$$.dirty[0]&1|s.$$.dirty[1]&112&&t(18,i=y||w||m||D),s.$$.dirty[0]&3&&t(17,a=L==0&&m),s.$$.dirty[0]&3&&t(16,r=L==1&&m),s.$$.dirty[0]&3&&t(15,o=L==2&&m),s.$$.dirty[0]&1&&m==!1&&(t(4,j=Ve.seed),t(2,A=Ve.scene),t(3,T=Ve.roadStyle),t(5,O=!1)),s.$$.dirty[0]&4&&t(14,l=A!=Ve.scene),s.$$.dirty[0]&8&&t(13,n=T!=Ve.roadStyle),s.$$.dirty[0]&48&&t(12,d=j!=Ve.seed&&!O),s.$$.dirty[0]&60|s.$$.dirty[1]&128&&t(11,h=A!=Ve.scene||j!=Ve.seed&&!O||T!=Ve.roadStyle||Z!==Ve.startNode),s.$$.dirty[0]&29|s.$$.dirty[1]&256&&m&&(pe&&(t(7,B=qs(A,T,j,Me.vehicleIndex)),t(8,oe=!1),t(9,le=!1)),t(39,pe=!1)),s.$$.dirty[0]&1&&(m||t(39,pe=!0))},[m,L,A,T,j,O,$,B,oe,le,ye,h,d,n,l,o,r,a,i,u,E,x,V,k,Q,ae,ce,Y,de,J,me,Ee,ze,p,v,y,w,D,Z,pe,He,Qe,$e,dt,et,ci,Vt]}class Af extends Ke{constructor(e){super(),Xe(this,e,Ef,Mf,Ye,{showConfig:0,openConfig:33,closeConfig:34},null,[-1,-1])}}function At(s,{delay:e=0,duration:t=400,easing:i=On}={}){const a=+getComputedStyle(s).opacity;return{delay:e,duration:t,easing:i,css:r=>`opacity: ${r*a}`}}function Tf(s){let e,t,i,a,r,o,l,n="",d,h;return{c(){e=_("div"),t=_("div"),i=ee(s[2]),a=I(),r=_("div"),o=_("div"),l=_("div"),l.innerHTML=n,this.h()},l(u){e=b(u,"DIV",{class:!0});var m=C(e);t=b(m,"DIV",{class:!0,title:!0});var p=C(t);i=te(p,s[2]),p.forEach(g),a=M(m),r=b(m,"DIV",{class:!0});var v=C(r);o=b(v,"DIV",{class:!0});var y=C(o);l=b(y,"DIV",{class:!0,"data-svelte-h":!0}),K(l)!=="svelte-1h4l4io"&&(l.innerHTML=n),y.forEach(g),v.forEach(g),m.forEach(g),this.h()},h(){f(t,"class","setting-label"),f(t,"title",s[3]),R(t,"setting-help",!!s[3]),f(l,"class","bool-fill svelte-1ik2n8h"),R(l,"bool-filled",s[5]),f(o,"class","bool-box svelte-1ik2n8h"),f(r,"class","setting-element"),f(e,"class","setting-row"),R(e,"setting-disabled",s[4])},m(u,m){P(u,e,m),c(e,t),c(t,i),c(e,a),c(e,r),c(r,o),c(o,l),d||(h=G(o,"click",s[6]),d=!0)},p(u,[m]){m&4&&be(i,u[2]),m&8&&f(t,"title",u[3]),m&8&&R(t,"setting-help",!!u[3]),m&32&&R(l,"bool-filled",u[5]),m&16&&R(e,"setting-disabled",u[4])},i:ve,o:ve,d(u){u&&g(e),d=!1,h()}}}function Pf(s,e,t){let{liveSetting:i}=e,{settingKey:a}=e,{settingLabel:r}=e,{settingDesc:o=""}=e,{disabled:l=!1}=e,n=i[a];const d=u=>{t(5,n=u)};nt(()=>(i.addListener(a,d),()=>{i.removeListener(a,d)}));const h=()=>i.set(a,!n);return s.$$set=u=>{"liveSetting"in u&&t(0,i=u.liveSetting),"settingKey"in u&&t(1,a=u.settingKey),"settingLabel"in u&&t(2,r=u.settingLabel),"settingDesc"in u&&t(3,o=u.settingDesc),"disabled"in u&&t(4,l=u.disabled)},[i,a,r,o,l,n,h]}class Tn extends Ke{constructor(e){super(),Xe(this,e,Pf,Tf,Ye,{liveSetting:0,settingKey:1,settingLabel:2,settingDesc:3,disabled:4})}}function Nf(s){let e,t,i,a,r,o,l,n,d,h,u,m,p,v=s[6][s[7]]+"",y,w,D;return{c(){e=_("div"),t=_("div"),i=ee(s[2]),a=I(),r=_("div"),o=_("div"),l=_("div"),n=_("div"),d=ee("◂"),h=I(),u=_("div"),m=ee("▸"),p=I(),y=ee(v),this.h()},l(L){e=b(L,"DIV",{class:!0});var A=C(e);t=b(A,"DIV",{class:!0,title:!0});var E=C(t);i=te(E,s[2]),E.forEach(g),a=M(A),r=b(A,"DIV",{class:!0});var T=C(r);o=b(T,"DIV",{class:!0});var x=C(o);l=b(x,"DIV",{class:!0});var j=C(l);n=b(j,"DIV",{class:!0,style:!0});var X=C(n);d=te(X,"◂"),X.forEach(g),h=M(j),u=b(j,"DIV",{class:!0,style:!0});var O=C(u);m=te(O,"▸"),O.forEach(g),j.forEach(g),p=M(x),y=te(x,v),x.forEach(g),T.forEach(g),A.forEach(g),this.h()},h(){f(t,"class","setting-label"),f(t,"title",s[3]),R(t,"setting-help",!!s[3]),f(n,"class","enum-arrow svelte-71g5t7"),re(n,"text-align","left"),re(n,"opacity",!s[5]&&s[7]==0?"0":"1"),f(u,"class","enum-arrow svelte-71g5t7"),re(u,"text-align","right"),re(u,"opacity",!s[5]&&s[7]==s[6].length-1?"0":"1"),f(l,"class","enum-arrows svelte-71g5t7"),f(o,"class","enum-container svelte-71g5t7"),f(r,"class","setting-element"),f(e,"class","setting-row"),R(e,"setting-disabled",s[4])},m(L,A){P(L,e,A),c(e,t),c(t,i),c(e,a),c(e,r),c(r,o),c(o,l),c(l,n),c(n,d),c(l,h),c(l,u),c(u,m),c(o,p),c(o,y),w||(D=[G(n,"click",s[8]),G(u,"click",s[9])],w=!0)},p(L,[A]){A&4&&be(i,L[2]),A&8&&f(t,"title",L[3]),A&8&&R(t,"setting-help",!!L[3]),A&160&&re(n,"opacity",!L[5]&&L[7]==0?"0":"1"),A&224&&re(u,"opacity",!L[5]&&L[7]==L[6].length-1?"0":"1"),A&192&&v!==(v=L[6][L[7]]+"")&&be(y,v),A&16&&R(e,"setting-disabled",L[4])},i:ve,o:ve,d(L){L&&g(e),w=!1,ot(D)}}}function xf(s,e,t){let{liveSetting:i}=e,{settingKey:a}=e,{settingLabel:r}=e,{settingDesc:o=""}=e,{disabled:l=!1}=e,{wraparound:n=!0}=e,{labels:d}=e,h=i[a];const u=v=>{t(7,h=v)};nt(()=>(i.addListener(a,u),()=>{i.removeListener(a,u)}));const m=()=>{n?i.set(a,h-1<0?d.length-1:h-1):h>0&&i.set(a,h-1)},p=()=>{n?i.set(a,(h+1)%d.length):h<d.length-1&&i.set(a,h+1)};return s.$$set=v=>{"liveSetting"in v&&t(0,i=v.liveSetting),"settingKey"in v&&t(1,a=v.settingKey),"settingLabel"in v&&t(2,r=v.settingLabel),"settingDesc"in v&&t(3,o=v.settingDesc),"disabled"in v&&t(4,l=v.disabled),"wraparound"in v&&t(5,n=v.wraparound),"labels"in v&&t(6,d=v.labels)},[i,a,r,o,l,n,d,h,m,p]}class Pn extends Ke{constructor(e){super(),Xe(this,e,xf,Nf,Ye,{liveSetting:0,settingKey:1,settingLabel:2,settingDesc:3,disabled:4,wraparound:5,labels:6})}}function Rf(s){let e,t,i,a,r,o,l,n,d,h,u,m,p,v,y,w;return{c(){e=_("div"),t=_("div"),i=ee(s[0]),a=I(),r=_("div"),o=_("div"),l=_("input"),n=I(),d=_("div"),h=_("div"),u=I(),m=_("div"),p=I(),v=_("div"),this.h()},l(D){e=b(D,"DIV",{class:!0});var L=C(e);t=b(L,"DIV",{class:!0,title:!0});var A=C(t);i=te(A,s[0]),A.forEach(g),a=M(L),r=b(L,"DIV",{class:!0});var E=C(r);o=b(E,"DIV",{class:!0});var T=C(o);l=b(T,"INPUT",{class:!0,type:!0}),n=M(T),d=b(T,"DIV",{class:!0});var x=C(d);h=b(x,"DIV",{class:!0,style:!0}),C(h).forEach(g),u=M(x),m=b(x,"DIV",{class:!0}),C(m).forEach(g),p=M(x),v=b(x,"DIV",{class:!0,style:!0}),C(v).forEach(g),x.forEach(g),T.forEach(g),E.forEach(g),L.forEach(g),this.h()},h(){f(t,"class","setting-label"),f(t,"title",s[1]),R(t,"setting-help",!!s[1]),l.disabled=s[6],f(l,"class","slider-val svelte-9omzwl"),f(l,"type","number"),f(h,"class","slider-left svelte-9omzwl"),re(h,"flex-basis",s[5]+"%"),re(h,"margin-right",s[5]==0?"0":"4px"),R(h,"touch-track",s[6]),f(m,"class","slider-handle svelte-9omzwl"),R(m,"touch-track",s[6]),f(v,"class","slider-right svelte-9omzwl"),re(v,"flex-basis",100-s[5]+"%"),re(v,"margin-left",s[5]==100?"0":"4px"),R(v,"touch-track",s[6]),f(d,"class","slider-track svelte-9omzwl"),R(d,"touch-track",s[6]),f(o,"class","slider-cont svelte-9omzwl"),f(r,"class","setting-element"),f(e,"class","setting-row"),R(e,"setting-disabled",s[2])},m(D,L){P(D,e,L),c(e,t),c(t,i),c(e,a),c(e,r),c(r,o),c(o,l),Ys(l,s[3]),c(o,n),c(o,d),c(d,h),c(d,u),c(d,m),c(d,p),c(d,v),s[17](d),y||(w=[G(l,"input",s[16]),G(l,"change",s[10]),G(d,"mousedown",s[7]),G(d,"touchstart",s[8]),G(d,"touchmove",s[9])],y=!0)},p(D,[L]){L&1&&be(i,D[0]),L&2&&f(t,"title",D[1]),L&2&&R(t,"setting-help",!!D[1]),L&64&&(l.disabled=D[6]),L&8&&Wl(l.value)!==D[3]&&Ys(l,D[3]),L&32&&re(h,"flex-basis",D[5]+"%"),L&32&&re(h,"margin-right",D[5]==0?"0":"4px"),L&64&&R(h,"touch-track",D[6]),L&64&&R(m,"touch-track",D[6]),L&32&&re(v,"flex-basis",100-D[5]+"%"),L&32&&re(v,"margin-left",D[5]==100?"0":"4px"),L&64&&R(v,"touch-track",D[6]),L&64&&R(d,"touch-track",D[6]),L&4&&R(e,"setting-disabled",D[2])},i:ve,o:ve,d(D){D&&g(e),s[17](null),y=!1,ot(w)}}}function Uf(s,e,t){let i,a;Ce(s,ti,N=>t(6,a=N));let{liveSetting:r}=e,{settingKey:o}=e,{settingLabel:l}=e,{settingDesc:n=""}=e,{disabled:d=!1}=e,{min:h=0}=e,{max:u=100}=e,{precision:m=1}=e,p=u-h,v=r[o];v.toFixed&&(v=v.toFixed(m));let y,w,D,L,A;const E=N=>{t(3,v=N)};let T=!1;const x=N=>{T=N};nt(()=>{r.addListener(o,E),window.addEventListener("touchend",U);let N=ti.subscribe(x);return()=>{r.removeListener(o,E),window.removeEventListener("mousemove",X),window.removeEventListener("touchmove",X),window.removeEventListener("touchend",U),N()}});let j;const X=N=>{let B;!T||window.innerWidth>window.innerHeight?B=Math.max(Math.min(1,(N.clientX-w)/D),0):B=Math.max(Math.min(1,(N.clientY-L)/A),0),B=B*p+h,B=Math.round(B*10**m)/10**m,r.set(o,B)},O=N=>{window.removeEventListener("mousemove",X)},$=N=>{j=y.getBoundingClientRect(),w=j.left,D=j.width-10,L=j.top,A=j.height-10,X(N),window.addEventListener("mousemove",X),window.addEventListener("mouseup",O,{once:!0})},Z=N=>{window.addEventListener("touchmove",q,{passive:!1}),window.addEventListener("touchend",U),j=y.getBoundingClientRect(),w=j.left,D=j.width-10,L=j.top,A=j.height-10,q(N)},U=N=>{window.removeEventListener("touchmove",q),window.removeEventListener("touchend",U)},q=N=>{N.changedTouches.length&&(N.clientX=N.changedTouches[0].clientX,N.clientY=N.changedTouches[0].clientY,N.preventDefault(),N.stopPropagation(),X(N))},V=N=>{let B=N.target.value;B=Math.round(B*10**m)/10**m,B=Math.min(Math.max(h,B),u),B=""+B,B=parseFloat(B.replace(",",".")),r._validate(o,B)?r.set(o,B):N.target.value=Math.min(Math.max(h,v),u)};function z(){v=Wl(this.value),t(3,v)}function k(N){wt[N?"unshift":"push"](()=>{y=N,t(4,y)})}return s.$$set=N=>{"liveSetting"in N&&t(11,r=N.liveSetting),"settingKey"in N&&t(12,o=N.settingKey),"settingLabel"in N&&t(0,l=N.settingLabel),"settingDesc"in N&&t(1,n=N.settingDesc),"disabled"in N&&t(2,d=N.disabled),"min"in N&&t(13,h=N.min),"max"in N&&t(14,u=N.max),"precision"in N&&t(15,m=N.precision)},s.$$.update=()=>{s.$$.dirty&24584&&t(5,i=Math.max(Math.min(100,(v-h)/(u-h)*100),0))},[l,n,d,v,y,i,a,$,Z,q,V,r,o,h,u,m,z,k]}class Nn extends Ke{constructor(e){super(),Xe(this,e,Uf,Rf,Ye,{liveSetting:11,settingKey:12,settingLabel:0,settingDesc:1,disabled:2,min:13,max:14,precision:15})}}function kr(s,e,t){const i=s.slice();return i[11]=e[t][0],i[12]=e[t][1],i}function Ir(s,e,t){const i=s.slice();return i[7]=e[t][0],i[8]=e[t][1],i}function Mr(s,e,t){const i=s.slice();return i[11]=e[t][0],i[12]=e[t][1],i}function Of(s){let e,t,i=Oe(Object.entries(s[1])),a=[];for(let o=0;o<i.length;o+=1)a[o]=Ar(kr(s,i,o));const r=o=>ie(a[o],1,1,()=>{a[o]=null});return{c(){for(let o=0;o<a.length;o+=1)a[o].c();e=De()},l(o){for(let l=0;l<a.length;l+=1)a[l].l(o);e=De()},m(o,l){for(let n=0;n<a.length;n+=1)a[n]&&a[n].m(o,l);P(o,e,l),t=!0},p(o,l){if(l&23){i=Oe(Object.entries(o[1]));let n;for(n=0;n<i.length;n+=1){const d=kr(o,i,n);a[n]?(a[n].p(d,l),W(a[n],1)):(a[n]=Ar(d),a[n].c(),W(a[n],1),a[n].m(e.parentNode,e))}for(Fe(),n=i.length;n<a.length;n+=1)r(n);Ge()}},i(o){if(!t){for(let l=0;l<i.length;l+=1)W(a[l]);t=!0}},o(o){a=a.filter(Boolean);for(let l=0;l<a.length;l+=1)ie(a[l]);t=!1},d(o){o&&g(e),bt(a,o)}}}function Vf(s){let e,t,i=Oe(Object.entries(s[1])),a=[];for(let o=0;o<i.length;o+=1)a[o]=xr(Ir(s,i,o));const r=o=>ie(a[o],1,1,()=>{a[o]=null});return{c(){for(let o=0;o<a.length;o+=1)a[o].c();e=De()},l(o){for(let l=0;l<a.length;l+=1)a[l].l(o);e=De()},m(o,l){for(let n=0;n<a.length;n+=1)a[n]&&a[n].m(o,l);P(o,e,l),t=!0},p(o,l){if(l&63){i=Oe(Object.entries(o[1]));let n;for(n=0;n<i.length;n+=1){const d=Ir(o,i,n);a[n]?(a[n].p(d,l),W(a[n],1)):(a[n]=xr(d),a[n].c(),W(a[n],1),a[n].m(e.parentNode,e))}for(Fe(),n=i.length;n<a.length;n+=1)r(n);Ge()}},i(o){if(!t){for(let l=0;l<i.length;l+=1)W(a[l]);t=!0}},o(o){a=a.filter(Boolean);for(let l=0;l<a.length;l+=1)ie(a[l]);t=!1},d(o){o&&g(e),bt(a,o)}}}function Er(s){let e,t,i,a;const r=[Ff,zf,Hf],o=[];function l(n,d){return n[12].type==Li.Boolean?0:n[12].type==Li.Enum?1:n[12].type==Li.Range?2:-1}return~(e=l(s))&&(t=o[e]=r[e](s)),{c(){t&&t.c(),i=De()},l(n){t&&t.l(n),i=De()},m(n,d){~e&&o[e].m(n,d),P(n,i,d),a=!0},p(n,d){let h=e;e=l(n),e===h?~e&&o[e].p(n,d):(t&&(Fe(),ie(o[h],1,1,()=>{o[h]=null}),Ge()),~e?(t=o[e],t?t.p(n,d):(t=o[e]=r[e](n),t.c()),W(t,1),t.m(i.parentNode,i)):t=null)},i(n){a||(W(t),a=!0)},o(n){ie(t),a=!1},d(n){n&&g(i),~e&&o[e].d(n)}}}function Hf(s){let e,t;return e=new Nn({props:{liveSetting:s[0],settingKey:s[11],settingLabel:s[12].readable,settingDesc:s[12].desc,min:s[12].min,max:s[12].max,precision:s[12].precision,disabled:s[2].includes(s[11])}}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,a){Re(e,i,a),t=!0},p(i,a){const r={};a&1&&(r.liveSetting=i[0]),a&2&&(r.settingKey=i[11]),a&2&&(r.settingLabel=i[12].readable),a&2&&(r.settingDesc=i[12].desc),a&2&&(r.min=i[12].min),a&2&&(r.max=i[12].max),a&2&&(r.precision=i[12].precision),a&6&&(r.disabled=i[2].includes(i[11])),e.$set(r)},i(i){t||(W(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function zf(s){let e,t;return e=new Pn({props:{liveSetting:s[0],settingKey:s[11],settingLabel:s[12].readable,settingDesc:s[12].desc,labels:s[12].labels,wraparound:s[12].wraparound,disabled:s[2].includes(s[11])}}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,a){Re(e,i,a),t=!0},p(i,a){const r={};a&1&&(r.liveSetting=i[0]),a&2&&(r.settingKey=i[11]),a&2&&(r.settingLabel=i[12].readable),a&2&&(r.settingDesc=i[12].desc),a&2&&(r.labels=i[12].labels),a&2&&(r.wraparound=i[12].wraparound),a&6&&(r.disabled=i[2].includes(i[11])),e.$set(r)},i(i){t||(W(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function Ff(s){let e,t;return e=new Tn({props:{liveSetting:s[0],settingKey:s[11],settingLabel:s[12].readable,settingDesc:s[12].desc,disabled:s[2].includes(s[11])}}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,a){Re(e,i,a),t=!0},p(i,a){const r={};a&1&&(r.liveSetting=i[0]),a&2&&(r.settingKey=i[11]),a&2&&(r.settingLabel=i[12].readable),a&2&&(r.settingDesc=i[12].desc),a&6&&(r.disabled=i[2].includes(i[11])),e.$set(r)},i(i){t||(W(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function Ar(s){let e,t,i=(!s[4]||!s[12].hideForTouchscreen)&&Er(s);return{c(){i&&i.c(),e=De()},l(a){i&&i.l(a),e=De()},m(a,r){i&&i.m(a,r),P(a,e,r),t=!0},p(a,r){!a[4]||!a[12].hideForTouchscreen?i?(i.p(a,r),r&18&&W(i,1)):(i=Er(a),i.c(),W(i,1),i.m(e.parentNode,e)):i&&(Fe(),ie(i,1,1,()=>{i=null}),Ge())},i(a){t||(W(i),t=!0)},o(a){ie(i),t=!1},d(a){a&&g(e),i&&i.d(a)}}}function Tr(s){let e,t=s[7]+"",i,a,r,o="reset",l,n,d,h,u;function m(){return s[6](s[7])}let p=Oe(Object.entries(s[8])),v=[];for(let w=0;w<p.length;w+=1)v[w]=Nr(Mr(s,p,w));const y=w=>ie(v[w],1,1,()=>{v[w]=null});return{c(){e=_("div"),i=ee(t),a=I(),r=_("div"),r.textContent=o,l=I();for(let w=0;w<v.length;w+=1)v[w].c();n=De(),this.h()},l(w){e=b(w,"DIV",{class:!0});var D=C(e);i=te(D,t),a=M(D),r=b(D,"DIV",{class:!0,"data-svelte-h":!0}),K(r)!=="svelte-1buwq7v"&&(r.textContent=o),D.forEach(g),l=M(w);for(let L=0;L<v.length;L+=1)v[L].l(w);n=De(),this.h()},h(){f(r,"class","setting-section-header-reset"),f(e,"class","setting-section-header")},m(w,D){P(w,e,D),c(e,i),c(e,a),c(e,r),P(w,l,D);for(let L=0;L<v.length;L+=1)v[L]&&v[L].m(w,D);P(w,n,D),d=!0,h||(u=G(r,"click",m),h=!0)},p(w,D){if(s=w,(!d||D&2)&&t!==(t=s[7]+"")&&be(i,t),D&31){p=Oe(Object.entries(s[8]));let L;for(L=0;L<p.length;L+=1){const A=Mr(s,p,L);v[L]?(v[L].p(A,D),W(v[L],1)):(v[L]=Nr(A),v[L].c(),W(v[L],1),v[L].m(n.parentNode,n))}for(Fe(),L=p.length;L<v.length;L+=1)y(L);Ge()}},i(w){if(!d){for(let D=0;D<p.length;D+=1)W(v[D]);d=!0}},o(w){v=v.filter(Boolean);for(let D=0;D<v.length;D+=1)ie(v[D]);d=!1},d(w){w&&(g(e),g(l),g(n)),bt(v,w),h=!1,u()}}}function Pr(s){let e,t,i,a;const r=[qf,Bf,Gf],o=[];function l(n,d){return n[12].type==Li.Boolean?0:n[12].type==Li.Enum?1:n[12].type==Li.Range?2:-1}return~(e=l(s))&&(t=o[e]=r[e](s)),{c(){t&&t.c(),i=De()},l(n){t&&t.l(n),i=De()},m(n,d){~e&&o[e].m(n,d),P(n,i,d),a=!0},p(n,d){let h=e;e=l(n),e===h?~e&&o[e].p(n,d):(t&&(Fe(),ie(o[h],1,1,()=>{o[h]=null}),Ge()),~e?(t=o[e],t?t.p(n,d):(t=o[e]=r[e](n),t.c()),W(t,1),t.m(i.parentNode,i)):t=null)},i(n){a||(W(t),a=!0)},o(n){ie(t),a=!1},d(n){n&&g(i),~e&&o[e].d(n)}}}function Gf(s){let e,t;return e=new Nn({props:{liveSetting:s[0],settingKey:s[11],settingLabel:s[12].readable,settingDesc:s[12].desc,min:s[12].min,max:s[12].max,precision:s[12].precision,disabled:s[2].includes(s[11])||s[3].includes(s[11])}}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,a){Re(e,i,a),t=!0},p(i,a){const r={};a&1&&(r.liveSetting=i[0]),a&2&&(r.settingKey=i[11]),a&2&&(r.settingLabel=i[12].readable),a&2&&(r.settingDesc=i[12].desc),a&2&&(r.min=i[12].min),a&2&&(r.max=i[12].max),a&2&&(r.precision=i[12].precision),a&14&&(r.disabled=i[2].includes(i[11])||i[3].includes(i[11])),e.$set(r)},i(i){t||(W(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function Bf(s){let e,t;return e=new Pn({props:{liveSetting:s[0],settingKey:s[11],settingLabel:s[12].readable,settingDesc:s[12].desc,labels:s[12].labels,wraparound:s[12].wraparound,disabled:s[2].includes(s[11])||s[3].includes(s[11])}}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,a){Re(e,i,a),t=!0},p(i,a){const r={};a&1&&(r.liveSetting=i[0]),a&2&&(r.settingKey=i[11]),a&2&&(r.settingLabel=i[12].readable),a&2&&(r.settingDesc=i[12].desc),a&2&&(r.labels=i[12].labels),a&2&&(r.wraparound=i[12].wraparound),a&14&&(r.disabled=i[2].includes(i[11])||i[3].includes(i[11])),e.$set(r)},i(i){t||(W(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function qf(s){let e,t;return e=new Tn({props:{liveSetting:s[0],settingKey:s[11],settingLabel:s[12].readable,settingDesc:s[12].desc,disabled:s[2].includes(s[11])||s[3].includes(s[11])}}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,a){Re(e,i,a),t=!0},p(i,a){const r={};a&1&&(r.liveSetting=i[0]),a&2&&(r.settingKey=i[11]),a&2&&(r.settingLabel=i[12].readable),a&2&&(r.settingDesc=i[12].desc),a&14&&(r.disabled=i[2].includes(i[11])||i[3].includes(i[11])),e.$set(r)},i(i){t||(W(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function Nr(s){let e,t,i=(!s[4]||!s[12].hideForTouchscreen)&&Pr(s);return{c(){i&&i.c(),e=De()},l(a){i&&i.l(a),e=De()},m(a,r){i&&i.m(a,r),P(a,e,r),t=!0},p(a,r){!a[4]||!a[12].hideForTouchscreen?i?(i.p(a,r),r&18&&W(i,1)):(i=Pr(a),i.c(),W(i,1),i.m(e.parentNode,e)):i&&(Fe(),ie(i,1,1,()=>{i=null}),Ge())},i(a){t||(W(i),t=!0)},o(a){ie(i),t=!1},d(a){a&&g(e),i&&i.d(a)}}}function xr(s){let e,t,i=(!s[4]||!s[8].hideForTouchscreen)&&Tr(s);return{c(){i&&i.c(),e=De()},l(a){i&&i.l(a),e=De()},m(a,r){i&&i.m(a,r),P(a,e,r),t=!0},p(a,r){!a[4]||!a[8].hideForTouchscreen?i?(i.p(a,r),r&18&&W(i,1)):(i=Tr(a),i.c(),W(i,1),i.m(e.parentNode,e)):i&&(Fe(),ie(i,1,1,()=>{i=null}),Ge())},i(a){t||(W(i),t=!0)},o(a){ie(i),t=!1},d(a){a&&g(e),i&&i.d(a)}}}function Wf(s){let e,t,i,a;const r=[Vf,Of],o=[];function l(n,d){return n[1].oneSection?1:0}return t=l(s),i=o[t]=r[t](s),{c(){e=_("div"),i.c(),this.h()},l(n){e=b(n,"DIV",{class:!0});var d=C(e);i.l(d),d.forEach(g),this.h()},h(){f(e,"class","settings-list")},m(n,d){P(n,e,d),o[t].m(e,null),a=!0},p(n,[d]){let h=t;t=l(n),t===h?o[t].p(n,d):(Fe(),ie(o[h],1,1,()=>{o[h]=null}),Ge(),i=o[t],i?i.p(n,d):(i=o[t]=r[t](n),i.c()),W(i,1),i.m(e,null))},i(n){a||(W(i),a=!0)},o(n){ie(i),a=!1},d(n){n&&g(e),o[t].d()}}}function jf(s,e,t){let i;Ce(s,ti,h=>t(4,i=h));let{liveSetting:a}=e,{settingsMeta:r}=e,o=[],l=[];nt(()=>{let h=[],u=[];for(let m in r)for(let p in r[m]){if(r[m][p].overrides){let v=y=>{t(2,o=y?r[m][p].overrides:[])};h.push([p,v]),a.addListener(p,v)}if(r[m][p].enables){let v=y=>{t(3,l=y?[]:r[m][p].enables)};u.push([p,v]),a.addListener(p,v)}}return()=>{for(let m of h)a.removeListener(m[0],m[1]);h.length=0;for(let m of u)a.removeListener(m[0],m[1]);u.length=0}});function n(h){if(!(h in r)){console.warn("Cannot reset unknown section to default: "+h);return}for(let u in r[h])u!="hideForTouchscreen"&&a.set(u)}const d=h=>n(h);return s.$$set=h=>{"liveSetting"in h&&t(0,a=h.liveSetting),"settingsMeta"in h&&t(1,r=h.settingsMeta)},[a,r,o,l,i,n,d]}class is extends Ke{constructor(e){super(),Xe(this,e,jf,Wf,Ye,{liveSetting:0,settingsMeta:1})}}function Rr(s){let e,t,i,a,r,o;return{c(){e=_("div"),t=_("div"),i=I(),a=_("div"),this.h()},l(l){e=b(l,"DIV",{class:!0});var n=C(e);t=b(n,"DIV",{class:!0,style:!0}),C(t).forEach(g),i=M(n),a=b(n,"DIV",{class:!0}),C(a).forEach(g),n.forEach(g),this.h()},h(){f(t,"class","audio-slider-handle svelte-1hs4ew6"),re(t,"right",(100-s[4]*100)*.8+"%"),f(a,"class","audio-slider-track svelte-1hs4ew6"),f(e,"class","audio-slider svelte-1hs4ew6")},m(l,n){P(l,e,n),c(e,t),c(e,i),c(e,a),s[10](e),r||(o=[G(e,"mousedown",s[8]),G(e,"touchstart",s[8]),G(e,"touchmove",s[9])],r=!0)},p(l,n){n&16&&re(t,"right",(100-l[4]*100)*.8+"%")},d(l){l&&g(e),s[10](null),r=!1,ot(o)}}}function Yf(s){let e,t,i,a,r,o,l=s[1]&&Rr(s);return{c(){e=_("div"),t=_("img"),a=I(),l&&l.c(),this.h()},l(n){e=b(n,"DIV",{class:!0});var d=C(e);t=b(d,"IMG",{class:!0,src:!0}),a=M(d),l&&l.l(d),d.forEach(g),this.h()},h(){f(t,"class","ui-settings-bar-icon"),Rt(t.src,i="/img/ico_volume_"+(s[3]?"off":"on")+".svg")||f(t,"src",i),f(e,"class","audio-control svelte-1hs4ew6")},m(n,d){P(n,e,d),c(e,t),c(e,a),l&&l.m(e,null),r||(o=[G(t,"click",s[7]),G(e,"mouseenter",s[11]),G(e,"mouseleave",s[12])],r=!0)},p(n,[d]){d&8&&!Rt(t.src,i="/img/ico_volume_"+(n[3]?"off":"on")+".svg")&&f(t,"src",i),n[1]?l?l.p(n,d):(l=Rr(n),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},i:ve,o:ve,d(n){n&&g(e),l&&l.d(),r=!1,ot(o)}}}function Kf(s,e,t){let i=!1,a=!1,r=!1,o=.5,l=.5,n=!1,d,h,u=!1;const m=x=>{u=x};let{onHasFocus:p=()=>{}}=e;nt(()=>{_s.addListener("master",j=>{t(3,r=j==0),t(4,l=j)}),_e.addListener(vi.Mute,v);let x=ti.subscribe(m);return()=>{_e.removeListener(vi.Mute,v),x()}});const v=()=>{r?_s.set("master",o):(o=l,_s.set("master",0))},y=x=>{h=d.getBoundingClientRect(),t(5,n=!0),w(x),window.addEventListener("mousemove",L),window.addEventListener("mouseup",D,{once:!0})},w=x=>{var j;(j=x.changedTouches)!=null&&j.length&&(x.clientX=x.changedTouches[0].clientX,x.clientY=x.changedTouches[0].clientY),x.preventDefault(),x.stopPropagation(),L(x)},D=x=>{t(5,n=!1),a||t(1,i=!1),p(i),window.removeEventListener("mousemove",L)},L=x=>{let j;!u||window.innerWidth>window.innerHeight?j=(x.clientX-h.left-h.width*.2)/(h.width*.8):j=(x.clientY-h.top-h.height*.2)/(h.height*.8),_s.set("master",j)};function A(x){wt[x?"unshift":"push"](()=>{d=x,t(6,d)})}const E=()=>{p(!0),t(2,a=!0),t(1,i=!0)},T=()=>{t(2,a=!1),t(1,i=n),p(i)};return s.$$set=x=>{"onHasFocus"in x&&t(0,p=x.onHasFocus)},[p,i,a,r,l,n,d,v,y,w,A,E,T]}class Xf extends Ke{constructor(e){super(),Xe(this,e,Kf,Yf,Ye,{onHasFocus:0})}}const vs={Forward:"Forwards",Backward:"Backwards",Left:"Left",Right:"Right",Boost:"Boost",Handbrake:"Handbrake",ToggleHandbrake:"Toggle handbrake",Autodrive:"Toggle autodrive",AutodriveMode:"Toggle autodrive mode",Reset:"Reset",Headlights:"Toggle headlights",StickySteer:"Locked steering",NextScene:"Next scene",PrevScene:"Prev scene",CameraMode:"Change camera",Mute:"Mute",Pause:"Pause",ToggleUI:"Toggle UI",ToggleCinecam:"Toggle cinecam",ToggleDebug:"Toggle debug overlay",ToggleSpeedControl:"Toggle cruise control",ToggleSpeedControlMode:"Toggle cruise control mode",IncSpeedControl:"Cruise control increase",DecSpeedControl:"Cruise control decrease",CameraLeft:"Camera left",CameraRight:"Camera right",CameraUp:"Camera up",CameraDown:"Camera down"};function Ur(s,e,t){const i=s.slice();return i[11]=e[t][0],i[12]=e[t][1],i}function Qf(s){let e;return{c(){e=ee("reset")},l(t){e=te(t,"reset")},m(t,i){P(t,e,i)},d(t){t&&g(e)}}}function Zf(s){let e;return{c(){e=ee("confirm")},l(t){e=te(t,"confirm")},m(t,i){P(t,e,i)},d(t){t&&g(e)}}}function Or(s){let e,t="+",i,a;function r(...o){return s[7](s[11],...o)}return{c(){e=_("div"),e.textContent=t,this.h()},l(o){e=b(o,"DIV",{class:!0,"data-svelte-h":!0}),K(e)!=="svelte-14ayu74"&&(e.textContent=t),this.h()},h(){f(e,"class","map-element-delete")},m(o,l){P(o,e,l),i||(a=G(e,"click",r),i=!0)},p(o,l){s=o},d(o){o&&g(e),i=!1,a()}}}function Vr(s){let e=(s[11]==s[0]?"Press a key":s[12].replace("Key",""))+"",t;return{c(){t=ee(e)},l(i){t=te(i,e)},m(i,a){P(i,t,a)},p(i,a){a&5&&e!==(e=(i[11]==i[0]?"Press a key":i[12].replace("Key",""))+"")&&be(t,e)},d(i){i&&g(t)}}}function Hr(s){let e,t,i=vs[s[11]]+"",a,r,o,l,n,d,h,u,m=s[12]&&s[0]!=s[11]&&Or(s),p=(s[12]||s[0]==s[11])&&Vr(s);function v(){return s[8](s[11])}return{c(){e=_("div"),t=_("div"),a=ee(i),r=I(),o=_("div"),l=_("div"),m&&m.c(),n=I(),p&&p.c(),d=I(),this.h()},l(y){e=b(y,"DIV",{class:!0});var w=C(e);t=b(w,"DIV",{class:!0});var D=C(t);a=te(D,i),D.forEach(g),r=M(w),o=b(w,"DIV",{class:!0});var L=C(o);l=b(L,"DIV",{class:!0});var A=C(l);m&&m.l(A),n=M(A),p&&p.l(A),A.forEach(g),L.forEach(g),d=M(w),w.forEach(g),this.h()},h(){f(t,"class","setting-label"),f(l,"class","map-element"),R(l,"map-element-mapping",s[11]==s[0]),f(o,"class","setting-element"),f(e,"class","setting-row")},m(y,w){P(y,e,w),c(e,t),c(t,a),c(e,r),c(e,o),c(o,l),m&&m.m(l,null),c(l,n),p&&p.m(l,null),c(e,d),h||(u=G(o,"click",v),h=!0)},p(y,w){s=y,w&4&&i!==(i=vs[s[11]]+"")&&be(a,i),s[12]&&s[0]!=s[11]?m?m.p(s,w):(m=Or(s),m.c(),m.m(l,n)):m&&(m.d(1),m=null),s[12]||s[0]==s[11]?p?p.p(s,w):(p=Vr(s),p.c(),p.m(l,null)):p&&(p.d(1),p=null),w&5&&R(l,"map-element-mapping",s[11]==s[0])},d(y){y&&g(e),m&&m.d(),p&&p.d(),h=!1,u()}}}function Jf(s){let e,t,i,a,r,o,l;function n(p,v){return p[1]?Zf:Qf}let d=n(s),h=d(s),u=Oe(Object.entries(s[2])),m=[];for(let p=0;p<u.length;p+=1)m[p]=Hr(Ur(s,u,p));return{c(){e=_("div"),t=_("div"),i=ee(`Mapping\r
        `),a=_("div"),h.c(),r=I();for(let p=0;p<m.length;p+=1)m[p].c();this.h()},l(p){e=b(p,"DIV",{class:!0,style:!0});var v=C(e);t=b(v,"DIV",{class:!0});var y=C(t);i=te(y,`Mapping\r
        `),a=b(y,"DIV",{class:!0});var w=C(a);h.l(w),w.forEach(g),y.forEach(g),r=M(v);for(let D=0;D<m.length;D+=1)m[D].l(v);v.forEach(g),this.h()},h(){f(a,"class","setting-section-header-reset"),f(t,"class","setting-section-header"),f(e,"class","settings-list"),re(e,"padding-top","1rem")},m(p,v){P(p,e,v),c(e,t),c(t,i),c(t,a),h.m(a,null),c(e,r);for(let y=0;y<m.length;y+=1)m[y]&&m[y].m(e,null);o||(l=G(a,"click",s[6]),o=!0)},p(p,[v]){if(d!==(d=n(p))&&(h.d(1),h=d(p),h&&(h.c(),h.m(a,null))),v&29){u=Oe(Object.entries(p[2]));let y;for(y=0;y<u.length;y+=1){const w=Ur(p,u,y);m[y]?m[y].p(w,v):(m[y]=Hr(w),m[y].c(),m[y].m(e,null))}for(;y<m.length;y+=1)m[y].d(1);m.length=u.length}},i:ve,o:ve,d(p){p&&g(e),h.d(),bt(m,p),o=!1,l()}}}function $f(s,e,t){let i=null;function a(p){if(i!=null){for(let v in Jt.mapping)Jt.mapping[v]==p.code&&(Jt.mapping[v]=null);Jt.set("mapping",{...Jt.mapping,[i]:p.code}),t(0,i=null),Le.unlockKeys("keymap")}}function r(p){if(i==p){t(0,i=null),window.removeEventListener("keydown",a),Le.unlockKeys("keymap");return}i==null&&(window.addEventListener("keydown",a,{once:!0}),Le.lockKeys("keymap")),t(0,i=p)}function o(p){Jt.set("mapping",{...Jt.mapping,[p]:null})}let l=!1;function n(){l?(Jt.set("mapping",{...Md}),t(1,l=!1)):t(1,l=!0)}let d=Jt.mapping;return nt(()=>(Jt.addListener("mapping",p=>{t(2,d=p)}),()=>{window.removeEventListener("keydown",a),Le.unlockKeys("keymap")})),[i,l,d,r,o,n,()=>n(),(p,v)=>{o(p),v.stopPropagation()},p=>r(p)]}class eu extends Ke{constructor(e){super(),Xe(this,e,$f,Jf,Ye,{})}}function zr(s,e,t){const i=s.slice();return i[25]=e[t][0],i[26]=e[t][1],i}function tu(s){let e;return{c(){e=ee("reset")},l(t){e=te(t,"reset")},m(t,i){P(t,e,i)},d(t){t&&g(e)}}}function iu(s){let e;return{c(){e=ee("confirm")},l(t){e=te(t,"confirm")},m(t,i){P(t,e,i)},d(t){t&&g(e)}}}function su(s){let e,t=Oe(Object.entries(s[3])),i=[];for(let a=0;a<t.length;a+=1)i[a]=qr(zr(s,t,a));return{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=De()},l(a){for(let r=0;r<i.length;r+=1)i[r].l(a);e=De()},m(a,r){for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(a,r);P(a,e,r)},p(a,r){if(r&32462){t=Oe(Object.entries(a[3]));let o;for(o=0;o<t.length;o+=1){const l=zr(a,t,o);i[o]?i[o].p(l,r):(i[o]=qr(l),i[o].c(),i[o].m(e.parentNode,e))}for(;o<i.length;o+=1)i[o].d(1);i.length=t.length}},d(a){a&&g(e),bt(i,a)}}}function au(s){let e,t,i=s[4]+1+"",a,r;return{c(){e=_("div"),t=ee("Controller "),a=ee(i),r=ee(" not detected"),this.h()},l(o){e=b(o,"DIV",{style:!0});var l=C(e);t=te(l,"Controller "),a=te(l,i),r=te(l," not detected"),l.forEach(g),this.h()},h(){re(e,"font-weight","600"),re(e,"text-align","center"),re(e,"font-style","italic")},m(o,l){P(o,e,l),c(e,t),c(e,a),c(e,r)},p(o,l){l&16&&i!==(i=o[4]+1+"")&&be(a,i)},d(o){o&&g(e)}}}function Fr(s){let e,t="+",i,a,r,o;function l(...d){return s[16](s[25],...d)}let n=s[26].type==Ni.Axis&&Gr(s);return{c(){e=_("div"),e.textContent=t,i=I(),n&&n.c(),a=De(),this.h()},l(d){e=b(d,"DIV",{class:!0,"data-svelte-h":!0}),K(e)!=="svelte-14ayu74"&&(e.textContent=t),i=M(d),n&&n.l(d),a=De(),this.h()},h(){f(e,"class","map-element-delete")},m(d,h){P(d,e,h),P(d,i,h),n&&n.m(d,h),P(d,a,h),r||(o=G(e,"click",l),r=!0)},p(d,h){s=d,s[26].type==Ni.Axis?n?n.p(s,h):(n=Gr(s),n.c(),n.m(a.parentNode,a)):n&&(n.d(1),n=null)},d(d){d&&(g(e),g(i),g(a)),n&&n.d(d),r=!1,o()}}}function Gr(s){let e,t,i,a;function r(d,h){return d[26].sign<0?ru:ou}let o=r(s),l=o(s);function n(...d){return s[17](s[26],...d)}return{c(){e=_("div"),l.c(),this.h()},l(d){e=b(d,"DIV",{class:!0,title:!0});var h=C(e);l.l(h),h.forEach(g),this.h()},h(){f(e,"class","axis-mode-toggle svelte-6wmc2y"),f(e,"title",t=s[26].sign<0?s[14][s[26].mode??0]:s[13][s[26].mode??0])},m(d,h){P(d,e,h),l.m(e,null),i||(a=G(e,"click",n),i=!0)},p(d,h){s=d,o===(o=r(s))&&l?l.p(s,h):(l.d(1),l=o(s),l&&(l.c(),l.m(e,null))),h&8&&t!==(t=s[26].sign<0?s[14][s[26].mode??0]:s[13][s[26].mode??0])&&f(e,"title",t)},d(d){d&&g(e),l.d(),i=!1,a()}}}function ou(s){let e,t=s[11][s[26].mode??0]+"",i;return{c(){e=new Fa(!1),i=De(),this.h()},l(a){e=Ga(a,!1),i=De(),this.h()},h(){e.a=i},m(a,r){e.m(t,a,r),P(a,i,r)},p(a,r){r&8&&t!==(t=a[11][a[26].mode??0]+"")&&e.p(t)},d(a){a&&(g(i),e.d())}}}function ru(s){let e,t=s[12][s[26].mode??0]+"",i;return{c(){e=new Fa(!1),i=De(),this.h()},l(a){e=Ga(a,!1),i=De(),this.h()},h(){e.a=i},m(a,r){e.m(t,a,r),P(a,i,r)},p(a,r){r&8&&t!==(t=a[12][a[26].mode??0]+"")&&e.p(t)},d(a){a&&(g(i),e.d())}}}function Br(s){let e=(s[25]==s[1]?"Press an input":s[9](s[26]))+"",t;return{c(){t=ee(e)},l(i){t=te(i,e)},m(i,a){P(i,t,a)},p(i,a){a&10&&e!==(e=(i[25]==i[1]?"Press an input":i[9](i[26]))+"")&&be(t,e)},d(i){i&&g(t)}}}function qr(s){let e,t,i=vs[s[25]]+"",a,r,o,l,n,d,h,u,m,p,v=s[26]&&s[1]!=s[25]&&Fr(s),y=(s[26]||s[1]==s[25])&&Br(s);function w(){return s[18](s[25])}return{c(){e=_("div"),t=_("div"),a=ee(i),r=I(),o=_("div"),l=_("div"),v&&v.c(),n=I(),y&&y.c(),d=I(),h=_("div"),u=I(),this.h()},l(D){e=b(D,"DIV",{class:!0});var L=C(e);t=b(L,"DIV",{class:!0});var A=C(t);a=te(A,i),A.forEach(g),r=M(L),o=b(L,"DIV",{class:!0});var E=C(o);l=b(E,"DIV",{class:!0});var T=C(l);v&&v.l(T),n=M(T),y&&y.l(T),d=M(T),h=b(T,"DIV",{class:!0,style:!0}),C(h).forEach(g),T.forEach(g),E.forEach(g),u=M(L),L.forEach(g),this.h()},h(){f(t,"class","setting-label"),f(h,"class","gamepad-value svelte-6wmc2y"),re(h,"width",((s[26]&&s[2][s[25]])??0)*100+"%"),f(l,"class","map-element"),R(l,"map-element-mapping",s[25]==s[1]),f(o,"class","setting-element"),f(e,"class","setting-row")},m(D,L){P(D,e,L),c(e,t),c(t,a),c(e,r),c(e,o),c(o,l),v&&v.m(l,null),c(l,n),y&&y.m(l,null),c(l,d),c(l,h),c(e,u),m||(p=G(o,"click",w),m=!0)},p(D,L){s=D,L&8&&i!==(i=vs[s[25]]+"")&&be(a,i),s[26]&&s[1]!=s[25]?v?v.p(s,L):(v=Fr(s),v.c(),v.m(l,n)):v&&(v.d(1),v=null),s[26]||s[1]==s[25]?y?y.p(s,L):(y=Br(s),y.c(),y.m(l,d)):y&&(y.d(1),y=null),L&12&&re(h,"width",((s[26]&&s[2][s[25]])??0)*100+"%"),L&10&&R(l,"map-element-mapping",s[25]==s[1])},d(D){D&&g(e),v&&v.d(),y&&y.d(),m=!1,p()}}}function lu(s){let e,t,i,a,r,o,l;function n(v,y){return v[5]?iu:tu}let d=n(s),h=d(s);function u(v,y){return v[0]==null?au:su}let m=u(s),p=m(s);return{c(){e=_("div"),t=_("div"),i=ee(`Mapping\r
        `),a=_("div"),h.c(),r=I(),p.c(),this.h()},l(v){e=b(v,"DIV",{class:!0,style:!0});var y=C(e);t=b(y,"DIV",{class:!0});var w=C(t);i=te(w,`Mapping\r
        `),a=b(w,"DIV",{class:!0});var D=C(a);h.l(D),D.forEach(g),w.forEach(g),r=M(y),p.l(y),y.forEach(g),this.h()},h(){f(a,"class","setting-section-header-reset"),f(t,"class","setting-section-header"),f(e,"class","settings-list"),re(e,"padding-top","1rem")},m(v,y){P(v,e,y),c(e,t),c(t,i),c(t,a),h.m(a,null),c(e,r),p.m(e,null),o||(l=G(a,"click",s[15]),o=!0)},p(v,[y]){d!==(d=n(v))&&(h.d(1),h=d(v),h&&(h.c(),h.m(a,null))),m===(m=u(v))&&p?p.p(v,y):(p.d(1),p=m(v),p&&(p.c(),p.m(e,null)))},i:ve,o:ve,d(v){v&&g(e),h.d(),p.d(),o=!1,l()}}}function nu(s,e,t){let i=[],a=null,r=null,o;function l(U){if(r==U){t(1,r=null);return}t(1,r=U),o={axes:[...a.axes],buttons:a.buttons.map(q=>({pressed:q.pressed,value:q.value}))}}function n(U){_t.set("mapping",{..._t.mapping,[U]:null})}let d={},h=_t.mapping;function u(U,q=!1){t(3,h=U)}let m=_t.controllerIndex;function p(U){t(4,m=U)}let v=!1;function y(){var U;if(i=((U=navigator.getGamepads)==null?void 0:U.call(navigator))||[],!v&&i.length){if(i[m])v=!0;else for(let q=0;q<i.length;q++)if(i[q]){v=!0,_t.controllerIndexWasSet||_t.set("controllerIndex",q);break}}if(t(0,a=i[_t.controllerIndex]),!a){t(1,r=!1);return}if(r){let q;for(q=0;q<a.axes.length;q++)if(o.axes[q]-a.axes[q]>.15){let V=0;o.axes[q]>.5&&(V=2),_t.set("mapping",{..._t.mapping,[r]:{type:Ni.Axis,index:q,sign:-1,max:1,mode:V}}),t(1,r=null);break}else if(o.axes[q]-a.axes[q]<-.15){let V=0;o.axes[q]<-.5&&(V=2),_t.set("mapping",{..._t.mapping,[r]:{type:Ni.Axis,index:q,sign:1,max:1,mode:V}}),t(1,r=null);break}if(r){for(q=0;q<a.buttons.length;q++)if(o.buttons[q].pressed!=a.buttons[q].pressed||Math.abs(o.buttons[q].value-a.buttons[q].value)>.2){_t.set("mapping",{..._t.mapping,[r]:{type:Ni.Button,index:q}}),t(1,r=null);break}}}else{let q={},V,z;for(V in h)if(z=h[V],z)if(z.type==Ni.Axis){let k=a.axes[z.index];z.sign<0?z.mode==2?k=1-Math.max(0,k):z.mode==1?k=1-(k+1)/2:k=Math.min(1,Math.max(0,-k)):z.mode==2?k=Math.max(0,-k):z.mode==1?k=(k+1)/2:k=Math.max(0,Math.min(1,k)),q[V]=k}else z.type==Ni.Button&&(q[V]=a.buttons[z.index].value);else q[V]=0;t(2,d=q)}}nt(()=>{_t.addListener("mapping",u),_t.addListener("controllerIndex",p),_e.lockGamepad();let U=setInterval(y,25);return()=>{clearInterval(U),_t.removeListener("mapping",u),_t.removeListener("controllerIndex",p),_e.unlockGamepad()}});let w=!1;function D(){w?(_t.set("mapping",{...Ed}),t(5,w=!1)):t(5,w=!0)}function L(U){return U.type==Ni.Axis?"Axis "+U.index+(U.sign<0?" [-]":" [+]"):"Button "+U.index}function A(U){U.mode?U.mode=(U.mode+1)%3:U.mode=1,_t.set("mapping",h,!1,!0)}return[a,r,d,h,m,w,l,n,D,L,A,["0 &#9698; 1","-1 &#9698; 1","-1 &#9698; 0"],["0 &#9698; -1","1 &#9698; -1","1 &#9698; 0"],["Axis range begins at 0 and ends at 1","Axis range begins at -1 and ends at 1","Axis range begins at -1 and ends at 0"],["Axis range begins at 0 and ends at -1","Axis range begins at 1 and ends at -1","Axis range begins at 1 and ends at 0"],()=>D(),(U,q)=>{n(U),q.stopPropagation()},(U,q)=>{A(U),q.stopPropagation()},U=>l(U)]}class du extends Ke{constructor(e){super(),Xe(this,e,nu,lu,Ye,{})}}function Wr(s,e,t){const i=s.slice();return i[46]=e[t],i}function jr(s,e,t){const i=s.slice();return i[49]=e[t][0],i[50]=e[t][1],i}function Yr(s,e,t){const i=s.slice();return i[53]=e[t],i}function Kr(s){let e,t,i,a="+ New profile",r,o,l=Oe(s[1]),n=[];for(let d=0;d<l.length;d+=1)n[d]=Xr(Yr(s,l,d));return{c(){e=_("div");for(let d=0;d<n.length;d+=1)n[d].c();t=I(),i=_("div"),i.textContent=a,this.h()},l(d){e=b(d,"DIV",{class:!0});var h=C(e);for(let u=0;u<n.length;u+=1)n[u].l(h);t=M(h),i=b(h,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),K(i)!=="svelte-1c7vjvm"&&(i.textContent=a),h.forEach(g),this.h()},h(){f(i,"class","profile-select-list-item svelte-iyvwtm"),re(i,"font-style","italic"),re(i,"color","var(--sr-primary-75)"),f(e,"class","profile-select-list svelte-iyvwtm")},m(d,h){P(d,e,h);for(let u=0;u<n.length;u+=1)n[u]&&n[u].m(e,null);c(e,t),c(e,i),r||(o=G(i,"click",s[29]),r=!0)},p(d,h){if(h[0]&262146){l=Oe(d[1]);let u;for(u=0;u<l.length;u+=1){const m=Yr(d,l,u);n[u]?n[u].p(m,h):(n[u]=Xr(m),n[u].c(),n[u].m(e,t))}for(;u<n.length;u+=1)n[u].d(1);n.length=l.length}},d(d){d&&g(e),bt(n,d),r=!1,o()}}}function Xr(s){let e,t=s[53]+"",i,a,r;function o(...l){return s[28](s[53],...l)}return{c(){e=_("div"),i=ee(t),this.h()},l(l){e=b(l,"DIV",{class:!0});var n=C(e);i=te(n,t),n.forEach(g),this.h()},h(){f(e,"class","profile-select-list-item svelte-iyvwtm")},m(l,n){P(l,e,n),c(e,i),a||(r=G(e,"click",o),a=!0)},p(l,n){s=l,n[0]&2&&t!==(t=s[53]+"")&&be(i,t)},d(l){l&&g(e),a=!1,r()}}}function cu(s){let e,t,i="Error: Please load a valid .roads file",a,r,o="DISMISS",l,n;return{c(){e=_("div"),t=_("div"),t.textContent=i,a=I(),r=_("div"),r.textContent=o,this.h()},l(d){e=b(d,"DIV",{class:!0});var h=C(e);t=b(h,"DIV",{class:!0,"data-svelte-h":!0}),K(t)!=="svelte-fngkdw"&&(t.textContent=i),a=M(h),r=b(h,"DIV",{class:!0,"data-svelte-h":!0}),K(r)!=="svelte-jftli3"&&(r.textContent=o),h.forEach(g),this.h()},h(){f(t,"class","profile-msg-msg svelte-iyvwtm"),f(r,"class","profile-msg-action svelte-iyvwtm"),f(e,"class","profile-msg svelte-iyvwtm")},m(d,h){P(d,e,h),c(e,t),c(e,a),c(e,r),l||(n=G(r,"click",s[25]),l=!0)},p:ve,d(d){d&&g(e),l=!1,n()}}}function hu(s){let e,t,i,a,r,o,l,n,d="OVERWRITE",h,u,m="CANCEL",p,v;return{c(){e=_("div"),t=_("div"),i=ee("Overwrite existing profile "),a=_("span"),r=ee(s[8]),o=ee("?"),l=I(),n=_("div"),n.textContent=d,h=I(),u=_("div"),u.textContent=m,this.h()},l(y){e=b(y,"DIV",{class:!0});var w=C(e);t=b(w,"DIV",{class:!0});var D=C(t);i=te(D,"Overwrite existing profile "),a=b(D,"SPAN",{style:!0});var L=C(a);r=te(L,s[8]),L.forEach(g),o=te(D,"?"),D.forEach(g),l=M(w),n=b(w,"DIV",{class:!0,"data-svelte-h":!0}),K(n)!=="svelte-ayc6iv"&&(n.textContent=d),h=M(w),u=b(w,"DIV",{class:!0,"data-svelte-h":!0}),K(u)!=="svelte-1hop0aj"&&(u.textContent=m),w.forEach(g),this.h()},h(){re(a,"font-weight","1000"),f(t,"class","profile-msg-msg svelte-iyvwtm"),f(n,"class","profile-msg-action svelte-iyvwtm"),f(u,"class","profile-msg-action svelte-iyvwtm"),f(e,"class","profile-msg svelte-iyvwtm")},m(y,w){P(y,e,w),c(e,t),c(t,i),c(t,a),c(a,r),c(t,o),c(e,l),c(e,n),c(e,h),c(e,u),p||(v=[G(n,"click",s[24]),G(u,"click",s[25])],p=!0)},p(y,w){w[0]&256&&be(r,y[8])},d(y){y&&g(e),p=!1,ot(v)}}}function Qr(s){let e,t,i=s[50].readable+"",a,r,o,l=s[50].convert(s[2][s[49]])+"",n;return{c(){e=_("div"),t=_("div"),a=ee(i),r=I(),o=_("div"),n=ee(l),this.h()},l(d){e=b(d,"DIV",{class:!0});var h=C(e);t=b(h,"DIV",{class:!0});var u=C(t);a=te(u,i),u.forEach(g),r=M(h),o=b(h,"DIV",{class:!0,style:!0});var m=C(o);n=te(m,l),m.forEach(g),h.forEach(g),this.h()},h(){f(t,"class","setting-label"),f(o,"class","setting-value"),re(o,"font-family","Sono"),f(e,"class","setting-row")},m(d,h){P(d,e,h),c(e,t),c(t,a),c(e,r),c(e,o),c(o,n)},p(d,h){h[0]&4&&l!==(l=d[50].convert(d[2][d[49]])+"")&&be(n,l)},d(d){d&&g(e)}}}function Zr(s){let e,t="Worlds",i,a;function r(n,d){return n[10].length?uu:fu}let o=r(s),l=o(s);return{c(){e=_("div"),e.textContent=t,i=I(),l.c(),a=De(),this.h()},l(n){e=b(n,"DIV",{class:!0,"data-svelte-h":!0}),K(e)!=="svelte-1ak7xmu"&&(e.textContent=t),i=M(n),l.l(n),a=De(),this.h()},h(){f(e,"class","setting-section-header")},m(n,d){P(n,e,d),P(n,i,d),l.m(n,d),P(n,a,d)},p(n,d){o===(o=r(n))&&l?l.p(n,d):(l.d(1),l=o(n),l&&(l.c(),l.m(a.parentNode,a)))},d(n){n&&(g(e),g(i),g(a)),l.d(n)}}}function fu(s){let e,t="No worlds yet driven";return{c(){e=_("div"),e.textContent=t,this.h()},l(i){e=b(i,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),K(e)!=="svelte-viu36h"&&(e.textContent=t),this.h()},h(){f(e,"class","setting-row"),re(e,"text-align","center"),re(e,"font-style","italic")},m(i,a){P(i,e,a)},p:ve,d(i){i&&g(e)}}}function uu(s){let e,t=Oe(s[10]),i=[];for(let a=0;a<t.length;a+=1)i[a]=Jr(Wr(s,t,a));return{c(){e=_("div");for(let a=0;a<i.length;a+=1)i[a].c();this.h()},l(a){e=b(a,"DIV",{class:!0});var r=C(e);for(let o=0;o<i.length;o+=1)i[o].l(r);r.forEach(g),this.h()},h(){f(e,"class","worlds svelte-iyvwtm")},m(a,r){P(a,e,r);for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(e,null)},p(a,r){if(r[0]&4203520){t=Oe(a[10]);let o;for(o=0;o<t.length;o+=1){const l=Wr(a,t,o);i[o]?i[o].p(l,r):(i[o]=Jr(l),i[o].c(),i[o].m(e,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=t.length}},d(a){a&&g(e),bt(i,a)}}}function Jr(s){let e,t,i=s[46].key+"",a,r,o=s[46].dist+"",l,n,d,h,u=s[46].hash+"",m,p,v,y;function w(...D){return s[35](s[46],...D)}return{c(){e=_("div"),t=_("div"),a=ee(i),r=ee(" ("),l=ee(o),n=ee(")"),d=I(),h=_("div"),m=ee(u),p=I(),this.h()},l(D){e=b(D,"DIV",{class:!0});var L=C(e);t=b(L,"DIV",{class:!0});var A=C(t);a=te(A,i),r=te(A," ("),l=te(A,o),n=te(A,")"),A.forEach(g),d=M(L),h=b(L,"DIV",{class:!0,style:!0});var E=C(h);m=te(E,u),E.forEach(g),p=M(L),L.forEach(g),this.h()},h(){f(t,"class","setting-label"),f(h,"class","setting-value"),re(h,"font-family","Sono"),f(e,"class","setting-row copiable svelte-iyvwtm"),R(e,"copied",s[46].i==s[13])},m(D,L){P(D,e,L),c(e,t),c(t,a),c(t,r),c(t,l),c(t,n),c(e,d),c(e,h),c(h,m),c(e,p),v||(y=G(e,"click",w),v=!0)},p(D,L){s=D,L[0]&1024&&i!==(i=s[46].key+"")&&be(a,i),L[0]&1024&&o!==(o=s[46].dist+"")&&be(l,o),L[0]&1024&&u!==(u=s[46].hash+"")&&be(m,u),L[0]&9216&&R(e,"copied",s[46].i==s[13])},d(D){D&&g(e),v=!1,y()}}}function vu(s){let e,t,i,a,r,o,l="≡",n,d,h,u,m,p,v,y,w,D,L,A,E="Overview",T,x,j,X,O=s[11]&&Kr(s);function $(k,N){if(k[7])return hu;if(k[9])return cu}let Z=$(s),U=Z&&Z(s),q=Oe(Object.entries(Oo)),V=[];for(let k=0;k<q.length;k+=1)V[k]=Qr(jr(s,q,k));let z=s[14]==!1&&Zr(s);return{c(){e=_("div"),t=_("div"),i=_("input"),a=I(),r=_("div"),o=_("div"),o.textContent=l,n=I(),O&&O.c(),d=I(),h=_("div"),u=ee(`Export\r
            `),m=_("a"),p=I(),v=_("div"),y=ee(`Load\r
            `),w=_("input"),D=I(),U&&U.c(),L=I(),A=_("div"),A.textContent=E,T=I();for(let k=0;k<V.length;k+=1)V[k].c();x=I(),z&&z.c(),this.h()},l(k){e=b(k,"DIV",{class:!0});var N=C(e);t=b(N,"DIV",{class:!0});var B=C(t);i=b(B,"INPUT",{class:!0,placeholder:!0}),a=M(B),r=b(B,"DIV",{class:!0});var se=C(r);o=b(se,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),K(o)!=="svelte-edkqep"&&(o.textContent=l),n=M(se),O&&O.l(se),se.forEach(g),d=M(B),h=b(B,"DIV",{class:!0,title:!0});var oe=C(h);u=te(oe,`Export\r
            `),m=b(oe,"A",{download:!0,target:!0,rel:!0,style:!0}),C(m).forEach(g),oe.forEach(g),p=M(B),v=b(B,"DIV",{class:!0,title:!0});var le=C(v);y=te(le,`Load\r
            `),w=b(le,"INPUT",{style:!0,type:!0,accept:!0}),le.forEach(g),B.forEach(g),D=M(N),U&&U.l(N),L=M(N),A=b(N,"DIV",{class:!0,"data-svelte-h":!0}),K(A)!=="svelte-jc27zg"&&(A.textContent=E),T=M(N);for(let pe=0;pe<V.length;pe+=1)V[pe].l(N);x=M(N),z&&z.l(N),N.forEach(g),this.h()},h(){f(i,"class","profile-name profile-name-input svelte-iyvwtm"),f(i,"placeholder","Name your profile"),R(i,"profile-name-invalid",s[3]),f(o,"class","profile-btn-symbol svelte-iyvwtm"),re(o,"font-size","1.8rem"),f(r,"class","profile-btn profile-select svelte-iyvwtm"),R(r,"profile-select-active",s[11]),f(m,"download",""),f(m,"target","_blank"),f(m,"rel","noopener noreferrer"),re(m,"display","none"),f(h,"class","profile-btn profile-export svelte-iyvwtm"),f(h,"title","Export profile file to disk"),re(w,"display","none"),f(w,"type","file"),f(w,"accept",".roads"),f(v,"class","profile-btn profile-export svelte-iyvwtm"),f(v,"title","Load profile file from disk"),f(t,"class","profile-selection svelte-iyvwtm"),f(A,"class","setting-section-header"),f(e,"class","settings-list")},m(k,N){P(k,e,N),c(e,t),c(t,i),Ys(i,s[0]),c(t,a),c(t,r),c(r,o),c(r,n),O&&O.m(r,null),s[32](r),c(t,d),c(t,h),c(h,u),c(h,m),s[33](m),c(t,p),c(t,v),c(v,y),c(v,w),s[34](w),c(e,D),U&&U.m(e,null),c(e,L),c(e,A),c(e,T);for(let B=0;B<V.length;B+=1)V[B]&&V[B].m(e,null);c(e,x),z&&z.m(e,null),j||(X=[G(i,"focus",s[23]),G(i,"blur",s[16]),G(i,"keydown",gu),G(i,"input",s[15]),G(i,"input",s[27]),G(r,"click",s[17]),G(r,"mouseenter",s[30]),G(r,"mouseleave",s[31]),G(h,"click",s[19]),G(w,"change",s[21]),G(v,"click",s[20])],j=!0)},p(k,N){if(N[0]&1&&i.value!==k[0]&&Ys(i,k[0]),N[0]&8&&R(i,"profile-name-invalid",k[3]),k[11]?O?O.p(k,N):(O=Kr(k),O.c(),O.m(r,null)):O&&(O.d(1),O=null),N[0]&2048&&R(r,"profile-select-active",k[11]),Z===(Z=$(k))&&U?U.p(k,N):(U&&U.d(1),U=Z&&Z(k),U&&(U.c(),U.m(e,L))),N[0]&4){q=Oe(Object.entries(Oo));let B;for(B=0;B<q.length;B+=1){const se=jr(k,q,B);V[B]?V[B].p(se,N):(V[B]=Qr(se),V[B].c(),V[B].m(e,x))}for(;B<V.length;B+=1)V[B].d(1);V.length=q.length}k[14]==!1?z?z.p(k,N):(z=Zr(k),z.c(),z.m(e,null)):z&&(z.d(1),z=null)},i:ve,o:ve,d(k){k&&g(e),O&&O.d(),s[32](null),s[33](null),s[34](null),U&&U.d(),bt(V,k),z&&z.d(),j=!1,ot(X)}}}const gu=s=>{s.code=="Enter"&&s.target.blur()};function mu(s,e,t){let i;Ce(s,ti,J=>t(14,i=J));let a=[],r={};const o=()=>{let J=[Be.name];for(let me in Mi)J.push(me);t(1,a=J)};let l=Be.name,n=!1,d,h,u=null,m=Be.name,p=!1,v="What",y=null,w=!1;nt(()=>{const J=me=>{t(2,r=Be.getCopy()),me!==l&&(t(0,l=me),m=me)};return Xi.saveCurrentProgress(),o(),Be.addListener("name",J),Ds.addListener("any",L),window.addEventListener("mouseup",$),()=>{Be.removeListener("name",J),Ds.removeListener("any",L),window.removeEventListener("mouseup",$)}});let D=[];function L(){let J=Ds.history,me=[],Ee=Object.keys(J),ze=0;for(let He of Ee){let Qe=Object.keys(J[He]);for(let $e of Qe){let dt=Object.keys(J[He][$e]);for(let et of dt)me.push({i:ze++,key:Oa[He]+" - "+Va[$e]+" - "+et,dist:Jn(J[He][$e][et].startNode*10),hash:qs(He,$e,et,J[He][$e][et].startNode)})}}t(10,D=me)}const A=()=>(t(3,n=l.length<=0||l in Mi),n),E=()=>{A()?Be.set("name",m,!1,!0):Be.set("name",l),o(),B()};let T=!1;const x=()=>{t(11,T=!T)},j=(J,me)=>{J.stopPropagation(),J.preventDefault(),X(me)},X=J=>{t(11,T=!1);let me=J===void 0;if(J!=Be.name){if(Xi.storeCurrentProfile(),me){let Ee=a.length+1;do J="Profile "+Ee,Ee++;while(a.indexOf(J)>=0)}Xi.loadStoredProfile(J),o()}};let O=!1;const $=J=>{O||t(11,T=!1)};function Z(J){{let me="data:text/json;charset=utf-8,"+encodeURIComponent(Xi.getSaveFile());d.setAttribute("href",me),d.setAttribute("download",l+".roads"),d.click()}}function U(){h.click()}function q(J){let me=J.target.files[0],Ee=new FileReader;Ee.onload=ze=>{try{V(JSON.parse(ze.target.result))}catch(He){console.error("Failed to load profile"),console.error(He),t(9,w=!0)}},Ee.readAsText(me)}function V(J){if(!J.profile||!J.profile.name||!J.settings||!J.version)throw new Error("Invalid file structure");let me=J.profile.name;a.indexOf(me)>=0?(t(8,v=me),t(7,p=!0),y=J):(t(26,Mi[me]=J,Mi),X(me))}let z=-1;function k(J,me,Ee){t(13,z=me),navigator.clipboard.writeText(Ee)}function N(){Le.lockKeys("profile")}function B(){Le.unlockKeys("profile")}function se(){if(!p)return;let J=y.profile.name;t(26,Mi[J]=y,Mi),J!==Be.name&&Xi.storeCurrentProfile(),Xi.loadStoredProfile(J),o(),oe()}function oe(){t(7,p=!1),t(8,v=null),y=null,t(9,w=!1)}function le(){l=this.value,t(0,l)}const pe=(J,me)=>j(me,J),ye=J=>j(J,void 0),ge=()=>t(12,O=!0),Q=()=>t(12,O=!1);function ae(J){wt[J?"unshift":"push"](()=>{u=J,t(6,u)})}function ce(J){wt[J?"unshift":"push"](()=>{d=J,t(4,d)})}function Y(J){wt[J?"unshift":"push"](()=>{h=J,t(5,h)})}const de=(J,me)=>k(me,J.i,J.hash);return s.$$.update=()=>{s.$$.dirty[0]&67108865&&t(3,n=l.length<=0||l in Mi)},[l,a,r,n,d,h,u,p,v,w,D,T,O,z,i,A,E,x,j,Z,U,q,k,N,se,oe,Mi,le,pe,ye,ge,Q,ae,ce,Y,de]}class pu extends Ke{constructor(e){super(),Xe(this,e,mu,vu,Ye,{},null,[-1,-1])}}function $r(s,e,t){const i=s.slice();return i[14]=e[t][0],i[15]=e[t][1],i}function _u(s){let e;return{c(){e=ee("reset")},l(t){e=te(t,"reset")},m(t,i){P(t,e,i)},d(t){t&&g(e)}}}function bu(s){let e;return{c(){e=ee("confirm")},l(t){e=te(t,"confirm")},m(t,i){P(t,e,i)},d(t){t&&g(e)}}}function el(s){let e,t="+",i,a;function r(...o){return s[8](s[14],...o)}return{c(){e=_("div"),e.textContent=t,this.h()},l(o){e=b(o,"DIV",{class:!0,"data-svelte-h":!0}),K(e)!=="svelte-14ayu74"&&(e.textContent=t),this.h()},h(){f(e,"class","map-element-delete")},m(o,l){P(o,e,l),i||(a=G(e,"click",r),i=!0)},p(o,l){s=o},d(o){o&&g(e),i=!1,a()}}}function tl(s){let e=(s[14]==s[0]?"Click a mouse button":sl(s[15]))+"",t;return{c(){t=ee(e)},l(i){t=te(i,e)},m(i,a){P(i,t,a)},p(i,a){a&5&&e!==(e=(i[14]==i[0]?"Click a mouse button":sl(i[15]))+"")&&be(t,e)},d(i){i&&g(t)}}}function il(s){let e,t,i=vs[s[14]]+"",a,r,o,l,n,d,h,u,m=s[15]!==null&&s[0]!=s[14]&&el(s),p=(s[15]!==null||s[0]==s[14])&&tl(s);function v(){return s[9](s[14])}function y(){return s[10](s[14])}return{c(){e=_("div"),t=_("div"),a=ee(i),r=I(),o=_("div"),l=_("div"),m&&m.c(),n=I(),p&&p.c(),d=I(),this.h()},l(w){e=b(w,"DIV",{class:!0});var D=C(e);t=b(D,"DIV",{class:!0});var L=C(t);a=te(L,i),L.forEach(g),r=M(D),o=b(D,"DIV",{class:!0});var A=C(o);l=b(A,"DIV",{class:!0});var E=C(l);m&&m.l(E),n=M(E),p&&p.l(E),E.forEach(g),A.forEach(g),d=M(D),D.forEach(g),this.h()},h(){f(t,"class","setting-label"),f(l,"class","map-element"),R(l,"map-element-mapping",s[14]==s[0]),f(o,"class","setting-element"),f(e,"class","setting-row")},m(w,D){P(w,e,D),c(e,t),c(t,a),c(e,r),c(e,o),c(o,l),m&&m.m(l,null),c(l,n),p&&p.m(l,null),c(e,d),h||(u=[G(o,"mousedown",v),G(o,"click",y)],h=!0)},p(w,D){s=w,D&4&&i!==(i=vs[s[14]]+"")&&be(a,i),s[15]!==null&&s[0]!=s[14]?m?m.p(s,D):(m=el(s),m.c(),m.m(l,n)):m&&(m.d(1),m=null),s[15]!==null||s[0]==s[14]?p?p.p(s,D):(p=tl(s),p.c(),p.m(l,null)):p&&(p.d(1),p=null),D&5&&R(l,"map-element-mapping",s[14]==s[0])},d(w){w&&g(e),m&&m.d(),p&&p.d(),h=!1,ot(u)}}}function yu(s){let e,t,i,a,r,o,l;function n(p,v){return p[1]?bu:_u}let d=n(s),h=d(s),u=Oe(Object.entries(s[2])),m=[];for(let p=0;p<u.length;p+=1)m[p]=il($r(s,u,p));return{c(){e=_("div"),t=_("div"),i=ee(`Mapping\r
        `),a=_("div"),h.c(),r=I();for(let p=0;p<m.length;p+=1)m[p].c();this.h()},l(p){e=b(p,"DIV",{class:!0,style:!0});var v=C(e);t=b(v,"DIV",{class:!0});var y=C(t);i=te(y,`Mapping\r
        `),a=b(y,"DIV",{class:!0});var w=C(a);h.l(w),w.forEach(g),y.forEach(g),r=M(v);for(let D=0;D<m.length;D+=1)m[D].l(v);v.forEach(g),this.h()},h(){f(a,"class","setting-section-header-reset"),f(t,"class","setting-section-header"),f(e,"class","settings-list"),re(e,"padding-top","1rem")},m(p,v){P(p,e,v),c(e,t),c(t,i),c(t,a),h.m(a,null),c(e,r);for(let y=0;y<m.length;y+=1)m[y]&&m[y].m(e,null);o||(l=G(a,"click",s[7]),o=!0)},p(p,[v]){if(d!==(d=n(p))&&(h.d(1),h=d(p),h&&(h.c(),h.m(a,null))),v&61){u=Oe(Object.entries(p[2]));let y;for(y=0;y<u.length;y+=1){const w=$r(p,u,y);m[y]?m[y].p(w,v):(m[y]=il(w),m[y].c(),m[y].m(e,null))}for(;y<m.length;y+=1)m[y].d(1);m.length=u.length}},i:ve,o:ve,d(p){p&&g(e),h.d(),bt(m,p),o=!1,l()}}}function sl(s){return s===null?null:s==0?"Left click":s==1?"Middle click":s==2?"Right click":"Button "+s}function wu(s,e,t){let i=null;function a(w){if(i!=null){for(let D in at.mapping)at.mapping[D]==w.button&&(at.mapping[D]=null);at.set("mapping",{...at.mapping,[i]:w.button}),t(0,i=null),w.preventDefault(),w.stopPropagation()}}let r=!1;function o(w){i!=null?r=!0:r=!1}function l(w){if(!r){if(i==w){t(0,i=null),window.removeEventListener("mousedown",a);return}i==null&&window.addEventListener("mousedown",a,{once:!0}),t(0,i=w)}}function n(w){at.set("mapping",{...at.mapping,[w]:null})}let d=!1;function h(){d?(at.set("mapping",{...$n}),t(1,d=!1)):t(1,d=!0)}let u=at.mapping;return nt(()=>(at.addListener("mapping",w=>{t(2,u=w)}),()=>{window.removeEventListener("mousedown",a)})),[i,d,u,o,l,n,h,()=>h(),(w,D)=>{n(w),D.stopPropagation()},w=>o(),w=>l(w)]}class Su extends Ke{constructor(e){super(),Xe(this,e,wu,yu,Ye,{})}}function al(s){let e,t,i,a="HOME",r,o,l,n="GAMEPLAY",d,h,u="GRAPHICS",m,p,v="CONTROLS",y,w,D="AUDIO",L,A,E="PROFILE",T,x,j,X,O,$,Z,U,q="COPY DEBUG LOG",V,z,k,N="CLOSE",B,se,oe,le;const pe=[Iu,ku,Cu,Lu,Du],ye=[];function ge(Q,ae){return Q[7]==0?0:Q[7]==1?1:Q[7]==2?2:Q[7]==3?3:Q[7]==4?4:-1}return~(X=ge(s))&&(O=ye[X]=pe[X](s)),{c(){e=_("div"),t=_("div"),i=_("div"),r=ee(a),o=I(),l=_("div"),l.textContent=n,d=I(),h=_("div"),h.textContent=u,m=I(),p=_("div"),p.textContent=v,y=I(),w=_("div"),w.textContent=D,L=I(),A=_("div"),A.textContent=E,T=I(),x=_("div"),j=_("div"),O&&O.c(),$=I(),Z=_("div"),U=_("div"),U.textContent=q,V=I(),z=I(),k=_("div"),k.textContent=N,this.h()},l(Q){e=b(Q,"DIV",{id:!0,class:!0});var ae=C(e);t=b(ae,"DIV",{id:!0,class:!0});var ce=C(t);i=b(ce,"DIV",{class:!0,style:!0});var Y=C(i);r=te(Y,a),Y.forEach(g),o=M(ce),l=b(ce,"DIV",{class:!0,"data-svelte-h":!0}),K(l)!=="svelte-d9155r"&&(l.textContent=n),d=M(ce),h=b(ce,"DIV",{class:!0,"data-svelte-h":!0}),K(h)!=="svelte-1gh8wl0"&&(h.textContent=u),m=M(ce),p=b(ce,"DIV",{class:!0,"data-svelte-h":!0}),K(p)!=="svelte-1t0y255"&&(p.textContent=v),y=M(ce),w=b(ce,"DIV",{class:!0,"data-svelte-h":!0}),K(w)!=="svelte-95vled"&&(w.textContent=D),L=M(ce),A=b(ce,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),K(A)!=="svelte-1i1kut5"&&(A.textContent=E),ce.forEach(g),T=M(ae),x=b(ae,"DIV",{id:!0,class:!0});var de=C(x);j=b(de,"DIV",{id:!0,class:!0});var J=C(j);O&&O.l(J),J.forEach(g),de.forEach(g),$=M(ae),Z=b(ae,"DIV",{id:!0,class:!0});var me=C(Z);U=b(me,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),K(U)!=="svelte-19upzay"&&(U.textContent=q),V=M(me),z=M(me),k=b(me,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),K(k)!=="svelte-172h0kq"&&(k.textContent=N),me.forEach(g),ae.forEach(g),this.h()},h(){f(i,"class","settings-header svelte-1vatkls"),re(i,"flex-basis","20%"),f(l,"class","settings-header svelte-1vatkls"),R(l,"settings-selected",s[7]==0),f(h,"class","settings-header svelte-1vatkls"),R(h,"settings-selected",s[7]==1),f(p,"class","settings-header svelte-1vatkls"),R(p,"settings-selected",s[7]==2),f(w,"class","settings-header svelte-1vatkls"),R(w,"settings-selected",s[7]==3),f(A,"class","settings-header svelte-1vatkls"),re(A,"flex-basis","20%"),re(A,"text-align","right"),R(A,"settings-selected",s[7]==4),f(t,"id","ui-settings-header"),f(t,"class","svelte-1vatkls"),R(t,"ui-settings-hidden",s[12]),f(j,"id","ui-settings-body-content"),f(j,"class","svelte-1vatkls"),f(x,"id","ui-settings-body"),f(x,"class","svelte-1vatkls"),R(x,"ui-settings-hidden",s[12]),f(U,"class","ui-btn ui-btn-active"),re(U,"background","none"),re(U,"border-color","var(--sr-primary-50)"),re(U,"color","var(--sr-primary)"),re(U,"line-height","1rem"),re(U,"font-size","0.8rem"),f(k,"class","ui-btn ui-btn-active"),re(k,"line-height","1rem"),re(k,"font-size","0.8rem"),f(Z,"id","ui-settings-footer"),f(Z,"class","svelte-1vatkls"),R(Z,"ui-settings-hidden",s[12]),f(e,"id","ui-settings"),f(e,"class","svelte-1vatkls")},m(Q,ae){P(Q,e,ae),c(e,t),c(t,i),c(i,r),c(t,o),c(t,l),c(t,d),c(t,h),c(t,m),c(t,p),c(t,y),c(t,w),c(t,L),c(t,A),c(e,T),c(e,x),c(x,j),~X&&ye[X].m(j,null),s[28](x),c(e,$),c(e,Z),c(Z,U),c(Z,V),c(Z,z),c(Z,k),se=!0,oe||(le=[G(i,"click",s[19]),G(l,"click",s[20]),G(h,"click",s[21]),G(p,"click",s[22]),G(w,"click",s[23]),G(A,"click",s[24]),G(x,"scrollend",s[15]),G(U,"click",s[16]),G(k,"click",function(){za(s[2])&&s[2].apply(this,arguments)}),G(e,"mouseenter",s[29]),G(e,"mouseleave",s[30])],oe=!0)},p(Q,ae){s=Q,(!se||ae[0]&128)&&R(l,"settings-selected",s[7]==0),(!se||ae[0]&128)&&R(h,"settings-selected",s[7]==1),(!se||ae[0]&128)&&R(p,"settings-selected",s[7]==2),(!se||ae[0]&128)&&R(w,"settings-selected",s[7]==3),(!se||ae[0]&128)&&R(A,"settings-selected",s[7]==4),(!se||ae[0]&4096)&&R(t,"ui-settings-hidden",s[12]);let ce=X;X=ge(s),X===ce?~X&&ye[X].p(s,ae):(O&&(Fe(),ie(ye[ce],1,1,()=>{ye[ce]=null}),Ge()),~X?(O=ye[X],O?O.p(s,ae):(O=ye[X]=pe[X](s),O.c()),W(O,1),O.m(j,null)):O=null),(!se||ae[0]&4096)&&R(x,"ui-settings-hidden",s[12]),(!se||ae[0]&4096)&&R(Z,"ui-settings-hidden",s[12])},i(Q){se||(W(O),Q&&Ci(()=>{se&&(B||(B=ei(e,At,{duration:100},!0)),B.run(1))}),se=!0)},o(Q){ie(O),Q&&(B||(B=ei(e,At,{duration:100},!1)),B.run(0)),se=!1},d(Q){Q&&g(e),~X&&ye[X].d(),s[28](null),Q&&B&&B.end(),oe=!1,ot(le)}}}function Du(s){let e,t;return e=new pu({}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,a){Re(e,i,a),t=!0},p:ve,i(i){t||(W(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function Lu(s){let e,t;return e=new is({props:{liveSetting:_s,settingsMeta:ed}}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,a){Re(e,i,a),t=!0},p:ve,i(i){t||(W(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function Cu(s){let e,t,i,a;const r=[Eu,Mu],o=[];function l(n,d){return n[13]?0:1}return e=l(s),t=o[e]=r[e](s),{c(){t.c(),i=De()},l(n){t.l(n),i=De()},m(n,d){o[e].m(n,d),P(n,i,d),a=!0},p(n,d){let h=e;e=l(n),e===h?o[e].p(n,d):(Fe(),ie(o[h],1,1,()=>{o[h]=null}),Ge(),t=o[e],t?t.p(n,d):(t=o[e]=r[e](n),t.c()),W(t,1),t.m(i.parentNode,i))},i(n){a||(W(t),a=!0)},o(n){ie(t),a=!1},d(n){n&&g(i),o[e].d(n)}}}function ku(s){let e,t,i,a;function r(n,d){return Nu}let l=r()(s);return i=new is({props:{liveSetting:qe,settingsMeta:td}}),{c(){e=_("div"),l.c(),t=I(),Ne(i.$$.fragment),this.h()},l(n){e=b(n,"DIV",{class:!0});var d=C(e);l.l(d),d.forEach(g),t=M(n),xe(i.$$.fragment,n),this.h()},h(){f(e,"class","settings-blurb svelte-1vatkls")},m(n,d){P(n,e,d),l.m(e,null),P(n,t,d),Re(i,n,d),a=!0},p:ve,i(n){a||(W(i.$$.fragment,n),a=!0)},o(n){ie(i.$$.fragment,n),a=!1},d(n){n&&(g(e),g(t)),l.d(),Ue(i,n)}}}function Iu(s){let e,t;return e=new is({props:{liveSetting:ne,settingsMeta:id}}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,a){Re(e,i,a),t=!0},p:ve,i(i){t||(W(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function Mu(s){let e,t,i="Keyboard",a,r,o="Mouse",l,n,d="Controller",h,u,m,p,v,y,w;const D=[Pu,Tu,Au],L=[];function A(E,T){return E[8]==0?0:E[8]==1?1:2}return u=A(s),m=L[u]=D[u](s),{c(){e=_("div"),t=_("div"),t.textContent=i,a=I(),r=_("div"),r.textContent=o,l=I(),n=_("div"),n.textContent=d,h=I(),m.c(),p=De(),this.h()},l(E){e=b(E,"DIV",{class:!0});var T=C(e);t=b(T,"DIV",{class:!0,"data-svelte-h":!0}),K(t)!=="svelte-ugcogi"&&(t.textContent=i),a=M(T),r=b(T,"DIV",{class:!0,"data-svelte-h":!0}),K(r)!=="svelte-1c4vzu2"&&(r.textContent=o),l=M(T),n=b(T,"DIV",{class:!0,"data-svelte-h":!0}),K(n)!=="svelte-14igtfd"&&(n.textContent=d),T.forEach(g),h=M(E),m.l(E),p=De(),this.h()},h(){f(t,"class","settings-tab svelte-1vatkls"),R(t,"tab-selected",s[8]==0),f(r,"class","settings-tab svelte-1vatkls"),R(r,"tab-selected",s[8]==1),f(n,"class","settings-tab svelte-1vatkls"),R(n,"tab-selected",s[8]==2),f(e,"class","settings-tabs svelte-1vatkls")},m(E,T){P(E,e,T),c(e,t),c(e,a),c(e,r),c(e,l),c(e,n),P(E,h,T),L[u].m(E,T),P(E,p,T),v=!0,y||(w=[G(t,"click",s[25]),G(r,"click",s[26]),G(n,"click",s[27])],y=!0)},p(E,T){(!v||T[0]&256)&&R(t,"tab-selected",E[8]==0),(!v||T[0]&256)&&R(r,"tab-selected",E[8]==1),(!v||T[0]&256)&&R(n,"tab-selected",E[8]==2);let x=u;u=A(E),u!==x&&(Fe(),ie(L[x],1,1,()=>{L[x]=null}),Ge(),m=L[u],m||(m=L[u]=D[u](E),m.c()),W(m,1),m.m(p.parentNode,p))},i(E){v||(W(m),v=!0)},o(E){ie(m),v=!1},d(E){E&&(g(e),g(h),g(p)),L[u].d(E),y=!1,ot(w)}}}function Eu(s){let e,t;return e=new is({props:{liveSetting:Ai,settingsMeta:ud}}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,a){Re(e,i,a),t=!0},p:ve,i(i){t||(W(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function Au(s){let e,t,i,a;return e=new is({props:{liveSetting:_t,settingsMeta:Ad}}),i=new du({}),{c(){Ne(e.$$.fragment),t=I(),Ne(i.$$.fragment)},l(r){xe(e.$$.fragment,r),t=M(r),xe(i.$$.fragment,r)},m(r,o){Re(e,r,o),P(r,t,o),Re(i,r,o),a=!0},i(r){a||(W(e.$$.fragment,r),W(i.$$.fragment,r),a=!0)},o(r){ie(e.$$.fragment,r),ie(i.$$.fragment,r),a=!1},d(r){r&&g(t),Ue(e,r),Ue(i,r)}}}function Tu(s){let e,t,i,a;return e=new is({props:{liveSetting:at,settingsMeta:sd}}),i=new Su({}),{c(){Ne(e.$$.fragment),t=I(),Ne(i.$$.fragment)},l(r){xe(e.$$.fragment,r),t=M(r),xe(i.$$.fragment,r)},m(r,o){Re(e,r,o),P(r,t,o),Re(i,r,o),a=!0},i(r){a||(W(e.$$.fragment,r),W(i.$$.fragment,r),a=!0)},o(r){ie(e.$$.fragment,r),ie(i.$$.fragment,r),a=!1},d(r){r&&g(t),Ue(e,r),Ue(i,r)}}}function Pu(s){let e,t,i,a;return e=new is({props:{liveSetting:Jt,settingsMeta:Td}}),i=new eu({}),{c(){Ne(e.$$.fragment),t=I(),Ne(i.$$.fragment)},l(r){xe(e.$$.fragment,r),t=M(r),xe(i.$$.fragment,r)},m(r,o){Re(e,r,o),P(r,t,o),Re(i,r,o),a=!0},i(r){a||(W(e.$$.fragment,r),W(i.$$.fragment,r),a=!0)},o(r){ie(e.$$.fragment,r),ie(i.$$.fragment,r),a=!1},d(r){r&&g(t),Ue(e,r),Ue(i,r)}}}function Nu(s){let e;return{c(){e=ee("For good performance, ensure that your browser has hardware acceleration enabled")},l(t){e=te(t,"For good performance, ensure that your browser has hardware acceleration enabled")},m(t,i){P(t,e,i)},d(t){t&&g(e)}}}function ol(s){let e,t,i,a,r,o,l,n,d,h,u=s[0]&&rl(s),m=!s[9]&&!s[13]&&!Pa&&ll(s);return a=new Xf({props:{onHasFocus:s[36]}}),{c(){u&&u.c(),e=I(),t=_("div"),m&&m.c(),i=I(),Ne(a.$$.fragment),r=I(),o=_("img"),this.h()},l(p){u&&u.l(p),e=M(p),t=b(p,"DIV",{id:!0,class:!0});var v=C(t);m&&m.l(v),i=M(v),xe(a.$$.fragment,v),r=M(v),o=b(v,"IMG",{class:!0,src:!0}),v.forEach(g),this.h()},h(){f(o,"class","ui-settings-bar-icon svelte-1vatkls"),Rt(o.src,l="/img/ico_settings.svg")||f(o,"src",l),R(o,"ui-settings-bar-icon-prompt",s[0]),f(t,"id","ui-settings-bar"),f(t,"class","svelte-1vatkls")},m(p,v){u&&u.m(p,v),P(p,e,v),P(p,t,v),m&&m.m(t,null),c(t,i),Re(a,t,null),c(t,r),c(t,o),n=!0,d||(h=[G(o,"click",s[37]),G(t,"mouseenter",s[38]),G(t,"mouseleave",s[39])],d=!0)},p(p,v){p[0]?u?(u.p(p,v),v[0]&1&&W(u,1)):(u=rl(p),u.c(),W(u,1),u.m(e.parentNode,e)):u&&(Fe(),ie(u,1,1,()=>{u=null}),Ge()),!p[9]&&!p[13]&&!Pa?m?m.p(p,v):(m=ll(p),m.c(),m.m(t,i)):m&&(m.d(1),m=null);const y={};v[0]&512&&(y.onHasFocus=p[36]),a.$set(y),(!n||v[0]&1)&&R(o,"ui-settings-bar-icon-prompt",p[0])},i(p){n||(W(u),W(a.$$.fragment,p),n=!0)},o(p){ie(u),ie(a.$$.fragment,p),n=!1},d(p){p&&(g(e),g(t)),u&&u.d(p),m&&m.d(),Ue(a),d=!1,ot(h)}}}function rl(s){let e,t='<span style="font-weight: 600">Low framerate?</span> <br/> <span style="font-size: 0.9rem">Adjust graphics settings here</span>',i,a,r,o;return{c(){e=_("div"),e.innerHTML=t,this.h()},l(l){e=b(l,"DIV",{class:!0,"data-svelte-h":!0}),K(e)!=="svelte-e8bk2z"&&(e.innerHTML=t),this.h()},h(){f(e,"class","ui-settings-bar-prompt svelte-1vatkls")},m(l,n){P(l,e,n),a=!0,r||(o=G(e,"click",s[31]),r=!0)},p:ve,i(l){a||(l&&Ci(()=>{a&&(i||(i=ei(e,At,{delay:0,duration:500},!0)),i.run(1))}),a=!0)},o(l){l&&(i||(i=ei(e,At,{delay:0,duration:500},!1)),i.run(0)),a=!1},d(l){l&&g(e),l&&i&&i.end(),r=!1,o()}}}function ll(s){let e,t,i,a,r,o,l,n=s[17]&&xu(s),d=!s[11]&&dl();return{c(){n&&n.c(),e=I(),t=_("a"),d&&d.c(),i=I(),a=_("img"),this.h()},l(h){n&&n.l(h),e=M(h),t=b(h,"A",{id:!0,target:!0,rel:!0,href:!0,alt:!0,class:!0});var u=C(t);d&&d.l(u),i=M(u),a=b(u,"IMG",{id:!0,src:!0,alt:!0,class:!0}),u.forEach(g),this.h()},h(){f(a,"id","ui-settings-steam-icon"),Rt(a.src,r="/img/icon_steam_white.svg")||f(a,"src",r),f(a,"alt",""),f(a,"class","svelte-1vatkls"),f(t,"id","ui-settings-steam"),f(t,"target","_blank"),f(t,"rel","noopener noreferrer"),f(t,"href","https://store.steampowered.com/app/3431300/Slow_Roads/"),f(t,"alt",""),f(t,"class","svelte-1vatkls")},m(h,u){n&&n.m(h,u),P(h,e,u),P(h,t,u),d&&d.m(t,null),c(t,i),c(t,a),o||(l=G(t,"mouseup",s[35]),o=!0)},p(h,u){h[17]&&n.p(h,u),h[11]?d&&(d.d(1),d=null):d||(d=dl(),d.c(),d.m(t,i))},d(h){h&&(g(e),g(t)),n&&n.d(h),d&&d.d(),o=!1,l()}}}function xu(s){let e,t,i,a,r,o,l=!s[10]&&nl();return{c(){e=_("a"),l&&l.c(),t=I(),i=_("img"),this.h()},l(n){e=b(n,"A",{id:!0,style:!0,target:!0,rel:!0,href:!0,alt:!0,class:!0});var d=C(e);l&&l.l(d),t=M(d),i=b(d,"IMG",{id:!0,src:!0,alt:!0,class:!0}),d.forEach(g),this.h()},h(){f(i,"id","ui-settings-steam-icon"),Rt(i.src,a="/img/icon_itch_white.svg")||f(i,"src",a),f(i,"alt",""),f(i,"class","svelte-1vatkls"),f(e,"id","ui-settings-steam"),re(e,"margin-right","1rem"),f(e,"target","_blank"),f(e,"rel","noopener noreferrer"),f(e,"href","https://topographinteractive.itch.io/slow-roads"),f(e,"alt",""),f(e,"class","svelte-1vatkls")},m(n,d){P(n,e,d),l&&l.m(e,null),c(e,t),c(e,i),r||(o=[G(e,"mouseenter",s[32]),G(e,"mouseleave",s[33]),G(e,"mouseup",s[34])],r=!0)},p(n,d){n[10]?l&&(l.d(1),l=null):l||(l=nl(),l.c(),l.m(e,t))},d(n){n&&g(e),l&&l.d(),r=!1,ot(o)}}}function nl(s){let e;return{c(){e=ee("WEB EDITION")},l(t){e=te(t,"WEB EDITION")},m(t,i){P(t,e,i)},d(t){t&&g(e)}}}function dl(s){let e;return{c(){e=ee("WISHLIST")},l(t){e=te(t,"WISHLIST")},m(t,i){P(t,e,i)},d(t){t&&g(e)}}}function Ru(s){let e,t,i,a=s[1]&&al(s),r=s[5]&&!s[14]&&ol(s);return{c(){a&&a.c(),e=I(),r&&r.c(),t=De()},l(o){a&&a.l(o),e=M(o),r&&r.l(o),t=De()},m(o,l){a&&a.m(o,l),P(o,e,l),r&&r.m(o,l),P(o,t,l),i=!0},p(o,l){o[1]?a?(a.p(o,l),l[0]&2&&W(a,1)):(a=al(o),a.c(),W(a,1),a.m(e.parentNode,e)):a&&(Fe(),ie(a,1,1,()=>{a=null}),Ge()),o[5]&&!o[14]?r?(r.p(o,l),l[0]&16416&&W(r,1)):(r=ol(o),r.c(),W(r,1),r.m(t.parentNode,t)):r&&(Fe(),ie(r,1,1,()=>{r=null}),Ge())},i(o){i||(W(a),W(r),i=!0)},o(o){ie(a),ie(r),i=!1},d(o){o&&(g(e),g(t)),a&&a.d(o),r&&r.d(o)}}}function Uu(s,e,t){let i,a,r;Ce(s,Qi,Y=>t(12,i=Y)),Ce(s,ti,Y=>t(13,a=Y)),Ce(s,bs,Y=>t(14,r=Y));let{showSettings:o=!1}=e,{showPrompt:l=!1}=e,{closeSettings:n=()=>{}}=e,{openSettings:d=()=>{}}=e,{onShowSplash:h=Y=>{}}=e,{showBar:u=!0}=e,m,p=0;function v(Y){t(18,p=Y.target.scrollTop)}let y=0,w=_e.hasGamepadInput?2:at.useMouse?1:0,D=!1;const L=()=>{navigator.clipboard.writeText("```\n"+Di.get()+"\n```"),console.log("Copied log to clipboard - paste & send in discord!")};let A=Be.totalVisits>10,E=!1,T=!1;const x=()=>{t(10,E=lt.hasSeenItch),t(11,T=lt.hasSeenSteam)};nt(()=>(lt.addListener("any",x),()=>{lt.removeListener("any",x)}));const j=Y=>{h(Y)},X=()=>{t(7,y=0)},O=()=>{t(7,y=1)},$=()=>{t(7,y=2)},Z=()=>{t(7,y=3)},U=()=>{t(7,y=4)},q=()=>{t(8,w=0)},V=()=>{t(8,w=1)},z=()=>{t(8,w=2)};function k(Y){wt[Y?"unshift":"push"](()=>{m=Y,t(6,m),t(18,p)})}const N=()=>{_e.lockMouse(),Le.lockScroll("settings")},B=()=>{_e.unlockMouse(!1),Le.unlockScroll("settings")},se=()=>{t(0,l=!1),t(7,y=0)},oe=()=>{t(10,E=!1)},le=()=>{t(10,E=lt.hasSeenItch)},pe=()=>{lt.set("hasSeenItch",!0)},ye=()=>{lt.set("hasSeenSteam",!0)},ge=Y=>{t(9,D=Y)},Q=()=>{o?n():d()},ae=()=>_e.lockMouse(),ce=()=>_e.unlockMouse(!1);return s.$$set=Y=>{"showSettings"in Y&&t(1,o=Y.showSettings),"showPrompt"in Y&&t(0,l=Y.showPrompt),"closeSettings"in Y&&t(2,n=Y.closeSettings),"openSettings"in Y&&t(3,d=Y.openSettings),"onShowSplash"in Y&&t(4,h=Y.onShowSplash),"showBar"in Y&&t(5,u=Y.showBar)},s.$$.update=()=>{s.$$.dirty[0]&262208&&m&&t(6,m.scrollTop=p,m),s.$$.dirty[0]&1&&l==!0&&t(7,y=1)},[l,o,n,d,h,u,m,y,w,D,E,T,i,a,r,v,L,A,p,j,X,O,$,Z,U,q,V,z,k,N,B,se,oe,le,pe,ye,ge,Q,ae,ce]}class Ou extends Ke{constructor(e){super(),Xe(this,e,Uu,Ru,Ye,{showSettings:1,showPrompt:0,closeSettings:2,openSettings:3,onShowSplash:4,showBar:5},null,[-1,-1])}}function cl(s,e,t){const i=s.slice();return i[18]=e[t][0],i[19]=e[t][1],i}function hl(s,e,t){const i=s.slice();return i[18]=e[t][0],i[19]=e[t][1],i}function fl(s){let e,t,i=s[18]+"",a,r,o=s[19]+"",l;return{c(){e=_("div"),t=_("div"),a=ee(i),r=_("div"),l=ee(o),this.h()},l(n){e=b(n,"DIV",{class:!0});var d=C(e);t=b(d,"DIV",{class:!0});var h=C(t);a=te(h,i),h.forEach(g),r=b(d,"DIV",{class:!0});var u=C(r);l=te(u,o),u.forEach(g),d.forEach(g),this.h()},h(){f(t,"class","debug-label svelte-1yramsp"),f(r,"class","debug-val svelte-1yramsp"),f(e,"class","debug-row svelte-1yramsp")},m(n,d){P(n,e,d),c(e,t),c(t,a),c(e,r),c(r,l)},p(n,d){d&65536&&i!==(i=n[18]+"")&&be(a,i),d&65536&&o!==(o=n[19]+"")&&be(l,o)},d(n){n&&g(e)}}}function ul(s){let e,t,i=s[18]+"",a,r,o=(s[19].toFixed?s[19].toFixed(2):s[19])+"",l;return{c(){e=_("div"),t=_("div"),a=ee(i),r=_("div"),l=ee(o),this.h()},l(n){e=b(n,"DIV",{class:!0});var d=C(e);t=b(d,"DIV",{class:!0});var h=C(t);a=te(h,i),h.forEach(g),r=b(d,"DIV",{class:!0});var u=C(r);l=te(u,o),u.forEach(g),d.forEach(g),this.h()},h(){f(t,"class","debug-label svelte-1yramsp"),f(r,"class","debug-val svelte-1yramsp"),f(e,"class","debug-row svelte-1yramsp")},m(n,d){P(n,e,d),c(e,t),c(t,a),c(e,r),c(r,l)},p(n,d){d&131072&&i!==(i=n[18]+"")&&be(a,i),d&131072&&o!==(o=(n[19].toFixed?n[19].toFixed(2):n[19])+"")&&be(l,o)},d(n){n&&g(e)}}}function Vu(s){let e,t,i,a="hash",r,o,l,n,d,h="pos",u,m,p,v,y,w="tile",D,L,A,E,T,x="cell",j,X,O,$,Z="midline",U,q,V,z="vehicle index",k,N=s[4].i+"",B,se,oe,le,pe="head",ye,ge=s[5].i+"",Q,ae,ce,Y,de="tail",J,me=s[6].i+"",Ee,ze,He,Qe="performance",$e,dt,et,ci="view dist",Vt,we,st,Tt,St,Qt="detail",jt,hi,ht,yt,ft,Bt="sim speed",Dt,fi,pt,gt,je,Ze,Ut="fps",ct,Ht,ki,Ot,Zt,mt="draw calls",ii,si,bi,yi,wi,fe="triangles",ut,Ps,ea,Vi,Hi,oo="geometries",ss,Ns,ta,zi,ro="queue",ia,Fi,Gi,lo="jobs",as,xs,sa,Bi,qi,no="priority jobs",os,Rs,aa,Wi,co="scene",oa,Us,ji,ho="vehicle",ra,Os,Si,fo="Press F4 to hide this panel",rs=Oe(Object.entries(s[16])),Pt=[];for(let Ie=0;Ie<rs.length;Ie+=1)Pt[Ie]=fl(hl(s,rs,Ie));let ls=Oe(Object.entries(s[17])),Nt=[];for(let Ie=0;Ie<ls.length;Ie+=1)Nt[Ie]=ul(cl(s,ls,Ie));return{c(){e=_("div"),t=_("div"),i=_("div"),i.textContent=a,r=_("div"),o=ee(s[0]),l=I(),n=_("div"),d=_("div"),d.textContent=h,u=_("div"),m=ee(s[1]),p=I(),v=_("div"),y=_("div"),y.textContent=w,D=_("div"),L=ee(s[2]),A=I(),E=_("div"),T=_("div"),T.textContent=x,j=_("div"),X=ee(s[3]),O=I(),$=_("div"),$.textContent=Z,U=I(),q=_("div"),V=_("div"),V.textContent=z,k=_("div"),B=ee(N),se=I(),oe=_("div"),le=_("div"),le.textContent=pe,ye=_("div"),Q=ee(ge),ae=I(),ce=_("div"),Y=_("div"),Y.textContent=de,J=_("div"),Ee=ee(me),ze=I(),He=_("div"),He.textContent=Qe,$e=I(),dt=_("div"),et=_("div"),et.textContent=ci,Vt=_("div"),we=ee(s[7]),st=I(),Tt=_("div"),St=_("div"),St.textContent=Qt,jt=_("div"),hi=ee(s[8]),ht=I(),yt=_("div"),ft=_("div"),ft.textContent=Bt,Dt=_("div"),fi=ee(s[9]),pt=ee("x"),gt=I(),je=_("div"),Ze=_("div"),Ze.textContent=Ut,ct=_("div"),Ht=ee(s[10]),ki=I(),Ot=_("div"),Zt=_("div"),Zt.textContent=mt,ii=_("div"),si=ee(s[11]),bi=I(),yi=_("div"),wi=_("div"),wi.textContent=fe,ut=_("div"),Ps=ee(s[12]),ea=I(),Vi=_("div"),Hi=_("div"),Hi.textContent=oo,ss=_("div"),Ns=ee(s[13]),ta=I(),zi=_("div"),zi.textContent=ro,ia=I(),Fi=_("div"),Gi=_("div"),Gi.textContent=lo,as=_("div"),xs=ee(s[14]),sa=I(),Bi=_("div"),qi=_("div"),qi.textContent=no,os=_("div"),Rs=ee(s[15]),aa=I(),Wi=_("div"),Wi.textContent=co,oa=I();for(let Ie=0;Ie<Pt.length;Ie+=1)Pt[Ie].c();Us=I(),ji=_("div"),ji.textContent=ho,ra=I();for(let Ie=0;Ie<Nt.length;Ie+=1)Nt[Ie].c();Os=I(),Si=_("div"),Si.textContent=fo,this.h()},l(Ie){e=b(Ie,"DIV",{class:!0});var ue=C(e);t=b(ue,"DIV",{class:!0});var Pe=C(t);i=b(Pe,"DIV",{class:!0,"data-svelte-h":!0}),K(i)!=="svelte-1wk88r1"&&(i.textContent=a),r=b(Pe,"DIV",{class:!0});var Ii=C(r);o=te(Ii,s[0]),Ii.forEach(g),Pe.forEach(g),l=M(ue),n=b(ue,"DIV",{class:!0});var la=C(n);d=b(la,"DIV",{class:!0,"data-svelte-h":!0}),K(d)!=="svelte-1g3ewex"&&(d.textContent=h),u=b(la,"DIV",{class:!0});var uo=C(u);m=te(uo,s[1]),uo.forEach(g),la.forEach(g),p=M(ue),v=b(ue,"DIV",{class:!0});var na=C(v);y=b(na,"DIV",{class:!0,"data-svelte-h":!0}),K(y)!=="svelte-1jksrql"&&(y.textContent=w),D=b(na,"DIV",{class:!0});var vo=C(D);L=te(vo,s[2]),vo.forEach(g),na.forEach(g),A=M(ue),E=b(ue,"DIV",{class:!0});var da=C(E);T=b(da,"DIV",{class:!0,"data-svelte-h":!0}),K(T)!=="svelte-l9fhq9"&&(T.textContent=x),j=b(da,"DIV",{class:!0});var go=C(j);X=te(go,s[3]),go.forEach(g),da.forEach(g),O=M(ue),$=b(ue,"DIV",{class:!0,"data-svelte-h":!0}),K($)!=="svelte-1fe9op8"&&($.textContent=Z),U=M(ue),q=b(ue,"DIV",{class:!0});var ca=C(q);V=b(ca,"DIV",{class:!0,"data-svelte-h":!0}),K(V)!=="svelte-nhrrjr"&&(V.textContent=z),k=b(ca,"DIV",{class:!0});var mo=C(k);B=te(mo,N),mo.forEach(g),ca.forEach(g),se=M(ue),oe=b(ue,"DIV",{class:!0});var ha=C(oe);le=b(ha,"DIV",{class:!0,"data-svelte-h":!0}),K(le)!=="svelte-19s95zn"&&(le.textContent=pe),ye=b(ha,"DIV",{class:!0});var po=C(ye);Q=te(po,ge),po.forEach(g),ha.forEach(g),ae=M(ue),ce=b(ue,"DIV",{class:!0});var fa=C(ce);Y=b(fa,"DIV",{class:!0,"data-svelte-h":!0}),K(Y)!=="svelte-145fhfv"&&(Y.textContent=de),J=b(fa,"DIV",{class:!0});var _o=C(J);Ee=te(_o,me),_o.forEach(g),fa.forEach(g),ze=M(ue),He=b(ue,"DIV",{class:!0,"data-svelte-h":!0}),K(He)!=="svelte-m5yv1e"&&(He.textContent=Qe),$e=M(ue),dt=b(ue,"DIV",{class:!0});var ua=C(dt);et=b(ua,"DIV",{class:!0,"data-svelte-h":!0}),K(et)!=="svelte-pok5e0"&&(et.textContent=ci),Vt=b(ua,"DIV",{class:!0});var bo=C(Vt);we=te(bo,s[7]),bo.forEach(g),ua.forEach(g),st=M(ue),Tt=b(ue,"DIV",{class:!0});var va=C(Tt);St=b(va,"DIV",{class:!0,"data-svelte-h":!0}),K(St)!=="svelte-1e1xn7y"&&(St.textContent=Qt),jt=b(va,"DIV",{class:!0});var yo=C(jt);hi=te(yo,s[8]),yo.forEach(g),va.forEach(g),ht=M(ue),yt=b(ue,"DIV",{class:!0});var ga=C(yt);ft=b(ga,"DIV",{class:!0,"data-svelte-h":!0}),K(ft)!=="svelte-zjyrxb"&&(ft.textContent=Bt),Dt=b(ga,"DIV",{class:!0});var ma=C(Dt);fi=te(ma,s[9]),pt=te(ma,"x"),ma.forEach(g),ga.forEach(g),gt=M(ue),je=b(ue,"DIV",{class:!0});var pa=C(je);Ze=b(pa,"DIV",{class:!0,"data-svelte-h":!0}),K(Ze)!=="svelte-1r6mdog"&&(Ze.textContent=Ut),ct=b(pa,"DIV",{class:!0});var wo=C(ct);Ht=te(wo,s[10]),wo.forEach(g),pa.forEach(g),ki=M(ue),Ot=b(ue,"DIV",{class:!0});var _a=C(Ot);Zt=b(_a,"DIV",{class:!0,"data-svelte-h":!0}),K(Zt)!=="svelte-1a9hcos"&&(Zt.textContent=mt),ii=b(_a,"DIV",{class:!0});var So=C(ii);si=te(So,s[11]),So.forEach(g),_a.forEach(g),bi=M(ue),yi=b(ue,"DIV",{class:!0});var ba=C(yi);wi=b(ba,"DIV",{class:!0,"data-svelte-h":!0}),K(wi)!=="svelte-1l1j0g6"&&(wi.textContent=fe),ut=b(ba,"DIV",{class:!0});var Do=C(ut);Ps=te(Do,s[12]),Do.forEach(g),ba.forEach(g),ea=M(ue),Vi=b(ue,"DIV",{class:!0});var ya=C(Vi);Hi=b(ya,"DIV",{class:!0,"data-svelte-h":!0}),K(Hi)!=="svelte-13w33n5"&&(Hi.textContent=oo),ss=b(ya,"DIV",{class:!0});var Lo=C(ss);Ns=te(Lo,s[13]),Lo.forEach(g),ya.forEach(g),ta=M(ue),zi=b(ue,"DIV",{class:!0,"data-svelte-h":!0}),K(zi)!=="svelte-1gkc7zn"&&(zi.textContent=ro),ia=M(ue),Fi=b(ue,"DIV",{class:!0});var wa=C(Fi);Gi=b(wa,"DIV",{class:!0,"data-svelte-h":!0}),K(Gi)!=="svelte-veharl"&&(Gi.textContent=lo),as=b(wa,"DIV",{class:!0});var Co=C(as);xs=te(Co,s[14]),Co.forEach(g),wa.forEach(g),sa=M(ue),Bi=b(ue,"DIV",{class:!0});var Sa=C(Bi);qi=b(Sa,"DIV",{class:!0,"data-svelte-h":!0}),K(qi)!=="svelte-1fnad0n"&&(qi.textContent=no),os=b(Sa,"DIV",{class:!0});var ko=C(os);Rs=te(ko,s[15]),ko.forEach(g),Sa.forEach(g),aa=M(ue),Wi=b(ue,"DIV",{class:!0,"data-svelte-h":!0}),K(Wi)!=="svelte-7gmbxc"&&(Wi.textContent=co),oa=M(ue);for(let Yi=0;Yi<Pt.length;Yi+=1)Pt[Yi].l(ue);Us=M(ue),ji=b(ue,"DIV",{class:!0,"data-svelte-h":!0}),K(ji)!=="svelte-zzbumo"&&(ji.textContent=ho),ra=M(ue);for(let Yi=0;Yi<Nt.length;Yi+=1)Nt[Yi].l(ue);Os=M(ue),Si=b(ue,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),K(Si)!=="svelte-19369qr"&&(Si.textContent=fo),ue.forEach(g),this.h()},h(){f(i,"class","debug-label svelte-1yramsp"),f(r,"class","debug-val svelte-1yramsp"),f(t,"class","debug-row svelte-1yramsp"),f(d,"class","debug-label svelte-1yramsp"),f(u,"class","debug-val svelte-1yramsp"),f(n,"class","debug-row svelte-1yramsp"),f(y,"class","debug-label svelte-1yramsp"),f(D,"class","debug-val svelte-1yramsp"),f(v,"class","debug-row svelte-1yramsp"),f(T,"class","debug-label svelte-1yramsp"),f(j,"class","debug-val svelte-1yramsp"),f(E,"class","debug-row svelte-1yramsp"),f($,"class","debug-section svelte-1yramsp"),f(V,"class","debug-label svelte-1yramsp"),f(k,"class","debug-val svelte-1yramsp"),f(q,"class","debug-row svelte-1yramsp"),f(le,"class","debug-label svelte-1yramsp"),f(ye,"class","debug-val svelte-1yramsp"),f(oe,"class","debug-row svelte-1yramsp"),f(Y,"class","debug-label svelte-1yramsp"),f(J,"class","debug-val svelte-1yramsp"),f(ce,"class","debug-row svelte-1yramsp"),f(He,"class","debug-section svelte-1yramsp"),f(et,"class","debug-label svelte-1yramsp"),f(Vt,"class","debug-val svelte-1yramsp"),f(dt,"class","debug-row svelte-1yramsp"),f(St,"class","debug-label svelte-1yramsp"),f(jt,"class","debug-val svelte-1yramsp"),f(Tt,"class","debug-row svelte-1yramsp"),f(ft,"class","debug-label svelte-1yramsp"),f(Dt,"class","debug-val svelte-1yramsp"),f(yt,"class","debug-row svelte-1yramsp"),f(Ze,"class","debug-label svelte-1yramsp"),f(ct,"class","debug-val svelte-1yramsp"),f(je,"class","debug-row svelte-1yramsp"),f(Zt,"class","debug-label svelte-1yramsp"),f(ii,"class","debug-val svelte-1yramsp"),f(Ot,"class","debug-row svelte-1yramsp"),f(wi,"class","debug-label svelte-1yramsp"),f(ut,"class","debug-val svelte-1yramsp"),f(yi,"class","debug-row svelte-1yramsp"),f(Hi,"class","debug-label svelte-1yramsp"),f(ss,"class","debug-val svelte-1yramsp"),f(Vi,"class","debug-row svelte-1yramsp"),f(zi,"class","debug-section svelte-1yramsp"),f(Gi,"class","debug-label svelte-1yramsp"),f(as,"class","debug-val svelte-1yramsp"),f(Fi,"class","debug-row svelte-1yramsp"),f(qi,"class","debug-label svelte-1yramsp"),f(os,"class","debug-val svelte-1yramsp"),f(Bi,"class","debug-row svelte-1yramsp"),f(Wi,"class","debug-section svelte-1yramsp"),f(ji,"class","debug-section svelte-1yramsp"),f(Si,"class","debug-row debug-label svelte-1yramsp"),re(Si,"font-style","italic"),re(Si,"margin-top","1rem"),f(e,"class","debug-cont svelte-1yramsp")},m(Ie,ue){P(Ie,e,ue),c(e,t),c(t,i),c(t,r),c(r,o),c(e,l),c(e,n),c(n,d),c(n,u),c(u,m),c(e,p),c(e,v),c(v,y),c(v,D),c(D,L),c(e,A),c(e,E),c(E,T),c(E,j),c(j,X),c(e,O),c(e,$),c(e,U),c(e,q),c(q,V),c(q,k),c(k,B),c(e,se),c(e,oe),c(oe,le),c(oe,ye),c(ye,Q),c(e,ae),c(e,ce),c(ce,Y),c(ce,J),c(J,Ee),c(e,ze),c(e,He),c(e,$e),c(e,dt),c(dt,et),c(dt,Vt),c(Vt,we),c(e,st),c(e,Tt),c(Tt,St),c(Tt,jt),c(jt,hi),c(e,ht),c(e,yt),c(yt,ft),c(yt,Dt),c(Dt,fi),c(Dt,pt),c(e,gt),c(e,je),c(je,Ze),c(je,ct),c(ct,Ht),c(e,ki),c(e,Ot),c(Ot,Zt),c(Ot,ii),c(ii,si),c(e,bi),c(e,yi),c(yi,wi),c(yi,ut),c(ut,Ps),c(e,ea),c(e,Vi),c(Vi,Hi),c(Vi,ss),c(ss,Ns),c(e,ta),c(e,zi),c(e,ia),c(e,Fi),c(Fi,Gi),c(Fi,as),c(as,xs),c(e,sa),c(e,Bi),c(Bi,qi),c(Bi,os),c(os,Rs),c(e,aa),c(e,Wi),c(e,oa);for(let Pe=0;Pe<Pt.length;Pe+=1)Pt[Pe]&&Pt[Pe].m(e,null);c(e,Us),c(e,ji),c(e,ra);for(let Pe=0;Pe<Nt.length;Pe+=1)Nt[Pe]&&Nt[Pe].m(e,null);c(e,Os),c(e,Si)},p(Ie,[ue]){if(ue&1&&be(o,Ie[0]),ue&2&&be(m,Ie[1]),ue&4&&be(L,Ie[2]),ue&8&&be(X,Ie[3]),ue&16&&N!==(N=Ie[4].i+"")&&be(B,N),ue&32&&ge!==(ge=Ie[5].i+"")&&be(Q,ge),ue&64&&me!==(me=Ie[6].i+"")&&be(Ee,me),ue&128&&be(we,Ie[7]),ue&256&&be(hi,Ie[8]),ue&512&&be(fi,Ie[9]),ue&1024&&be(Ht,Ie[10]),ue&2048&&be(si,Ie[11]),ue&4096&&be(Ps,Ie[12]),ue&8192&&be(Ns,Ie[13]),ue&16384&&be(xs,Ie[14]),ue&32768&&be(Rs,Ie[15]),ue&65536){rs=Oe(Object.entries(Ie[16]));let Pe;for(Pe=0;Pe<rs.length;Pe+=1){const Ii=hl(Ie,rs,Pe);Pt[Pe]?Pt[Pe].p(Ii,ue):(Pt[Pe]=fl(Ii),Pt[Pe].c(),Pt[Pe].m(e,Us))}for(;Pe<Pt.length;Pe+=1)Pt[Pe].d(1);Pt.length=rs.length}if(ue&131072){ls=Oe(Object.entries(Ie[17]));let Pe;for(Pe=0;Pe<ls.length;Pe+=1){const Ii=cl(Ie,ls,Pe);Nt[Pe]?Nt[Pe].p(Ii,ue):(Nt[Pe]=ul(Ii),Nt[Pe].c(),Nt[Pe].m(e,Os))}for(;Pe<Nt.length;Pe+=1)Nt[Pe].d(1);Nt.length=ls.length}},i:ve,o:ve,d(Ie){Ie&&g(e),bt(Pt,Ie),bt(Nt,Ie)}}}function Hu(s,e,t){let i,a,r,o,l,n,d,h,u,m,p,v,y,w,D,L,A,E;return Ce(s,on,T=>t(0,i=T)),Ce(s,tn,T=>t(1,a=T)),Ce(s,sn,T=>t(2,r=T)),Ce(s,an,T=>t(3,o=T)),Ce(s,Xa,T=>t(4,l=T)),Ce(s,en,T=>t(5,n=T)),Ce(s,$l,T=>t(6,d=T)),Ce(s,rn,T=>t(7,h=T)),Ce(s,ln,T=>t(8,u=T)),Ce(s,ad,T=>t(9,m=T)),Ce(s,Ka,T=>t(10,p=T)),Ce(s,Ql,T=>t(11,v=T)),Ce(s,Zl,T=>t(12,y=T)),Ce(s,Jl,T=>t(13,w=T)),Ce(s,Qa,T=>t(14,D=T)),Ce(s,Ta,T=>t(15,L=T)),Ce(s,od,T=>t(16,A=T)),Ce(s,rd,T=>t(17,E=T)),[i,a,r,o,l,n,d,h,u,m,p,v,y,w,D,L,A,E]}class zu extends Ke{constructor(e){super(),Xe(this,e,Hu,Vu,Ye,{})}}function Fu(s){let e,t,i,a,r;return{c(){e=_("div"),t=Vs("svg"),i=Vs("g"),a=Vs("polyline"),r=Vs("circle"),this.h()},l(o){e=b(o,"DIV",{id:!0,style:!0,class:!0});var l=C(e);t=Hs(l,"svg",{viewBox:!0,width:!0,height:!0});var n=C(t);i=Hs(n,"g",{transform:!0});var d=C(i);a=Hs(d,"polyline",{style:!0,points:!0,transform:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,fill:!0}),C(a).forEach(g),r=Hs(d,"circle",{fill:!0,r:!0}),C(r).forEach(g),d.forEach(g),n.forEach(g),l.forEach(g),this.h()},h(){re(a,"filter","drop-shadow( 0px 0px 6px var(--sr-white) )"),f(a,"points",""),f(a,"transform","translate(0 0)"),f(a,"stroke","var(--sr-white)"),f(a,"stroke-width",10),f(a,"stroke-linecap","round"),f(a,"fill","none"),f(r,"fill","var(--sr-primary)"),f(r,"r","2"),f(i,"transform","translate(80 96) scale(-0.5 -0.5)"),f(t,"viewBox","0 0 160 160"),f(t,"width","100%"),f(t,"height","100%"),f(e,"id","upcoming-container"),re(e,"opacity",s[1]?"1":"0"),f(e,"class","svelte-1wl5x4o"),R(e,"upcoming-top",s[0]==1),R(e,"upcoming-bottom",s[0]==0)},m(o,l){P(o,e,l),c(e,t),c(t,i),c(i,a),s[5](a),c(i,r),s[6](r),s[7](t)},p(o,[l]){l&2&&re(e,"opacity",o[1]?"1":"0"),l&1&&R(e,"upcoming-top",o[0]==1),l&1&&R(e,"upcoming-bottom",o[0]==0)},i:ve,o:ve,d(o){o&&g(e),s[5](null),s[6](null),s[7](null)}}}const Ea=16,ns=16;function Gu(s,e,t){let{position:i=1}=e,a=!0,r,o,l,n;const d=1/ns;class h{constructor(D,L,A,E){F(this,"svg");F(this,"lineDOM");F(this,"underlineDOM");F(this,"points");F(this,"origin",{x:0,z:0});F(this,"seenIndex",0);F(this,"loadedNode",null);F(this,"baseA");F(this,"subNode",0);F(this,"angles",[]);F(this,"pos",{x:0,y:0});F(this,"ticking",!1);F(this,"onLoadProgressBound",this.onLoadProgress.bind(this));F(this,"lerp");F(this,"i");F(this,"l");F(this,"l1");F(this,"p");F(this,"pA");F(this,"tA");F(this,"transform");F(this,"progressCounter",0);F(this,"tickTimer",0);F(this,"onTickBound",this.tick.bind(this));this.svg=D,this.underlineDOM=L,this.lineDOM=A,this.points=this.lineDOM.points,this.circleDOM=E,this.loadedNode=Me.vehicleNode,this.seenIndex=Me.vehicleNode.i,this.baseA=Me.vehicleNode.a,this.angles.push(this.baseA),this.pA=this.baseA,this.pos.x=this.loadedNode.p.x,this.pos.y=this.loadedNode.p.z,di.addListener(this.onLoadProgressBound),this.onLoadProgress(di.value)}onLoadProgress(D){D<1&&this.ticking?(Je.removeSlowListener(this.onTickBound),this.ticking=!1):this.ticking||(Je.addSlowListener(this.onTickBound),this.ticking=!0)}makePoint(D,L){let A=this.svg.createSVGPoint();return A.x=D,A.y=L,A}destroy(){Je.removeSlowListener(this.onTickBound),di.removeListener(this.onLoadProgressBound)}tick(){if(this.lerp=Math.floor(Pd(H.position.x,H.position.z,Me.vehicleNode)*ns),!(this.loadedNode.i==Me.vehicleNode.i+Ea&&this.lerp<=this.subNode)){for(;this.loadedNode.i<Me.vehicleNode.i+Ea;){for(this.i=this.subNode;this.i<ns;this.i++)this.l=this.i/ns,this.l1=1-this.l,this.p=this.makePoint(this.loadedNode.p.x*this.l1+this.loadedNode.next.p.x*this.l,this.loadedNode.p.z*this.l1+this.loadedNode.next.p.z*this.l),this.points.appendItem(this.p),this.baseA-=this.loadedNode.next.da*d,this.angles.push(this.baseA);this.loadedNode=this.loadedNode.next,this.progressCounter++,this.progressCounter>100&&Math.abs(this.loadedNode.a-this.baseA)<.1&&(this.baseA=this.loadedNode.a,this.progressCounter=0),this.subNode=0}for(this.i=this.subNode;this.i<this.lerp;this.i++)this.l=this.i/ns,this.l1=1-this.l,this.p=this.makePoint(this.loadedNode.p.x*this.l1+this.loadedNode.next.p.x*this.l,this.loadedNode.p.z*this.l1+this.loadedNode.next.p.z*this.l),this.points.appendItem(this.p),this.baseA-=this.loadedNode.next.da*d,this.angles.push(this.baseA);for(this.subNode=this.lerp;this.points.length>Ea*ns;)this.points.removeItem(0),this.angles.shift(),this.pos=this.points.getItem(0)}this.pA=this.pA*.95+this.angles[0]*.05,this.transform="rotate("+(90-this.pA*180/Math.PI)+")",this.transform+=" translate("+this.pos.x*-1+" "+this.pos.y*-1+")",this.lineDOM.setAttribute("transform",this.transform),this.circleDOM.setAttribute("cx",this.pos.x),this.circleDOM.setAttribute("cy",this.pos.y),this.circleDOM.setAttribute("transform",this.transform)}}function u(){t(1,a=ne.showUpcomingRoad==Mo.ALWAYS||ne.showUpcomingRoad==Mo.MANUAL&&!Ft.value)}let m=null;nt(()=>(m||(m=new h(r,o,l,n)),ne.addListener("showUpcomingRoad",u),Ft.addListener(u),()=>{m&&m.destroy(),ne.removeListener("showUpcomingRoad",u),Ft.addListener(u)}));function p(w){wt[w?"unshift":"push"](()=>{l=w,t(3,l)})}function v(w){wt[w?"unshift":"push"](()=>{n=w,t(4,n)})}function y(w){wt[w?"unshift":"push"](()=>{r=w,t(2,r)})}return s.$$set=w=>{"position"in w&&t(0,i=w.position)},[i,a,r,l,n,p,v,y]}class Bu extends Ke{constructor(e){super(),Xe(this,e,Gu,Fu,Ye,{position:0})}}function vl(s){let e,t,i,a,r,o=s[1]==!1&&gl(s),l=s[0]==Te.UTurn&&bl(),n=s[0]==Te.Onward&&yl();return{c(){e=_("div"),o&&o.c(),t=I(),l&&l.c(),i=I(),n&&n.c(),this.h()},l(d){e=b(d,"DIV",{class:!0});var h=C(e);o&&o.l(h),t=M(h),l&&l.l(h),i=M(h),n&&n.l(h),h.forEach(g),this.h()},h(){f(e,"class","prompt-main svelte-1bwut3z")},m(d,h){P(d,e,h),o&&o.m(e,null),c(e,t),l&&l.m(e,null),c(e,i),n&&n.m(e,null),r=!0},p(d,h){d[1]==!1?o?o.p(d,h):(o=gl(d),o.c(),o.m(e,t)):o&&(o.d(1),o=null),d[0]==Te.UTurn?l||(l=bl(),l.c(),l.m(e,i)):l&&(l.d(1),l=null),d[0]==Te.Onward?n||(n=yl(),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},i(d){r||(d&&Ci(()=>{r&&(a||(a=ei(e,At,{duration:500},!0)),a.run(1))}),r=!0)},o(d){d&&(a||(a=ei(e,At,{duration:500},!1)),a.run(0)),r=!1},d(d){d&&g(e),o&&o.d(),l&&l.d(),n&&n.d(),d&&a&&a.end()}}}function gl(s){let e,t,i,a=s[0]==Te.Intro&&ml(s),r=s[0]==Te.Reset&&pl(),o=s[0]==Te.Boost&&_l();return{c(){a&&a.c(),e=I(),r&&r.c(),t=I(),o&&o.c(),i=De()},l(l){a&&a.l(l),e=M(l),r&&r.l(l),t=M(l),o&&o.l(l),i=De()},m(l,n){a&&a.m(l,n),P(l,e,n),r&&r.m(l,n),P(l,t,n),o&&o.m(l,n),P(l,i,n)},p(l,n){l[0]==Te.Intro?a||(a=ml(l),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null),l[0]==Te.Reset?r||(r=pl(),r.c(),r.m(t.parentNode,t)):r&&(r.d(1),r=null),l[0]==Te.Boost?o||(o=_l(),o.c(),o.m(i.parentNode,i)):o&&(o.d(1),o=null)},d(l){l&&(g(e),g(t),g(i)),a&&a.d(l),r&&r.d(l),o&&o.d(l)}}}function ml(s){let e,t,i='<div class="prompt-intro-key-group svelte-1bwut3z" style="margin-top: -5.5rem; margin-bottom: 0.2rem"><div class="prompt-indicator prompt-key svelte-1bwut3z">W</div></div> <div class="prompt-intro-key-group svelte-1bwut3z" style="gap: 0.2rem"><div class="prompt-indicator prompt-key svelte-1bwut3z">A</div> <div class="prompt-indicator prompt-key svelte-1bwut3z">S</div> <div class="prompt-indicator prompt-key svelte-1bwut3z">D</div></div> <div class="prompt-label svelte-1bwut3z">Drive</div>',a,r,o,l='<div class="prompt-intro-key-group svelte-1bwut3z"><div class="prompt-indicator prompt-key svelte-1bwut3z">Q</div> <div class="prompt-indicator prompt-key svelte-1bwut3z">E</div></div> <div class="prompt-label svelte-1bwut3z">Change scene</div>';function n(u,m){return qu}let h=n()(s);return{c(){e=_("div"),t=_("div"),t.innerHTML=i,a=I(),h.c(),r=I(),o=_("div"),o.innerHTML=l,this.h()},l(u){e=b(u,"DIV",{class:!0});var m=C(e);t=b(m,"DIV",{class:!0,"data-svelte-h":!0}),K(t)!=="svelte-1bhx1mg"&&(t.innerHTML=i),a=M(m),h.l(m),r=M(m),o=b(m,"DIV",{class:!0,"data-svelte-h":!0}),K(o)!=="svelte-ipq03a"&&(o.innerHTML=l),m.forEach(g),this.h()},h(){f(t,"class","prompt-intro-group svelte-1bwut3z"),f(o,"class","prompt-intro-group svelte-1bwut3z"),f(e,"class","prompt-intro svelte-1bwut3z")},m(u,m){P(u,e,m),c(e,t),c(e,a),h.m(e,null),c(e,r),c(e,o)},d(u){u&&g(e),h.d()}}}function qu(s){let e,t='<div class="prompt-indicator prompt-key svelte-1bwut3z">F</div> <div class="prompt-label svelte-1bwut3z">Autodrive</div>';return{c(){e=_("div"),e.innerHTML=t,this.h()},l(i){e=b(i,"DIV",{class:!0,"data-svelte-h":!0}),K(e)!=="svelte-14wluom"&&(e.innerHTML=t),this.h()},h(){f(e,"class","prompt-intro-group svelte-1bwut3z")},m(i,a){P(i,e,a)},d(i){i&&g(e)}}}function pl(s){let e,t="R",i,a,r="Return to the road";return{c(){e=_("div"),e.textContent=t,i=I(),a=_("div"),a.textContent=r,this.h()},l(o){e=b(o,"DIV",{class:!0,"data-svelte-h":!0}),K(e)!=="svelte-10ltmgr"&&(e.textContent=t),i=M(o),a=b(o,"DIV",{class:!0,"data-svelte-h":!0}),K(a)!=="svelte-191j6e8"&&(a.textContent=r),this.h()},h(){f(e,"class","prompt-indicator prompt-key svelte-1bwut3z"),f(a,"class","prompt-label svelte-1bwut3z")},m(o,l){P(o,e,l),P(o,i,l),P(o,a,l)},d(o){o&&(g(e),g(i),g(a))}}}function _l(s){let e,t="Shift",i,a,r="Hold to boost";return{c(){e=_("div"),e.textContent=t,i=I(),a=_("div"),a.textContent=r,this.h()},l(o){e=b(o,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),K(e)!=="svelte-1io7xvc"&&(e.textContent=t),i=M(o),a=b(o,"DIV",{class:!0,"data-svelte-h":!0}),K(a)!=="svelte-x75hd1"&&(a.textContent=r),this.h()},h(){f(e,"class","prompt-indicator prompt-key svelte-1bwut3z"),re(e,"max-width","100%"),f(a,"class","prompt-label svelte-1bwut3z")},m(o,l){P(o,e,l),P(o,i,l),P(o,a,l)},d(o){o&&(g(e),g(i),g(a))}}}function bl(s){let e,t='<img class="prompt-icon-img svelte-1bwut3z" alt="" src="/img/ico_uturn.svg"/>',i,a,r="Turn back";return{c(){e=_("div"),e.innerHTML=t,i=I(),a=_("div"),a.textContent=r,this.h()},l(o){e=b(o,"DIV",{class:!0,"data-svelte-h":!0}),K(e)!=="svelte-1d3i2xq"&&(e.innerHTML=t),i=M(o),a=b(o,"DIV",{class:!0,"data-svelte-h":!0}),K(a)!=="svelte-138exdi"&&(a.textContent=r),this.h()},h(){f(e,"class","prompt-indicator prompt-icon svelte-1bwut3z"),f(a,"class","prompt-label svelte-1bwut3z")},m(o,l){P(o,e,l),P(o,i,l),P(o,a,l)},d(o){o&&(g(e),g(i),g(a))}}}function yl(s){let e,t='<img class="prompt-icon-img svelte-1bwut3z" alt="" src="/img/ico_onwards.svg"/>',i,a,r="Ever onward";return{c(){e=_("div"),e.innerHTML=t,i=I(),a=_("div"),a.textContent=r,this.h()},l(o){e=b(o,"DIV",{class:!0,"data-svelte-h":!0}),K(e)!=="svelte-1jx2teq"&&(e.innerHTML=t),i=M(o),a=b(o,"DIV",{class:!0,"data-svelte-h":!0}),K(a)!=="svelte-miq92b"&&(a.textContent=r),this.h()},h(){f(e,"class","prompt-indicator prompt-icon svelte-1bwut3z"),f(a,"class","prompt-label svelte-1bwut3z")},m(o,l){P(o,e,l),P(o,i,l),P(o,a,l)},d(o){o&&(g(e),g(i),g(a))}}}function Wu(s){let e,t=s[0]>Te.None&&vl(s);return{c(){t&&t.c(),e=De()},l(i){t&&t.l(i),e=De()},m(i,a){t&&t.m(i,a),P(i,e,a)},p(i,[a]){i[0]>Te.None?t?(t.p(i,a),a&1&&W(t,1)):(t=vl(i),t.c(),W(t,1),t.m(e.parentNode,e)):t&&(Fe(),ie(t,1,1,()=>{t=null}),Ge())},i(i){W(t)},o(i){ie(t)},d(i){i&&g(e),t&&t.d(i)}}}function ju(s,e,t){let i;Ce(s,ti,r=>t(1,i=r));let a=Te.None;return nt(()=>{function r(o){t(0,a=o)}return tt.addListener(r),()=>{tt.removeListener(r)}}),[a,i]}class Yu extends Ke{constructor(e){super(),Xe(this,e,ju,Wu,Ye,{})}}function Ku(s){let e,t=`<br class="svelte-nq8k2y"/>
                        The live event has now ended and leaderboards are disabled.<br class="svelte-nq8k2y"/><br class="svelte-nq8k2y"/>
                        Join the Discord server to be notified of the next one!`;return{c(){e=_("div"),e.innerHTML=t,this.h()},l(i){e=b(i,"DIV",{class:!0,"data-svelte-h":!0}),K(e)!=="svelte-1r85705"&&(e.innerHTML=t),this.h()},h(){f(e,"class","splash-minititle svelte-nq8k2y")},m(i,a){P(i,e,a)},d(i){i&&g(e)}}}function wl(s){let e,t,i;return{c(){e=_("div"),t=I(),i=_("div"),this.h()},l(a){e=b(a,"DIV",{id:!0,class:!0}),C(e).forEach(g),t=M(a),i=b(a,"DIV",{id:!0,class:!0}),C(i).forEach(g),this.h()},h(){f(e,"id","splash-bg-overlay"),f(e,"class","svelte-nq8k2y"),f(i,"id","splash-bg"),f(i,"class","svelte-nq8k2y")},m(a,r){P(a,e,r),P(a,t,r),P(a,i,r)},d(a){a&&(g(e),g(t),g(i))}}}function Xu(s){let e,t,i,a,r,o,l,n,d,h,u="Driftmas 2025",m,p,v,y=s[6]?"continue":"begin",w,D,L,A,E,T,x,j,X,O,$="CC BY-NC-ND 4.0 International License",Z,U,q='from <a class="splash-smallprint-link svelte-nq8k2y" href="https://topograph.io" target="_blank" rel="noopener noreferrer">topograph.io</a> © 2025',V,z,k=`<a target="_blank" rel="noopener noreferrer" href="https://discord.gg/TNf9bBrZmR" alt="" class="splash-main-button svelte-nq8k2y"><img src="/img/icon_discord_white.svg" alt="" class="splash-main-button-icon svelte-nq8k2y"/> <br class="svelte-nq8k2y"/>
                    Join the Discord</a> <a href="#about" class="splash-main-button svelte-nq8k2y" style="padding-top: 2rem;"><span style="font-size: 1.5rem" class="svelte-nq8k2y">Rules &amp; Prizes</span> <br class="svelte-nq8k2y"/> <span style="font-size: 2rem" class="svelte-nq8k2y">▾</span></a> <a target="_blank" rel="noopener noreferrer" href="https://store.steampowered.com/app/3431300/Slow_Roads/" alt="" class="splash-main-button svelte-nq8k2y"><img src="/img/icon_steam_white.svg" alt="" class="splash-main-button-icon svelte-nq8k2y"/> <br class="svelte-nq8k2y"/>
                    Wishlist on Steam</a>`,N,B,se=`<div class="splash-body-section svelte-nq8k2y" style="background: var(--sr-black);"><div class="splash-body-wrapper svelte-nq8k2y" style="margin: 5rem 0"><div class="splash-blurb-corner-tl svelte-nq8k2y"></div> <div class="splash-blurb-corner-tr svelte-nq8k2y"></div> <div class="splash-blurb svelte-nq8k2y"><strong class="svelte-nq8k2y">Driftmas</strong> is the annual Slow Roads winter rally event. Compete to set the fastest time on the extra-slippery 5km track for a chance to win prizes and immortalisation in the game!</div> <div class="splash-blurb-corner-bl svelte-nq8k2y"></div> <div class="splash-blurb-corner-br svelte-nq8k2y"></div></div></div> <div class="splash-body-section svelte-nq8k2y" style="background: var(--sr-black-50)"><div class="splash-body-wrapper svelte-nq8k2y"><div class="splash-body-header svelte-nq8k2y">The event is now over!</div> <div class="splash-body-text svelte-nq8k2y">Congratulations to the winners! This year&#39;s event was by far the biggest, with <strong class="svelte-nq8k2y">over 3,800</strong> taking part, completing <strong class="svelte-nq8k2y">over 8,500</strong> runs, and making <strong class="svelte-nq8k2y">over 75,000</strong> attempts. Thanks to all for taking part!
                        <br class="svelte-nq8k2y"/> <br class="svelte-nq8k2y"/>
                        The server will remain active for the rest of January, at which point this page will be retired to an offline version.
                        <br class="svelte-nq8k2y"/> <br class="svelte-nq8k2y"/>
                        More community events are planned for the future - make sure you join the Discord server to be notified and take part!
                        <br class="svelte-nq8k2y"/> <br class="svelte-nq8k2y"/>
                        You can try the previous events here:
                        <br class="svelte-nq8k2y"/> <br class="svelte-nq8k2y"/>
                         - <a class="splash-body-link svelte-nq8k2y" href="https://driftmas24.slowroads.io">Driftmas 2024</a><br class="svelte-nq8k2y"/>
                         - <a class="splash-body-link svelte-nq8k2y" href="https://driftmas23.slowroads.io">Driftmas 2023</a><br class="svelte-nq8k2y"/>
                         - <a class="splash-body-link svelte-nq8k2y" href="https://driftmas22.slowroads.io">Driftmas 2022</a><br class="svelte-nq8k2y"/></div></div></div> <div class="splash-body-section svelte-nq8k2y" style="background: var(--sr-black)"><div class="splash-body-wrapper svelte-nq8k2y" style="text-align: center; font-size: 1.1rem;"><div class="splash-body-header svelte-nq8k2y">Champions</div> <div class="splash-two-cols svelte-nq8k2y"><div class="splash-col svelte-nq8k2y"><div class="splash-body-text lb-header svelte-nq8k2y">GAMEPAD</div> <div class="splash-body-text svelte-nq8k2y"><div class="splash-prize svelte-nq8k2y" style="color: #f5d442">- 1st Place -</div> <span class="lb-time svelte-nq8k2y"><span class="lb-name svelte-nq8k2y">NIIOH</span><br class="svelte-nq8k2y"/>03:23:946</span></div> <div class="splash-body-text svelte-nq8k2y"><div class="splash-prize svelte-nq8k2y" style="color: #cdd1d4">- 2nd Place -</div> <span class="lb-time svelte-nq8k2y"><span class="lb-name svelte-nq8k2y">meehdrescherstudios</span><br class="svelte-nq8k2y"/>03:25:640</span></div> <div class="splash-body-text svelte-nq8k2y"><div class="splash-prize svelte-nq8k2y" style="color: #e37c2d">- 3rd Place -</div> <span class="lb-time svelte-nq8k2y"><span class="lb-name svelte-nq8k2y">mattsg</span><br class="svelte-nq8k2y"/>03:27:633</span></div></div> <div class="splash-col svelte-nq8k2y"><div class="splash-body-text lb-header svelte-nq8k2y">KEYBOARD + MOUSE</div> <div class="splash-body-text svelte-nq8k2y"><div class="splash-prize svelte-nq8k2y" style="color: #f5d442">- 1st Place -</div> <span class="lb-time svelte-nq8k2y"><span class="lb-name svelte-nq8k2y">drift__</span><br class="svelte-nq8k2y"/>03:25:274</span></div> <div class="splash-body-text svelte-nq8k2y"><div class="splash-prize svelte-nq8k2y" style="color: #cdd1d4">- 2nd Place -</div> <span class="lb-time svelte-nq8k2y"><span class="lb-name svelte-nq8k2y">AccountableMenace</span><br class="svelte-nq8k2y"/>03:27:321</span></div> <div class="splash-body-text svelte-nq8k2y"><div class="splash-prize svelte-nq8k2y" style="color: #e37c2d">- 3rd Place -</div> <span class="lb-time svelte-nq8k2y"><span class="lb-name svelte-nq8k2y">Ena</span><br class="svelte-nq8k2y"/>03:28:909</span></div></div></div> <br class="svelte-nq8k2y"/> <div class="splash-body-text svelte-nq8k2y" style="font-style: italic; font-size: 0.9rem;">Champions receive Discord Nitro and the top 20 receive keys for the Steam release of Slow Roads!</div></div></div> <div class="splash-body-section svelte-nq8k2y" style="background: var(--sr-black-50)"><div class="splash-body-wrapper svelte-nq8k2y"><div class="splash-body-header svelte-nq8k2y">Tips &amp; Tricks</div> <div class="splash-body-bullets svelte-nq8k2y"><div class="splash-body-bullet svelte-nq8k2y">Deep snow will drag your wheels - try to stay central in the road and avoid berms</div> <div class="splash-body-bullet svelte-nq8k2y">Try to drive slowly and steadily to minimise crashes</div> <div class="splash-body-bullet svelte-nq8k2y">Avoid braking while turning - brake early and accelerate through the corner</div> <div class="splash-body-bullet svelte-nq8k2y">Tap the handbrake to kick the rear out into a turn</div> <div class="splash-body-bullet svelte-nq8k2y">Combine the handbrake with regular braking to slow more quickly</div> <div class="splash-body-bullet svelte-nq8k2y">Braking early and steering around a corner is usually faster than skidding</div> <div class="splash-body-bullet svelte-nq8k2y">Don&#39;t forget you can tweak control settings to your liking</div> <div class="splash-body-bullet svelte-nq8k2y">Don&#39;t forget there is a boost button</div> <div class="splash-body-bullet svelte-nq8k2y">If you make a mistake, complete the run anyway; the best practice is through repetition of the whole route</div> <div class="splash-body-bullet svelte-nq8k2y">If you keep crashing, focus on completing entire runs slowly and carefully before gradually increasing speed</div> <div class="splash-body-bullet svelte-nq8k2y">Different camera angles or settings may feel easier to control - try a few alternatives</div> <div class="splash-body-bullet svelte-nq8k2y">Different weathers do not have different physics conditions but can affect visibility - see which you prefer (use Q and E to switch)</div> <div class="splash-body-bullet svelte-nq8k2y">Bored of the normal route? Add #samtfird to the end of the URL and refresh the page for an inverted route. You can also try #nosnow or #allsnow.</div></div></div></div>`,oe,le,pe,ye,ge=Ku(),Q=!s[6]&&wl();return{c(){e=_("div"),t=_("div"),i=_("div"),a=_("canvas"),r=I(),o=_("div"),l=_("img"),d=I(),h=_("div"),h.textContent=u,m=I(),p=I(),v=_("div"),w=ee(y),D=I(),ge&&ge.c(),L=I(),A=_("div"),E=_("span"),T=ee(Xt),x=I(),j=_("br"),X=ee(`\r
                This work is licensed under a `),O=_("a"),O.textContent=$,Z=I(),U=_("div"),U.innerHTML=q,V=I(),z=_("div"),z.innerHTML=k,N=I(),B=_("div"),B.innerHTML=se,oe=I(),Q&&Q.c(),this.h()},l(ae){e=b(ae,"DIV",{id:!0,class:!0});var ce=C(e);t=b(ce,"DIV",{id:!0,class:!0});var Y=C(t);i=b(Y,"DIV",{id:!0,class:!0});var de=C(i);a=b(de,"CANVAS",{id:!0,class:!0}),C(a).forEach(g),r=M(de),o=b(de,"DIV",{id:!0,class:!0});var J=C(o);l=b(J,"IMG",{class:!0,src:!0,alt:!0}),d=M(J),h=b(J,"DIV",{class:!0,"data-svelte-h":!0}),K(h)!=="svelte-fudtz6"&&(h.textContent=u),m=M(J),p=M(J),v=b(J,"DIV",{id:!0,class:!0});var me=C(v);w=te(me,y),me.forEach(g),D=M(J),ge&&ge.l(J),J.forEach(g),L=M(de),A=b(de,"DIV",{class:!0});var Ee=C(A);E=b(Ee,"SPAN",{class:!0});var ze=C(E);T=te(ze,Xt),ze.forEach(g),x=M(Ee),j=b(Ee,"BR",{class:!0}),X=te(Ee,`\r
                This work is licensed under a `),O=b(Ee,"A",{rel:!0,class:!0,href:!0,target:!0,"data-svelte-h":!0}),K(O)!=="svelte-u8p6bq"&&(O.textContent=$),Ee.forEach(g),Z=M(de),U=b(de,"DIV",{class:!0,"data-svelte-h":!0}),K(U)!=="svelte-1078k7q"&&(U.innerHTML=q),V=M(de),z=b(de,"DIV",{class:!0,"data-svelte-h":!0}),K(z)!=="svelte-k9wub"&&(z.innerHTML=k),de.forEach(g),N=M(Y),B=b(Y,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),K(B)!=="svelte-1cn4vpt"&&(B.innerHTML=se),oe=M(Y),Q&&Q.l(Y),Y.forEach(g),ce.forEach(g),this.h()},h(){f(a,"id","splash-canvas"),f(a,"class","svelte-nq8k2y"),f(l,"class","splash-logo svelte-nq8k2y"),Rt(l.src,n="/img/logo-stacked-white.svg")||f(l,"src",n),f(l,"alt",""),f(h,"class","splash-subtitle svelte-nq8k2y"),f(v,"id","splash-begin"),f(v,"class","svelte-nq8k2y"),R(v,"dm-disabled",!s[4]),f(o,"id","splash-title"),f(o,"class","svelte-nq8k2y"),f(E,"class","splash-smallprint-link svelte-nq8k2y"),f(j,"class","svelte-nq8k2y"),f(O,"rel","license noopener noreferrer"),f(O,"class","splash-smallprint-link svelte-nq8k2y"),f(O,"href","http://creativecommons.org/licenses/by-nc-nd/4.0/"),f(O,"target","_blank"),f(A,"class","splash-smallprint splash-lr svelte-nq8k2y"),f(U,"class","splash-smallprint splash-ll svelte-nq8k2y"),f(z,"class","splash-main-buttons svelte-nq8k2y"),f(i,"id","splash-main"),f(i,"class","svelte-nq8k2y"),f(B,"id","about"),f(B,"class","svelte-nq8k2y"),f(t,"id",le=s[5]?"splash-dynamic":"splash-fixed"),f(t,"class","svelte-nq8k2y"),f(e,"id","splash"),f(e,"class","svelte-nq8k2y")},m(ae,ce){P(ae,e,ce),c(e,t),c(t,i),c(i,a),s[7](a),c(i,r),c(i,o),c(o,l),c(o,d),c(o,h),c(o,m),c(o,p),c(o,v),c(v,w),s[9](v),c(o,D),ge&&ge.m(o,null),c(i,L),c(i,A),c(A,E),c(E,T),c(A,x),c(A,j),c(A,X),c(A,O),c(i,Z),c(i,U),c(i,V),c(i,z),c(t,N),c(t,B),c(t,oe),Q&&Q.m(t,null),pe||(ye=[G(v,"touchstart",s[10],{passive:!0}),G(v,"click",s[11])],pe=!0)},p(ae,[ce]){ce&64&&y!==(y=ae[6]?"continue":"begin")&&be(w,y),ce&16&&R(v,"dm-disabled",!ae[4]),ae[6]?Q&&(Q.d(1),Q=null):Q||(Q=wl(),Q.c(),Q.m(t,null)),ce&32&&le!==(le=ae[5]?"splash-dynamic":"splash-fixed")&&f(t,"id",le)},i:ve,o:ve,d(ae){ae&&g(e),s[7](null),s[9](null),ge&&ge.d(),Q&&Q.d(),pe=!1,ot(ye)}}}function Qu(s,e,t){let i,a;Ce(s,ti,D=>t(5,i=D)),Ce(s,Ts,D=>t(6,a=D));let{toggleSplash:r=()=>{}}=e,o,l="Player",n,d=!0;function h(D){D.code=="Enter"&&o.click()}let u;nt(()=>{window.addEventListener("keydown",h),t(3,n.width=window.innerWidth,n),t(3,n.height=window.innerHeight,n);let D=window.innerWidth,L=window.innerHeight;u=n.getContext("2d"),u.globalAlpha=.8,u.globalCompositeOperation="lighter",u.fillStyle="white";const A=()=>{t(3,n.width=window.innerWidth,n),t(3,n.height=window.innerHeight,n),D=window.innerWidth,L=window.innerHeight};window.addEventListener("resize",A);let E=[],T=.5,x=.04+T*.06,j=.1+T*.3;for(let Z=0;Z<20+T*230;Z++)E.push({x:Math.random()*D,y:Math.random()*L,s:.5+Math.random()*4,t:Math.random()*Math.PI});let X=Date.now(),O;const $=()=>{if(!n)return;O=requestAnimationFrame(()=>$());let Z=Date.now()-X;X=Date.now(),u.clearRect(0,0,n.width,n.height);for(let U of E)U.y+=Z*U.s*x,U.x+=Z*U.s*Math.sin(U.t*U.s)*(j/10)+Z*j,U.t+=Z*.001,U.y>n.height&&(U.y-=n.height),U.x>n.width&&(U.x-=n.width),u.fillStyle="#fffb",u.beginPath(),u.arc(U.x,U.y,U.s,0,Math.PI*2),u.fill()};return $(),()=>{window.removeEventListener("keydown",h),cancelAnimationFrame(O),window.removeEventListener("resize",A)}});function m(D){wt[D?"unshift":"push"](()=>{n=D,t(3,n)})}function p(){l=this.value,t(1,l)}function v(D){wt[D?"unshift":"push"](()=>{o=D,t(2,o)})}const y=()=>{ne.set("touchscreen",!0)},w=()=>{d&&r()};return s.$$set=D=>{"toggleSplash"in D&&t(0,r=D.toggleSplash)},s.$$.update=()=>{s.$$.dirty&2&&(t(4,d=(l==null?void 0:l.length)>1),Nd.set("username",l),localStorage.setItem("username",l))},[r,l,o,n,d,i,a,m,p,v,y,w]}class Zu extends Ke{constructor(e){super(),Xe(this,e,Qu,Xu,Ye,{toggleSplash:0})}}function Sl(s,e,t){const i=s.slice();return i[13]=e[t],i}function Dl(s){let e,t="Progress is saved automatically";return{c(){e=_("span"),e.textContent=t,this.h()},l(i){e=b(i,"SPAN",{class:!0,"data-svelte-h":!0}),K(e)!=="svelte-f6s17h"&&(e.textContent=t),this.h()},h(){f(e,"class","splash-quit-msg svelte-bt03iy")},m(i,a){P(i,e,a)},d(i){i&&g(e)}}}function Ll(s){let e,t="Failed to initialise - please ensure your system supports WebGL2";return{c(){e=_("div"),e.textContent=t,this.h()},l(i){e=b(i,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),K(e)!=="svelte-jv3955"&&(e.textContent=t),this.h()},h(){f(e,"id","splash-error"),f(e,"class","svelte-bt03iy")},m(i,a){P(i,e,a)},d(i){i&&g(e)}}}function Ju(s){let e,t,i,a,r,o,l,n,d,h,u="See full details",m,p,v=Oe(s[3]),y=[];for(let w=0;w<v.length;w+=1)y[w]=Cl(Sl(s,v,w));return{c(){e=_("div"),t=ee("New version - "),i=ee(Xt),a=I(),r=_("hr"),o=I();for(let w=0;w<y.length;w+=1)y[w].c();l=I(),n=_("hr"),d=I(),h=_("div"),h.textContent=u,this.h()},l(w){e=b(w,"DIV",{class:!0});var D=C(e);t=te(D,"New version - "),i=te(D,Xt),a=M(D),r=b(D,"HR",{class:!0}),o=M(D);for(let L=0;L<y.length;L+=1)y[L].l(D);l=M(D),n=b(D,"HR",{class:!0}),d=M(D),h=b(D,"DIV",{class:!0,"data-svelte-h":!0}),K(h)!=="svelte-5v1n0f"&&(h.textContent=u),D.forEach(g),this.h()},h(){f(r,"class","svelte-bt03iy"),f(n,"class","svelte-bt03iy"),f(h,"class","splash-version-see-more svelte-bt03iy"),f(e,"class","splash-new-version svelte-bt03iy")},m(w,D){P(w,e,D),c(e,t),c(e,i),c(e,a),c(e,r),c(e,o);for(let L=0;L<y.length;L+=1)y[L]&&y[L].m(e,null);c(e,l),c(e,n),c(e,d),c(e,h),m||(p=G(h,"click",s[8]),m=!0)},p(w,D){if(D&8){v=Oe(w[3]);let L;for(L=0;L<v.length;L+=1){const A=Sl(w,v,L);y[L]?y[L].p(A,D):(y[L]=Cl(A),y[L].c(),y[L].m(e,l))}for(;L<y.length;L+=1)y[L].d(1);y.length=v.length}},d(w){w&&g(e),bt(y,w),m=!1,p()}}}function Cl(s){let e,t=s[13]+"",i;return{c(){e=_("div"),i=ee(t),this.h()},l(a){e=b(a,"DIV",{class:!0});var r=C(e);i=te(r,t),r.forEach(g),this.h()},h(){f(e,"class","splash-version-change svelte-bt03iy")},m(a,r){P(a,e,r),c(e,i)},p(a,r){r&8&&t!==(t=a[13]+"")&&be(i,t)},d(a){a&&g(e)}}}function $u(s){let e,t;return e=new An({props:{showChangelog:s[2],onShowChangelog:s[9]}}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,a){Re(e,i,a),t=!0},p(i,a){const r={};a&4&&(r.showChangelog=i[2]),a&4&&(r.onShowChangelog=i[9]),e.$set(r)},i(i){t||(W(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function ev(s){let e,t,i=`<img src="/img/icon_discord.svg" alt="" class="splash-main-button-icon svelte-bt03iy"/> <br/>
                    Join the Discord`,a,r,o=`<img src="/img/icon_steam.svg" alt="" class="splash-main-button-icon svelte-bt03iy"/> <br/>
                    Wishlist the Steam edition`,l,n;return{c(){e=_("div"),t=_("div"),t.innerHTML=i,a=I(),r=_("div"),r.innerHTML=o,this.h()},l(d){e=b(d,"DIV",{class:!0});var h=C(e);t=b(h,"DIV",{class:!0,"data-svelte-h":!0}),K(t)!=="svelte-x64jut"&&(t.innerHTML=i),a=M(h),r=b(h,"DIV",{class:!0,"data-svelte-h":!0}),K(r)!=="svelte-3mnzb7"&&(r.innerHTML=o),h.forEach(g),this.h()},h(){f(t,"class","splash-main-button svelte-bt03iy"),f(r,"class","splash-main-button svelte-bt03iy"),f(e,"class","splash-main-buttons svelte-bt03iy")},m(d,h){P(d,e,h),c(e,t),c(e,a),c(e,r),l||(n=[G(t,"click",s[10]),G(r,"click",s[11])],l=!0)},p:ve,d(d){d&&g(e),l=!1,ot(n)}}}function kl(s){let e,t,i;return{c(){e=_("div"),t=I(),i=_("div"),this.h()},l(a){e=b(a,"DIV",{id:!0,class:!0}),C(e).forEach(g),t=M(a),i=b(a,"DIV",{id:!0,class:!0}),C(i).forEach(g),this.h()},h(){f(e,"id","splash-bg-overlay"),f(e,"class","svelte-bt03iy"),f(i,"id","splash-bg"),f(i,"class","svelte-bt03iy")},m(a,r){P(a,e,r),P(a,t,r),P(a,i,r)},d(a){a&&(g(e),g(t),g(i))}}}function tv(s){let e,t,i,a,r,o,l,n,d="web edition",h,u,m,p=s[4]?"continue":"begin",v,y,w,D="quit",L,A,E,T,x,j,X,O,$,Z,U,q=`from <strong>topograph.io</strong> © 2026 	
                <span style="margin: 0 0.5rem;">·</span>
                All rights reserved`,V,z,k,N,B,se=s[4]&&Dl(),oe=s[1]&&Ll(),le=!$t&&Ri&&Ju(s),pe=!$t&&$u(s),ye=!$t&&ev(s),ge=!s[4]&&kl();return{c(){e=_("div"),t=_("div"),i=_("div"),a=_("div"),r=_("img"),l=I(),n=_("div"),n.textContent=d,h=I(),u=_("div"),m=_("div"),v=ee(p),y=I(),w=_("div"),w.textContent=D,L=I(),se&&se.c(),A=I(),oe&&oe.c(),E=I(),T=_("div"),x=_("span"),j=ee("Version "),X=ee(Xt),O=I(),le&&le.c(),$=I(),pe&&pe.c(),Z=I(),U=_("div"),U.innerHTML=q,V=I(),ye&&ye.c(),z=I(),ge&&ge.c(),this.h()},l(Q){e=b(Q,"DIV",{id:!0,class:!0});var ae=C(e);t=b(ae,"DIV",{id:!0,class:!0});var ce=C(t);i=b(ce,"DIV",{id:!0,class:!0});var Y=C(i);a=b(Y,"DIV",{id:!0,class:!0});var de=C(a);r=b(de,"IMG",{class:!0,src:!0,alt:!0}),l=M(de),n=b(de,"DIV",{class:!0,"data-svelte-h":!0}),K(n)!=="svelte-szn3l"&&(n.textContent=d),h=M(de),u=b(de,"DIV",{class:!0});var J=C(u);m=b(J,"DIV",{class:!0});var me=C(m);v=te(me,p),me.forEach(g),y=M(J),w=b(J,"DIV",{class:!0,"data-svelte-h":!0}),K(w)!=="svelte-1i9wxa8"&&(w.textContent=D),L=M(J),se&&se.l(J),A=M(J),oe&&oe.l(J),J.forEach(g),de.forEach(g),E=M(Y),T=b(Y,"DIV",{class:!0});var Ee=C(T);x=b(Ee,"SPAN",{class:!0,tabindex:!0});var ze=C(x);j=te(ze,"Version "),X=te(ze,Xt),ze.forEach(g),Ee.forEach(g),O=M(Y),le&&le.l(Y),$=M(Y),pe&&pe.l(Y),Z=M(Y),U=b(Y,"DIV",{class:!0,"data-svelte-h":!0}),K(U)!=="svelte-1p526yl"&&(U.innerHTML=q),V=M(Y),ye&&ye.l(Y),Y.forEach(g),z=M(ce),ge&&ge.l(ce),ce.forEach(g),ae.forEach(g),this.h()},h(){f(r,"class","splash-logo svelte-bt03iy"),Rt(r.src,o="/img/logo-stacked.svg")||f(r,"src",o),f(r,"alt",""),f(n,"class","splash-subtitle svelte-bt03iy"),f(m,"class","splash-btn svelte-bt03iy"),f(w,"class","splash-btn splash-btn-outline svelte-bt03iy"),f(u,"class","splash-btns svelte-bt03iy"),f(a,"id","splash-title"),f(a,"class","svelte-bt03iy"),f(x,"class","splash-smallprint-link svelte-bt03iy"),f(x,"tabindex",-1),f(T,"class","splash-smallprint splash-lr svelte-bt03iy"),f(U,"class","splash-smallprint splash-ll svelte-bt03iy"),f(i,"id","splash-main"),f(i,"class","svelte-bt03iy"),f(t,"id","splash-fixed"),f(t,"class","svelte-bt03iy"),f(e,"id","splash"),f(e,"class","svelte-bt03iy")},m(Q,ae){P(Q,e,ae),c(e,t),c(t,i),c(i,a),c(a,r),c(a,l),c(a,n),c(a,h),c(a,u),c(u,m),c(m,v),c(u,y),c(u,w),c(u,L),se&&se.m(u,null),c(u,A),oe&&oe.m(u,null),c(i,E),c(i,T),c(T,x),c(x,j),c(x,X),c(i,O),le&&le.m(i,null),c(i,$),pe&&pe.m(i,null),c(i,Z),c(i,U),c(i,V),ye&&ye.m(i,null),c(t,z),ge&&ge.m(t,null),k=!0,N||(B=[G(m,"click",function(){za(s[0])&&s[0].apply(this,arguments)}),G(w,"click",s[5]),G(x,"click",s[7])],N=!0)},p(Q,[ae]){s=Q,(!k||ae&16)&&p!==(p=s[4]?"continue":"begin")&&be(v,p),s[4]?se||(se=Dl(),se.c(),se.m(u,A)):se&&(se.d(1),se=null),s[1]?oe||(oe=Ll(),oe.c(),oe.m(u,null)):oe&&(oe.d(1),oe=null),!$t&&Ri&&le.p(s,ae),$t||pe.p(s,ae),$t||ye.p(s,ae),s[4]?ge&&(ge.d(1),ge=null):ge||(ge=kl(),ge.c(),ge.m(t,null))},i(Q){k||(W(pe),k=!0)},o(Q){ie(pe),k=!1},d(Q){Q&&g(e),se&&se.d(),oe&&oe.d(),le&&le.d(),pe&&pe.d(),ye&&ye.d(),ge&&ge.d(),N=!1,ot(B)}}}function iv(s,e,t){let i;Ce(s,Ts,w=>t(4,i=w));let{toggleSplash:a=()=>{}}=e,{webglError:r=!1}=e;const o=()=>{window.api?(console.log("Quitting"),window.api.quit()):console.log("No API to quit! Please press Ctrl+W to exit")};let l=!1,n=[],d=Ri&&Xs[2]==Xt[2];for(let w of $a)if(gn(w.version,Xs)>0)w.quickChanges&&(Xt[4]==0||d)&&n.push(...w.quickChanges);else break;n.length>12&&(n=n.slice(0,12)),nt(()=>{const w=D=>{D.code=="Enter"&&a()};return window.addEventListener("keydown",w),()=>{window.removeEventListener("keydown",w)}});const h=w=>{window.api&&window.api.openExternal(w)},u=()=>t(2,l=!l),m=()=>t(2,l=!l),p=w=>t(2,l=w),v=()=>h("https://discord.gg/TNf9bBrZmR"),y=()=>h("https://store.steampowered.com/app/3431300/Slow_Roads/");return s.$$set=w=>{"toggleSplash"in w&&t(0,a=w.toggleSplash),"webglError"in w&&t(1,r=w.webglError)},[a,r,l,n,i,o,h,u,m,p,v,y]}class sv extends Ke{constructor(e){super(),Xe(this,e,iv,tv,Ye,{toggleSplash:0,webglError:1})}}function Il(s){let e,t,i,a,r;return{c(){e=_("div"),t=_("div"),i=_("div"),a=I(),r=_("div"),this.h()},l(o){e=b(o,"DIV",{class:!0,style:!0});var l=C(e);t=b(l,"DIV",{class:!0,style:!0});var n=C(t);i=b(n,"DIV",{class:!0}),C(i).forEach(g),n.forEach(g),a=M(l),r=b(l,"DIV",{class:!0}),C(r).forEach(g),l.forEach(g),this.h()},h(){f(i,"class","ui-mouse-marker svelte-1mw879"),f(t,"class","ui-mouse-marker-container svelte-1mw879"),re(t,"transform","translateX("+s[1]+"%)"),f(r,"class","ui-mouse-center svelte-1mw879"),f(e,"class","ui-mouse svelte-1mw879"),re(e,"width",s[0]*100+"%")},m(o,l){P(o,e,l),c(e,t),c(t,i),c(e,a),c(e,r)},p(o,l){l&2&&re(t,"transform","translateX("+o[1]+"%)"),l&1&&re(e,"width",o[0]*100+"%")},d(o){o&&g(e)}}}function av(s){let e,t,i="RESET",a,r,o=s[2]&&!s[3]&&Il(s);return{c(){o&&o.c(),e=I(),t=_("div"),t.textContent=i,this.h()},l(l){o&&o.l(l),e=M(l),t=b(l,"DIV",{class:!0,"data-svelte-h":!0}),K(t)!=="svelte-xx5os6"&&(t.textContent=i),this.h()},h(){f(t,"class","ui-mouse-reset svelte-1mw879"),R(t,"ui-mouse-reset-interior",s[3])},m(l,n){o&&o.m(l,n),P(l,e,n),P(l,t,n),a||(r=G(t,"click",s[4]),a=!0)},p(l,[n]){l[2]&&!l[3]?o?o.p(l,n):(o=Il(l),o.c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null),n&8&&R(t,"ui-mouse-reset-interior",l[3])},i:ve,o:ve,d(l){l&&(g(e),g(t)),o&&o.d(l),a=!1,r()}}}function ov(s,e,t){let i;Ce(s,_n,u=>t(3,i=u));let a=0;function r(u){t(0,a=u)}let o=0;function l(u){t(1,o=100-(u+1)/2*100)}let n=!1;function d(u){t(2,n=u)}return nt(()=>(at.addListener("steerBarWidth",r),at.addListener("currentSteer",l),at.addListener("showSteerIndicator",d),()=>{at.removeListener("steerBarWidth",r),at.removeListener("currentSteer",l),at.removeListener("showSteerIndicator",d)})),[a,o,n,i,()=>_e.resetByMouse()]}class rv extends Ke{constructor(e){super(),Xe(this,e,ov,av,Ye,{})}}function Ml(s){let e,t="<",i,a;return{c(){e=_("div"),e.textContent=t,this.h()},l(r){e=b(r,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),K(e)!=="svelte-140lecd"&&(e.textContent=t),this.h()},h(){f(e,"class","dash-autodrive-mode-arrow svelte-itei5"),re(e,"left","-0.5rem")},m(r,o){P(r,e,o),i||(a=G(e,"click",s[6]),i=!0)},p:ve,d(r){r&&g(e),i=!1,a()}}}function El(s){let e,t=">",i,a;return{c(){e=_("div"),e.textContent=t,this.h()},l(r){e=b(r,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),K(e)!=="svelte-1dqn5zw"&&(e.textContent=t),this.h()},h(){f(e,"class","dash-autodrive-mode-arrow svelte-itei5"),re(e,"right","-0.5rem")},m(r,o){P(r,e,o),i||(a=G(e,"click",s[7]),i=!0)},p:ve,d(r){r&&g(e),i=!1,a()}}}function lv(s){let e,t,i,a,r,o,l,n,d,h,u,m=s[2]&&s[0]&&Ml(s),p=s[2]&&s[0]&&El(s);return{c(){e=_("div"),m&&m.c(),t=I(),i=_("div"),a=I(),r=_("div"),o=ee(s[1]),l=I(),n=_("div"),d=I(),p&&p.c(),this.h()},l(v){e=b(v,"DIV",{id:!0,class:!0});var y=C(e);m&&m.l(y),t=M(y),i=b(y,"DIV",{class:!0,style:!0}),C(i).forEach(g),a=M(y),r=b(y,"DIV",{class:!0});var w=C(r);o=te(w,s[1]),w.forEach(g),l=M(y),n=b(y,"DIV",{class:!0,style:!0}),C(n).forEach(g),d=M(y),p&&p.l(y),y.forEach(g),this.h()},h(){f(i,"class","dash-autodrive-bracket svelte-itei5"),re(i,"border-right","none"),R(i,"dash-autodrive-bracket-active",s[0]),f(r,"class","dash-autodrive-text svelte-itei5"),f(n,"class","dash-autodrive-bracket svelte-itei5"),re(n,"border-left","none"),R(n,"dash-autodrive-bracket-active",s[0]),f(e,"id","dash-autodrive"),f(e,"class","svelte-itei5"),R(e,"dash-autodrive-active",s[0])},m(v,y){P(v,e,y),m&&m.m(e,null),c(e,t),c(e,i),c(e,a),c(e,r),c(r,o),c(e,l),c(e,n),c(e,d),p&&p.m(e,null),h||(u=[G(e,"click",s[8]),G(e,"mouseenter",s[3]),G(e,"mouseleave",s[4])],h=!0)},p(v,[y]){v[2]&&v[0]?m?m.p(v,y):(m=Ml(v),m.c(),m.m(e,t)):m&&(m.d(1),m=null),y&1&&R(i,"dash-autodrive-bracket-active",v[0]),y&2&&be(o,v[1]),y&1&&R(n,"dash-autodrive-bracket-active",v[0]),v[2]&&v[0]?p?p.p(v,y):(p=El(v),p.c(),p.m(e,null)):p&&(p.d(1),p=null),y&1&&R(e,"dash-autodrive-active",v[0])},i:ve,o:ve,d(v){v&&g(e),m&&m.d(),p&&p.d(),h=!1,ot(u)}}}function nv(s,e,t){let i=!1,a="AUTODRIVE",r=!1;function o(v){t(0,i=v)}function l(v){v==$i.FULL?t(1,a="AUTODRIVE"):v==$i.SPEED?t(1,a="AUTOSPEED"):v==$i.STEER&&t(1,a="AUTOSTEER")}function n(){t(2,r=!0)}function d(){t(2,r=!1)}function h(v){let w=ne.autodriveMode+v;w<0?w=2:w>2&&(w=0),ne.set("autodriveMode",w)}return nt(()=>(Ft.addListener(o),ne.addListener("autodriveMode",l),()=>{Ft.removeListener(o),ne.removeListener("autodriveMode",l)})),[i,a,r,n,d,h,v=>{v.preventDefault(),v.stopPropagation(),h(-1)},v=>{v.preventDefault(),v.stopPropagation(),h(1)},()=>Ft.set(!i)]}class xn extends Ke{constructor(e){super(),Xe(this,e,nv,lv,Ye,{})}}function Al(s){let e,t,i,a;const r=[hv,cv,dv],o=[];function l(n,d){return 2}return e=l(),t=o[e]=r[e](s),{c(){t.c(),i=De()},l(n){t.l(n),i=De()},m(n,d){o[e].m(n,d),P(n,i,d),a=!0},p(n,d){t.p(n,d)},i(n){a||(W(t),a=!0)},o(n){ie(t),a=!1},d(n){n&&g(i),o[e].d(n)}}}function dv(s){let e,t;return e=new Qh({props:{toggleSplash:s[53],webglError:s[5]}}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,a){Re(e,i,a),t=!0},p(i,a){const r={};a[0]&32785&&(r.toggleSplash=i[53]),a[0]&32&&(r.webglError=i[5]),e.$set(r)},i(i){t||(W(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function cv(s){let e,t;return e=new Zu({props:{toggleSplash:s[52]}}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,a){Re(e,i,a),t=!0},p(i,a){const r={};a[0]&1&&(r.toggleSplash=i[52]),e.$set(r)},i(i){t||(W(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function hv(s){let e,t;return e=new sv({props:{toggleSplash:s[51],webglError:s[5]}}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,a){Re(e,i,a),t=!0},p(i,a){const r={};a[0]&32785&&(r.toggleSplash=i[51]),a[0]&32&&(r.webglError=i[5]),e.$set(r)},i(i){t||(W(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function Tl(s){let e,t,i,a="Low Performance Detected",r,o,l,n="Dismiss",d,h;function u(v,y){return fv}let p=u()(s);return{c(){e=_("div"),t=_("div"),i=_("div"),i.textContent=a,r=I(),p.c(),o=I(),l=_("div"),l.textContent=n,this.h()},l(v){e=b(v,"DIV",{class:!0});var y=C(e);t=b(y,"DIV",{class:!0});var w=C(t);i=b(w,"DIV",{class:!0,"data-svelte-h":!0}),K(i)!=="svelte-13a2ixe"&&(i.textContent=a),r=M(w),p.l(w),o=M(w),l=b(w,"DIV",{class:!0,"data-svelte-h":!0}),K(l)!=="svelte-6a9fjy"&&(l.textContent=n),w.forEach(g),y.forEach(g),this.h()},h(){f(i,"class","hwa-title svelte-bgj4yc"),f(l,"class","hwa-dismiss svelte-bgj4yc"),f(t,"class","hwa-main svelte-bgj4yc"),f(e,"class","hwa-container svelte-bgj4yc")},m(v,y){P(v,e,y),c(e,t),c(t,i),c(t,r),p.m(t,null),c(t,o),c(t,l),d||(h=G(l,"click",s[47]),d=!0)},p:ve,d(v){v&&g(e),p.d(),d=!1,h()}}}function fv(s){let e,t='Make sure you have <span style="font-weight: 600">hardware acceleration</span> enabled in your browser and OS settings, then restart your browser.';return{c(){e=_("div"),e.innerHTML=t,this.h()},l(i){e=b(i,"DIV",{class:!0,"data-svelte-h":!0}),K(e)!=="svelte-1tdhr9z"&&(e.innerHTML=t),this.h()},h(){f(e,"class","hwa-body svelte-bgj4yc")},m(i,a){P(i,e,a)},d(i){i&&g(e)}}}function uv(s){let e,t="PAUSED",i,a;return{c(){e=_("div"),e.textContent=t,this.h()},l(r){e=b(r,"DIV",{class:!0,"data-svelte-h":!0}),K(e)!=="svelte-fhlkwc"&&(e.textContent=t),this.h()},h(){f(e,"class","paused svelte-bgj4yc")},m(r,o){P(r,e,o),a=!0},p:ve,i(r){a||(r&&Ci(()=>{a&&(i||(i=ei(e,At,{duration:100},!0)),i.run(1))}),a=!0)},o(r){r&&(i||(i=ei(e,At,{duration:100},!1)),i.run(0)),a=!1},d(r){r&&g(e),r&&i&&i.end()}}}function vv(s){let e,t,i="Error",a,r,o,l=s[28].type+"",n,d,h,u=s[28].msg+"",m,p,v,y,w,D="Reload",L,A,E,T,x,j="COPY LOG",X,O;function $(V,z){return gv}let U=$()(s),q=s[29]==!1&&Pl(s);return{c(){e=_("div"),t=_("div"),t.textContent=i,a=I(),r=_("div"),o=_("div"),n=ee(l),d=I(),h=_("div"),m=ee(u),p=I(),v=_("div"),y=ee(`Sorry, something went wrong - please try reloading.
                    
                    
                    `),w=_("div"),w.textContent=D,L=I(),U.c(),A=I(),E=_("div"),q&&q.c(),T=I(),x=_("div"),x.textContent=j,this.h()},l(V){e=b(V,"DIV",{class:!0});var z=C(e);t=b(z,"DIV",{class:!0,"data-svelte-h":!0}),K(t)!=="svelte-et9hky"&&(t.textContent=i),a=M(z),r=b(z,"DIV",{class:!0});var k=C(r);o=b(k,"DIV",{class:!0});var N=C(o);n=te(N,l),N.forEach(g),d=M(k),h=b(k,"DIV",{class:!0});var B=C(h);m=te(B,u),B.forEach(g),k.forEach(g),p=M(z),v=b(z,"DIV",{class:!0});var se=C(v);y=te(se,`Sorry, something went wrong - please try reloading.
                    
                    
                    `),w=b(se,"DIV",{class:!0,"data-svelte-h":!0}),K(w)!=="svelte-tpxv7y"&&(w.textContent=D),L=M(se),U.l(se),se.forEach(g),A=M(z),E=b(z,"DIV",{class:!0});var oe=C(E);q&&q.l(oe),T=M(oe),x=b(oe,"DIV",{class:!0,"data-svelte-h":!0}),K(x)!=="svelte-131fhbm"&&(x.textContent=j),oe.forEach(g),z.forEach(g),this.h()},h(){f(t,"class","error-title svelte-bgj4yc"),f(o,"class","error-type svelte-bgj4yc"),f(h,"class","error-msg svelte-bgj4yc"),f(r,"class","error-display svelte-bgj4yc"),f(w,"class","ui-btn ui-btn-active error-reload svelte-bgj4yc"),f(v,"class","error-watdo svelte-bgj4yc"),f(x,"class","error-log-copy svelte-bgj4yc"),f(E,"class","error-log svelte-bgj4yc"),f(e,"class","error svelte-bgj4yc"),R(e,"error-touch",s[29])},m(V,z){P(V,e,z),c(e,t),c(e,a),c(e,r),c(r,o),c(o,n),c(r,d),c(r,h),c(h,m),c(e,p),c(e,v),c(v,y),c(v,w),c(v,L),U.m(v,null),c(e,A),c(e,E),q&&q.m(E,null),c(E,T),c(E,x),X||(O=[G(w,"click",s[48]),G(x,"click",s[55])],X=!0)},p(V,z){z[0]&268435456&&l!==(l=V[28].type+"")&&be(n,l),z[0]&268435456&&u!==(u=V[28].msg+"")&&be(m,u),U.p(V,z),V[29]==!1?q?q.p(V,z):(q=Pl(V),q.c(),q.m(E,T)):q&&(q.d(1),q=null),z[0]&536870912&&R(e,"error-touch",V[29])},i:ve,o:ve,d(V){V&&g(e),U.d(),q&&q.d(),X=!1,ot(O)}}}function gv(s){let e,t,i="click here",a,r,o;return{c(){e=ee("If this keeps happening, "),t=_("a"),t.textContent=i,a=ee(" to try a different seed."),this.h()},l(l){e=te(l,"If this keeps happening, "),t=b(l,"A",{href:!0,class:!0,"data-svelte-h":!0}),K(t)!=="svelte-9g2e47"&&(t.textContent=i),a=te(l," to try a different seed."),this.h()},h(){f(t,"href","#"),f(t,"class","ui-link svelte-bgj4yc")},m(l,n){P(l,e,n),P(l,t,n),P(l,a,n),r||(o=G(t,"click",s[54]),r=!0)},p:ve,d(l){l&&(g(e),g(t),g(a)),r=!1,o()}}}function Pl(s){let e,t=s[28].log+"",i;return{c(){e=_("pre"),i=ee(t),this.h()},l(a){e=b(a,"PRE",{id:!0,class:!0});var r=C(e);i=te(r,t),r.forEach(g),this.h()},h(){f(e,"id","error-log-content"),f(e,"class","svelte-bgj4yc")},m(a,r){P(a,e,r),c(e,i)},p(a,r){r[0]&268435456&&t!==(t=a[28].log+"")&&be(i,t)},d(a){a&&g(e)}}}function Nl(s){let e,t;return e=new zu({}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,a){Re(e,i,a),t=!0},i(i){t||(W(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function mv(s){let e,t=`<span style="font-size: 1.25rem">UNLICENSED EMBED</span> <br/>
                Play the original ad-free on <a class="ui-mb-a svelte-bgj4yc" href="https://slowroads.io">slowroads.io</a>`;return{c(){e=_("div"),e.innerHTML=t,this.h()},l(i){e=b(i,"DIV",{class:!0,"data-svelte-h":!0}),K(e)!=="svelte-hmosml"&&(e.innerHTML=t),this.h()},h(){f(e,"class","ui-mb svelte-bgj4yc")},m(i,a){P(i,e,a)},d(i){i&&g(e)}}}function pv(s){let e,t,i,a,r,o,l,n,d,h,u;e=new Yu({});let m=s[26]&&xl(),p=bv(s),v=s[9]&&Ul(s),y=s[15]&&Ol(s);const w=[Dv,Sv],D=[];function L(E,T){return E[37]==!1||E[27]?0:E[29]==!0?1:-1}~(l=L(s))&&(n=D[l]=w[l](s));let A=(s[29]||s[8]==1)&&Bl();return{c(){Ne(e.$$.fragment),t=I(),m&&m.c(),i=I(),p&&p.c(),a=I(),v&&v.c(),r=I(),y&&y.c(),o=I(),n&&n.c(),d=I(),A&&A.c(),h=De()},l(E){xe(e.$$.fragment,E),t=M(E),m&&m.l(E),i=M(E),p&&p.l(E),a=M(E),v&&v.l(E),r=M(E),y&&y.l(E),o=M(E),n&&n.l(E),d=M(E),A&&A.l(E),h=De()},m(E,T){Re(e,E,T),P(E,t,T),m&&m.m(E,T),P(E,i,T),p&&p.m(E,T),P(E,a,T),v&&v.m(E,T),P(E,r,T),y&&y.m(E,T),P(E,o,T),~l&&D[l].m(E,T),P(E,d,T),A&&A.m(E,T),P(E,h,T),u=!0},p(E,T){E[26]?m?T[0]&67108864&&W(m,1):(m=xl(),m.c(),W(m,1),m.m(i.parentNode,i)):m&&(Fe(),ie(m,1,1,()=>{m=null}),Ge()),p.p(E,T),E[9]?v?v.p(E,T):(v=Ul(E),v.c(),v.m(r.parentNode,r)):v&&(v.d(1),v=null),E[15]?y?(y.p(E,T),T[0]&32768&&W(y,1)):(y=Ol(E),y.c(),W(y,1),y.m(o.parentNode,o)):y&&(Fe(),ie(y,1,1,()=>{y=null}),Ge());let x=l;l=L(E),l===x?~l&&D[l].p(E,T):(n&&(Fe(),ie(D[x],1,1,()=>{D[x]=null}),Ge()),~l?(n=D[l],n?n.p(E,T):(n=D[l]=w[l](E),n.c()),W(n,1),n.m(d.parentNode,d)):n=null),E[29]||E[8]==1?A||(A=Bl(),A.c(),A.m(h.parentNode,h)):A&&(A.d(1),A=null)},i(E){u||(W(e.$$.fragment,E),W(m),W(p),W(y),W(n),u=!0)},o(E){ie(e.$$.fragment,E),ie(m),ie(p),ie(y),ie(n),u=!1},d(E){E&&(g(t),g(i),g(a),g(r),g(o),g(d),g(h)),Ue(e,E),m&&m.d(E),p&&p.d(E),v&&v.d(E),y&&y.d(E),~l&&D[l].d(E),A&&A.d(E)}}}function _v(s){let e,t,i,a,r=s[30]&&ql(s);return{c(){e=_("div"),r&&r.c(),this.h()},l(o){e=b(o,"DIV",{class:!0});var l=C(e);r&&r.l(l),l.forEach(g),this.h()},h(){f(e,"class","load-bar svelte-bgj4yc"),R(e,"load-bar-init",s[7])},m(o,l){P(o,e,l),r&&r.m(e,null),a=!0},p(o,l){o[30]?r?r.p(o,l):(r=ql(o),r.c(),r.m(e,null)):r&&(r.d(1),r=null),(!a||l[0]&128)&&R(e,"load-bar-init",o[7])},i(o){a||(o&&Ci(()=>{a&&(i&&i.end(1),t=Ba(e,At,{duration:100}),t.start())}),a=!0)},o(o){t&&t.invalidate(),o&&(i=qa(e,At,{delay:100,duration:300})),a=!1},d(o){o&&g(e),r&&r.d(),o&&i&&i.end()}}}function xl(s){let e,t;return e=new rv({}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,a){Re(e,i,a),t=!0},i(i){t||(W(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function bv(s){let e,t,i=s[13]==1&&Rl(s);return{c(){i&&i.c(),e=De()},l(a){i&&i.l(a),e=De()},m(a,r){i&&i.m(a,r),P(a,e,r),t=!0},p(a,r){a[13]==1?i?(i.p(a,r),r[0]&8192&&W(i,1)):(i=Rl(a),i.c(),W(i,1),i.m(e.parentNode,e)):i&&(Fe(),ie(i,1,1,()=>{i=null}),Ge())},i(a){t||(W(i),t=!0)},o(a){ie(i),t=!1},d(a){a&&g(e),i&&i.d(a)}}}function Rl(s){let e,t,i,a,r,o;return t=new Af({props:{showConfig:s[9],openConfig:s[60],closeConfig:s[61]}}),{c(){e=_("div"),Ne(t.$$.fragment),a=I(),r=De()},l(l){e=b(l,"DIV",{});var n=C(e);xe(t.$$.fragment,n),n.forEach(g),a=M(l),r=De()},m(l,n){P(l,e,n),Re(t,e,null),P(l,a,n),P(l,r,n),o=!0},p(l,n){const d={};n[0]&512&&(d.showConfig=l[9]),n[0]&512&&(d.openConfig=l[60]),n[0]&512&&(d.closeConfig=l[61]),t.$set(d)},i(l){o||(W(t.$$.fragment,l),l&&Ci(()=>{o&&(i||(i=ei(e,At,{duration:100},!0)),i.run(1))}),o=!0)},o(l){ie(t.$$.fragment,l),l&&(i||(i=ei(e,At,{duration:100},!1)),i.run(0)),o=!1},d(l){l&&(g(e),g(a),g(r)),Ue(t),l&&i&&i.end()}}}function Ul(s){let e,t,i;return{c(){e=_("div"),this.h()},l(a){e=b(a,"DIV",{id:!0,class:!0}),C(e).forEach(g),this.h()},h(){f(e,"id","config-close"),f(e,"class","svelte-bgj4yc")},m(a,r){P(a,e,r),t||(i=G(e,"click",s[62]),t=!0)},p:ve,d(a){a&&g(e),t=!1,i()}}}function Ol(s){let e,t,i,a;const r=[wv,yv],o=[];function l(n,d){return 0}return e=l(),t=o[e]=r[e](s),{c(){t.c(),i=De()},l(n){t.l(n),i=De()},m(n,d){o[e].m(n,d),P(n,i,d),a=!0},p(n,d){t.p(n,d)},i(n){a||(W(t),a=!0)},o(n){ie(t),a=!1},d(n){n&&g(i),o[e].d(n)}}}function yv(s){let e,t;return e=new $h({props:{enabled:!s[9]&&!s[1]}}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,a){Re(e,i,a),t=!0},p(i,a){const r={};a[0]&514&&(r.enabled=!i[9]&&!i[1]),e.$set(r)},i(i){t||(W(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function wv(s){let e,t;return e=new sf({props:{enabled:!s[9]&&!s[1]}}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,a){Re(e,i,a),t=!0},p(i,a){const r={};a[0]&514&&(r.enabled=!i[9]&&!i[1]),e.$set(r)},i(i){t||(W(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function Sv(s){let e,t;return e=new xn({}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,a){Re(e,i,a),t=!0},p:ve,i(i){t||(W(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function Dv(s){let e,t,i,a,r,o,l,n,d,h=(s[41]*s[21]).toFixed(1)+"",u,m,p,v,y,w,D,L=(s[42]*s[22]).toFixed(1)+"",A,E,T,x,j,X,O,$=s[38]&&Vl(),Z=s[39]&&Hl(),U=s[37]==!1&&zl(s),q=Lv(),V=s[29]==!1&&Fl(s),z=s[40]&&!s[29]&&Gl();return{c(){e=_("div"),$&&$.c(),t=I(),Z&&Z.c(),i=I(),U&&U.c(),a=I(),q&&q.c(),r=I(),o=_("div"),V&&V.c(),l=I(),n=_("div"),z&&z.c(),d=I(),u=ee(h),m=I(),p=_("div"),v=ee(s[23]),y=I(),w=_("div"),D=_("div"),A=ee(L),E=I(),T=_("div"),x=ee(s[24]),j=I(),X=_("div"),this.h()},l(k){e=b(k,"DIV",{class:!0});var N=C(e);$&&$.l(N),t=M(N),Z&&Z.l(N),N.forEach(g),i=M(k),U&&U.l(k),a=M(k),q&&q.l(k),r=M(k),o=b(k,"DIV",{class:!0});var B=C(o);V&&V.l(B),l=M(B),n=b(B,"DIV",{class:!0});var se=C(n);z&&z.l(se),d=M(se),u=te(se,h),se.forEach(g),m=M(B),p=b(B,"DIV",{class:!0});var oe=C(p);v=te(oe,s[23]),oe.forEach(g),B.forEach(g),y=M(k),w=b(k,"DIV",{class:!0});var le=C(w);D=b(le,"DIV",{class:!0});var pe=C(D);A=te(pe,L),pe.forEach(g),E=M(le),T=b(le,"DIV",{class:!0});var ye=C(T);x=te(ye,s[24]),ye.forEach(g),le.forEach(g),j=M(k),X=b(k,"DIV",{class:!0}),C(X).forEach(g),this.h()},h(){f(e,"class","dash-icons svelte-bgj4yc"),R(e,"dash-icons-bottom",s[8]!=1),R(e,"dash-icons-top",s[29]||s[8]==1),f(n,"class","stat-value svelte-bgj4yc"),f(p,"class","stat-unit svelte-bgj4yc"),f(o,"class","stat speed svelte-bgj4yc"),R(o,"speed-touch",s[29]),R(o,"stat-bottom",s[8]!=1),R(o,"stat-top",s[29]||s[8]==1),f(D,"class","stat-value svelte-bgj4yc"),f(T,"class","stat-unit svelte-bgj4yc"),f(w,"class","stat distance svelte-bgj4yc"),R(w,"distance-touch",s[29]),R(w,"stat-bottom",s[8]==0),R(w,"stat-top",s[29]),f(X,"class","stat-underlay svelte-bgj4yc"),R(X,"underlay-top",s[29]||s[8]==1)},m(k,N){P(k,e,N),$&&$.m(e,null),c(e,t),Z&&Z.m(e,null),P(k,i,N),U&&U.m(k,N),P(k,a,N),q&&q.m(k,N),P(k,r,N),P(k,o,N),V&&V.m(o,null),c(o,l),c(o,n),z&&z.m(n,null),c(n,d),c(n,u),c(o,m),c(o,p),c(p,v),P(k,y,N),P(k,w,N),c(w,D),c(D,A),c(w,E),c(w,T),c(T,x),P(k,j,N),P(k,X,N),O=!0},p(k,N){k[38]?$?N[1]&128&&W($,1):($=Vl(),$.c(),W($,1),$.m(e,t)):$&&(Fe(),ie($,1,1,()=>{$=null}),Ge()),k[39]?Z?N[1]&256&&W(Z,1):(Z=Hl(),Z.c(),W(Z,1),Z.m(e,null)):Z&&(Fe(),ie(Z,1,1,()=>{Z=null}),Ge()),(!O||N[0]&256)&&R(e,"dash-icons-bottom",k[8]!=1),(!O||N[0]&536871168)&&R(e,"dash-icons-top",k[29]||k[8]==1),k[37]==!1?U?(U.p(k,N),N[1]&64&&W(U,1)):(U=zl(k),U.c(),W(U,1),U.m(a.parentNode,a)):U&&(Fe(),ie(U,1,1,()=>{U=null}),Ge()),k[29]==!1?V?V.p(k,N):(V=Fl(k),V.c(),V.m(o,l)):V&&(V.d(1),V=null),k[40]&&!k[29]?z?N[0]&536870912|N[1]&512&&W(z,1):(z=Gl(),z.c(),W(z,1),z.m(n,d)):z&&(Fe(),ie(z,1,1,()=>{z=null}),Ge()),(!O||N[0]&2097152|N[1]&1024)&&h!==(h=(k[41]*k[21]).toFixed(1)+"")&&be(u,h),(!O||N[0]&8388608)&&be(v,k[23]),(!O||N[0]&536870912)&&R(o,"speed-touch",k[29]),(!O||N[0]&256)&&R(o,"stat-bottom",k[8]!=1),(!O||N[0]&536871168)&&R(o,"stat-top",k[29]||k[8]==1),(!O||N[0]&4194304|N[1]&2048)&&L!==(L=(k[42]*k[22]).toFixed(1)+"")&&be(A,L),(!O||N[0]&16777216)&&be(x,k[24]),(!O||N[0]&536870912)&&R(w,"distance-touch",k[29]),(!O||N[0]&256)&&R(w,"stat-bottom",k[8]==0),(!O||N[0]&536870912)&&R(w,"stat-top",k[29]),(!O||N[0]&536871168)&&R(X,"underlay-top",k[29]||k[8]==1)},i(k){O||(W($),W(Z),W(U),W(q),W(z),O=!0)},o(k){ie($),ie(Z),ie(U),ie(q),ie(z),O=!1},d(k){k&&(g(e),g(i),g(a),g(r),g(o),g(y),g(w),g(j),g(X)),$&&$.d(),Z&&Z.d(),U&&U.d(k),q&&q.d(k),V&&V.d(),z&&z.d()}}}function Vl(s){let e,t,i,a,r;return{c(){e=_("img"),this.h()},l(o){e=b(o,"IMG",{class:!0,style:!0,src:!0}),this.h()},h(){f(e,"class","dash-icon svelte-bgj4yc"),re(e,"right","3rem"),Rt(e.src,t="/img/ico_steer_lock.svg")||f(e,"src",t)},m(o,l){P(o,e,l),r=!0},i(o){r||(o&&Ci(()=>{r&&(a&&a.end(1),i=Ba(e,At,{duration:100}),i.start())}),r=!0)},o(o){i&&i.invalidate(),o&&(a=qa(e,At,{duration:400})),r=!1},d(o){o&&g(e),o&&a&&a.end()}}}function Hl(s){let e,t,i,a;return{c(){e=_("img"),this.h()},l(r){e=b(r,"IMG",{class:!0,style:!0,src:!0}),this.h()},h(){f(e,"class","dash-icon svelte-bgj4yc"),re(e,"right","0rem"),Rt(e.src,t="/img/ico_brake.svg")||f(e,"src",t)},m(r,o){P(r,e,o),a=!0},i(r){a||(r&&Ci(()=>{a&&(i||(i=ei(e,At,{duration:200},!0)),i.run(1))}),a=!0)},o(r){r&&(i||(i=ei(e,At,{duration:200},!1)),i.run(0)),a=!1},d(r){r&&g(e),r&&i&&i.end()}}}function zl(s){let e,t;return e=new Bu({props:{position:s[29]?1:0}}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,a){Re(e,i,a),t=!0},p(i,a){const r={};a[0]&536870912&&(r.position=i[29]?1:0),e.$set(r)},i(i){t||(W(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function Lv(s){let e,t;return e=new xn({}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,a){Re(e,i,a),t=!0},i(i){t||(W(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function Fl(s){let e,t,i,a,r,o,l="▲",n,d,h,u,m="▼",p,v,y,w="▲",D,L,A,E,T="▼",x,j;return{c(){e=_("div"),t=_("img"),a=I(),r=_("div"),o=_("div"),o.textContent=l,n=I(),d=ee(s[19]),h=I(),u=_("div"),u.textContent=m,p=I(),v=_("div"),y=_("div"),y.textContent=w,D=I(),L=ee(s[18]),A=I(),E=_("div"),E.textContent=T,this.h()},l(X){e=b(X,"DIV",{class:!0});var O=C(e);t=b(O,"IMG",{class:!0,alt:!0,src:!0}),a=M(O),r=b(O,"DIV",{class:!0});var $=C(r);o=b($,"DIV",{class:!0,"data-svelte-h":!0}),K(o)!=="svelte-178mwg7"&&(o.textContent=l),n=M($),d=te($,s[19]),h=M($),u=b($,"DIV",{class:!0,"data-svelte-h":!0}),K(u)!=="svelte-1kexe0n"&&(u.textContent=m),$.forEach(g),p=M(O),v=b(O,"DIV",{class:!0});var Z=C(v);y=b(Z,"DIV",{class:!0,"data-svelte-h":!0}),K(y)!=="svelte-1nsidbo"&&(y.textContent=w),D=M(Z),L=te(Z,s[18]),A=M(Z),E=b(Z,"DIV",{class:!0,"data-svelte-h":!0}),K(E)!=="svelte-uwpd61"&&(E.textContent=T),Z.forEach(g),O.forEach(g),this.h()},h(){f(t,"class","sc-icon svelte-bgj4yc"),f(t,"alt",""),Rt(t.src,i=s[17]?"/img/ico_lock_closed.svg":"/img/ico_lock_open.svg")||f(t,"src",i),R(t,"sc-icon-active",s[17]),f(o,"class","sc-arrow sc-arrow-up svelte-bgj4yc"),R(o,"sc-hidden",!s[20]),f(u,"class","sc-arrow sc-arrow-down svelte-bgj4yc"),R(u,"sc-hidden",!s[20]),f(r,"class","sc-val svelte-bgj4yc"),R(r,"sc-hidden",!s[17]),f(y,"class","sc-arrow sc-arrow-up svelte-bgj4yc"),f(E,"class","sc-arrow sc-arrow-down svelte-bgj4yc"),f(v,"class","sc-label svelte-bgj4yc"),R(v,"sc-hidden",!s[20]||!s[17]),f(e,"class","sc-main svelte-bgj4yc")},m(X,O){P(X,e,O),c(e,t),c(e,a),c(e,r),c(r,o),c(r,n),c(r,d),c(r,h),c(r,u),c(e,p),c(e,v),c(v,y),c(v,D),c(v,L),c(v,A),c(v,E),x||(j=[G(t,"click",s[45]),G(o,"click",Za),G(u,"click",Ja),G(y,"click",s[63]),G(E,"click",s[64]),G(e,"mouseenter",s[65]),G(e,"mouseleave",s[66])],x=!0)},p(X,O){O[0]&131072&&!Rt(t.src,i=X[17]?"/img/ico_lock_closed.svg":"/img/ico_lock_open.svg")&&f(t,"src",i),O[0]&131072&&R(t,"sc-icon-active",X[17]),O[0]&1048576&&R(o,"sc-hidden",!X[20]),O[0]&524288&&be(d,X[19]),O[0]&1048576&&R(u,"sc-hidden",!X[20]),O[0]&131072&&R(r,"sc-hidden",!X[17]),O[0]&262144&&be(L,X[18]),O[0]&1179648&&R(v,"sc-hidden",!X[20]||!X[17])},d(X){X&&g(e),x=!1,ot(j)}}}function Gl(s){let e,t,i,a,r;return{c(){e=_("img"),this.h()},l(o){e=b(o,"IMG",{class:!0,src:!0}),this.h()},h(){f(e,"class","stat-icon svelte-bgj4yc"),Rt(e.src,t="/img/ico_boost.svg")||f(e,"src",t)},m(o,l){P(o,e,l),r=!0},i(o){r||(o&&Ci(()=>{r&&(a&&a.end(1),i=Ba(e,At,{duration:100}),i.start())}),r=!0)},o(o){i&&i.invalidate(),o&&(a=qa(e,At,{duration:400})),r=!1},d(o){o&&g(e),o&&a&&a.end()}}}function Bl(s){let e;return{c(){e=_("div"),this.h()},l(t){e=b(t,"DIV",{class:!0}),C(e).forEach(g),this.h()},h(){f(e,"class","menu-underlay svelte-bgj4yc")},m(t,i){P(t,e,i)},d(t){t&&g(e)}}}function ql(s){let e,t,i="LOADING",a,r,o,l,n,d=(s[14]??"")+"",h;return{c(){e=_("div"),t=_("div"),t.textContent=i,a=I(),r=_("div"),o=_("div"),l=I(),n=_("div"),h=ee(d),this.h()},l(u){e=b(u,"DIV",{class:!0});var m=C(e);t=b(m,"DIV",{class:!0,"data-svelte-h":!0}),K(t)!=="svelte-1mn9znm"&&(t.textContent=i),a=M(m),r=b(m,"DIV",{class:!0});var p=C(r);o=b(p,"DIV",{class:!0,style:!0}),C(o).forEach(g),p.forEach(g),l=M(m),n=b(m,"DIV",{class:!0});var v=C(n);h=te(v,d),v.forEach(g),m.forEach(g),this.h()},h(){f(t,"class","load-bar-prog svelte-bgj4yc"),f(o,"class","load-bar-bar-fill svelte-bgj4yc"),re(o,"width",s[13]*100+"%"),f(r,"class","load-bar-bar svelte-bgj4yc"),f(n,"class","load-bar-stage svelte-bgj4yc"),f(e,"class","load-bar-main svelte-bgj4yc")},m(u,m){P(u,e,m),c(e,t),c(e,a),c(e,r),c(r,o),c(e,l),c(e,n),c(n,h)},p(u,m){m[0]&8192&&re(o,"width",u[13]*100+"%"),m[0]&16384&&d!==(d=(u[14]??"")+"")&&be(h,d)},d(u){u&&g(e)}}}function Cv(s){let e,t,i,a,r,o,l,n,d,h,u,m,p,v,y,w,D,L,A,E,T=s[0]&&Al(s),x=s[11]&&Tl(s);const j=[vv,uv],X=[];function O(k,N){return k[28]?0:k[25]&&!k[1]?1:-1}~(r=O(s))&&(o=X[r]=j[r](s));let $=s[12]&&Nl(),Z=s[44]&&mv();h=new Ou({props:{showSettings:s[1],showPrompt:s[10],openSettings:s[56],closeSettings:s[57],showBar:s[6],onShowSplash:s[58]}});let U=hn;const q=[_v,pv],V=[];function z(k,N){return k[13]<1?0:k[6]&&!k[25]&&!k[1]&&!k[2]?1:-1}return~(p=z(s))&&(v=V[p]=q[p](s)),{c(){T&&T.c(),e=I(),x&&x.c(),t=I(),i=_("div"),a=_("div"),o&&o.c(),l=I(),$&&$.c(),n=I(),Z&&Z.c(),d=I(),Ne(h.$$.fragment),u=I(),m=I(),v&&v.c(),w=I(),D=_("canvas"),this.h()},l(k){T&&T.l(k),e=M(k),x&&x.l(k),t=M(k),i=b(k,"DIV",{id:!0,tabindex:!0,autofocus:!0,class:!0});var N=C(i);a=b(N,"DIV",{id:!0,class:!0});var B=C(a);o&&o.l(B),l=M(B),$&&$.l(B),n=M(B),Z&&Z.l(B),d=M(B),xe(h.$$.fragment,B),u=M(B),m=M(B),v&&v.l(B),B.forEach(g),w=M(N),D=b(N,"CANVAS",{class:!0}),C(D).forEach(g),N.forEach(g),this.h()},h(){f(a,"id",y=s[15]?"ui-dynamic":"ui-fixed"),f(a,"class","svelte-bgj4yc"),f(D,"class","svelte-bgj4yc"),R(D,"canvas-paused",s[25]||s[1]||s[2]),f(i,"id","main"),f(i,"tabindex",-1),f(i,"autofocus",""),f(i,"class","svelte-bgj4yc")},m(k,N){T&&T.m(k,N),P(k,e,N),x&&x.m(k,N),P(k,t,N),P(k,i,N),c(i,a),~r&&X[r].m(a,null),c(a,l),$&&$.m(a,null),c(a,n),Z&&Z.m(a,null),c(a,d),Re(h,a,null),c(a,u),c(a,m),~p&&V[p].m(a,null),s[67](a),c(i,w),c(i,D),s[68](D),s[69](i),L=!0,i.focus(),A||(E=G(i,"contextmenu",kv),A=!0)},p(k,N){k[0]?T?(T.p(k,N),N[0]&1&&W(T,1)):(T=Al(k),T.c(),W(T,1),T.m(e.parentNode,e)):T&&(Fe(),ie(T,1,1,()=>{T=null}),Ge()),k[11]?x?x.p(k,N):(x=Tl(k),x.c(),x.m(t.parentNode,t)):x&&(x.d(1),x=null);let B=r;r=O(k),r===B?~r&&X[r].p(k,N):(o&&(Fe(),ie(X[B],1,1,()=>{X[B]=null}),Ge()),~r?(o=X[r],o?o.p(k,N):(o=X[r]=j[r](k),o.c()),W(o,1),o.m(a,l)):o=null),k[12]?$?N[0]&4096&&W($,1):($=Nl(),$.c(),W($,1),$.m(a,n)):$&&(Fe(),ie($,1,1,()=>{$=null}),Ge());const se={};N[0]&2&&(se.showSettings=k[1]),N[0]&1024&&(se.showPrompt=k[10]),N[0]&2&&(se.openSettings=k[56]),N[0]&2&&(se.closeSettings=k[57]),N[0]&64&&(se.showBar=k[6]),h.$set(se);let oe=p;p=z(k),p===oe?~p&&V[p].p(k,N):(v&&(Fe(),ie(V[oe],1,1,()=>{V[oe]=null}),Ge()),~p?(v=V[p],v?v.p(k,N):(v=V[p]=q[p](k),v.c()),W(v,1),v.m(a,null)):v=null),(!L||N[0]&32768&&y!==(y=k[15]?"ui-dynamic":"ui-fixed"))&&f(a,"id",y),(!L||N[0]&33554438)&&R(D,"canvas-paused",k[25]||k[1]||k[2])},i(k){L||(W(T),W(o),W($),W(h.$$.fragment,k),W(U),W(v),L=!0)},o(k){ie(T),ie(o),ie($),ie(h.$$.fragment,k),ie(U),ie(v),L=!1},d(k){k&&(g(e),g(t),g(i)),T&&T.d(k),x&&x.d(k),~r&&X[r].d(),$&&$.d(),Z&&Z.d(),Ue(h),~p&&V[p].d(),s[67](null),s[68](null),s[69](null),A=!1,E()}}}const kv=s=>{s.stopPropagation(),s.preventDefault()};function Iv(s,e,t){let i,a,r,o,l,n,d,h,u,m,p,v,y,w,D,L;Ce(s,Qi,fe=>t(50,i=fe)),Ce(s,Mn,fe=>t(28,a=fe)),Ce(s,ti,fe=>t(29,r=fe)),Ce(s,Ts,fe=>t(30,o=fe)),Ce(s,on,fe=>t(31,l=fe)),Ce(s,rn,fe=>t(32,n=fe)),Ce(s,ln,fe=>t(33,d=fe)),Ce(s,Xa,fe=>t(34,h=fe)),Ce(s,Qa,fe=>t(35,u=fe)),Ce(s,Ka,fe=>t(36,m=fe)),Ce(s,_n,fe=>t(37,p=fe)),Ce(s,vn,fe=>t(38,v=fe)),Ce(s,un,fe=>t(39,y=fe)),Ce(s,fn,fe=>t(40,w=fe)),Ce(s,xa,fe=>t(41,D=fe)),Ce(s,Ra,fe=>t(42,L=fe));const A=["KILOMETERS PER HOUR","MILES PER HOUR"],E=["KILOMETERS","MILES"],T=En(),x=window.self!==window.top;let j=!1,X=!0,O=i,$=!0,Z=ne.hudPosition,U=!1,q=!1,V=!1,z=!1,k=!1,N=ne.showDebug,B=0,se="",oe=Ks.value,le,pe,ye,ge,Q=null,ae=!0,ce="CRUISE",Y=80,de=!1;function J(){t(17,ae=We.speedControl),ae&&(t(18,ce=We.speedControlMode==Na.Cruise?"CRUISE":"MAX"),t(19,Y=Math.round(Math.round(We.speedControlTarget*et/5)*5)))}function me(){We.set("speedControl",!We.speedControl)}function Ee(fe){We.set("speedControlMode",(We.speedControlMode+fe+2)%2)}let ze=0,He=()=>{Q.onMount(le,pe,ye),pe.focus(),ge=new ResizeObserver(ut=>{Q.setSize(pe.offsetWidth,pe.offsetHeight)}),ge.observe(pe),Le.addListener("Escape",()=>{k?(t(2,k=!1),Je.resume()):O&&st?Qi.set(!O):!q&&st?Je.resume():t(1,q=!q)}),Le.addListener(Jt.mapping.ToggleDebug,()=>{ne.set("showDebug",!ne.showDebug)});const fe=ut=>{ti.set(ut)};ne.addListener("touchscreen",fe),ne.addListener("showDebug",ut=>{t(12,N=ut)}),ne.addListener("hideUI",ut=>{t(6,X=!ut)}),ne.addListener("hudPosition",ut=>{t(8,Z=ut)}),We.addListener("speedControl",J),We.addListener("speedControlMode",J),We.addListener("speedControlTarget",J),xi.addListener(ut=>{ut!=ze&&(J(),fe(ne.touchscreen),t(12,N=ne.showDebug),t(6,X=!ne.hideUI),t(8,Z=ne.hudPosition),ze=ut)}),lt.hasSeenSettings||(cs.addListener("fps",ut=>{ut&&!lt.hasSeenSettings&&t(10,V=!0)}),cs.addListener("hwa",ut=>{ut&&!lt.hasSeenHWAWarning&&t(11,z=!0)}))};function Qe(fe){t(13,B=fe),fe>=1&&t(7,$=!1)}function $e(fe){t(14,se=fe)}let dt=1,et=1,ci=A[0],Vt=E[0];function we(fe){t(21,dt=Aa[ne.units]),t(22,et=ld[ne.units]),t(23,ci=A[ne.units]),t(24,Vt=E[ne.units]),J()}let st=!1;function Tt(fe){t(25,st=fe)}let St=!1;function Qt(fe){t(26,St=fe)}function jt(fe){fe&&t(11,z=!0)}let hi=!1;function ht(fe){t(27,hi=fe)}nt(()=>(Q&&He(),di.addListener(Qe),Vo.addListener($e),ne.addListener("units",we),ne.addListener("showInteriorHud",ht),Je.addStateListener(Tt),at.addListener("useMouse",Qt),Ks.addListener(fe=>t(15,oe=fe)),cs.addListener("hwa",jt),()=>{di.removeListener(Qe),Vo.removeListener($e),ne.removeListener("units",we),ne.removeListener("showInteriorHud",ht),at.removeListener("useMouse",Qt),cs.removeListener("hwa",jt),Je.removeStateListener(Tt),Je.destroy()})),Vn(()=>{Q&&(Q.onDestroy(),ge.disconnect())});function yt(){t(11,z=!1),Je.unlock()}function ft(){location.reload()}const Bt=fe=>{O&&oe&&pe.requestFullscreen&&pe.requestFullscreen(),Qi.set(!O)},Dt=fe=>{hs.init(),Qi.set(!O)},fi=fe=>{O&&oe&&pe.requestFullscreen&&pe.requestFullscreen(),Qi.set(!O)},pt=()=>{Xi.forceNewSeed(),ft()},gt=fe=>{navigator.clipboard.writeText("```\n"+document.getElementById("error-log-content").innerHTML+"\n```")},je=()=>t(1,q=!0),Ze=()=>t(1,q=!1),Ut=fe=>{Qi.set(!0),document.fullscreenElement&&document.exitFullscreen()},ct=fe=>t(2,k=fe),Ht=()=>t(9,U=!0),ki=()=>t(9,U=!1),Ot=()=>t(9,U=!1),Zt=()=>Ee(1),mt=()=>Ee(-1),ii=()=>{t(20,de=!0)},si=()=>{t(20,de=!1)};function bi(fe){wt[fe?"unshift":"push"](()=>{ye=fe,t(16,ye)})}function yi(fe){wt[fe?"unshift":"push"](()=>{le=fe,t(3,le)})}function wi(fe){wt[fe?"unshift":"push"](()=>{pe=fe,t(4,pe)})}return s.$$.update=()=>{if(s.$$.dirty[1]&524288&&t(0,O=i),s.$$.dirty[0]&2&&q&&(lt.set("hasSeenSettings",!0),t(10,V=!1),Je.pause(),Le.setMouseEnabled(!1)),s.$$.dirty[0]&2&&(q||(Je.resume(),Le.setMouseEnabled(!0))),s.$$.dirty[0]&4&&k&&(Je.pause(),Le.setMouseEnabled(!1)),s.$$.dirty[0]&4&&(k||(Je.resume(),Le.setMouseEnabled(!0))),s.$$.dirty[0]&25|s.$$.dirty[1]&262144&&!O&&!Q)try{t(49,Q=new Ih),le&&pe&&He()}catch{console.log("Failed to initialise game"),t(5,j=!0),t(0,O=!0)}},[O,q,k,le,pe,j,X,$,Z,U,V,z,N,B,se,oe,ye,ae,ce,Y,de,dt,et,ci,Vt,st,St,hi,a,r,o,l,n,d,h,u,m,p,v,y,w,D,L,T,x,me,Ee,yt,ft,Q,i,Bt,Dt,fi,pt,gt,je,Ze,Ut,ct,Ht,ki,Ot,Zt,mt,ii,si,bi,yi,wi]}class Vv extends Ke{constructor(e){super(),Xe(this,e,Iv,Cv,Ye,{},null,[-1,-1,-1])}}export{Vv as component};
