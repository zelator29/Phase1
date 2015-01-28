module.controller('splashController', function($scope, $location) {
    $scope.login = function() {
    	$.ajax({
    		url: '/login.php',
    		type: 'POST',
    		dataType: 'json',
    		data: {
    			username: $scope.username,
    			password: $scope.password
    		},
    		success: handleSuccess
    	});
        $('.modal-backdrop').remove();
        $location.path('/search');
        $location.replace(); 
    };

    function handleSuccess(response) {
    	if (response.sessionid != "") {
    		document.cookie = "sessionid=" + response.sessionid;
    	};
    }
});

