'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
  mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Game = mongoose.model('Game');

/**
 * Globals
 */
var user;
var game;

/**
 * Test Suites
 */
describe('<Unit Test>', function() {
  describe('Model Game:', function() {
    beforeEach(function(done) {
      user = new User({
        name: 'Full name',
        email: 'test@test.com',
        username: 'user',
        password: 'password'
      });

      user.save(function() {
        game = new Game({
          title: 'Game Title',
          content: 'Game Content',
          user: user
        });

        done();
      });
    });

    describe('Method Save', function() {
      it('should be able to save without problems', function(done) {
        return game.save(function(err) {
          should.not.exist(err);
          game.title.should.equal('Game Title');
          game.content.should.equal('Game Content');
          game.user.should.not.have.length(0);
          game.created.should.not.have.length(0);
          done();
        });
      });

      it('should be able to show an error when try to save without title', function(done) {
        game.title = '';

        return game.save(function(err) {
          should.exist(err);
          done();
        });
      });

      it('should be able to show an error when try to save without content', function(done) {
        game.content = '';

        return game.save(function(err) {
          should.exist(err);
          done();
        });
      });

      it('should be able to show an error when try to save without user', function(done) {
        game.user = {};

        return game.save(function(err) {
          should.exist(err);
          done();
        });
      });

    });

    afterEach(function(done) {
      game.remove();
      user.remove();
      done();
    });
  });
});
