(function () {
  "use strict";

  angular.module('public')
    .controller('UserController', UserController);

  UserController.$inject = ['UserService', 'MenuService'];

  function UserController(UserService, MenuService) {
    var self = this;
    self.UserInformation = {};
    self.IsValidItem = true;

    self.SaveUserInformation = function () {

      UserService.SaveUserInformation(self.UserInformation);
    }


    self.CheckForValidMenu = function () {
      if (self.UserInformation.ShortName) {

        MenuService.getMenuItemFromShortName(self.UserInformation.ShortName).then(
          function successCallback(data) {
            self.IsValidItem = true;
          },
          function errorCallback(data) {
            self.IsValidItem = false;
          });

      }
    }


  }

})();
