'use strict';

describe('Controller: AgentsCtrl', function () {

  // load the controller's module
  beforeEach(module('AgencyNotesApp'));

  var AgentsCtrl,
    httpBackend,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend, $http) {
    scope = $rootScope.$new();
    httpBackend = $httpBackend;

    httpBackend.when('GET', '/scripts/data/agents.json').respond([{}, {}, {}]);

    AgentsCtrl = $controller('AgentsCtrl', {
      $scope: scope,
      $http: $http
    });

  }));

  it('should exist', function() {
    expect(scope.version).toBeDefined();
  });

  it('should have a greetings', function() {
    expect(scope.version).toEqual('0.1.2');
  });

  it('should attach a list of agents to the scope', function () {
    httpBackend.flush();
    expect(scope.agentsList.length).toBe(3);
  });
});
//levrai.interactive@outlook.com