import{r as c,o as r,c as u,b as e,t,u as k,l as p,w as y,v as g,a as h,d as T}from"./index.71390ce7.js";const z=e("h1",null,"Pannello di creazione robot",-1),C=e("br",null,null,-1),w={style:{float:"left","margin-right":"20px"}},x=e("label",null," Capienza ",-1),S=e("br",null,null,-1),B={style:{color:"red"}},O={style:{color:"white"}},P=e("br",null,null,-1),V=e("br",null,null,-1),H=e("br",null,null,-1),I=e("br",null,null,-1),N={key:0},R={key:1},j={setup(v){const d={}.VITE_API_HOST||"http://localhost:8080",n=c(""),l=c({}),i=c(""),_=c("");function f(){if(+n.value<0){i.value="Capienza non valida";return}i.value="",_.value="",m(n.value).catch(s=>console.error(s))}async function m(s){let o=await fetch(d+"/robot",{method:"POST",headers:{"Content-Type":"application/json","x-access-token":p.token},body:JSON.stringify({capienza_attuale:+s})});if(o.ok){let a=await o.json();l.value=a,console.log(a),_.value="Robot creato con successo"}else console.error("HTTP-Error: "+o.status)}return(s,o)=>(r(),u("div",null,[z,e("h2",null,"Benvenuto "+t(k(p).username),1),e("form",null,[C,e("div",w,[x,y(e("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>n.value=a),placeholder:"Capienza"},null,512),[[g,n.value]]),e("button",{type:"button",onClick:f},"Crea robot con capienza "+t(n.value),1)]),S,e("span",B,t(i.value),1),e("span",O,t(_.value),1)]),P,V,H,I,e("div",null,[l.value.id?(r(),u("h3",N," ID: "+t(l.value.id),1)):h("",!0),l.value.token?(r(),u("h3",R," Token: "+t(l.value.token),1)):h("",!0)])]))}},E={setup(v){return(b,d)=>(r(),u("main",null,[T(j)]))}};export{E as default};
