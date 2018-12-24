(function () {

    function UserListController($scope) {
        $scope.UserList = "Users List";
        var EditUserModelDialog = function() {
            this.visible = false;
        }

        EditUserModelDialog.prototype.open = function(user, id) {
            this.user = user;
            this.id = id;
            this.visible = true;
        }

        EditUserModelDialog.prototype.close = function() {
            this.visible = false;
        }

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
                status: "inactive"
            }
        ];
        
        $scope.editDialog = new EditUserModelDialog();
    }
    
    UserListController.inject = ['$scope'];
    angular.module('UserApp').controller("UserListController", UserListController);
}());