(function(){

    function UserListController($scope) {
        $scope.UserList = "Users List"
        $scope.users = [
            {
                id: 1,
                firstName: 'John',
                lastName: 'Doe',
                email: 'john@doejohn.com',
                phone: 4567876543,
                status: "active"
            },
            {
                id: 2,
                firstName: 'Steve',
                lastName: 'Carlos',
                email: 'steve@stevecarlos.com',
                phone: 4567876543,
                status: "active"
            },
            {
                id: 3,
                firstName: 'Jacob',
                lastName: 'Thornton',
                email: 'jacob@jacobthornton.com',
                phone: 4567876543,
                status: "active"
            }
        ]
    }
    UserListController.inject = ['$scope'];
    angular.module('UserApp').controller("UserListController", UserListController);
}());