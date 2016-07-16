'use strict';

angular.
  module('main').
  component('main', {
    templateUrl: 'main/main.html',
    controller: function MainController ($http) {
	    var self = this;

	    $http.get('main/feeds.json').success(function(response){
	    	self.feeds = response;
	    });
	  }
  });