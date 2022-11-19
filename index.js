function laCajaDePandora(n){
    if(typeof n !== "number") throw new Error("you must not give us something different than a number")
    if(n % 2 === 0){
        return (n).toString(2)
        }
    if(n % 2 === 1){
        return (n).toString(16)
    }
}