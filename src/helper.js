export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year;
}

//calcula el total a pagar segun la marca
export function calcularMarca(marca) {
    let incremento;

    switch(marca) {
        case 'europeo':
            incremento = 1.30;
            break;
            case 'americano':
            incremento = 1.15;
            break;
            case 'asiatico':
            incremento = 1.05;
            break;
        default:
            break;
    }

    return incremento;
}
// calcula el tipo de seguro
export function obtenerPlan(plan) {
    let aumento;
    switch (plan) {
        case 'basico':
            aumento= 1.20;
            break;
        case 'completo':
            aumento= 1.50;
            break;
        default:
            break;
    }
    return aumento;
}

//muestra la primer letra mayuscula
export function primerMayuscula(texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}