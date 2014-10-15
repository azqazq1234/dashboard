var host = angular.module('host', []);
host.controller("host",function($scope,baremetal_server_list,shutdown,start,restart){
    $scope.date = baremetal_server_list.query();

    $scope.start = function(no, $event){
        var status = $event.target.value;
        if(status==="start"){
            start.post($scope.date.server_list[no].id);
        }else{
            restart.post($scope.date.server_list[no].id);
        }

        $scope.date.server_list[no].disable = true;
    };

    $scope.shutdown = function(sid){
        shutdown.post($scope.date.server_list[sid].id);
    };
});