function laCajaDePandora(numero) {
    switch (numero % 2) {
        case 1:
            return numero.toString(16)
        case 0:
            return numero.toString(2)
        default:
            break;
    }
};

function antonio() {
    return {
        name: 'Antonio',
        age: 32,
        natl: 'MX'
    }
}