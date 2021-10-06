"use strict";

require(" fslightbox ");

var _sweetalert = _interopRequireDefault(require(" sweetalert2 "));
var _operaciones = require("./operaciones");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

fsLightboxInstances['first-lightbox'].open(0);
fsLightboxInstances['second-lightbox'].props.onOpen = function () {
  return console.log('Lightbox open!');

};

console.log((0, _operaciones.suma)(7, 2));
console.log(_operaciones.saludo);
document.write("<h1>".concat(_operaciones.saludo, "</h1>"));

_sweetalert.default.fire({
  title: 'Error!',
  text: 'Do you want to continue',
  icon: 'error',
  confirmButtonText: 'Cool'

});

/*Swal.fire({
   title:'<strong>Hola:<u>Dania Almazan</u></strong>',
   icon: 'info',

  html:
    'You can use <b>bold text</b>, ' +
    '<a href="//sweetalert2.github.io">links</a> ' +
    'and other HTML tags',
    showCloseButton: true,
   showCancelButton: true,
   focusConfirm: false,
   confirmButtonText:

    '<i class="fa fa-thumbs-up"></i> Great!',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  cancelButtonText:
    '<i class="fa fa-thumbs-down"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
})

import _ from 'lodash';

function component() {
    const element = document.createElement('div');
 element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
  }
  document.body.appendChild(component());*/