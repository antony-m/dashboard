'use strict';

angular.module('gulpAngular')
  .controller('ChartsCtrl', function ($scope, $stateParams) {

    $scope.date = new Date();
    $scope.cloudType = $stateParams.cloudType;

    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };

    $scope.models = {
      selected: null,
      lists: {"A": [], "B": []}
    };

    // Generate initial model
    for (var i = 1; i <= 3; ++i) {
      $scope.models.lists.A.push({label: "Item A" + i});
      $scope.models.lists.B.push({label: "Item B" + i});
    }

    // Model to JSON for demo purpose
    $scope.$watch('models', function(model) {
      $scope.modelAsJson = angular.toJson(model, true);
    }, true);

    $scope.gridsterOpts = {
      margins: [20, 20],
      outerMargin: true,
      pushing: true,
      floating: true,
      draggable: {
        handle: "h3"
      },
      minSizeX:3,
      minSizeY:2,
      resizable: {
        enabled: true,
        handles: ['n', 'e', 's', 'w', 'se', 'sw']
      }
    };

    $scope.gridsterOpts2 = {
      margins: [20, 20],
      outerMargin: true,
      pushing: true,
      floating: true,
      draggable: {
        handle: "h3"
      },
      minSizeX:3,
      minSizeY:2,
      resizable: {
        enabled: true,
        handles: ['n', 'e', 's', 'w', 'se', 'sw']
      }
    };

    var chart1 = AmCharts.makeChart("chart1div", {
      "type": "serial",
      "theme": "light",
      "marginRight": 80,
      "autoMarginOffset": 20,
      "dataDateFormat": "YYYY-MM-DD",
      "valueAxes": [{
        "id": "v1",
        "axisAlpha": 0,
        "position": "left"
      }],
      "balloon": {
        "borderThickness": 1,
        "shadowAlpha": 0
      },
      "pathToImages":"https://cdnjs.cloudflare.com/ajax/libs/amcharts/3.13.0/images/",
      "graphs": [{
        "id": "g1",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "title": "red line",
        "useLineColorForBulletBorder": true,
        "valueField": "value",
        "balloonText": "<div style='margin:5px; font-size:19px;'><span style='font-size:13px;'>[[category]]</span><br>[[value]]</div>"
      }],
      "chartScrollbar": {
        "graph": "g1",
        "scrollbarHeight": 80,
        "backgroundAlpha": 0,
        "selectedBackgroundAlpha": 0.1,
        "selectedBackgroundColor": "#888888",
        "graphFillAlpha": 0,
        "graphLineAlpha": 0.5,
        "selectedGraphFillAlpha": 0,
        "selectedGraphLineAlpha": 1,
        "autoGridCount":true,
        "color":"#AAAAAA",
        "enabled":false
      },
      "chartCursor": {
        "pan": true,
        "valueLineEnabled": true,
        "valueLineBalloonEnabled": true,
        "cursorAlpha":0,
        "valueLineAlpha":0.2
      },
      "categoryField": "date",
      "categoryAxis": {
        "parseDates": true,
        "dashLength": 1,
        "minorGridEnabled": true,
        "position": "top"
      },
      "export": {
        "enabled": true
      },
      "dataProvider": [{
        "date": "2012-07-27",
        "value": 0
      }, {
        "date": "2012-07-28",
        "value": 20
      }, {
        "date": "2012-07-29",
        "value": 69
      }, {
        "date": "2012-07-30",
        "value": 54
      }, {
        "date": "2012-07-31",
        "value": 18
      }, {
        "date": "2012-08-01",
        "value": 13
      }, {
        "date": "2012-08-02",
        "value": 22
      }, {
        "date": "2012-08-03",
        "value": 78
      }, {
        "date": "2012-08-04",
        "value": 89
      }, {
        "date": "2012-08-05",
        "value": 56
      }, {
        "date": "2012-08-06",
        "value": 16
      }, {
        "date": "2012-08-07",
        "value": 18
      }, {
        "date": "2012-08-08",
        "value": 6
      }]  });


    chart1.addListener("rendered", zoomChart1);

    zoomChart1();

    function zoomChart1() {
      chart1.zoomToIndexes(chart1.dataProvider.length - 40, chart1.dataProvider.length - 1);
    }

    var chartData = generateChartData();

    var chart2 = AmCharts.makeChart("chart2div", {
      "type": "serial",
      "theme": "light",
      "marginRight": 80,
      "dataProvider": chartData,
      "pathToImages":"https://cdnjs.cloudflare.com/ajax/libs/amcharts/3.13.0/images/",
      "valueAxes": [{
        "position": "left",
        "title": "Logins"
      },{
        "position":"top",
        "title":"Time"
      }],
      "graphs": [{
        "id": "g1",
        "fillAlphas": 0.4,
        "valueField": "visits",
        "balloonText": "<div style='margin:5px; font-size:19px;'>Visits:<b>[[value]]</b></div>"
      }],
      "chartScrollbar": {
        "graph": "g1",
        "scrollbarHeight": 80,
        "backgroundAlpha": 0,
        "selectedBackgroundAlpha": 0.1,
        "selectedBackgroundColor": "#888888",
        "graphFillAlpha": 0,
        "graphLineAlpha": 0.5,
        "selectedGraphFillAlpha": 0,
        "selectedGraphLineAlpha": 1,
        "autoGridCount": true,
        "color": "#AAAAAA",
        "enabled":false

      },
      "chartCursor": {
        "categoryBalloonDateFormat": "JJ:NN, DD MMMM",
        "cursorPosition": "mouse"
      },
      "categoryField": "date",
      "categoryAxis": {
        "minPeriod": "mm",
        "parseDates": true
      },
      "export": {
        "enabled": true
      }
    });

    chart2.addListener("dataUpdated", zoomChart2);
// when we apply theme, the dataUpdated event is fired even before we add listener, so
// we need to call zoomChart here
    zoomChart2();
// this method is called when chart is first inited as we listen for "dataUpdated" event
    function zoomChart2() {
      // different zoom methods can be used - zoomToIndexes, zoomToDates, zoomToCategoryValues
      chart2.zoomToIndexes(chartData.length - 250, chartData.length - 100);
    }

// generate some random data, quite different range
    function generateChartData() {
      var chartData = [];
      // current date
      var firstDate = new Date();
      // now set 500 minutes back
      firstDate.setMinutes(firstDate.getDate() - 1000);

      // and generate 500 data items
      for (var i = 0; i < 200; i++) {
        var newDate = new Date(firstDate);
        // each time we add one minute
        newDate.setMinutes(newDate.getMinutes() + i);
        // some random number
        var visits = Math.round(Math.random() * 40 + 10 + i + Math.random() * i / 5);
        // add data item to the array
        chartData.push({
          date: newDate,
          visits: visits
        });
      }
      return chartData;
    }

    $scope.amChartOptions1 = {
      "type": "serial",
      "theme": "light",
      "marginRight": 80,
      "autoMarginOffset": 20,
      "dataDateFormat": "YYYY-MM-DD",
      "valueAxes": [{
        "id": "v1",
        "axisAlpha": 0,
        "position": "left"
      }],
      "balloon": {
        "borderThickness": 1,
        "shadowAlpha": 0
      },
      "pathToImages":"https://cdnjs.cloudflare.com/ajax/libs/amcharts/3.13.0/images/",
      "graphs": [{
        "id": "g1",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "title": "red line",
        "useLineColorForBulletBorder": true,
        "valueField": "value",
        "balloonText": "<div style='margin:5px; font-size:19px;'><span style='font-size:13px;'>[[category]]</span><br>[[value]]</div>"
      }],
      "chartScrollbar": {
        "graph": "g1",
        "scrollbarHeight": 80,
        "backgroundAlpha": 0,
        "selectedBackgroundAlpha": 0.1,
        "selectedBackgroundColor": "#888888",
        "graphFillAlpha": 0,
        "graphLineAlpha": 0.5,
        "selectedGraphFillAlpha": 0,
        "selectedGraphLineAlpha": 1,
        "autoGridCount":true,
        "color":"#AAAAAA"
      },
      "chartCursor": {
        "pan": true,
        "valueLineEnabled": true,
        "valueLineBalloonEnabled": true,
        "cursorAlpha":0,
        "valueLineAlpha":0.2
      },
      "categoryField": "date",
      "categoryAxis": {
        "parseDates": true,
        "dashLength": 1,
        "minorGridEnabled": true,
        "position": "top"
      },
      "export": {
        "enabled": true
      },
      "data": [{
        "date": "2012-07-27",
        "value": 13
      }, {
        "date": "2012-07-28",
        "value": 11
      }, {
        "date": "2012-07-29",
        "value": 15
      }, {
        "date": "2012-07-30",
        "value": 16
      }, {
        "date": "2012-07-31",
        "value": 18
      }, {
        "date": "2012-08-01",
        "value": 13
      }, {
        "date": "2012-08-02",
        "value": 22
      }, {
        "date": "2012-08-03",
        "value": 23
      }, {
        "date": "2012-08-04",
        "value": 20
      }, {
        "date": "2012-08-05",
        "value": 17
      }, {
        "date": "2012-08-06",
        "value": 16
      }, {
        "date": "2012-08-07",
        "value": 18
      }, {
        "date": "2012-08-08",
        "value": 21
      }]
    };




    //var ctx = document.getElementById("myChart").getContext("2d");
    //ctx.canvas.width = 1100;
    //ctx.canvas.height = 300;
    var data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: "My Second dataset",
          fillColor: "rgba(151,187,205,0.2)",
          strokeColor: "rgba(151,187,205,1)",
          pointColor: "rgba(151,187,205,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(151,187,205,1)",
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };
  });



