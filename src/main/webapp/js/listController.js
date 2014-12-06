module.controller('listController', function($scope, $http, $routeParams, $rootScope) {
    var yql_url = 'https://query.yahooapis.com/v1/public/yql';
    var allForGood = 'http://api2.allforgood.org/api/volopps';
    var proxy = '';   //https://jsonp.nodejitsu.com/?url=';
    var url = proxy + allForGood + $routeParams.params;
    
    $scope.timePeriods = ['Morning', 'Afternoon', 'Evening'];
    $scope.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
                    'Thursday', 'Friday', 'Saturday'];

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
    
    $scope.formatAvailablityDays = function(opportunity) {
        if (opportunity === null)
            return 'null';
        var str = '';
        for (var i=0; i < opportunity.availabilityDays.length; i++) {
            str += opportunity.availabilityDays[i];
            str += ', ';
        }            
        return str.substring(0, str.length - 2);
    };

    $scope.formatAges = function() {
        if ($rootScope.selected === null)
            return '';
        var str = $rootScope.selected.minAge;
        if ($rootScope.selected.maximumAge == 200) {
            str += ' and up'
        }
        else {
            str += ' - ' + $rootScope.selected.maximumAge;
        }
        
        if ($rootScope.selected.minAge < 18) {
            str += ', guidance required under age ';
            str += $rootScope.selected.minimumAgeNoAdult;
        }
        return str;
    };
    
    $scope.listClick = function(event, opportunity) {
        if ($rootScope.selected === opportunity) {
            $rootScope.detailActive = true;
        }
        
        $('.list-group-item').removeClass('active');
        $(event.currentTarget).addClass('active');
        console.log(opportunity);
        $rootScope.selected = opportunity;
    };
    /* availabilityDays: Array[2]0: "Sunday Morning"1: "Sunday Afternoon"length: 2 */
    
    $scope.dateOptions = {
        showWeeks: 'false'
    };
});


