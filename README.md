# HwtJQueryResizeobserver
A jquery based resize observer which throttles acting on multiple fired resize events.

## Usage
Wrap your custom resize function(s) as callback to the hwt.jquery.resizeobserver to avoid event bouncing:

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

## License

The MIT License (MIT), see LICENSE.txt of this package.