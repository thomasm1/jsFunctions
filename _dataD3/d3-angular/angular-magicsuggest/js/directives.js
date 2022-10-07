'use strict';

angular.module('app.directives', [])
.directive('magicsuggest', function () {

    var linker = function (scope, element, attrs) {
        var ms = element.magicSuggest({
            resultAsString: true,
            width: 590,
            value: scope.tags,
            data: scope.availableTags
        });
        $(ms).on('selectionchange', function(event, combo, selection){
             scope.$apply(function(){
                scope.tags = ms.getValue();
             });
        });
    };

    return {
        restrict: 'A',
        link: linker,
        scope: {
            tags:'=',
            availableTags:'='
        }
    };
});