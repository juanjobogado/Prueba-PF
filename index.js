 if (typeof numero !== "number")
    throw new Error("you must not give us something different than a number");
  if (numero % 2 === 0) {
    return numero.toString(2);
  } else if (numero % 2 === 1) {
    return numero.toString(16);
  }
};

function Martina() {
    return{
        name: "Martina Girollet",
        age: 24,
        nationality: "Argentinian"
    }
};

function juanjo(){
    let data = {
        name: "juan",
        age: 23,
        nationality: argentinian

    }
    return data;
};

const nicolas = () => {
    return {
        nombre: "Nicolas Rojas",
        edad: 22,
        pais: "Colombia"
    }
}
