(function() {
    var app = angular.module("UserApp", ['ngRoute']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'UserListController',
                templateUrl: 'templates/userList.html'
            });
    })
}());