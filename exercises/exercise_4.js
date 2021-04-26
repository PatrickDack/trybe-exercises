

let n = 100;
let out = [];
let trueOut = [];
let space = [];
let trueSpace = [];
let temp = '';
let temp2 = '';

//cria os arrays out e space com os asterisco e espaços.
for (let index0 = 0; index0 < n; index0 += 1) {
    temp += '*';
    out.push(temp);
    temp2 += ' ';
    space.push(temp2);
}

// A variável middle traz um valor relativo ao indice que está exatamente no meio do array.
let middleArray = ((n - 1) / 2) - 1;

//Preenche o array trueSpace com metade do array space.
for (let middleIndex = 0; middleIndex <= middleArray; middleIndex += 1) {
  trueSpace.push(space[middleIndex]);
}

//Preenche o array trueOut com os numeros impares de asteriscos.
for (let outIndex = 0; outIndex < n; outIndex += 1) {
  if (outIndex % 2 == 0) {
    trueOut.push(out[outIndex]);
  }
}

// Logica pra concatenação dos arrays trueOut e trueSpace e impressão dos mesmos.
for (let index2 = 1; index2 <= trueOut.length; index2 += 1) {
    if (index2 == trueOut.length){
      console.log(trueOut[trueOut.length - 1]);
    } else {
      console.log(trueSpace[trueSpace.length - index2] + trueOut[index2 - 1] + trueSpace[trueSpace.length - index2]);
    }
}