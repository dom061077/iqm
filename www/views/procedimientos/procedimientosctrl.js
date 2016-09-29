angular.module('App')
.controller('ProcedimientosCtrl', function ($scope, Procedimientos) {

//  $scope.page = 0;
//  $scope.total = 1;
//  $scope.procedimientos = [];
//
//    $scope.page++;
//    
//    $http.get('http://localhost:8080/medfireweb/mobileContenido/procedimientos').success(function (response) {
//      angular.forEach(response, function (procedimiento) {
//        $scope.procedimientos.push(procedimiento);
//      });
//    }).error(function (err) {
//      console.log(err);
//    });
  
    $scope.procedimientos = Procedimientos.all();
    

});


