/* Ipsum - Override all Factory outputs with lorem ipsum while building */

var ipsum = angular.module('ipsum', []);
ipsum.factory('ipsumInterceptor', function($q, $rootScope, $log) {
  return function(promise) {
    return promise.then(function(response) {
      // We should only affect JSON objects
      if(response.headers()['content-type'] === "application/json") {
        // Process JSON here
        data = response.data;
        ipsumData = {};

        angular.forEach(data, function(value, key) {
          $log.log(typeof(value));
          switch(typeof(value)) {
            case "string":
              ipsumData[key] = "asjdklfajflkasjlf;jak;fjas";
              break;
            case "number":
              ipsumData[key] = 18723489712987498.35;
              break;
            default:
              ipsumData[key] = "???";
              break;
          }
        });
        response.data = ipsumData;
      }
      return response;
    });
  };
});