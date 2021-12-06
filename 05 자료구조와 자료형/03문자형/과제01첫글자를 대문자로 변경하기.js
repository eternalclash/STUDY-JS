function ucFirst(a) {
    let str=""
    for(let i=0;i<a.length;i++)
    {
        if(i==0)
        str+=a[i].toUpperCase();
        else
        str+=a[i]
    }
    return str;
}

console.log(ucFirst("john"))