/*
 * HWT jQuery resizeObserver v0.0.3
 *
 * Copyright 2015, Heiko Westermann (hwt)
 * mailto: hwt3@gmx.de
 *
 * Write
 * resizeObserver(function() {
 *  functionName();
 * }); 
 * in your document ready function to use the resize observer.
 */

function resizeObserver(resizeCallback, resizeRefreshTime) {
	"use strict";
    
    resizeCallback = resizeCallback || function () {};
    resizeRefreshTime = resizeRefreshTime || 200;
	
	var resizeDelay, resizeHandler;
	var lastWindowWidth = jQuery(window).width();
	
	resizeHandler = function () {
		if (jQuery(window).width() !== lastWindowWidth) {
			window.clearTimeout(resizeDelay);
			resizeDelay = window.setTimeout(function () {
				lastWindowWidth = jQuery(window).width();
				resizeCallback.call(this);
			}, resizeRefreshTime);
		}
	};
	jQuery(window).resize(resizeHandler);
}