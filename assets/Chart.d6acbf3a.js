import{r as e,R as r}from"./index.43d4b576.js";import{C as t}from"./index.e2a4dc3c.js";let o=null;const n=[{genre:"Sports",sold:275},{genre:"Strategy",sold:115},{genre:"Action",sold:120},{genre:"Shooter",sold:350},{genre:"Other",sold:150}];function d(){return e.exports.useEffect((()=>(o=new t({container:"c1",width:600,height:300}),o.data(n),o.interval().position("genre*sold"),o.render(),()=>{o.destroy()})),[]),r.createElement("div",{id:"c1"})}export default d;