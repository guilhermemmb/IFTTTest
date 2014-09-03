'use strict';

//Articles service used for articles REST endpoint
angular.module('mean.system').factory('EmailNewsletter', ['$resource',
  function($resource) {
    return $resource('newsletter/:email', {
      email: '@_email'
    }, {
      update: {
        method: 'POST'
      }
    });
  }
]);

