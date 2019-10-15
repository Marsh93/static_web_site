// importan libreria de terceros
import _ from 'lodash';
// importando estilos de bulma
require( '../style.scss' );
require( '../scss/layout.scss' );
require( '../scss/social.scss' );
// importar fontawesome
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/brands';

import iconTitleAlternativeThree from "../img/student-icon-4.png";
import iconLogoDevelopment from "../img/logo-development.png";
import iconLogoSocialLg from "../img/social-1.jpg";
import madeWithBulma from "../img/made-with-bulma--dark.png";
// importar función para mostrar el menu de navegación en móvil
import actionMenu from "./show_menu_mobile";
// importar librería para animaciones
import animate from "animate.css";
import wow from "wow.js";

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

// Asignar logos a pagina social.html
const socialImgA = document.getElementById( 'social-img-lg' );
socialImgA.setAttribute( 'src', iconLogoSocialLg );

const socialImgB = document.getElementById( 'social-img-ms-one' );
socialImgB.setAttribute( 'src', iconLogoSocialLg );

const socialImgC = document.getElementById( 'social-img-ms-two' );
socialImgC.setAttribute( 'src', iconLogoSocialLg );

const logoBulma = document.getElementById( 'made-with-bulma' );
logoBulma.setAttribute( 'src', madeWithBulma );

// Utilizar animaciones
const wowjs = new wow();
wowjs.init();