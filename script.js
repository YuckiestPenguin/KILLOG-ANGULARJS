var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })
        .when('/projectLogistics', {
            templateUrl: 'pages/projectLogistics.html',
            controller: 'projectLogisticsController'
        })
        .when('/mobilizations', {
            templateUrl: 'pages/mobilizations.html',
            controller: 'mobilizationsController'
        })
        .when('/supplyChain', {
            templateUrl: 'pages/supplyChain.html',
            controller: 'supplyChainController'
        });

});

myApp.controller('mainController', function($scope) {
    $scope.title = 'Kinetix International Logistics',
    $scope.motto = 'The Power of Moving Forward',
    $scope.message = "Kinetix International is an experienced project logistics and global mobility company with core competencies in the areas of Domestic & International Household Goods Moving, Cargo & Logistics Sourcing and Corporate Relocation Management.",
    $scope.services = { text: ['Route Studies and Consultation','Receiving, Inspection and Warehousing','Freight Forwarding','Last Mile Delivery']};
});

myApp.controller('projectLogisticsController', function($scope) {
    $scope.message = 'Kinetix International Logistics Project Cargo and Logistics division specializes in the design and implementation of freight forwarding, warehousing and supply chain management solutions for US government agencies and their contractors operating in developing countries.',
    $scope.services = {text: ['Route Studies and Consultation','Export Compliance','Receiving, Inspection, and Warehousing','Freight Forwarding','Reporting and Tracking System','Last Mile Delivery']};
});

myApp.controller('mobilizationsController', function($scope) {
    $scope.message = 'Kinetix International Logistics’ Household Goods Management Division specializes in the design and delivery of innovative transportation programs for Fortune 500 and emerging growth corporations, NGO’s and governmental agencies and third party relocation management companies worldwide.',
    $scope.services = {text: ['Policy Consultation','Global Origin and Destination Services','Household Goods Transport','Customs Reporting']};
});

myApp.controller('supplyChainController', function($scope) {
    $scope.message = 'Let our logistics team be your supply chain one-stop-shop; pre-planning, scheduling, managing carriers, equipment, warehousing, delivery notification, inventory tracking, 3rd party coordination, set-up, installation, tear-down, disposal, distribution, and single billing source – for all your cargo moving locally, long distance or internationally.',
    $scope.services = {text: ['Nationwide Inventory Management','International Commodities','LTL and FTL Shipments','Trade Show']};
});
