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

function resizeObserver(resizeCallback, resizeRefreshTime, resizeOffsetX) {
	"use strict";

    resizeCallback = resizeCallback || function () {};
    resizeRefreshTime = resizeRefreshTime || 200;
    resizeOffsetX = resizeOffsetX || 5;

	var resizeDelay, resizeHandler;
	var lastWindowWidth = jQuery(window).width();
    var newWindowWidth;

	resizeHandler = function () {
        newWindowWidth = jQuery(window).width();
        console.log(Math.abs(newWindowWidth-lastWindowWidth));
		if ( (newWindowWidth !== lastWindowWidth) && (Math.abs(newWindowWidth-lastWindowWidth) > resizeOffsetX) )  {
            console.log('executed');
			window.clearTimeout(resizeDelay);
			resizeDelay = window.setTimeout(function () {
				lastWindowWidth = newWindowWidth;
				resizeCallback.call(this);
			}, resizeRefreshTime);
		}
	};

	jQuery(window).resize(resizeHandler);
}