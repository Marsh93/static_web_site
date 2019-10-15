// importan libreria de terceros
import _ from 'lodash';
// importando estilos de bulma
require( '../style.scss' );
require( '../scss/layout.scss' );
require( '../scss/notes.scss' );
// importar fontawesome
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/brands';

import iconTitleAlternativeThree from "../img/student-icon-4.png";
import iconLogoDevelopment from "../img/logo-development.png";
import madeWithBulma from "../img/made-with-bulma--dark.png";
import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel';
// importar función para mostrar el menu de navegación en móvil
import actionMenu from "./show_menu_mobile";

// Asignar icono a la ventana del navegador
function buildIconTitle( iconImg ) {
   let headTitle = document.querySelector( 'head' );
   const setFavicon = document.createElement( 'link' );
   setFavicon.setAttribute( 'rel', 'icon' );
   setFavicon.setAttribute( 'href', iconImg );
   setFavicon.setAttribute( 'type', 'image/png' );
   headTitle.appendChild( setFavicon );
}
buildIconTitle( iconTitleAlternativeThree );

// asignar logo al header
const logo = document.getElementById( 'logo' );
logo.setAttribute( 'src', iconLogoDevelopment );

const logoBulma = document.getElementById( 'made-with-bulma' );
logoBulma.setAttribute( 'src', madeWithBulma );

const carousel = bulmaCarousel.attach( '.carousel', {
   slidesToScroll: 1,
   slidesToShow: 3,
   autoplay: true,
   autoplaySpeed: 3000,
   loop: true
} );
