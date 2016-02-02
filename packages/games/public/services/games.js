'use strict';

//Games service used for games REST endpoint
angular.module('mean.games').factory('Games', ['$resource',
  function($resource) {
    return $resource('games/:gameId', {
      gameId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
