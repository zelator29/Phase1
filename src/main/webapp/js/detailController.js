module.controller('detailController', function($scope) {
    $scope.timePeriods = ['Morning', 'Afternoon', 'Evening'];
    $scope.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
                    'Thursday', 'Friday', 'Saturday'];
    
    $scope.latitude = '';
    $scope.longitude = '';
    
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
        if ($rootScope.selected.maximumAge === 200) {
            str += ' and up';
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

});

