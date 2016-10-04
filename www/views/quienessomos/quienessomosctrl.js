angular.module('App')
    .controller('QuienesSomosCtrl',function($scope,$http,$ionicLoading){
        $ionicLoading.show();
        $http.get('http://200.58.126.188:8080/cima/mobileContenido/quienesSomos').success(function (data) {
          $scope.quienessomos = data.quienessomos;
          $ionicLoading.hide();
        }).error(function (err) {
          $ionicLoading.show({
            template: 'No se puede traer el contenido',
            duration: 3000
          });
        });

        /*$scope.getDirection = function (degree) {
          if (degree > 338) {
            degree = 360 - degree;
          }
          var index = Math.floor((degree + 22) / 45);
          return directions[index];
        };*/
    }
);
