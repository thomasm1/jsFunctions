'use strict';

angular.module('noteriousApp', ['ngRoute'])
    .config(function ($routeProvider, $httpProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'boards.html',
                controller: 'BoardsCtrl'
            })
            .when('/:boardId', {
                templateUrl: 'board.html',
                controller: 'BoardCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .controller('MainCtrl', function ($scope, $window) {
        $scope.colors = ['blue', 'green', 'orange', 'red', 'yellow'];
        $scope.color = $scope.colors[Math.floor(Math.random() * $scope.colors.length)];
    })
    .controller('BoardsCtrl', function ($scope, BoardService) {
        $scope.boards = BoardService.getBoards();
        $scope.currentBoard = null;
        
        $scope.setCurrentBoard = function(id) {
          $scope.currentBoard = $scope.boards[id];
          console.log('SET CURRENT BOARD', $scope.currentBoard);
        };
    })
    .controller('BoardCtrl', function ($scope, $routeParams, BoardService) {
        var boardId = $routeParams.boardId;
        var board = BoardService.getBoard(boardId);
        $scope.boardTitle = board.title;
        $scope.notes = board.notes;
    })
    .directive('board', function() {
      var linker = function(scope, element, attrs) {
        console.log('ELEMENT', element);
      };
      
      var controller = function($scope) {
        $scope.deleteBoard = function(boardId) {
          console.log('DELETE BOARD FIRED!');
        };
        
        $scope.deleteBoard = function(boardId) {
          console.log('DELETE BOARD FIRED!');
        };        
      };
      
      var template = '<div class="edit board my-repeat-animation" >';
      template += '<div class="caption">';
      template += '<button type="button" class="top-right-corner" ng-click="deleteBoard(id)">';
      template += '<span class="glyphicon glyphicon-remove"></span>';
      template += '</button>';
      template += '<div><input type="text" class="medium" ng-model="content.title" placeholder="Board Title"></div>';
      template += '<div><input type="text" ng-model="content.description" placeholder="Board description."></div>';
      template += '<div class="bottom x-small"><input type="checkbox" ng-model="content.isPublic"> Board is Public</div>';
      template += '<a href="#/{{id}}" type="button" class="view bottom-right-corner">';
      template += '<span class="glyphicon glyphicon-arrow-right"></span>';
      template += '</a>';
      template += '</div>';
      template += '</div>';
      
      return {
        restrict: 'E',
        template: template,
        controller: controller,
        link: linker,
        scope: {
          content:'=',
          contentId:'@'
        }
      }
    })    
    .factory('BoardService', function () {
        var boards = {
            0: {"title": "Board 00", "content": "Content pending.", "notes": {
                0: {"title": "Note 00", "content": "Content pending."},
                1: {"title": "Note 01", "content": "Content pending."}
            }},
            1: {"title": "Board 01", "content": "Content pending.", "notes": {
                2: {"title": "Note 02", "content": "Content pending."},
                3: {"title": "Note 03", "content": "Content pending."}
            }}
        };

        var getBoards = function () {
            return boards;
        };

        var getBoard = function (id) {
            return boards[id];
        };

        return {
            getBoards: getBoards,
            getBoard: getBoard
        }
    });