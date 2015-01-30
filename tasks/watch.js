'use strict';

module.exports = [['jshint-internal', 'test'], function() {
	this.watch(this.config('source:internal'), ['jshint-internal']);
	this.watch(this.config('source:js'), ['jshint']);
}];
