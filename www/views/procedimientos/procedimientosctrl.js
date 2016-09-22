angular.module('App')
.controller('ProcedimientosCtrl', function ($scope, $http) {

  $scope.page = 0;
  $scope.total = 1;
  $scope.procedimientos = [];

    $scope.page++;
    $http.get('http://localhost:8080/medfireweb/mobileContenido/procedimientos').success(function (response) {
      angular.forEach(response, function (procedimiento) {
        $scope.procedimientos.push(restaurant);
      });
    }).error(function (err) {
      $scope.$broadcast('scroll.infiniteScrollComplete');
      console.log(err);
    });
  
  

  $scope.getRestaurants();
});


