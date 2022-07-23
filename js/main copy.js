// console.log(`Test!`);
import { Kaitlente  } from "./Kaitlente.js";

const kaitlKiekis = 5;

const titleDOM = document.querySelector('.title');

if (kaitlKiekis % 2 === 0){
  titleDOM.classList.add('bold');
}

if(document.querySelector('.karsta')){
  titleDOM.classList.add('red');
}

document.querySelector('main').textContent ='';

for (let i=1; i <= kaitlKiekis; i++){
  const irenginys = new Kaitlente(i);
  irenginys.render(i);
}

// console.log([document.querySelector('main')]);
// const jungiklioPadetis = document.querySelector('.jungiklis');
// console.log(jungiklioPadetis);
// jungiklioPadetis.classList.add('ijungtas');
// console.log(document.querySelectorAll('.kaitlent .top'));
// const kaitSk = document.querySelectorAll('.kaitlent .top');
// console.log(kaitSk);
// const skyles = `<div class="skyle"></div>`;
// console.log(kaitSk.length);
// for (let n=1; n<=kaitSk.length; n++){
//   let kaitlen = document.querySelector(`.kaitlent:nth-child(${n})`);
//   console.log(kaitlen);
//     for(let i=0; i<kaitlKiekis; i++){
//       if (i===n){
//         break;
//       }else{
//         topDOM.innerHTML += skyles;
//       }
//     }
// }

const jung = document.querySelectorAll('.bottom .jungiklis');

//const spanDOM = document.querySelector('span');
//console.log(spanDOM.textContent);

// function test(n){
// jung[n].classList.add('ijungti');
// }

// jung[kaitlKiekis].addEventListener('click', ()=> jung[kaitlKiekis].classList.add('ijungtas'));
// jung[kaitlKiekis].classList.add('ijungtas');

console.log(jung[kaitlKiekis]);
jung.forEach((value, index, array)=> console.log(jung[index]));

// console.log(jung);
// console.log(jung.length);

for (const a of jung){
// a.addEventListener('click', myFunc);
a.addEventListener('click', ()=> a.classList.toggle('ijungtas'));
}

