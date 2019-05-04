angular.module('noteriousApp', [])
    .controller('MainCtrl', function ($scope) {
      // 
    })
    .directive('contentItem', function () {
        var linker = function (scope, element, attrs) {
            element.on('click', function(){
                console.log('click fired!');
                scope.$apply(function() {
                  scope.count++;
                });
            })
        }

        var controller = function($scope) {
            $scope.count = 0;
        };

        return {
            link: linker,
            controller: controller
        };
    });
