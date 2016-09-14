angular.module('App')
    .controller('QuienesSomosCtrl',function($scope,$http,$ionicLoading){
        $ionicLoading.show();
        $http.get('https://localhost:/8080/cima/quienessomos').success(function (data) {
          //$scope.weather = weather;
          $ionicLoading.hide();
        }).error(function (err) {
          $ionicLoading.show({
            template: 'No se puede traer el contenido',
            duration: 3000
          });
        });

//        $scope.getDirection = function (degree) {
//          if (degree > 338) {
//            degree = 360 - degree;
//          }
//          var index = Math.floor((degree + 22) / 45);
//          return directions[index];
//        };
    }
);
