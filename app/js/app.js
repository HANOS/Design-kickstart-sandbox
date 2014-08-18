/* global define, 'Modernizr', '$', '_', 'Fastclick', 'Foundation', 'imagesLoaded', 'Enquire', 'Skrollr', REM */
/* jshint indent:4 */
/**
 * This demo was prepared for you by Petr Tichy - Ihatetomatoes.net
 * Want to see more similar demos and tutorials?
 * Help by spreading the word about Ihatetomatoes blog.
 * Article URL: http://ihatetomatoes.net/how-to-make-parallax-website-responsive/
 */

define([
    'jquery',
    'modernizr',
    'underscore',
    'fastclick',
    'foundation',
    'imagesloaded',
    'enquire',
    'skrollr',
    'remfill'    
], function($, Modernizr, _, FastClick, imagesLoaded, Enquire, Skrollr, REM) {
    'use strict';

    // Setup variables
    var $window = $(window);
	var $slide = $('.homeSlide');
	var $body = $('body');
	
    $(document).foundation({});
   
    //$('#myModal').foundation('reveal', 'open');

    
    //var self = {};

    function init() {
        if ($slide.length > 0) {
            //FadeIn all sections   
            $body.imagesLoaded(function() {
                setTimeout(function() {

                    // Resize sections
                    adjustWindow();

                    // Fade in sections
                    $body.removeClass('loading').addClass('loaded');

                    }, 800);
            });
            enquire.register("screen and (min-width : 43em;)", initAdjustWindow(), false);
        };

    }

    function adjustWindow() {

        // Get window size
        var winH = $window.height();
        var winW = $window.width();

        // Keep minimum height 550
        if (winH <= 550) {
            winH = 550;
        }

        // Init Skrollr for 768 and up
        if (winW >= 768) {

            // Init Skrollr
            var s = skrollr.init({
                forceHeight: false
            });

            // Resize our slides
            $slide.height(winH);

            s.refresh($('.homeSlide'));

        } else {

            // Init Skrollr
            var s = skrollr.init();
            s.destroy();
        }

        // Check for touch
        if (Modernizr.touch) {
            // Init Skrollr
            var s = skrollr.init();
            s.destroy();
        }

    }

    function initAdjustWindow() {
        return {
            match: function() {
                adjustWindow();
            },
            unmatch: function() {
                adjustWindow();
            }
        };
    }

    return {
        init: init
    }
});