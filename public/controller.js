function NHCtrl($scope, $http) {
  $http.get('/notification-hub').success(function(data) {
    $scope.users = data
  })
}
