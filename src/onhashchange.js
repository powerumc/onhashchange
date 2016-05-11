(function() {
    
    var HashChangeEvent = function(type) {
        this.isTrusted = true;
        this.oldURL = "";
        this.newURL = "";
        this.type = type;
    }

    function init() {
        var hash = location.hash;
        var url = location.href;
        setInterval(function() {
           if (hash != location.hash) {
               if (window.onhashchange) {
                   var eventArg = new HashChangeEvent("hashchange");
                   eventArg.oldURL = url;
                   eventArg.newURL = location.href;
                   window.onhashchange(eventArg);
               }
               hash = location.hash;
               url = location.href;
           } 
        }, 1000);
    }
    
    init();
    
})();