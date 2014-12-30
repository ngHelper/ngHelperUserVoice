'use strict';

/**
 * The module contains everything we need to handle user voice
 * interaction directly from an angular application
 */
var ngHelperUserVoice = angular.module('ngHelperUserVoice', []);


function UserVoiceService(uvSubDomain, uvApiKey, $http, $q) {
  var self = this;

  self.openTicket = function(name, email, subject, message) {
    var deferred = $q.defer();

    // build the JSONP URI
    var jsonPUri = 'https://' + uvSubDomain + '.uservoice.com/api/v1/tickets/create_via_jsonp.json?callback=JSON_CALLBACK&client=' + uvApiKey +
      '&ticket%5Bmessage%5D=' + encodeURIComponent(message) +
      '&ticket%5Bsubject%5D=' + encodeURIComponent(subject) +
      '&name=' + encodeURIComponent(name) +
      '&email=' + encodeURIComponent(email);

    // send the JSONp request to user voice
    $http.jsonp(jsonPUri)
      .success(function(data) {
        deferred.resolve(data.ticket.id);
      }).error(function (error) {
        deferred.reject(error);
      });

    return deferred.promise;
  }
}

ngHelperUserVoice.provider('$uservoice', function UserVoiceProvider() {

  var self = this;

  var uvSubDomain = null;
  var uvApiKey = null;

  self.setSubDomain = function(subDomain) {
    uvSubDomain = subDomain;
  };

  self.setApiKey = function(apiKey) {
    uvApiKey = apiKey
  };

  this.$get = ['$http', '$q', function userVoiceFactory($http, $q) {
      return new UserVoiceService(uvSubDomain, uvApiKey, $http, $q);
  }];
});
