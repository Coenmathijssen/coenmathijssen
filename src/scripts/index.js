import '../styles/index.scss'

// console.log('webpack starterkit');
import Flickity from 'flickity'

let elem = document.querySelector('.main-carousel')
var flkty = new Flickity ( elem, {
  // options
  cellAlign: 'left',
  imagesLoaded: true
  // contain: true
})
