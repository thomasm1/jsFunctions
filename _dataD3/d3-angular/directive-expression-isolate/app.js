var app = angular.module('angularjs-starter', []);

app.controller('MainCtrl', function ($scope) {
    $scope.consoleText = 'Console Initiated<br>';

    $scope.logToConsole = function(value) {
        $scope.consoleText += value + '<br>';
    };
});

app.directive('plugin', function(){
    var linker = function(scope,element,attr) {
        scope.mymodel = 'itemc';

        scope.$watch('mymodel', function (newVal, oldVal) {
            scope.logToConsole({value:newVal});
        });
    };

    return {
        restrict:'E',
        scope: {
           logToConsole: '&' // Isolated scope FTW via expression definition
        },
        templateUrl: 'plugin.html',
        link: linker
    };
});