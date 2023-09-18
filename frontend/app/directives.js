// define the directives our app will use here
var directives = angular.module('Directives', [])
    .controller('NavController', ['$scope', function($scope) {
        // define the assets folder here for ease of change
        $scope.navAssetsDir = $scope.assetDir + 'img/nav/';
        $scope.navCurrencyDir = $scope.navAssetsDir + 'currency/';
        $scope.currency = [
            {
                flag: $scope.navCurrencyDir + 'us-flag.png',
                label: 'USD $',
                alt: 'USD'
            },
            {
                flag: $scope.navCurrencyDir + 'us-flag.png',
                label: 'PHP ₱',
                alt: 'PHP'
            },
        ];
        $scope.selectedCurrency = $scope.currency[0];
        $scope.updateSelectedCurrency = function(currency) {
            $scope.selectedCurrency = currency;
        }
    }])
    
    .directive('mainNav', function(){
        return {
            restrict: 'E',
            transclude: true,
            controller: 'NavController',
            templateUrl: '/app/views/navbar.html'
        };
    })
;