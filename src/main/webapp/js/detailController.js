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
        if (opportunity === null || opportunity.availabilityDays === null)
            return 'Unknown';
        var str = '';
        for (var i=0; i < opportunity.availabilityDays.length; i++) {
            str += opportunity.availabilityDays[i];
            str += ', ';
        }            
        return str.substring(0, str.length - 2);
    };

    $scope.formatAges = function(opportunity) {
        if (opportunity === null)
            return '';
        var str = opportunity.minAge;
        if (opportunity.maximumAge === 200) {
            str += ' and up';
        }
        else {
            str += ' - ' + opportunity.maximumAge;
        }
        
        if (opportunity.minAge < 18) {
            str += ', guidance required under age ';
            str += opportunity.minimumAgeNoAdult;
        }
        return str;
    };

    $scope.formatDate = function(date) {
        return formatDate(date);
    };

});

