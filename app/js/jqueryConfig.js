/* global define, $, owlCarousel */

define(['jquery', 'owlCarousel'], function($, owlCarousel) {
  'use strict';
  
  function init() {
    var $stickyContent = $('.js-sticky-content');
    var $toggleBrands = $('.js-toggle-brands');
    var $brandPointer = $('.js-brand-pointer');
    var $brandsNav = $('.js-brands-nav');
    var $header = $('.js-header');

    var $oCW_iW = $('.off-canvas-wrap .inner-wrap').height();
    var $mobHeadH = $('.mob-header').height();
    var $oCLH = $('.left-off-canvas-menu .off-canvas-list').height();
    var $oCRH = $('.right-off-canvas-menu .off-canvas-list').height();

    var smallWindow = false;
    $(document).ready(function() {
      $("#owl-example").owlCarousel({
        navigation: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        lazyLoad: true,
        pagination : true,
        paginationNumbers: false
      });

      $toggleBrands.on('click', function() {
        $brandsNav.toggleClass('open');
      });
      
      if (!Modernizr.svg) {
        $('img[src*="svg"]').attr('src', function() {
            return $(this).attr('src').replace('.svg', '.png');
        });
      }

      $(document).on('open.fndtn.offcanvas', '[data-offcanvas]', function () {
          var $oCW = $(this);
          console.log($oCW);
          var $oCH = $oCW.find('.off-canvas-list').height();
          console.log('open called');
          console.log($mobHeadH);
          console.log($oCH);
          var mCH = $mobHeadH + $oCH;
          $('.off-canvas-wrap .inner-wrap').height(mCH);
        }).on('close.fndtn.offcanvas', '[data-offcanvas]', function () {
          console.log('close called');
          $('.off-canvas-wrap .inner-wrap').height($oCW_iW);
        });

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

