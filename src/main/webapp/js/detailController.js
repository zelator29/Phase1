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
    
    $scope.formatVolunteerCount = function(opportunity) {
        if (!opportunity.volunteersNeeded || 
                opportunity.volunteersNeeded === 0) {
            return 'Unknown';
        }
        return opportunity.volunteersNeeded;
    };
    
    $scope.formatTimesAvailable = function(opportunity) {
        var startTime = ('0000' + opportunity.startTime).substr(-4, 4);
        var endTime = ('0000' + opportunity.endTime).substr(-4, 4);
        
        if (startTime === '0000' && endTime === '2359') {
            return 'Unspecified';
        }
        return formatTime(startTime) + ' - ' + formatTime(endTime);
    };
    
    $scope.getButtonText = function(opportunity) {
        if (opportunity.registerType === 'Express Interest')
            return 'Express Interest';
        return 'Sign Up';
    };
    
    $scope.formatOrientation = function(opportunity) {
        if (opportunity.orientationRequired)
            return 'Yes';
        return 'No';
    };
    
});

