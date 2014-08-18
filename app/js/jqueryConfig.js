/* global define, $, owlCarousel */

define(['jquery', 'owlCarousel'], function($, owlCarousel) {
  'use strict';
  
  function init() {
    var smallWindow = false;
    $(document).ready(function() {
      $("#owl-example").owlCarousel({
        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        lazyLoad: true
      });

      if (!Modernizr.svg) {
        $('img[src*="svg"]').attr('src', function() {
            return $(this).attr('src').replace('.svg', '.png');
        });
      }

      $(window).scroll(function() {
      var scroll = $(window).scrollTop();

        if (scroll >= 50) {
          $('#logo-image').attr('src', 'images/hanosLogoSmall.svg');
          $('.important-class').addClass('padding-on-my-header');
        }
        if (scroll < 50) {
          $('.important-class').removeClass('padding-on-my-header');
          $('#logo-image').attr('src', 'images/hanosLogo.svg');
        }
      }).resize(function(){
        if ( !smallWindow && this.innerWidth <= 1024 ) {
          console.log('small screen true');
          smallWindow = true;
          $('.top-bar-section').find('ul.right').hide(0).delay(500).show(0);
        }
        if ( smallWindow && this.innerWidth > 1024 ) {
          smallWindow = false;
        }
      });


    });
  };

  return {
        init: init
    }
});

