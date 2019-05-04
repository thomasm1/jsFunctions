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
    })
    .controller('BoardCtrl', function ($scope, $routeParams, BoardService) {
        var boardId = $routeParams.boardId;
        var board = BoardService.getBoard(boardId);
        $scope.boardTitle = board.title;
        $scope.notes = board.notes;
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