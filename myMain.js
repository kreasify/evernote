import './style.css'
import './assets/js/alpinejs@3.9.1.min.js'
import WOW from 'wow.js/dist/wow.js'
import './assets/js/isotope.pkgd.min.js'

document.addEventListener('alpine:init', () => {
  Alpine.data('header', () => ({
    menus: [{
        id: 1,
        label: 'Home',
        url: '#'
      },
      {
        id: 2,
        label: 'Fashion',
        url: '#',
        submenu: [{
            id: 1,
            label: 'Dress',
            url: '#'
          },
          {
            id: 2,
            label: 'Tunik',
            url: '#'
          },
          {
            id: 3,
            label: 'T-shirt',
            url: '#'
          },
        ]
      },
      {
        id: 3,
        label: 'Hijab',
        url: '#',
        submenu: [{
            id: 1,
            label: 'Hijab Instan',
            url: '#'
          },
          {
            id: 2,
            label: 'Hijab Square',
            url: '#'
          },
        ]
      },
      {
        id: 4,
        label: 'Shoes',
        url: '#'
      },
      {
        id: 5,
        label: 'Blog',
        url: '#'
      },
      {
        id: 6,
        label: 'Contact',
        url: '#'
      }
    ],
    sideNav: false,
    open: false,
    toggle() {
      this.open = !this.open
    },
    atTop: true
  }))
})

new WOW().init();

// external js: isotope.pkgd.js

// init Isotope
var iso = new Isotope( '.grid__wrapper', {
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});

// bind filter button click
var filtersElem = document.querySelector('.filters-button-group');
filtersElem.addEventListener( 'click', function( event ) {
  // only work with buttons
  if ( !matchesSelector( event.target, 'button' ) ) {
    return;
  }
  var filterValue = event.target.getAttribute('data-filter');

  iso.arrange({ filter: filterValue });
});

// change is-checked class on buttons
var buttonGroups = document.querySelectorAll('.button-group');
for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
  var buttonGroup = buttonGroups[i];
  radioButtonGroup( buttonGroup );
}

function radioButtonGroup( buttonGroup ) {
  buttonGroup.addEventListener( 'click', function( event ) {
    // only work with buttons
    if ( !matchesSelector( event.target, 'button' ) ) {
      return;
    }
    buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
    event.target.classList.add('is-checked');
  });
}
