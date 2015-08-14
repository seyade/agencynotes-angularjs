'use strict';

angular.module('AgencyNotesApp')
	.factory('AgentsServices', ['$http', function($http){
	
		var AgentsServices = {};

		AgentsServices.getAgents = function() {
			return $http.get('/scripts/data/agents.json');
		};

		return AgentsServices;
	}]);