'use strict';

angular.module('noteriousApp')
    .controller('BoardsCtrl', function ($scope, BoardsService) {
        $scope.newBoard = {
            title:'',
            description:'',
            isPublic: false
        };

        $scope.resetForm = function() {
            $scope.newBoard = {
                title:'',
                description:'',
                isPublic: false
            };
        };

        $scope.getBoards = function () {
            BoardsService.find().then(function (result) {
                $scope.boards = (result !== 'null') ? result : {};
            }, function (reason) {
                console.log('ERROR', reason);
            });
        };

        $scope.createBoard = function (board) {
            BoardsService.create(board.title, board.description, board.isPublic).then(function (result) {
                $scope.getBoards();
            }, function (reason) {
                console.log('ERROR', reason);
            });
        };

        $scope.updateBoard = function (boardId, board) {
            BoardsService.update(boardId, board.title, board.description, board.isPublic).then(function (result) {
                // Do nothing... it is already updated locally
            }, function (reason) {
                console.log('ERROR', reason);
            });
        };

        $scope.deleteBoard = function (boardId) {
            BoardsService.destroy(boardId).then(function (result) {
                $scope.getBoards();
            }, function (reason) {
                console.log('ERROR', reason);
            });
        };

        $scope.getBoards();
    });
