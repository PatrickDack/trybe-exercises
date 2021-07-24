function maiorIndice (array) {
   let maiorIndice = 0;
   for (index in array){
       if (array[maiorIndice] < array[index]){
           maiorIndice = index;
       };
   };
   return maiorIndice;
};

let numbers = [2, 3, 6, 7, 10, 1]; 

console.log(maiorIndice(numbers));