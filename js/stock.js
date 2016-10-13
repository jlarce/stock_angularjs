angular.module('stockApp')
.controller('StockController', function($scope) {
     $scope.products = [
        {code:'CP0001', description:'iPhone 7', price:700, active:true, notes:'Great cell phone', picture: 'CP0001.jpg'},
        {code:'CP0002', description:'Tango 300', price:5, active:false, notes:'Very Old cell phone', picture: 'CP0002.jpg'},
        {code:'CP0003', description:'Nokia 1100', price:1000, active:false, notes:'Very Cool cell phone', picture: 'CP0003.jpg'},
        {code:'PC0001', description:'Apple Macbook Pro', price:1000, active:true, notes:'Very Cool Macbook', picture: 'PC0001.jpg'}
      ];
});