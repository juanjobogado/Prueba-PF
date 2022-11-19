function laCajaDePandora(numero){
    if(typeof numero !== "number") throw new Error("you must not give us something different than a number")
    if(numero % 2 === 0){
        return (numero).toString(2)
        }
    if(numero % 2 === 1){
        return (numero).toString(16)
    }
}

function Joaquin() {
    return{
        name: "Joaquin Alejo Maza",
        age: 22,
        nationality: "Argentinian"
    }
}