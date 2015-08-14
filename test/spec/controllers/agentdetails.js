'use strict';

describe('Controller: AgentDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('AgencyNotesApp'));

  var AgentDetailsCtrl,
    httpBackend,
    routeParams,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend, $http) {
    scope = $rootScope.$new();
    routeParams = {};
    httpBackend = $httpBackend;

    httpBackend.when('GET', '/scripts/data/agents.json').respond([{}, {}, {}]);

    AgentDetailsCtrl = $controller('AgentDetailsCtrl', {
      $scope: scope,
      $routeParams: routeParams,
      $http: $http
    });

  }));

  it('should contain data of 3 agents', function() {
    httpBackend.flush();
    expect(scope.agentsList.length).toBe(3);
  });

});
