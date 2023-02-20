let d = [1, 0, 0, 0, 0];
document.querySelector('.out').innerHTML = d;
let k = 0;
document.querySelector('button').onclick = () => {
   d[k] = 0;
   d[k + 1] = 1;
   k++;
   document.querySelector('.out').innerHTML = d;
}