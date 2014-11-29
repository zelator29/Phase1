module.controller('listController', function($scope, $routeParams, $rootScope) {
    var allForGood = 'http://api2.allforgood.org/api/volopps';
    var url = allForGood + $routeParams.params;

    $scope.opportunities = testData.items;
    $scope.selected = null;
    
    $scope.formatDate = function(date) {
        return moment(date).format('dddd MMMM Do, YYYY');
    };

    $scope.listClick = function(event, opportunity) {
        if ($scope.selected === opportunity) {
            $rootScope.detailActive = true;
        }
        
        $('.list-group-item').removeClass('active');
        $(event.currentTarget).addClass('active');
        $scope.selected = opportunity;
        
    };
    
    $

});


