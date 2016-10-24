'use strict';
angular.module('stockModule')
.controller('StockController', ['$scope', 'StockService', function($scope, StockService) {
     
     $scope.seletedVendor = '';

     $scope.vendors = [
      {
        id: 1,
        name: 'Apple'
      }, 
      {
        id: 2,
        name: 'Nokia'
      },
      {
        id: 3,
        name: 'Motorola'
      }];

     $scope.products = [];
	 /*
     $scope.products = [
        {code:'CP0001', description:'iPhone 7', price:700, active:true, notes:'Great cell phone', vendor: 'Apple' , picture: '0001.jpg'},
        {code:'CP0002', description:'Tango 300', price:5, active:true, notes:'Very Old cell phone', vendor: 'Motorola',  picture: '0002.jpg'},
        {code:'CP0003', description:'Nokia 1100', price:1000, active:true, notes:'Very Cool cell phone', vendor: 'Nokia',  picture: '0003.jpg'},
        {code:'PC0001', description:'Apple Mackbook Pro', price:1500, active:true, notes:'Very Cool notebook', vendor: 'Apple',  picture: '0004.jpg'}
      ];*/
	  
	  var init = function() {
      StockService.GetAllProducts().then(function(response){
        $scope.products = response.data;
      });  
	  };
	  
	  init();
}]);