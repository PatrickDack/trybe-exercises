let alfa = 30;
let beta = 90;
let gama = 60;

if (alfa <= 0 || beta <= 0 || gama <= 0) {
    console.log('O valor de um dos angulos é inválido.');
}

if (alfa + beta + gama == 180) {
    console.log(true);
} else {
    console.log(false)
}