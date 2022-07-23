class Kaitlente{
  constructor(skyliuKiekis){
    this.size=skyliuKiekis;
    console.log(this);
  }
  render(){
    const mainDOM = document.querySelector('main');
    const columns = Math.ceil(Math.sqrt(this.size))
    const width = 120 * columns + 2;
    const HTML = `<div class="kaitlent" style="width: ${width}px;">
    <div class="top">
      ${'<div class="skyle"></div>'.repeat(this.size)}
     </div>
    <div class="bottom">
      ${'<div class="jungiklis"></div>'.repeat(this.size)}
    </div>
    </div>
      `;
    mainDOM.innerHTML += HTML;

    // const topDOM = document.querySelector(`.kaitlent .top:nth-child(${kiekis})`);
    // const bottomDOM = document.querySelector(`.kaitlent .bottom:nth-child(${kiekis})`);

    // const skyles = `<div class="skyle"></div>`;
    // const jugikl = `<div class="jungiklis"></div>`;

    //  topDOM.innerHTML += skyles;
    //  bottomDOM.innerHTML += jugikl;
  }
  // ijungti(x){
  //   jung[x].classList.add('ijungtas')
  // }
}

export { Kaitlente }