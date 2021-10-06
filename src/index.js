import "fslightbox";

fsLightboxInstances['first-lightbox'].open(0);
fsLightboxInstances['second-lightbox'].props.onOpen = () => console.log(' Lightbox open! ');

import Swal from 'sweetalert2'
import {suma, saludo}from "./operaciones"; 

console.log(suma(7,2));
console.log(saludo);
document.write(`<h1>${saludo}</h1>`);

Swal.fire({

    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'Cool'

  })

  /*Swal.fire({
    title:'<strong>Hola:<u>Dania Almazan</u></strong>',
    icon:'info',
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