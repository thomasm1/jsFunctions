angular.module('website', [])
    .controller('MainCtrl', function ($scope, GTDService) {
        $scope.groups = GTDService.getGroups();
        $scope.tasks = GTDService.getTasks();
    })
    .factory('GTDService', function () {
        var groups = [
            {data: 'reference', label: 'Reference'},
            {data: 'someday', label: 'Someday'},
            {data: 'waiting', label: 'Waiting'},
            {data: 'calendar', label: 'Calendar'},
            {data: 'hotlist', label: 'Hotlist'}
        ];

        var tasks = [
            {group: 'reference', label: 'Vim Cheat Sheet'},
            {group: 'reference', label: 'AngularJS Docs'},
            {group: 'reference', label: 'CSS Tricks'},
            {group: 'reference', label: 'Git Community'},
            {group: 'reference', label: 'Eloquent JavaScript'},
            {group: 'someday', label: 'ClojureScript'},
            {group: 'someday', label: 'Raspberry Pi'},
            {group: 'someday', label: 'Elastic Search'},
            {group: 'someday', label: 'D3'},
            {group: 'someday', label: 'Data Visualization'},
            {group: 'waiting', label: 'Wordpress Plugin'},
            {group: 'waiting', label: 'One Hungry Mind Post'},
            {group: 'waiting', label: 'SonoranJS Planning'},
            {group: 'waiting', label: 'Arcosanti Hacker Space'},
            {group: 'waiting', label: 'Phoenix AngularJS Workshop'},
            {group: 'calendar', label: 'Strange Loop Workshop'},
            {group: 'calendar', label: 'AngularJS in Action'},
            {group: 'calendar', label: 'Front End Masters Workshop'},
            {group: 'calendar', label: 'Super Secret Unnamed Project'},
            {group: 'calendar', label: 'Startup Weekend'},
            {group: 'hotlist', label: 'AnagularJS Chapter'},
            {group: 'hotlist', label: 'One Hungry Mind Screencast'},
            {group: 'hotlist', label: 'Cordova Build to Client'},
            {group: 'hotlist', label: 'Lean UX Webinar'},
            {group: 'hotlist', label: 'Drag and Drop Directive'}
        ];

        var insertTaskAfter = function(task, prevTask) {
            tasks = tasks.remove(function(t) {
              return t['label'] == task.label;
            });

            tasks = tasks.add(task, tasks.findIndex(prevTask) + 1);
        };

        var getGroups = function () {
            return groups;
        };

        var getTasks = function () {
            return tasks;
        };

        return {
            getGroups: getGroups,
            getTasks: getTasks,
            insertTaskAfter: insertTaskAfter
        }
    })
    .directive('sortable', function (GTDService) {
        var linker = function (scope, element, attrs) {
            var group = scope.group.data;

            element.sortable({
                items: 'li',
                connectWith: ".list",
                receive: function(event, ui) {
                    var prevScope = angular.element(ui.item.prev()).scope();
                    var curScope = angular.element(ui.item).scope();

                    scope.$apply(function(){
                        GTDService.insertTaskAfter(curScope.task, prevScope.task);
                        curScope.task.group = group; // Update the group
                    });
                }
            });
        };

        return {
            restrict: 'A',
            link: linker
        };
    }); 