function VerificaMaiorNome (array) {
    let bigestWord = array[0];
    for (let index in array) {
        if(bigestWord.length < array[index].length){
            bigestWord = array[index];
        }
    }
return bigestWord;
}
 
 let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana',]; 
 
 console.log(VerificaMaiorNome(nomes));