'use strict';

/**
 * @ngdoc function
 * @name AgencyNotesApp.controller:AgentDetailsCtrl
 * @description
 * # AgentdetailsCtrl
 * Controller of the AgencyNotesApp
 */
angular.module('AgencyNotesApp')
  .controller('AgentDetailsCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    
    $http.get('/scripts/data/agents.json').success(function(data) {
    	$scope.agentsList = data;

    	$scope.itemId = $routeParams.itemId;

    	var goToArtist = function(position) {
			if (position === 'prev') {
				// go to previous item
				if ($routeParams.itemId > 0) {

					// Have to Number() because $routeParams returns a string,
					// so it has to be converted into a number
					$scope.prevAgent = Number($routeParams.itemId) - 1;
				} else {
					$scope.prevAgent = $scope.agentsList.length - 1;
				}
			}
				
			if (position === 'next') {
				// go to next item
				if ($routeParams.itemId < $scope.agentsList.length - 1) {

					// see comment above about Number()
					$scope.nextAgent = Number($routeParams.itemId) + 1;
				} else {
					$scope.nextAgent = 0;
				}
			}
		};

		goToArtist('prev');
		goToArtist('next');
    });

  }]);
