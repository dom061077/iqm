angular.module('App')
.controller('ProcedimientoDetailCtrl',function($scope, $stateParams, Procedimientos) {
    //$scope.procedimientoUrl = '';
    //$scope.url=$stateParams.urlVideo;
    $scope.procedimiento = Procedimientos.get($stateParams.procId);
});