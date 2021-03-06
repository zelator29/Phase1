
module.controller('searchController', function($scope, $rootScope, $location) {
    $scope.categories = [
            'Adult Education', 'Animals', 'Arts & Culture',
            'Children & Youth Education', 'Civic & Community',
            'Disaster & Emergency Services', 'Environment',
            'Faith-Based Service', 'Health & Wellness', 'Family Services',
            'Hunger & Homelessness', 'International Service',
            'Internships & Employment', 'Justice & Legal Services',
            'Immigrant & Refugee Services', 'Schools', 'Senior Services',
            'Sports & Recreation', 'Technology',
            'Veterans & Military Families'
        ];
        
    $scope.keywords = [
        'adult+education', 'animals', 'arts+culture',
        'children+youth+education', 'civic+community',
        'disaster+emergency', 'environment', 
        'faith', 'health+wellness', 'family+services',
        'hunger+homelessness', 'international+service',
        'internships+employment', 'justice+legal+services',
        'immigrant+refugee','schools', 'senior+services',
        'sports+recreation', 'technology', 'veterans+military'
        
    ];

    $scope.selectCategory = function(category) {
        $scope.selectedCategory = category;
    };

    $scope.distances = [
        'Within 5 miles', 'Within 10 miles',
        'Within 20 miles', 'Within 50 miles'
    ];
    
    $scope.distanceValues = [
        5, 10, 20, 50
    ];
    
    
    $scope.selectDistance = function(distance) {
        $scope.selectedDistance = distance;
    };
    
    $scope.fromDate = new Date();
    $scope.toDate = moment().add(1, 'months').toDate();
    
    $scope.fromDateOpen = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.isFromDateOpened = true;
        $scope.isToDateOpened = false;
    };
    
    $scope.toDateOpen = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.isToDateOpened = true;
        $scope.isFromDateOpened = false;
    };
    
    $scope.selectedCategory = '';
    $scope.selectedDistance = $scope.distances[0];
    $scope.location = '';

    $scope.termSettings = {
        theme: 'bootstrap',
        source: $scope.terms, 
        itemHeight: 20, 
        height: 20, 
        width: '98%',
        selectedIndex: -1
    };
    
    $scope.dateInputSettings = {
        theme: 'bootstrap',
        width: '90%',
        height: 15,
        formatString: 'dddd - MMMM dd, yyyy',
        readonly: true
    };

    $scope.distanceSettings = {
        theme: 'bootstrap',
        source: $scope.distances, 
        itemHeight: 20, height: 20, 
        width: '98%',
        selectedIndex: 0
    };
    
    $scope.go = function () {
        var index = $scope.distances.indexOf($scope.selectedDistance); 
        var distance = $scope.distanceValues[index];
        
        $rootScope.showSpinner = true;
        
        if (!$scope.location){
            $scope.location = '15201';
        }
        
        // This is the default way to get the basic query
        var basePath = "/list?key=hoc0016-mobile&type=all&merge=3&output=json-hoc&num=100";
        var fullPath = basePath + '&vol_dist=' + distance;
        fullPath += '&vol_loc=' + $scope.location;
        
        // Use 'NOW' as the default search target and 
        fullPath += '&vol_startdate=' + moment($scope.fromDate).format('YYYY-MM-DD');
        fullPath += '&vol_enddate=' + moment($scope.toDate).format('YYYY-MM-DD');
        
        if ($scope.selectedCategory) {
            var index = $scope.categories.indexOf($scope.selectedCategory);
            fullPath += '&q=' + $scope.keywords[index];
        }
        $location.path(fullPath);
        console.log(fullPath);
        $location.replace();
    };
});




