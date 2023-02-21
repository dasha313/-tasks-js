let out = '';
let w = 3;
let q = 7;

for (let i = 0; i < 4; i++) {
   for (let k = 0; k < 8; k++) {
      if (k < w || k > q) {
         //out += '- ';
         out += '&nbsp;&nbsp;';
      }
      else {
         out += '*';
      }
   }
   w--;
   q--;
   out += '<br>'
}

document.querySelector('.out').innerHTML = out;