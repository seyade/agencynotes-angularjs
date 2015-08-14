'use strict';

/**
 * @ngdoc function
 * @name AgencyNotesApp.controller:AgentsCtrl
 * @description
 * # AgentsCtrl
 * Controller of the AgencyNotesApp
 */
angular.module('AgencyNotesApp')
  .controller('AgentsCtrl', ['$scope', '$http', 'AgentsServices', function ($scope, $http, AgentsServices) {

  	$scope.version =  '0.1.2';

    AgentsServices.getAgents()
    	.success(function(data) {
	    	$scope.agentsList = data;
	    })
	    .error(function(data) {
	    	console.log('error data: ', data);
	    });

  }]);


  /*$scope.agentsList = [
		{ 'id': 0, 'name': 'Monkey D. Luffy', 'agency': 'Mugiwara Ltd.', 'tel': '0207 123 45 67', 'email': 'mdluffy@mugiwara.co.jp', 'calledon': '2014-08-06', 'role': {'name': 'Front-End developer', 'info': 'front-end developer for 6 months at £475 per day, for Government agency', 'status': 4 }},
		{ 'id': 1, 'name': 'Nico Robin', 'agency': 'Mugiwara Ltd.', 'tel': '0207 123 45 68', 'email': 'nrobin@mugiwara.co.jp', 'calledon': '2014-08-05', 'role': { 'name': 'Senior Front-End developer', 'info': 'front-end developer for 6 months at £475 per day, for flagship retailer in Tokyo', 'status': 2 }},
		{ 'id': 2, 'name': 'Nami', 'agency': 'Mugiwara Ltd.', 'tel': '0207 123 45 69', 'email': 'nami@mugiwara.co.jp', 'calledon': '2014-08-07', 'role':  { 'name': 'UI developer', 'info': 'UI developer for 6 months at £355 per day, for digital agency', 'status': 1 }}
	];*/