import{r,l,o as i,c as s,b as a,t as e,e as _}from"./index.5086d4bd.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";const c={name:"PlanInfo",props:{plan_id:Number},data(){return{plan_info:h(this.plan_id)}}},u={}.VITE_API_HOST||"http://localhost:8080",f=u;function h(t){console.log(t);let n=r({});return fetch(f+"/piano_pulizia/organization/"+t,{method:"GET",headers:{"Content-Type":"application/json","x-access-token":l.token}}).then(o=>o.json()).then(function(o){n.value=o}).catch(o=>console.error(o)),console.log(n),l.currentPlan=t,n}const d=a("h1",null,"Dettagli piano pulizia",-1);function m(t,n,o,I,D,P){return i(),s("form",null,[d,a("ul",null,[a("li",null,"ID: "+e(this.plan_info._id),1),a("li",null,"Zona: "+e(this.plan_info.ID_zona),1),a("li",null,"Data di inzio: "+e(this.plan_info.data_inizio),1),a("li",null,"Data fine: "+e(this.plan_info.data_fine),1),a("li",null,"Robot assegnato: "+e(this.plan_info.ID_robot!=""?this.plan_info.ID_robot:"Nessun robot assegnato"),1)])])}var g=p(c,[["render",m]]);const z={__name:"PlanInfoView",setup(t){return(n,o)=>(i(),s("main",null,[_(g,{org_name:n.$route.params.org_name,plan_id:n.$route.params.id},null,8,["org_name","plan_id"])]))}};export{z as default};
