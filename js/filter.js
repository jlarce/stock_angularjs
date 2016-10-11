'use strict';
var app = angular.module('stockApp');

app.filter('myFormat', function() {
    return function(x) {
        var i, c, txt = "";
        for (i = 0; i < x.length; i++) {
            c = x[i];
            if (i % 2 == 0) {
                c = c.toUpperCase();
            }
            txt += c;
        }
        return txt;
    };
});

app.filter('productCode', function() {
    return function(code,separador) {
        var out = code || '';
        var nomb = out.substring(0,2);
        var id =  out.substring(2,out.length);
        out = nomb + separador + id;
        return out;
    };
});