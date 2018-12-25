(function() {
    angular.module('UserApp').filter('search', function() {
        return function(items, searchText) {
            if(!searchText) {
                return items;
            } else {
                var newItems = [];
                var searchText = searchText.toLowerCase();

                for (var i of items) {
                    if(i.firstName.toLowerCase().indexOf(searchText) > -1 || i.lastName.toLowerCase().indexOf(searchText) > -1 || i.email.toLowerCase().indexOf(searchText) > -1 || (i.phone).toString().indexOf(searchText) > -1) {
                        newItems.push(i);
                    }
                }
                return newItems;
            }
        }
    })
}())