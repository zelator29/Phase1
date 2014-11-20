module.controller('listController', function($scope) {
    $scope.listBoxSettings =
    {
        theme: 'bootstrap',
        width: '100%',
        height: '100%',
        itemHeight: -1,
        source: $scope.titles
    };

    $('#jqxListBox').jqxListBox({renderer: function(index, label, value) {
        return $scope.renderer(index, label, value);
    }});

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

    // When an opportunity is selected, update
    // the opportunity in the model
    $('#jqxListBox').on('change', function (event) {
        var args = event.args;
        if (args) {
            var index = args.index;
            $scope.opportunity = $scope.data.items[index];
        }
    });
});


