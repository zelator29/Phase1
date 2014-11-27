module.controller('listController', function($scope, $routeParams) {
    console.log('in listController');
    $scope.titles = [];
    $scope.selectedTitle = null;

    var allForGood = 'http://api2.allforgood.org/api/volopps';
    var url = allForGood + $routeParams.params;

    //$scope.data = testdata;
      
    $('#jqxListBox').jqxListBox();

    $.get(url, function(data) {
        $scope.data = data;

        for (var i = 0; i < $scope.data.items.length; i++) {
            $scope.titles.push($scope.data.items[i].title);
        }

        $('#jqxListBox').jqxListBox({source: $scope.titles,
            selectedIndex: 0 });
    });

    $scope.listBoxSettings =
    {
        theme: 'bootstrap',
        width: '100%',
        height: '100%',
        itemHeight: '-1',
        source: $scope.titles,
        selectedIndex: '-1',
        renderer: function(index, label, value) {
            return $scope.renderer(index, label, value);
        }
    };

    $scope.renderer = function(index, label, value) {
        var item = $scope.data.items[index];
        var startDate = moment(item.startDate);
        var endDate = moment(item.endDate);
        
        var cell = 
            '<div class="render-cell">' +
            '<h4 class="rockwell" style="word-break: word; white-space: normal;">' + 
                item.title + '</h4>' +
            '<p class="rockwell">'+ startDate.format("MMMM Do, YYYY") + ' - ' +
                        endDate.format("MMMM Do, YYYY") + '</p>' +
            '<p class="rockwell">' +  item.city + ', ' + 
                    item.region.toUpperCase() + ' ' + item.postalCode + 
            '</div>';
        return cell;
    };

    // When an opportunity is selected, update
    // the opportunity in the model
    $('#jqxListBox').on('change', function (event) {
        if (event.args.type === 'none')
            return;
        
        var args = event.args;
        if (args) {
            var index = args.index;
            $scope.opportunity = $scope.data.items[index];
            console.log($scope.opportunity);
        }
    });
});


