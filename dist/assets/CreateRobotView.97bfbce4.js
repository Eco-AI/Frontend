import{r,o as c,c as u,b as e,t,u as k,l as p,w as y,v as g,a as h,e as T}from"./index.8e29202f.js";const C=e("h1",null,"Pannello di creazione robot",-1),w=e("br",null,null,-1),z={style:{float:"left","margin-right":"20px"}},x=e("label",null," Capienza ",-1),R=e("br",null,null,-1),S={style:{color:"red"}},V={style:{color:"white"}},B=e("br",null,null,-1),O=e("br",null,null,-1),P=e("br",null,null,-1),H=e("br",null,null,-1),I={key:0},N={key:1},j={__name:"CreateRobot",setup(v){const d={}.VITE_API_HOST||"http://localhost:8080",n=r(""),l=r({}),i=r(""),_=r("");function f(){if(+n.value<0){i.value="Capienza non valida";return}i.value="",_.value="",m(n.value).catch(a=>console.error(a))}async function m(a){let o=await fetch(d+"/robot",{method:"POST",headers:{"Content-Type":"application/json","x-access-token":p.token},body:JSON.stringify({capienza_attuale:+a})});if(o.ok){let s=await o.json();l.value=s,console.log(s),_.value="Robot creato con successo"}else console.error("HTTP-Error: "+o.status)}return(a,o)=>(c(),u("div",null,[C,e("h2",null,"Benvenuto "+t(k(p).username),1),e("form",null,[w,e("div",z,[x,y(e("input",{"onUpdate:modelValue":o[0]||(o[0]=s=>n.value=s),placeholder:"Capienza"},null,512),[[g,n.value]]),e("button",{type:"button",onClick:f},"Crea robot con capienza "+t(n.value),1)]),R,e("span",S,t(i.value),1),e("span",V,t(_.value),1)]),B,O,P,H,e("div",null,[l.value.id?(c(),u("h3",I," ID: "+t(l.value.id),1)):h("",!0),l.value.token?(c(),u("h3",N," Token: "+t(l.value.token),1)):h("",!0)])]))}},E={__name:"CreateRobotView",setup(v){return(b,d)=>(c(),u("main",null,[T(j)]))}};export{E as default};
