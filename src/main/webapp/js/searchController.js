var params = 'http://api2.allforgood.org/api/volopps?key=hoc0016-mobile&type=all&merge=0&output=json-hoc';

function loadUp() {
    $('#url').text(params);
    var proxy = 'https://jsonp.nodejitsu.com/';
    var url = proxy + '?url=' + params;

    $.get(url, function(data) {
        $('#response').text(JSON.stringify(data));
    }); 
}

module.controller('searchController', function($scope) {
    $scope.message = 'Search';
});




