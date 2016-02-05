'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Game Schema
 */
var GameSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    splashURL: { // Optional image from game
        type: String,
        required: false,
        default: 'http://lorempixel.com/400/500/abstract/placeholder from lorempixel/',
        trim: true
    },
    gameURL: {
        type: String,
        required: true,
        trim: true
    },
    title: { // Optional game title
        type: String,
        required: false,
        default: 'Untitled Game',
        trim: true
    },
    version: { // Current version number
        type: String,
        required: true,
        trim: true
    },
    content: { // Developer message
        type: String,
        required: false,
        default: '',
        trim: false
    },
    active: { // Display for review
        type: Boolean,
        required: true,
        default: true
    },
    user: { // Developer info
        type: Schema.ObjectId,
        ref: 'User'
    },
    comments: [{
        created: {
            type: Date,
            default: Date.now
        },
        user: { // Reviewer info
            type: String,
            required: true,
            trim: true
        },
        version: { // Version of critique
            type: String,
            required: true,
            trim: true
        },
        comment: {
            type: String,
            required: true,
            trim: true
        }
    }]
});

/**
 * Validations
 */
GameSchema.path('gameURL').validate(function (gameURL) {
    return !!gameURL;
}, 'Game URL cannot be blank');

GameSchema.path('version').validate(function (version) {
    return !!version;
}, 'Version cannot be blank');

//GameSchema.path('content').validate(function(content) {
//  return !!content;
//}, 'Content cannot be blank');

/**
 * Statics
 */
GameSchema.statics.load = function (id, cb) {
    this.findOne({
        _id: id
    }).populate('user', 'name username').exec(cb);
};

mongoose.model('Game', GameSchema);