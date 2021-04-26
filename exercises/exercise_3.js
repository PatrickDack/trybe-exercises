let n = 5;
let out = [];
let space = [];
let temp = '';
let temp2 = '';

for (let index0 = 0; index0 < n; index0 += 1) {
    temp += '*';
    out.push(temp);
}
for (let index = 0; index < n; index += 1) {
    temp2 += ' ';
    space.push(temp2);
  }

for (let index2 = 0; index2 < n; index2 += 1) {
   console.log(space[(n - 1) - index2] + out[index2]);
    }
    

