// define the directives our app will use here
var directives = angular.module('Directives', [])
    // directive for the main navbar
    .controller('NavController', ['$scope', function($scope) {
        // define the assets folder here for ease of change
        $scope.navAssetsDir = $scope.assetsDir + 'img/nav/';
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
    .directive('mainNav', ['$rootScope', function($rootScope){
        return {
            restrict: 'E',
            transclude: true,
            controller: 'NavController',
            templateUrl: $rootScope.viewsDir + 'navbar.html'
        };
    }])

    // directive for the hero carousel
    .controller('heroCarouselController', ['$scope', function($scope) {
    }])
    .directive('heroCarousel', ['$rootScope', function($rootScope){
        return {
            restrict: 'E',
            transclude: true,
            controller: 'heroCarouselController',
            templateUrl: $rootScope.viewsDir + 'hero-carousel.html'
        };
    }])
;