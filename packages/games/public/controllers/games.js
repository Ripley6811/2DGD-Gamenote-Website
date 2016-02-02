'use strict';

angular.module('mean.games').controller('GamesController', ['$scope', '$stateParams', '$location', 'Global', 'Games',
  function ($scope, $stateParams, $location, Global, Games) {
        $scope.global = Global;

        $scope.hasAuthorization = function (game) {
            if (!game || !game.user) return false;
            return $scope.global.isAdmin || game.user._id === $scope.global.user._id;
        };

        $scope.create = function (isValid) {
            if (isValid) {
                var game = new Games({
                    splashURL: this.splashURL,
                    gameURL: this.gameURL,
                    version: this.version,
                    title: this.title,
                    content: this.content
                });
                game.$save(function (response) {
                    $location.path('games/' + response._id);
                });

                this.title = '';
                this.content = '';
                this.splashURL = '';
                this.gameURL = '';
                this.version = '';
            } else {
                $scope.submitted = true;
            }
        };

        $scope.addComment = function (game) {
            console.log(this.comment);
            console.log($scope.global.user);
            if (this.comment) {
                if (!game.updated) {
                    game.updated = [];
                }
                game.updated.push(new Date().getTime());

                if (!game.comments) {
                    game.comments = [];
                }

                game.comments.unshift({
                    user: $scope.global.user.name,
                    version: game.version,
                    comment: this.comment
                })

                game.$update(function () {
                    $location.path('games/' + game._id);
                });
            }
        };

        $scope.remove = function (game) {
            if (game) {
                game.$remove();

                for (var i in $scope.games) {
                    if ($scope.games[i] === game) {
                        $scope.games.splice(i, 1);
                    }
                }
            } else {
                $scope.game.$remove(function (response) {
                    $location.path('games');
                });
            }
        };

        $scope.update = function (isValid) {
            if (isValid) {
                var game = $scope.game;
                if (!game.updated) {
                    game.updated = [];
                }
                game.updated.push(new Date().getTime());

                game.$update(function () {
                    $location.path('games/' + game._id);
                });
            } else {
                $scope.submitted = true;
            }
        };

        $scope.find = function () {
            Games.query(function (games) {
                $scope.games = games;
            });
        };

        $scope.findOne = function () {
            Games.get({
                gameId: $stateParams.gameId
            }, function (game) {
                $scope.game = game;
            });
        };
  }
]);
