/* global define, Modernizr, $, app, ui, jc  */
define(['jquery','app', 'ui', 'jqueryConfig'], function ($, app, ui, jc) {
    'use strict';
 	
 	if (Modernizr.touch) {
       
    }

    app.init();
    jc.init();
    ui.createUI();
	
});