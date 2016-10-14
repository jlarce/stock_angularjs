'use strict';
var app = angular.module('stockApp');
app.directive("botoneraDirective", function() {
    return {
        template : "<a href='#/stock/add'>Agregar producto</a>",
        restrict: "C"   
    };
});

app.directive("grillaDeProductos", function () {
    return {
        replace: true,
        restrict: 'E',
        templateUrl: 'partials/stock/grilla-producto.html',
    };
})