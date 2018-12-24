(function () {

    function UserListController($scope) {
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
            console.log(newUser);

            $scope.users.push(newUser)
            console.log(newUser);


        }

        $scope.submitForm = function (isValid) {
            console.log("VAlid: ", isValid)
        }
    }

    UserListController.inject = ['$scope'];
    angular.module('UserApp').controller("UserListController", UserListController);
}());