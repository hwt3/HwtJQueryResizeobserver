# HwtJQueryResizeobserver
A jquery based resize observer which throttles acting on multiple fired resize events.

## Usage
To avoid event bouncing wrap your custom resize function(s) as callback to the hwt.jquery.resizeobserver. This then is bound to the window resize event automatically:

```
resizeObserver(
    function() {
        myfunctionOne();
        //myfunctionTwo();
    },
    200, // refresh time
    10 // offset in x-dimension
);
```

To add another observer with different parameters, just call it again:

```
resizeObserver(
    function() {
        myfunctionThree();
    },
    200, // other (or same) refresh time
    20 // other (or same) offset in x-dimension
);
```

## License

The MIT License (MIT), see LICENSE.txt of this package.