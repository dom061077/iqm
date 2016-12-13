angular.module('App')
    .controller('QuienesSomosCtrl',function($scope,$rootScope,$http,$ionicLoading){
        $ionicLoading.show();
        $http.get($rootScope.host+'/mobileContenido/quienesSomos').success(function (data) {
          $scope.quienessomos = data.quienessomos;
          
          $ionicLoading.hide();
        }).error(function (err) {
          var error=err;  
          $ionicLoading.show({
            template: 'No se puede traer el contenido '+error,
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
