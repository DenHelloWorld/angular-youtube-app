import{a}from"./chunk-2RCK3KAT.js";var o=[{condition:t=>/^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/u.test(t),message:"Email must be like x@x.x"}];function r(){return a(o)}var s=[{condition:t=>/[A-Z]/.test(t),message:"Password must contain at least one uppercase English letter."},{condition:t=>/[a-z]/.test(t),message:"Password must contain at least one lowercase English letter."},{condition:t=>/\d/.test(t),message:"Password must contain at least one digit."},{condition:t=>/[!@#?]/.test(t),message:"Password must contain at least one special character (!, @, #, ?)."},{condition:t=>t.length>=8,message:"Password must be at least 8 characters long."}];function u(){return a(s)}export{r as a,u as b};