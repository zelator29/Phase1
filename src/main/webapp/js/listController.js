module.controller('listController', function($scope, $routeParams, $rootScope) {
    var allForGood = 'http://api2.allforgood.org/api/volopps';
    var url = allForGood + $routeParams.params;

    $scope.opportunities = testData.items;
    $scope.selected = null;
    
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
});


