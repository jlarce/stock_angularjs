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

app.filter('reverse', function() {
  return function(input, uppercase) {
    input = input || '';
    var out = '';
    for (var i = 0; i < input.length; i++) {
      out = input.charAt(i) + out;
    }
    // conditional based on optional argument
    if (uppercase) {
      out = out.toUpperCase();
    }
    return out;
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

app.filter('searchCode', function() {
  return function(items,search) {
    var filtered = [];
    if(!search){return items;}
    angular.forEach(items, function(item) {

    	if(angular.lowercase(item.title).indexOf(angular.lowercase(search))!=-1)
    	{
    		filtered.push(item);
    	}
      
    });
   return filtered;
  };
});