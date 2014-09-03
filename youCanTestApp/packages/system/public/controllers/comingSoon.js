'use strict';

angular.module('mean.system').controller('ComingSoonController', ['$scope', 'Global','EmailNewsletter',
    function($scope, Global, EmailNewsletters) {
        $scope.global = Global;

        $scope.completed = false;

        $scope.save = function(isValid) {
          if (isValid) {
            var newsletterObj = new EmailNewsletters({
                email: this.email
            });

            newsletterObj.$save(function(response) {
                $scope.completed = true;
            });

          } else {
            $scope.submitted = true;
          }
        };
    }
]);
