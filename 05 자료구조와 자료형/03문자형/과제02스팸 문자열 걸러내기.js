function checkSpam(a) {
    let str = a.toUpperCase();
    if(str.includes("VIAGRA")||str.includes("XXX"))
    {
        return true;
    }
    else
    return false;
}

console.log(checkSpam('buy ViAgRA now'))
console.log(checkSpam('free xxxxx'))
console.log(checkSpam("innocent rabbit")) 