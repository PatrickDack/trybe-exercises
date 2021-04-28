function menorIndice (array) {
    let maiorIndice = 0;
    for (index in array){
        if (array[maiorIndice] > array[index]){
            maiorIndice = index;
        };
    };
    return maiorIndice;
 };
 
 let numbers = [2, 4, 6, 7, 10, 0, -3];
 
 console.log(menorIndice(numbers));