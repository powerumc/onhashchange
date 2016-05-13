# onhashchange
It supports to detect onhashchange event in old browser.

onhashchange.js run under browser specific version.

## Browser compatibility

```
Desktop Mobile
Feature	    Chrome	        Firefox (Gecko)	    Internet Explorer	    Opera	    Safari
Basic       support	5.0	    3.6 (1.9.2)         8.0                     10.6	    5.0
```

## Example

```html
<html>
    <head>
        <script type="text/javascript" src="onhashchange.js"></script>
        <script>
            window.onhashchange = function(e) {
                alert("onhashchange";
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