let salarioBruto = 2500;
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
    ir = 1;
} else if (1903.98 < salarioLiquido && salarioLiquido <= 2826.65) {
    ir = salarioLiquido * 0.15 - 354.8;
}




