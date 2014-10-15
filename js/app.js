var app = angular.module('Dashboard', ['ui.bootstrap', 'ngCookies','ngRoute','ngResource','host','panel','panel2','cloud']);

app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/host',{
        controller:'host',
        templateUrl:'page/host.html'
    }).when('/panel',{
        controller:'panel',
        templateUrl:'page/panel.html'
    }).when('/panel2',{
        controller:'panel2',
        templateUrl:'page/panel2.html'
    }).when('/cloud',{
        controller:'cloud',
        templateUrl:'page/cloud.html'
    }).otherwise({redirectTo:'/host'})
}]);
