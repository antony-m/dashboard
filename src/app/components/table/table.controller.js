'use strict';

angular.module('gulpAngular')
  .controller('TableCtrl', function ($scope, $location) {
    $scope.date = new Date();
    console.log('hello from table');
    $scope.myItems = [{
      "cloudtype": "amazon1",
      "resource": "VM",
      "name": "",
      "cpu": "95%",
      "resourceid": "1sd230s9dflsfjwie",
      "client": "altoros"
    },
      {
        "cloudtype": "amazon2",
        "resource": "VM",
        "name": "",
        "cpu": "95%",
        "resourceid": "2sd230s9dflsfjwie",
        "client": "altoros"
      },
      {
        "cloudtype": "amazon3",
        "resource": "VM",
        "name": "",
        "cpu": "95%",
        "resourceid": "3sd230s9dflsfjwie",
        "client": "altoros"
      },
      {
        "cloudtype": "amazon4",
        "resource": "VM",
        "name": "",
        "cpu": "95%",
        "resourceid": "4sd230s9dflsfjwie",
        "client": "altoros"
      },
      {
        "cloudtype": "amazon5",
        "resource": "VM",
        "name": "",
        "cpu": "95%",
        "resourceid": "5sd230s9dflsfjwie",
        "client": "altoros"
      },
      {
        "cloudtype": "amazon6",
        "resource": "VM",
        "name": "",
        "cpu": "95%",
        "resourceid": "6sd230s9dflsfjwie",
        "client": "altoros"
      }];

    $scope.mySelectedItems = [];
    $scope.$watchCollection("mySelectedItems", function () {
      if ($scope.mySelectedItems[0]) {
        $location.path('/charts/' + $scope.mySelectedItems[0].cloudtype);
      }
    });
  });
