let c = '()(((()))(()(())';
//Длина строки
console.log(c.length);

let count = 0;

for (let i = 0; i < c.length; i++) {
   if (c[i] === '(') {
      count++;   //увеличивается на +1
   }
   if (c[i] === ')') {
      count--;   //уменьшается на -1
   }
   if (count < 0) {
      break;
   }
}
console.log(count);

if (count != 0) {
   console.log(false)
} else {
   console.log(true)
}