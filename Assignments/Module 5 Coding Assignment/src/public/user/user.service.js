(function () {
"use strict";

angular.module('public')
.service('UserService',UserService);

function UserService(){
  var self = this;
  self.UserInformation = {};

  self.SaveUserInformation = function(user){
      
      self.UserInformation.FirstName = user.FirstName;
      self.UserInformation.LastName = user.LastName;
      self.UserInformation.Phone = user.Phone;
      self.UserInformation.EmailAddress = user.EmailAddress;
      self.UserInformation.ShortName = user.ShortName;
  }

  self.GetUserInformation = function(){
      return self.UserInformation;
  }
}

})()