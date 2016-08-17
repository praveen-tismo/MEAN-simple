var app = angular.module('MeanEx', []);

app.factory('company', [function(){
  var o = {
    company: []
  };
  return o;
}]);

app.controller('MainCtrl', [
'$scope',
'company',
function($scope, company){
  $scope.company = [
  {id: 1, name: 'company 1', no_of_emps: 5, city: 'Bangalore'},
  {id: 2, name: 'company 2', no_of_emps: 10, city: 'Delhi'},
  {id: 3, name: 'company 3', no_of_emps: 15, city: 'Chennai'},
  {id: 4, name: 'company 4', no_of_emps: 2, city: 'Noida'},
  {id: 5, name: 'company 5', no_of_emps: 8, city: 'Pune'}
];
}]);

app.factory('employee', [function(){
  var o = {
    employee: []
  };
  return o;
}]);

app.controller('MainCtrl', [
'$scope',
'employee',
function($scope, employee){
  $scope.employee = [
  {id: 1, name: 'emp 1', salary: 50000, city: 'Bangalore', gender: 'Male', age: 28},
  {id: 2, name: 'emp 2', salary: 10000, city: 'Delhi', gender: 'Male', age: 25},
  {id: 3, name: 'emp 3', salary: 15000, city: 'Chennai', gender: 'Female', age: 23},
  {id: 4, name: 'emp 4', salary: 20000, city: 'Noida', gender: 'Male', age: 22},
  {id: 5, name: 'emp 5', salary: 8000, city: 'Pune', gender: 'Female', age: 21}
];
}]);

/*app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.html"
    })
    .when("/comapany/{id}", {
        templateUrl : "company.html"
    })
    .when("/employee/{id}", {
        templateUrl : "employee.html"
    });
});*/