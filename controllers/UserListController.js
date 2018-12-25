(function () {

    function UserListController($scope, $http) {
        $scope.UserList = "Users List";
        var EditUserModelDialog = function () {
            this.visible = false;
        }

        EditUserModelDialog.prototype.open = function (user, id) {
            this.user = user;
            this.id = id;
            this.visible = true;
        }

        EditUserModelDialog.prototype.close = function () {
            this.visible = false;
        }

        $scope.maxLength = $scope.minLength = 10;
        $scope.newUser = {};

        $scope.userFields = {
            id: "Id",
            firstName: "First Name",
            lastName: "Last Name",
            email: "Email",
            phone: "Phone",
            phoneNumber: "Phone Number",
            status: {
                name: "Status",
                valueActive: "Active",
                valueInactive: "Inactive"
            }
        }

        $scope.users = new Array();
        $http.get('/UpGradProject/data/user.json').then(function(response) {
            $scope.users = response.data.users;
        });
        $scope.editDialog = new EditUserModelDialog();

        //Always setting the form to empty
        $scope.init = function () {
            $scope.newUser = {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                status: 'active'
            };
        }

        //Add new user to user list
        $scope.addToUserList = function (newUser) {
            let index = $scope.users.length + 1;
            newUser.id = index;

            $scope.users.push(newUser);
        }

        $scope.submitForm = function (isValid) {
            console.log("Valid: ", isValid)
        }
    }

    UserListController.inject = ['$scope'];
    angular.module('UserApp').controller("UserListController", UserListController);

}());