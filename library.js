"use strict";

var plugin = {};

plugin.parse = function(postContent, callback) {
	// Removed Psychobunnys Spoiler Regex
	postContent = postContent
        .replace(/<p>![center]*([\S\s]*?)<\/p>/gm, '<p class="center">$1</p>')
        .replace(/<p>![right]*([\S\s]*?)<\/p>/gm, '<p class="right">$1</p>');

	callback(null, postContent);
};

module.exports = plugin;
