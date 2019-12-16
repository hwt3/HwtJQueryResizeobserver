/*
 * HWT jQuery resizeObserver v0.0.4
 *
 * Copyright 2015-2017, Heiko Westermann (hwt)
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

        if ( (newWindowWidth !== lastWindowWidth) && (Math.abs(newWindowWidth-lastWindowWidth) > resizeOffsetX) )  {
            window.clearTimeout(resizeDelay);
            resizeDelay = window.setTimeout(function () {
                lastWindowWidth = newWindowWidth;
                resizeCallback.call(this);
            }, resizeRefreshTime);
        }
    };

    jQuery(window).resize(resizeHandler);
}