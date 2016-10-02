app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Kinetix International Logistics';
  $scope.motto = 'The Power of Moving Forward';
  $scope.services =[
    {
      name: 'Project Logistics',
      description: 'Kinetix International Logistics Project Cargo and Logistics division specializes in the design and implementation of freight forwarding, warehousing and supply chain management solutions for US government agencies and their contractors operating in developing countries.',

    },
    {
      name: 'Mobilizations',
      description: 'Kinetix International Logistics’ Household Goods Management Division specializes in the design and delivery of innovative transportation programs for Fortune 500 and emerging growth corporations, NGO’s and governmental agencies and third party relocation management companies worldwide.'
    },
    {
      name: 'Supply Chain',
      description: 'Let our logistics team be your supply chain one-stop-shop; pre-planning, scheduling, managing carriers, equipment, warehousing, delivery notification, inventory tracking, 3rd party coordination, set-up, installation, tear-down, disposal, distribution, and single billing source – for all your cargo moving locally, long distance or internationally.'
    }
  ];

}]);

app.controller('ProjectLogisticsController',['$scope', function($scope){
  $scope.message = 'This is the Project Logistics Controller!';
}]);
