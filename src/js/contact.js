// import library lodash
import _ from 'lodash';
// import style of bulma css
require( '../style.scss' );
require( '../scss/layout.scss' );
require( '../scss/contact.scss' );

// import fontawesome icons
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/brands';
// import icon for title browser
import iconTitleAlternativeThree from "../img/student-icon-4.png";
import iconLogoDevelopment from "../img/logo-development.png";
import madeWithBulma from "../img/made-with-bulma--dark.png";
// importar función para mostrar el menu de navegación en móvil
import actionMenu from "./show_menu_mobile";

// Asign icono for window browser
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
