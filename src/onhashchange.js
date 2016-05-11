(function() {
    var msie = document.documentMode;
    
    function copyOwnProperty(src, dest) {
        for (var p in src) {
            if (src.hasOwnProperty(p)) { dest[p] = p; }
        }
    }
    function createEvent(name, arg) {
        var event = null;
        if (msie && msie == 8 && document.createEventObject) {
            event = document.createEventObject(name);
        }
        else if (msie && msie > 8 && document.createEvent) {
            event = document.createEvent("CustomEvent", { obj: arg });
            event.initEvent(name, true, true);
        } else if (window.CustomEvent) {
            event = new CustomEvent(name, { detail: arg });
        }

        return event;
    }
    
    var HashChangeEvent = function(type) {
        this.isTrusted = true;
        this.oldURL = "";
        this.newURL = "";
        this.type = type;
    }
    
    HashChangeEvent.prototype = createEvent("hashchange");
    HashChangeEvent.prototype.constructor = HashChangeEvent;
    
    copyOwnProperty(Event, HashChangeEvent);

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
        }, 100);
    }
    
    init();
    
})();