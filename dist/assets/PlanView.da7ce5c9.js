import{r as o,o as n,c as t,b as s,t as u,F as c,g as m,e as i,i as p,u as _,K as h,l as P,d,R as g}from"./index.8e29202f.js";const f={key:0},k={}.VITE_API_HOST||"http://localhost:8080",y=k,T={name:"Plan",props:{org_name:String},components:{Datepicker:h},data(){return{listPlans:$(this.org_name),date:null}}};function $(r){let e=o([]);return fetch(y+"/piano_pulizia/list?"+new URLSearchParams({nome_org:r}),{method:"GET",headers:{"Content-Type":"application/json","x-access-token":P.token}}).then(a=>a.json()).then(function(a){e.value=a}).catch(a=>console.error(a)),console.log(e),e}const S=Object.assign(T,{setup(r){return o(""),o(""),o(""),(e,a)=>(n(),t(c,null,[s("div",null,[s("h1",null,"Piani di pulizia ("+u(e.$data.listPlans.length)+")",1),s("ul",null,[!Array.isArray(e.listPlans)||!e.listPlans.length?(n(),t("h3",f,"Nessun piano di pulizia")):(n(!0),t(c,{key:1},m(e.$data.listPlans,l=>(n(),t("li",{key:l},[i(_(g),{to:"/organisations/"+e.$props.org_name+"/plans/"+l},{default:p(()=>[d(u(l),1)]),_:2},1032,["to"])]))),128))])]),s("div",null,[i(_(g),{to:"/organisations/"+e.$props.org_name+"/plans/create"},{default:p(()=>[d("Crea piano di pulizia")]),_:1},8,["to"])])],64))}}),z={__name:"PlanView",setup(r){return(e,a)=>(n(),t("main",null,[i(S,{org_name:e.$route.params.org_name},null,8,["org_name"])]))}};export{z as default};
