(function () {
    function editUserDialog() {
        return {
            restrict: 'E',
            scope: {
                model: '='
            },
            link: function (scope, element, attributes) {
                scope.$watch('model.visible', function (newValue, oldValue) {
                    var modalElement = element.find('.modal');
                    modalElement.modal(newValue ? 'show' : 'hide');
                });

                element.on('shown.bs.modal', function () {
                    scope.$applyAsync(function () {
                        scope.model.visible = true;
                    });
                });

                element.on('hidden.bs.modal', function () {
                    scope.$applyAsync(function () {
                        scope.model.visible = false;
                    });
                });

                scope.toggleSwitch = function (status, id) {
                    scope.oppositeState;
                    let identity = document.getElementById(id);
                    if (status === 'active') {
                        scope.model.user.status = 'inactive';
                        angular.element(identity).removeClass('active');
                    } else {
                        scope.model.user.status = 'active';
                        angular.element(identity).addClass('active');
                    }
                }
            },

            templateUrl: 'templates/EditUserModal.html',
        }
    }

    angular.module("UserApp").directive("editUserDialog", editUserDialog);
}())