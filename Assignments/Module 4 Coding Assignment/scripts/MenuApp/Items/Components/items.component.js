(function(){

    angular.module('MenuApp')
        .component('items',{
            templateUrl: 'scripts/MenuApp/Items/Views/Templates/items.template.html',
            bindings:{
                itemsList : '<',
                categoryDetails: '<'
            }
        });

})()