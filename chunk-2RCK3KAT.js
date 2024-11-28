var a=r=>s=>{let n=s.value||"",o={customValidator:[]};for(let t of r)t.condition(n)||o.customValidator.push(t.message);return o.customValidator.length>0?o:null};export{a};
