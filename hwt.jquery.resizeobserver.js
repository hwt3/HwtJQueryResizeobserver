/*
 * HWT jQuery resizeObserver v0.0.1
 *
 * Copyright 2015, Heiko Westermann (hwt)
 * mailto: hwt3@gmx.de
 *
 * Use resizeObserver(functionName); in your document ready function to use the resize observer.
 */

function resizeObserver(resizeFunction=null, resizeRefreshTime=200) {
	var lastWindowWidth, resizeDelay;
	lastWindowWidth = $(window).width();
	
	resizeHandler= function () {
		if (jQuery(window).width() !== lastWindowWidth) {
			window.clearTimeout(resizeDelay);
			resizeDelay = window.setTimeout(function () {
				lastWindowWidth = jQuery(window).width();
				resizeFunction();
			}, resizeRefreshTime);
		}
	};
	$(window).resize(resizeHandler);
};
