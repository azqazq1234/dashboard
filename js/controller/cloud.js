var cloud = angular.module('cloud', []);
cloud.controller("cloud",function($scope,cloud_list){
    $scope.cloud=cloud_list.query();
});