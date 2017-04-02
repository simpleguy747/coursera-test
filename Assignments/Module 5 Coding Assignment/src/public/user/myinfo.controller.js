(function () {
  "use strict";

  angular.module('public')
    .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['favoriteMenuItem', 'UserService', 'ApiPath'];

  function MyInfoController(favoriteMenuItem, UserService, ApiPath) {
    var self = this;

    self.favouriteMenuItem = favoriteMenuItem || {};
    self.favouriteMenuItem.foodImage = ApiPath + '/images/' + self.favouriteMenuItem.short_name + '.jpg';


    self.personalInformation = UserService.GetUserInformation();

    self.CheckUserSignedUp = function () {

      if (self.personalInformation.FirstName &&
        self.personalInformation.LastName &&
        self.personalInformation.Phone &&
        self.personalInformation.EmailAddress &&
        self.personalInformation.ShortName) {
        return true;
      }
      else {
        return false;
      }
    }
  }

})();
