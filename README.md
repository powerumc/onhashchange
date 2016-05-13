# onhashchange
It supports to detect onhashchange event in old browser.

onhashchange.js run under browser specific version.

## Implemented event fields.

The dispatched hashchange event has the following fields:

----------------------------------------------------------------------------
|Field|Type|Description
|newURL|DOMString|	The new URL to which the window is navigating.
|oldURL|DOMString|	The previous URL from which the window was navigated.
---------------------------------------------------------------------------

## Browser compatibility

```
Desktop Mobile
Feature	    Chrome	        Firefox (Gecko)	    Internet Explorer	    Opera	    Safari
Basic       support	5.0	    3.6 (1.9.2)         8.0                     10.6	    5.0
```

Ref. [https://developer.mozilla.org/ko/docs/Web/API/WindowEventHandlers/onhashchange](https://developer.mozilla.org/ko/docs/Web/API/WindowEventHandlers/onhashchange)


## Example

```html
<html>
    <head>
        <script type="text/javascript" src="onhashchange.js"></script>
        <script>
            window.onhashchange = function(e) {
                alert("onhashchange");
            }
        </script>
    </head>
    
    <body>
        <p><a href="#a">#a</a></p>
        <p><a href="#b">#b</a></p>
        <p><a href="#c">#c</a></p>
    </body>
</html>
```