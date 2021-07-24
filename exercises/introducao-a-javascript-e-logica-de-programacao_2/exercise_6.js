let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let hit = 0;
for (let i of numbers) {
    if(i % 2 != 0){
        console.log(i);
        hit += 1;
    }
}
if(hit === 0) {
    console.log('Nenhum valor impar encontrado.');
}