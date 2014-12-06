module.controller('listController', function($scope, $http, $routeParams, $rootScope) {
    var yql_url = 'https://query.yahooapis.com/v1/public/yql';
    var allForGood = 'http://api2.allforgood.org/api/volopps';
    var proxy = '';   //https://jsonp.nodejitsu.com/?url=';
    var url = proxy + allForGood + $routeParams.params;

    $scope.opportunities = '';
    $scope.selected = null;

    $.ajax({
        'url': yql_url,
        'data': {
            'q': 'SELECT * FROM json WHERE url="' + url + '"',
            'format': 'json',
            'jsonCompat': 'new'
        },
        'dataType': 'jsonp',
        'success': function (response) {
            console.log(response.query.results.json.items);
            $scope.opportunities = response.query.results.json.items;
            $scope.$apply();
        }
    });

    $scope.formatDate = function(date) {
        return moment(date).format('dddd MMMM Do, YYYY');
    };
    
    $scope.formatTags = function(tags) {
        if (tags === null)
            return null;
        var str = '';
        for (var i=0; i < tags.categoryTags.length; i++) {
            var tag = tags.categoryTags[i];
            str += tag.trim().replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
            str += ',';
        }
        return str.substring(0, str.length - 1);
    };

    $scope.listClick = function(event, opportunity) {
        if ($scope.selected === opportunity) {
            $rootScope.detailActive = true;
        }
        
        $('.list-group-item').removeClass('active');
        $(event.currentTarget).addClass('active');
        $scope.selected = opportunity;
    };
    
    $scope.dateOptions = {
        showWeeks: 'false'
    };
});


