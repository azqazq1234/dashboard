app.factory('baremetal_server_list',['$resource',function($resource){
    return $resource('data/baremetal_server_list.json',{},{
            query: {
                method:'GET'
            }
        })
	}])
    .factory('shutdown', ['$resource', function($resource) {
    return $resource('data/shutdown.json', {}, {
            post: {
                method: 'POST'
            }
        })
    }])
    .factory('start', ['$resource', function($resource) {
        return $resource('data/start.json', {}, {
            post: {
                method: 'POST'
            }
        })
    }])
    .factory('restart', ['$resource', function($resource) {
        return $resource('data/restart.json', {}, {
            post: {
                method: 'POST'
            }
        })
    }])


    .factory('exportCSV', ['$resource', function($resource) {
        return $resource('http://10.32.105.189:9529/mock/orchestration/export_CSV', {}, {
            post: {
                method: 'POST'
            }
        })
    }])

	.factory('deploment_id',['$resource',function($resource){
        return $resource('data/deploment_id.json',{},{
            query:{method:'GET'}
        });
	}])
	.factory('deployCSV', ['$resource', function($resource) {
		return $resource('http://10.32.105.149:9527/contrib/OpenStackInstallProcess/create_os_cluster', {}, {
			post: {
				method: 'POST'
			}
		})
	}])


    .factory('cloud_list', ['$resource', function($resource) {
        return $resource('data/cloud_list.json', {}, {
            query: {
                method: 'GET'
            }
        })
    }]);
