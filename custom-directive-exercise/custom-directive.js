var customDirective = angular.module('customDirective', []);

customDirective
  .controller('CustomDirectiveController', function($scope) {
    // Custom Directive Exercise
    $scope.bitcoin = {
      fullName: 'Bitcoin',
      internal: 'BTC',
      maxSupply: 20999999.9769
    }

    $scope.etherium = {
      fullName: 'Etherium',
      internal: 'ETH',
      maxSupply: -1
    }

    $scope.ripple = {
      fullName: 'Ripple',
      internal: 'XRP',
      maxSupply: 100000000000
    }
  });