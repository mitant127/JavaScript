'use strict';

//источник (пример 2)
//http://www.webmasters.by/articles/html-coding/2458-custom-drop-down-list-styling.html

function DropDown(el) {
    this.dd = el;
    this.initEvents();
}

DropDown.prototype = {
    initEvents : function() {
        var obj = this;
 
        obj.dd.on('click', function(event){
            $(this).toggleClass('active');
            event.stopPropagation();
        });
    }
}
