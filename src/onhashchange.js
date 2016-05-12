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

    function checkBrowserSupport() {
        var b = (function(){
            var ua= navigator.userAgent, tem,
            M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            if(/trident/i.test(M[1])){
                tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
                return 'IE '+(tem[1] || '');
            }
            if(M[1]=== 'Chrome'){
                tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
                if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
            }
            M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
            if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
            return M.join(' ');
        })();
        
        return ((b.indexOf("Safari") > 0    && b >= "Safari 5") ||
                (b.indexOf("IE") > 0        && b >= "IE 8") ||
                (b.indexOf("Chrome") > 0    && b >= "Chrome 50"));
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
        }, 100);
    }
    
    init();
    
})();