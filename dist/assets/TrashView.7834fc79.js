import{r as u,l as c,o as s,c as a,b as _,t as h,F as f,g,j as T,d,h as k,e as y}from"./index.71390ce7.js";import{_ as z}from"./plugin-vue_export-helper.21dcd24c.js";const v={}.VITE_API_HOST||"http://localhost:8080",p=v,x={name:"Trash",props:{org_name:String,plan_id:String},data(){return{listTrash:S(this.org_name,this.plan_id),zone_id:i}}},i=u(0);function S(l,o){let t=u([]);return fetch(p+"/piano_pulizia/organization/"+o,{method:"GET",headers:{"Content-Type":"application/json","x-access-token":c.token}}).then(n=>n.json()).then(function(n){i.value=n.ID_zona,console.log("zone_id: "+i.value),fetch(p+"/rifiuto/toclassify?"+new URLSearchParams({id_zona:n.ID_zona}),{method:"GET",headers:{"Content-Type":"application/json","x-access-token":c.token}}).then(e=>e.json()).then(function(e){console.log(e),t.value=e}).catch(e=>console.error(e))}).catch(n=>console.error(n)),console.log(t),t}const I={key:0};function L(l,o,t,n,e,j){const m=T("RouterLink");return s(),a("div",null,[_("h1",null,"Rifiuti non riconosciuti ("+h(this.listTrash.length)+")",1),_("ul",null,[!Array.isArray(e.listTrash)||!e.listTrash.length?(s(),a("h3",I,"Non ci sono rifiuti da classificare")):(s(!0),a(f,{key:1},g(this.listTrash,r=>(s(),a("li",{key:r},[d(m,{to:"/organisations/"+this.org_name+"/plans/"+this.plan_id+"/toclassify/"+r._id+"?id_zona="+e.zone_id},{default:k(()=>[y(h(r._id),1)]),_:2},1032,["to"])]))),128))])])}var R=z(x,[["render",L]]);const E={setup(l){return(o,t)=>(s(),a("main",null,[d(R,{org_name:o.$route.params.org_name,plan_id:o.$route.params.id},null,8,["org_name","plan_id"])]))}};export{E as default};
