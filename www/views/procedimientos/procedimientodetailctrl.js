angular.module('App')
.controller('ProcedimientoDetailCtrl',function($scope, $stateParams,$sce, Procedimientos) {
    //$scope.procedimientoUrl = '';
    //$scope.url=$stateParams.urlVideo;
    $scope.procedimiento = Procedimientos.get($stateParams.procId);
    $scope.procedimiento.urlVideo = $sce.trustAsResourceUrl($scope.procedimiento.urlVideo);
});