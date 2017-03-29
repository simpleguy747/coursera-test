(function () {
"use strict";

angular.module('public')
.controller('UserController',UserController);

UserController.$inject=['UserService'];

function UserController(UserService) {
  var self = this;
  self.UserInformation = {};
  self.SaveUserInformation = function(){
    
      UserService.SaveUserInformation(self.UserInformation);
  }
}

})();
