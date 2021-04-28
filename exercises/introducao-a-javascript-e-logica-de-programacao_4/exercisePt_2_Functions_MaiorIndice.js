function maiorIndice (Array) {
    let indice;
    for(let index = 0; index < 1; index += 1){
        for(let index2 = 0; index2 < Array.length; index2 += 1){
            if(Array[index] > Array[index2]){
                indice = index;
            
            } else {
                indice = index2;
            }
        };
    };
    return indice;
};

let array = [2222, 33, 61, 7800, 10, 123, 1700]; 
console.log(maiorIndice(array));