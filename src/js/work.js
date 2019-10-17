import _ from 'lodash';

require('../style.scss');
require('../scss/layout.scss');
require('../scss/work.scss');

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/brands';

import iconTitleAlternativeThree from "../img/student-icon-4.png";
import iconLogoDevelopment from "../img/logo-development.png";
import madeWithBulma from "../img/made-with-bulma--dark.png";
import actionMenu from "./show_menu_mobile";


function buildIconTitle( iconImg ) {
   let headTitle = document.querySelector( 'head' );
   const setFavicon = document.createElement( 'link' );
   setFavicon.setAttribute( 'rel', 'icon' );
   setFavicon.setAttribute( 'href', iconImg );
   setFavicon.setAttribute( 'type', 'image/png' );
   headTitle.appendChild( setFavicon );
}

buildIconTitle( iconTitleAlternativeThree );

const logo = document.getElementById( 'logo' );
logo.setAttribute( 'src', iconLogoDevelopment );

const logoBulma = document.getElementById( 'made-with-bulma' );
logoBulma.setAttribute( 'src', madeWithBulma );
