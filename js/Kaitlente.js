class Kaitlente{
  constructor(skyliuKiekis){
    this.size=skyliuKiekis;
    this.jungi = null;
    this.kaitl = null;
  }
  render(size){
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
    
  }
    
  enableClicks(a){
    this.jungi = document.querySelectorAll('.bottom .jungiklis');
    this.kaitl = document.querySelectorAll('.top .skyle');
    this.jungi[a].classList.toggle('ijungtas');
    this.kaitl[a].classList.toggle('karsta');
  }
}

export { Kaitlente }