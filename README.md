# onhashchange
It supports to detect onhashchange event in old browser.

## Example

```
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