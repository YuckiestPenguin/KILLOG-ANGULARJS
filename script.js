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
        $scope.services = {
            text: ['Project Logistics & Specialized Commodities', 'Household Goods & Mobilizations', 'Domestic & International Supply Chain Operations']
        };



});

// START OF PROJECT LOGISTICS
// This array contains all of the features in services provided.
var projectLogisticsFeatures = [{
    name: 'Route Studies and Consultation',
    description: 'Route studies are probably the most critical aspect of the logistics process but are rarely implemented by our competition. Kinetix International Logistics routinely deploys logistics managers to your project destination to accurately survey transportation infrastructures, host country regulations and the best local agents. It’s this thorough understanding of the logistics environment that allows our staff of experienced professionals to develop a transportation plan with cargo speed, safety and cost effectiveness in mind.'
}, {
    name: 'Rapid Quote Response',
    description: 'Kinetix International Logistics realizes that your time is valuable and should not be spent on delayed procurement cycles. It is our goal to insure that you receive an accurate and timely quote response from us within 24 hours of your request. You will be proactively notified should additional time be needed for larger or more complex quote requests.'
}, {
    name: 'Expediting Purchase Orders with Vendors'
}, {
    name: 'Export Compliance'
}, {
    name: 'Receiving, Inspection and Warehousing'
}, {
    name: 'Export Packing and Crating'
}, {
    name: 'Freight Forwarding'
}, {
    name: 'Reporting and Tracking'
}, {
    name: 'Vessels and Aircraft Chartering'
}, {
    name: 'Hazmat Transportation'
}, {
    name: 'FMS Transportation'
}, {
    name: 'Customs Clearance'
}, {
    name: 'Last Mile Delivery'
}, {
    name: 'Insurance'
}];


myApp.controller('projectLogisticsController', function($scope) {
    $scope.message = 'Kinetix International Logistics Project Cargo and Logistics division specializes in the design and implementation of freight forwarding, warehousing and supply chain management solutions for US government agencies and their contractors operating in developing countries.',
        $scope.services = {
            text: ['Route Studies and Consultation', 'Export Compliance', 'Receiving, Inspection, and Warehousing', 'Freight Forwarding', 'Reporting and Tracking System', 'Last Mile Delivery']
        },
        $scope.features = projectLogisticsFeatures,
                $scope.serviceIntroduction = 'As a non-asset based 3PL, Kinetix International Logistics provides a proficient and comprehensive set of integrated services that leverage our unique expertise and customer service and complement our customers fixed and contingency requirements.',
                $scope.introductions = {
                    text: ['Kinetix International Logistics’ Project Cargo and Logistics division specializes in the design and implementation of freight forwarding, warehousing and supply chain management solutions for US government agencies and their contractors operating in developing countries. Kinetix has an exceptional ability to manage complex logistics projects that incorporate global, single source accountability for expediting, warehousing, materials management, export compliance, freight management, customs clearance and last mile deliveries to primarily developing countries and austere environments.', 'Kinetix International Logistics has handled numerous FAR and ITAR-compliant freight forwarding and logistics contracts encompassing the supply chain management of multiple commodities and multiple vendors to locations as diverse as Afghanistan, Iraq, South Sudan, Haiti, Pakistan and many others. Our considerable travel and first-hand experience in developing countries gives us the ability to respond to volatile changes in political climates, host government regulations and seasonal conditions that impact logistical efficiency.', 'Our success with providing logistics solutions on both large and small scale projects is credited to our unique, integrated project management structure. Kinetix International Logistics combines financial strength, institutional knowledge, advanced IT support, proactive communication and a company culture of “thinking outside the box” to provide our clients with a level of service that is assumed to be unattainable by our competition and translates into significant cost and time savings for our clients.']
                };
});

// END OF PROJECT Logistics

// START OF MOBILIZATIONS

// This is for the Consultation & Financial Services features
var mobilizationsFeatures = [{
    name: 'Move Policy Review, Design & Construction'

}, {
    name: 'Custom Management Reporting'
}];
//
// // This is for the Domestic Services Portfolio features
var mobilizationsFeatures2 = [{
    name: 'Independent Agent/Van Line Selection'
}, {
    name: 'Pre-Move Surveys'
}, {
    name: 'Small Shipment Program'
}, {
    name: 'Storage Management'
}, {
    name: 'Risk Management & Claims Resolution'
}, {
    name: 'Internal Pre-Invoice Auditing'
}];

var mobilizationsFeatures3 = [{
    name: 'Independent Network of Agents'
}, {
    name: 'Expertise in Developing Countries'
}, {
    name: 'Pre-Move Surveys'
}, {
    name: 'Rapid Quote Response'
}, {
    name: 'Door-to-Door Services'
}, {
    name: 'Expert Export Wrapping'
}, {
    name: 'Licensed Ocean & Freight Forwarding'
}, {
    name: 'Customs Clearance'
}, {
    name: 'Permanent Storage Management'
}, {
    name: 'Risk Management & Claims Resolutions'
}, {
    name: 'Internal Pre-Invoice Auditing'
}];
myApp.controller('mobilizationsController', function($scope) {
    $scope.message = 'Kinetix International Logistics’ Household Goods Management Division specializes in the design and delivery of innovative transportation programs for Fortune 500 and emerging growth corporations, NGO’s and governmental agencies and third party relocation management companies worldwide.',
        $scope.services = {
            text: ['Policy Consultation', 'Global Origin and Destination Services', 'Household Goods Transport', 'Customs Reporting']
        },
        $scope.introductions = {text: [
          'Kinetix International Logistics’ Project Cargo and Logistics division specializes in the design and implementation of freight forwarding, warehousing and supply chain management solutions for US government agencies and their contractors operating in developing countries. Kinetix has an exceptional ability to manage complex logistics projects that incorporate global, single source accountability for expediting, warehousing, materials management, export compliance, freight management, customs clearance and last mile deliveries to primarily developing countries and austere environments.','Kinetix International Logistics has handled numerous FAR and ITAR-compliant freight forwarding and logistics contracts encompassing the supply chain management of multiple commodities and multiple vendors to locations as diverse as Afghanistan, Iraq, South Sudan, Haiti, Pakistan and many others. Our considerable travel and first-hand experience in developing countries gives us the ability to respond to volatile changes in political climates, host government regulations and seasonal conditions that impact logistical efficiency.','Our success with providing logistics solutions on both large and small scale projects is credited to our unique, integrated project management structure. Kinetix International Logistics combines financial strength, institutional knowledge, advanced IT support, proactive communication and a company culture of “thinking outside the box” to provide our clients with a level of service that is assumed to be unattainable by our competition and translates into significant cost and time savings for our clients.'
        ]},
        $scope.serviceIntroduction = 'Kinetix International Logistics provides household goods management programs that deliver services which are specific to a family’s individual needs. Our flexible domestic and international programs are driven by guidelines set forth by each client and supported by a team of the most seasoned industry specialists. We have partnered with a worldwide network of independent, pre-qualified agents to deliver exceptional service at reasonable cost. Providing single source accountability helps our clients evaluate their return on investment in Kinetix by utilizing the most current technology to provide customized management reporting.',
        $scope.features1 = mobilizationsFeatures,
        $scope.features2 = mobilizationsFeatures2,
        $scope.features3 = mobilizationsFeatures3;
});

// END OF MOBILIZATIONS

myApp.controller('supplyChainController', function($scope) {
    $scope.message = 'Let our logistics team be your supply chain one-stop-shop; pre-planning, scheduling, managing carriers, equipment, warehousing, delivery notification, inventory tracking, 3rd party coordination, set-up, installation, tear-down, disposal, distribution, and single billing source – for all your cargo moving locally, long distance or internationally.',
        $scope.services = {
            text: ['Nationwide Inventory Management', 'International Commodities', 'LTL and FTL Shipments', 'Trade Show']
        };
});
