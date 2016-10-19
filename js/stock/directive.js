'use strict';//Modo Stricto
//Ejemplo de closure:
(function(){
	var app = angular.module("stockModule");

	app.directive("botoneraDirective", ['stockGlobals', function(stockGlobals) {
		
		return {
			controller: function($scope, stockGlobals){
				$scope.moduleName = stockGlobals.moduleName;
			},
			restrict : "E",//Restringe a nivel elemento HTML
			template : '<p><a href="/#/{{moduleName}}/add">+ Agregar Producto</a> | <a href="#" ng-click="print()">Imprimir</a></p>'
		};
	}]);

	app.directive("grillaDeProductos", function () {
		return {
			replace: true,
			restrict: 'E',// //E = element, A = attribute, C = class, M = comment   
			templateUrl: 'partials/stock/grilla-producto.html', // Es necesario correr en un servidor la aplicación para que funcionen las vistas parciales,
			controller: function($scope){
				//console.log("do stuff");

			}, //Embed a custom controller in the directive
			link: function ($scope, element, attrs) { } //DOM manipulation
		};
	});
})();  // Esto () significa que estas llamando a la funcion anónima


 