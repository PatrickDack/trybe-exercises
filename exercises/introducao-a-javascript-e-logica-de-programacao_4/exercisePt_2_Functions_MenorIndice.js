function menorIndice (array) {
    let menorIndice = 0;
    for (index in array){
        if (array[maiorIndice] > array[index]){
            menorIndice = index;
        };
    };
    return menorIndice;
 };
 
 let numbers = [2, 4, 6, 7, 10, 0, -3];
 
 console.log(menorIndice(numbers));