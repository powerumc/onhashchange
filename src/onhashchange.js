(function() {
    var msie = document.documentMode;
    var isSupport = checkBrowserSupport();
    
    function copyOwnProperty(src, dest) {
        for (var p in src) {
            if (src.hasOwnProperty(p)) { dest[p] = src[p]; }
        }
    }

    function checkBrowserSupport() {
        return (msie && msie >= 8) || window.HashChangeEvent != undefined;
    }

    function init() {
        var hash = location.hash;
        var url = location.href;
        setInterval(function() {
           if (hash != location.hash) {
               if (window.onhashchange) {
                   var eventArgs = new HashChangeEvent("hashchange");
                   eventArgs.oldURL = url;
                   eventArgs.newURL = location.href;
                   window.onhashchange.call(this, eventArgs);
               }
               hash = location.hash;
               url = location.href;
           } 
        }, 100);
    }
    
    if (!isSupport) {
        window.HashChangeEvent = function(type) {
            this.isTrusted = true;
            this.oldURL = "";
            this.newURL = "";
            this.type = type;
        }
        
        init();
    }
})();