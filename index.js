function laCajaDePandora(numero) {
  if (typeof numero !== "number")
    throw new Error("you must not give us something different than a number");
  if (numero % 2 === 0) {
    return numero.toString(2);
  } else if (numero % 2 === 1) {
    return numero.toString(16);
  }
}

let user = {
  name: "",
  age: 0,
  nationality: "",
};

const userInfo = (user) => {
  if (!user) throw new Error("User must contain information");
  else {
    return {
      name: "Andres",
      age: 23,
      nationality: "Colombian",
    };
  }
};
function Joaquin() {
    return{
        name: "Joaquin Alejo Maza",
        age: 22,
        nationality: "Argentinian"
    }
}
