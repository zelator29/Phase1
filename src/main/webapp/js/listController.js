module.controller('listController', function($scope, $routeParams) {
    console.log('in listController');
    $scope.titles = [];
    $scope.selectedTitle = $scope.titles[0];

    var allForGood = 'http://api2.allforgood.org/api/volopps';
    var proxy = 'https://jsonp.nodejitsu.com/';
    var url = proxy + '?url=' + allForGood + $routeParams.params;

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
        width: '300',
        height: '300',
        itemHeight: 35,
        source: $scope.titles
    };

//            {renderer: function(index, label, value) {
//                return $scope.renderer(index, label, value);
//            }}


    $scope.renderer = function(index, label, value) {
        var item = $scope.data.items[index];
        var startDate = moment(item.startDate);
        var endDate = moment(item.endDate);
        var table = 
            '<table style="width: 280px;" class="renderedRow">' + 
                '<tr>' +
                    '<td rowspan="4" style="width: 30px;">' + 
                    '<span class="glyphicon glyphicon-heart" style="margin-left: 4px;"></span>' +
                    '</td>' +
                    '<td rowspan="2" style="white-space: normal;">' + item.title + '</td>' +
                '</tr><tr></tr>' +
                '<tr>'+
                    '<td rowspan="1">' + 
                        startDate.format("MMMM Do YYYY") + ' - ' +
                        endDate.format("MMMM Do YYYY") +
                    '</td>' +
                '</tr>' + 
                '<tr>' + 
                    '<td rowspan="1">' + 
                        item.city + ', ' + item.region.toUpperCase() +
                        ' ' + item.postalCode + 
                    '</td>' +
                '</tr>' + 
            '</table>';
        return table;                    
    };

//    $('#jqxListBox').on('select', function () {
//        $('#drillin').removeAttr("disabled", "disabled");
//    });

/*        
    // When an opportunity is selected, update
    // the opportunity in the model
    $('#jqxListBox').on('change', function (event) {
        var args = event.args;
        if (args) {
            var index = args.index;
            $scope.opportunity = $scope.data.items[index];
        }
    });
*/    
});


