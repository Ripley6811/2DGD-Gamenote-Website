'use strict';

var games = require('../controllers/games');

// Game authorization helpers
var hasAuthorization = function(req, res, next) {
  if (!req.user.isAdmin && req.game.user.id !== req.user.id) {
    return res.send(401, 'User is not authorized');
  }
  next();
};

module.exports = function(Games, app, auth) {

  app.route('/games')
    .get(games.all)
    .post(auth.requiresLogin, games.create);
  app.route('/games/:gameId')
    .get(games.show)
    .put(auth.requiresLogin, hasAuthorization, games.update)
    .delete(auth.requiresLogin, hasAuthorization, games.destroy);

  // Finish with setting up the gameId param
  app.param('gameId', games.game);
};
