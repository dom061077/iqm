angular.module('starter.services', [])

.factory('Procedimientos', function($http,$scope){
  // Might use a resource here that returns a JSON array
  $scope.page = 0;
  $scope.total = 1;
  procedimientos = [];

    $scope.page++;
    
    $http.get('http://localhost:8080/medfireweb/mobileContenido/procedimientos').success(function (response) {
      angular.forEach(response, function (procedimiento) {
        $scope.procedimientos.push(procedimiento);
      });
    }).error(function (err) {
      console.log(err);
    });
  
  return {
    all: function() {
      return procedimientos;
    },
    remove: function(procedimiento) {
      procedimientos.splice(chats.indexOf(chat), 1);
    },
    get: function(procId) {
      for (var i = 0; i < procedimientos.length; i++) {
        if (chats[i].id === parseInt(procId)) {
          return procedimientos[i];
        }
      }
      return null;
    }
  };
});
