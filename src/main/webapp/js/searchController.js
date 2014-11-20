var params = 'http://api2.allforgood.org/api/volopps?key=hoc0016-mobile&type=all&merge=0&output=json-hoc';

function loadUp() {
    $('#url').text(params);
    var proxy = 'https://jsonp.nodejitsu.com/';
    var url = proxy + '?url=' + params;

    $.get(url, function(data) {
        $('#response').text(JSON.stringify(data));
    }); 
}

module.controller('searchController', function($scope, $location) {
    $scope.terms = [
            'Adult Education', 'Animals', 'Arts & Culture',
            'Children & Youth Education', 'Civic & Community',
            'Disaster & Emergency Services', 'Environment',
            'Faith-Based Service', 'Health & Wellness', 'Family Services',
            'Hunger & Homelessness', 'International Service',
            'Internships & Employment', 'Justice & Legal Services',
            'Immigrant & Refugee Services', 'Schools', 'Senior Services',
            'Sports & Recreation', 'Technology',
            'Veterans & Military Families'];
        
    $scope.distances = [
        'Within 5 miles', 'Within 10 miles', 'Within 15 miles',
        'Within 25 miles', 'Within 50 miles'
    ];

    $scope.fromDate = new Date();
    $scope.toDate = moment().add(1, 'months').toDate();
    $scope.selectedTerm = '';
    $scope.selectedDistance = '';
    $scope.zipCode = '';

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
        $location.path("/list?key=hoc0016-mobile&type=all&merge=0&output=json-hoc");
        $location.replace();
    };

});




