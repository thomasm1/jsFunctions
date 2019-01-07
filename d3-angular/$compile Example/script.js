'use strict';

angular.module('noteriousApp', [])
    .controller('MainCtrl', function ($scope) {

        $scope.content = [
            {"content_type": "board", "title": "Board 00", "content": "Content pending."},
            {"content_type": "board", "title": "Board 01", "content": "Content pending."},
            {"content_type": "note", "title": "Note 00", "content": "Content pending."},
            {"content_type": "board", "title": "Board 02", "content": "Content pending."},
            {"content_type": "board", "title": "Board 03", "content": "Content pending."},
            {"content_type": "note", "title": "Note 02", "content": "Content pending."}
        ];
    })
    .directive('contentItem', function ($compile) {
        var boardTemplate = '<div class="edit board"><div class="caption"><button type="button" class="top-right-corner"><span class="glyphicon glyphicon-remove"></span></button><div><input type="text" class="medium" ng-model="content.title" placeholder="Board Title"></div><div><input type="text" ng-model="content.content" placeholder="Board description."></div></div></div>';
        var noteTemplate = '<div class="edit note"><div class="caption"><button type="button" class="top-right-corner"><span class="glyphicon glyphicon-remove"></span></button><div><input type="text" class="medium" ng-model="content.title" placeholder="Board Title"></div><div><input type="text" ng-model="content.content" placeholder="Board description."></div></div></div>';

        var getTemplate = function (contentType) {
            var template = '';

            switch (contentType) {
                case 'board':
                    template = boardTemplate;
                    break;
                case 'note':
                    template = noteTemplate;
                    break;
            }

            return template;
        }

        var linker = function (scope, element, attrs) {
            element.html(getTemplate(scope.content.content_type)).show();

            $compile(element.contents())(scope);
        }

        return {
            restrict: "E",
            rep1ace: true,
            link: linker,
            scope: {
                content: '='
            }
        };
    });

