let salarioBruto = 6000;
let inss;
let ir;
let salarioLiquido;

//Calculo do INSS.
if (salarioBruto <= 1556.94) {
    inss = 0.08;
    salarioLiquido = salarioBruto - (salarioBruto * inss);
} else if (1556.95 < salarioBruto && salarioBruto <= 2594.92){
    inss = 0.09;
    salarioLiquido = salarioBruto - (salarioBruto * inss);
} else if (2594.92 < salarioBruto && salarioBruto <= 5189.82){
    inss = 0.11;
    salarioLiquido = salarioBruto - (salarioBruto * inss);
} else {
    inss = 570.88;
    salarioLiquido = salarioBruto - inss;
}

//Calculo do IR.
if (salarioLiquido <= 1903.98) {
    ir = 0;
} else if (1903.98 < salarioLiquido && salarioLiquido <= 2826.65) {
    ir = salarioLiquido * 0.075 - 142.8;
} else if (2826.65 < salarioLiquido && salarioLiquido <= 3751.05) {
    ir = salarioLiquido * 0.15 - 354.8;
} else if (3751.05 < salarioLiquido && salarioLiquido <= 4664.68) {
    ir = salarioLiquido * 0.225 - 636.13;
} else {
    ir = salarioLiquido * 0.275 - 869.36;
}
salarioLiquido = salarioLiquido - ir;
console.log('O salário liquido é R$'+salarioLiquido);




