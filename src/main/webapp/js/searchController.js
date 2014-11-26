

module.controller('searchController', function($scope, $location) {
    $scope.categories = [
            'Adult Education', 'Animals', 'Arts & Culture',
            'Children & Youth Education', 'Civic & Community',
            'Disaster & Emergency Services', 'Environment',
            'Faith-Based Service', 'Health & Wellness', 'Family Services',
            'Hunger & Homelessness', 'International Service',
            'Internships & Employment', 'Justice & Legal Services',
            'Immigrant & Refugee Services', 'Schools', 'Senior Services',
            'Sports & Recreation', 'Technology',
            'Veterans & Military Families'];

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
        
        if (!$scope.location){
            $scope.location = '15201';
        }
        
        var basePath = "/list?key=hoc0016-mobile&type=all&merge=3&output=json-hoc";
        var fullPath = basePath + '&vol_dist=' + distance;
        fullPath += '&vol_loc=' + $scope.location;
        $location.path(fullPath);
        $location.replace();
    };

});




