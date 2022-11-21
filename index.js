
function laCajaDePandora(numero){
    if(typeof numero !== "number") throw new Error("you must not give us something different than a number")
    if(numero % 2 === 0) return numero.toString(2)
    else return numero.toString(16)
};

function Joaquin(){
    return{name: "Joaquin Maza",
    age: 22,
    nationality: "Argentinian"}
}