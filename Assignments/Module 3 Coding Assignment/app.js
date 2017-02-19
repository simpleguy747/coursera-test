(function(){
    'use strict'

    angular.module('NarrowItDownApp',[])
        .constant('ServiceBaseUrl', 'https://davids-restaurant.herokuapp.com')
        .controller('NarrowItDownController',NarrowItDownController)
        .service('MenuSearchService',MenuSearchService)
        .directive('foundItems',foundItems);
    


    NarrowItDownController.$inject = ['MenuSearchService'];
    MenuSearchService.$inject = ['$http','ServiceBaseUrl'];

    function NarrowItDownController(MenuSearchService){
        var self = this;
        self.searchTerm='';
        self.foundItems=[];
        
        self.Narrow = function(){
            
           
            if(self.searchTerm!=''){
        MenuSearchService.getMatchedMenuItems(self.searchTerm).then(
            
                function successCallback(foundItems)
                {
                    self.foundItems = foundItems;
                    self.SearchPressed = true;
                });
        }
        else {
            self.foundItems=[];
            self.SearchPressed = true;
        }
        
        }

        self.removeItem = function(itemIndex){
            self.foundItems.splice(itemIndex,1);
        }
    }

    // Service implementation.
    function MenuSearchService($http,ServiceBaseUrl){
        var service = this;
        service.getMatchedMenuItems = function(searchTerm){
          return  $http({
                    method: 'GET',
                    url: ServiceBaseUrl+'/menu_items.json'
                    }).then(function successCallback(response) {
                        
                        // this callback will be called asynchronously when the response is available.
                        
                        var allItems = response.data.menu_items;
                        var foundItems = [];
                        var countAllItems = allItems.length;
                        for(var i=0;i<countAllItems;i++){
                            if(allItems[i].description.indexOf(searchTerm)!=-1){
                                foundItems.push(allItems[i]);
                            }
                        }

                        return foundItems;
                    }, function errorCallback(response) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                    });
        }
    }

    // Directive.
    function foundItems(){
         var ddo = {
            
             templateUrl: 'mylist.html',
             controller:NarrowItDownController,
             controllerAs: 'list',
             bindToController:true,
             scope:{
                 listOfItems : '<myList',
                 onRemove : '&'
                 
             }
            

  };
  return ddo;
    }

})()