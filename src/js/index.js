// importan libreria de terceros
import _ from 'lodash';
// importando estilos de bulma
require( '../style.scss' );
require( '../scss/layout.scss' );

require ( '../../node_modules/wow.js/css/libs/animate.css');

// importar fontawesome
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/brands';
// importar imagenes
import iconTitleDefault from "../img/student-icon-1.png";
import iconTitleAlternativeOne from "../img/student-icon-2.png";
import iconTitleAlternativeTwo from "../img/student-icon-3.png";
import iconTitleAlternativeThree from "../img/student-icon-4.png";
import iconLogoDevelopment from "../img/logo-development.png";
import iconLogoDevelopmentLG from "../img/web-development-lg.png";
import iconLogoDevelopmentMD from "../img/web-development-md.png";
import madeWithBulma from "../img/made-with-bulma--dark.png";
import cvPDF from "../files/cv.pdf";
import animate from "animate.css";
import wow from "wow.js";

// importar función para mostrar el menu de navegación en móvil
import actionMenu from "./show_menu_mobile";
// asignar logo al header
const logo = document.getElementById( 'logo' );
logo.setAttribute( 'src', iconLogoDevelopment );

// asignar logo al section about
const logoAbout = document.getElementById( 'logo-about' );
logoAbout.setAttribute( 'src', iconLogoDevelopmentLG );

// asignar logo a section skills
const logoSkills = document.getElementById( 'skills-logo' );
logoSkills.setAttribute( 'src', iconLogoDevelopmentLG );

const logoSkillsSlider = document.getElementById( 'skills-logo-slider' );
logoSkillsSlider.setAttribute( 'src', iconLogoDevelopmentMD );

// asignar logo a section skills
const logoSkills2 = document.getElementById( 'skills-logo-2' );
logoSkills2.setAttribute( 'src', iconLogoDevelopmentLG );

const logoSkillsSlider2 = document.getElementById( 'skills-logo-slider-2' );
logoSkillsSlider2.setAttribute( 'src', iconLogoDevelopmentMD );

const logoBulma = document.getElementById( 'made-with-bulma' );
logoBulma.setAttribute( 'src', madeWithBulma );

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

const PDF = document.getElementById( 'printPDF' );
PDF.setAttribute( 'href', cvPDF );
PDF.setAttribute( 'target', '_blank' );

// Iniciar animaciones
const wowjs = new wow();
wowjs.init();




