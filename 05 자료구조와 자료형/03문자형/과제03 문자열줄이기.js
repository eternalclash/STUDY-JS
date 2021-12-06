function truncate (str,maxlength) {
    let a =""
 if(str.length>maxlength)
 {
     a = str.slice(0,maxlength)+"..."
     return a;
 }
 else
    {
        a= str.slice(0,maxlength)
        return a;
    }
}
console.log(truncate("What I'd like to tell on this topic is:", 20)) 

console.log(truncate("Hi everyone!", 20))