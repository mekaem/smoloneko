!function(){if(!matchMedia("(prefers-reduced-motion:reduce)").matches){var e=document.createElement("div"),s={i:[[-3,-3]],a:[[-7,-3]],s1:[[-5,0],[-6,0],[-7,0]],s2:[[0,0],[0,-1]],s3:[[-7,-1],[-6,-2]],s4:[[-2,-2],[-2,-3]],s5:[[-4,0],[-4,-1]],t:[[-3,-2]],z:[[-2,0],[-2,-1]],N:[[-1,-2],[-1,-3]],NE:[[0,-2],[0,-3]],E:[[-3,0],[-3,-1]],SE:[[-5,-1],[-5,-2]],S:[[-6,-3],[-7,-2]],SW:[[-5,-3],[-6,-1]],W:[[-4,-2],[-4,-3]],NW:[[-1,0],[-1,-1]]},t=(t,n)=>{var $=s[t][n%s[t].length];e.style.backgroundPosition=32*$[0]+"px "+32*$[1]+"px"},n=y=16,$=v=f=i=0,a=null,_=0,l=innerWidth,c=innerHeight,o=0,r="i",u=0;Object.assign(e.style,{width:"32px",height:"32px",position:"fixed",pointerEvents:"none",backgroundImage:"url('oneko.gif')",imageRendering:"pixelated",left:"0px",top:"0px",zIndex:"2147483647"}),document.body.appendChild(e),t("i",0),addEventListener("mousemove",e=>{$=e.clientX,v=e.clientY,r==="i"&&(r="a",u=0)}),function s(d){if(e.isConnected&&(o||(o=d),d-o>100)){o=d,f++;var p=$-n,m=v-y,h=Math.sqrt(p*p+m*m);switch(r){case"i":i++>200&&.05>Math.random()&&!a&&(a=["z","s1",n==16?"s5":y==16?"s2":n==l-16?"s4":y==c-16?"s3":null].filter(Boolean)[Math.random()*4|0],_=0),a?a==="z"?(_<8?t("t",0):t("z",_/4|0),_>192?(a=null,_=0):_++):["s1","s2","s3","s4","s5"].includes(a)&&(t(a,_),_>9?(a=null,_=0):_++):t("i",0),i=Math.min(i+1,250);break;case"a":t("a",0),++u>=6&&(r="c");break;case"c":a=null,_=0;var x=(Math.abs(m/h)>.5?m>0?"S":"N":"")+((Math.abs(p/h)>.5?p>0?"E":"W":""));t(x||"i",f),n+=p/h*12,y+=m/h*12,n=Math.min(Math.max(16,n),l-16),y=Math.min(Math.max(16,y),c-16),e.style.left=n-16+"px",e.style.top=y-16+"px",(h<42||16==n||n==l-16||16==y||y==c-16)&&(r="i",i=0,t("i",0))}}requestAnimationFrame(s)}()}}();