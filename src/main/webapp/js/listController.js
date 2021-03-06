module.controller('listController', function($scope, $location, $routeParams, $rootScope) {
    var yql_url = 'https://query.yahooapis.com/v1/public/yql';
    var allForGood = 'http://api2.allforgood.org/api/volopps';
    var url = allForGood + $routeParams.params;
    
    $scope.opportunities = '';
    $rootScope.selected = null;

    $.ajax({
        'url': yql_url,
        'data': {
            'q': 'SELECT * FROM json WHERE url="' + url + '"',
            'format': 'json',
            'jsonCompat': 'new'
        },
        'dataType': 'jsonp',
        'success': function (response) {
            if (response.error)
            {
                $rootScope.showSpinner = false;
                $scope.$apply();
                alert('Error: ' + response.error.description);

                // Go back to the search page
                $location.path('/search');
                $location.replace();            
                return;
            }
            if (response.query.results.json.items.length > 0) {
                $scope.opportunities = response.query.results.json.items;
                $rootScope.showSpinner = false;
                $scope.$apply();
            }
            else {
                $rootScope.showSpinner = false;
                $scope.$apply();
                alert('No results - try another search');

                // Go back to the search page
                $location.path('/search');
                $location.replace();                
            }
        }
    });

    $scope.formatDate = function(date) {
        return formatDate(date);
    };
    
    $scope.listClick = function(event, opportunity) {
        if ($rootScope.selected === opportunity) {
            $rootScope.history.push($location.$$path);
            $location.path('/detail');
            $location.replace();                
        }
        
        $('.list-group-item').removeClass('active');
        $(event.currentTarget).addClass('active');
        $rootScope.selected = opportunity;
    };
    
    $scope.dateOptions = {
        showWeeks: 'false'
    };
});


