var panel = angular.module('panel', []);
panel.controller("panel",function($scope, baremetal_server_list, exportCSV){
  $scope.date=baremetal_server_list.query();
  $scope.roles = ["Compute", "Controller"];
  $scope.getData = function() {
  	var servers = [];
  	var server_list = $scope.date.server_list;
  	for( var i in server_list){
  		if(server_list[i].role) {
  			var server = {};
  			server.id = server_list[i].id;
  			server.role = server_list[i].role;
  			servers.push(server);
  		}
  	}
  	console.log(servers);
  	exportCSV.post(servers);
  };
});