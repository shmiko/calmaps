/**
 * Created by pauljones on 4/11/15.
 */
'use strict';

angular.module('calendarDemoApp')
    .controller('NavbarCtrl', function ($scope, $location) {
        $scope.menu = [{
            'title': 'about us',
            'link': '/'
        },{
            'title': 'Calendar',
            'link': '/cal'
        }];

        $scope.isCollapsed = true;

        $scope.isActive = function(route) {
            return route === $location.path();
        };
    });