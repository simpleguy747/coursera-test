(function(){

    angular.module('MenuApp')
        .component('categories',{
            templateUrl: 'scripts/MenuApp/Categories/Views/Templates/categories.template.html',
            bindings:{
                categoriesList : '<'
            }
        });

})()