function mainCtrl($scope, $http) {
    url = "http://127.0.0.1:8080/v1/AUTH_J/container"
    headers = {}
    $http.get(url, headers: headers}).then(
        function(response) {
            $scope.objects = response.data;
        },
        function(response) {
            console.log(response);
        }
    );
}
var exampleApp = angular.module('example', []);
exampleApp.controller('mainCtrl', mainCtrl);
