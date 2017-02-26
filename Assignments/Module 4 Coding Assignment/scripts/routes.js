(function(){

angular.module('MenuApp')
    .config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];

function RoutesConfig($stateProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise('/');

 $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'scripts/MenuApp/home.html'
  })

// Categories page
  .state('categories', {
    url: '/categories',
    templateUrl: 'scripts/MenuApp/Categories/Views/categories.html',
    controller:'CategoriesController as CategoriesCtrl',
    resolve:{
         items:['MenuDataService',function(MenuDataService){
          return MenuDataService.getAllCategories();
        }]
    }
  })

  // Items page
  .state('items', {
    url: '/items/{category}',
    templateUrl: 'scripts/MenuApp/Items/Views/items.html',
    controller:'ItemsController as ItemsCtrl',
    resolve:{
         items:['MenuDataService','$stateParams',function(MenuDataService,$stateParams){
          return MenuDataService.getItemsForCategory($stateParams.category);
        }]
    }
  })

}


})()