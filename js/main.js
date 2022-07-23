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
//sukuria kaitlentes
for (let i=1; i <= kaitlKiekis; i++){
  const irenginys = new Kaitlente(i);
  irenginys.render(i);
}

const jung = document.querySelectorAll('.bottom .jungiklis');
//reguoja 5 jungiklio paspaudima, pasisuka jungiklis, uzsidega atitinkama skyle
for (let i=0; i<jung.length; i++){
  const iren = new Kaitlente();
  jung[i].addEventListener('click', ()=> iren.enableClicks(i));
 
}
