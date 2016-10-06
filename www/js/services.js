angular.module('starter.services', [])
.factory('Procedimientos', function($http,$ionicLoading){
  // Might use a resource here that returns a JSON array
  procedimientos = [];

    $ionicLoading.show();
    $http.get('http://200.58.126.188:8080/cima/mobileContenido/procedimientos').success(function (response) {
      angular.forEach(response, function (procedimiento) {
        procedimientos.push(procedimiento);
      });
      $ionicLoading.hide();
    }).error(function (err) {
        $ionicLoading.show({
          template: 'No se puede traer el contenido',
          duration: 3000
        });
      console.log(err);
    });
  
  return {
    all: function() {
      return procedimientos;
    },
    remove: function(procedimiento) {
      procedimientos.splice(procedimientos.indexOf(chat), 1);
    },
    get: function(procId) {
      for (var i = 0; i < procedimientos.length; i++) {
        if (procedimientos[i].id === parseInt(procId)) {
          return procedimientos[i];
        }
      }
      return null;
    }
  };
});
