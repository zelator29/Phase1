module.controller('splashController', function($scope, $location) {
    $scope.login = function() {
        $('.modal-backdrop').remove();
        $location.path('/search');
        $location.replace(); 
    };
});

