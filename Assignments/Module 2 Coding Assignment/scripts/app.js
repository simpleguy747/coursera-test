(function(){
    'use strict'

    angular.module('ShoppingListCheckOff',[])
        .controller('ToBuyController',ToBuyController)
        .controller('AlreadyBoughtController',AlreadyBoughtController)
        .service('ShoppingListCheckOffService',ShoppingListCheckOffService);
    
    //  Dependencies
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    // ToBuyController
    function ToBuyController (ShoppingListCheckOffService){
        var self = this;

        self.itemsToBeBought = ShoppingListCheckOffService.getItemsToBeBought();

        self.buyItem = function(item){
             ShoppingListCheckOffService.buyItem(item);
            }

        }

    

    // AlreadyBoughtController
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var self = this;
        self.itemsAlreadyBeBought = ShoppingListCheckOffService.getItemsAlreadyBeBought();
        }



    // ShoppingListCheckOffService
    function ShoppingListCheckOffService(){
        var service = this;

        var toBuyItemsList = [];
        var alreadyBuyItemsList = [];

        toBuyItemsList.push({id:1,name:"cookies",quantity:"10"});
        toBuyItemsList.push({id:2,name:"tea",quantity:"20"});
        toBuyItemsList.push({id:3,name:"coffee",quantity:"5"});
        toBuyItemsList.push({id:4,name:"pasta",quantity:"10"});
        toBuyItemsList.push({id:5,name:"oil",quantity:"4"});
        


        service.buyItem = function(item){
            var id = item.id;
            var indexOfItem = toBuyItemsList.findIndex(function(el){
                
                return el.id === id
            });
            toBuyItemsList.splice(indexOfItem,1);

            alreadyBuyItemsList.push(item);
        }

        service.getItemsToBeBought = function(){
            return toBuyItemsList;
        }

        service.getItemsAlreadyBeBought = function(){
            return alreadyBuyItemsList;
        }
    }

})()
