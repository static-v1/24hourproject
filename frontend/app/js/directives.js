// define the directives our app will use here
var directives = angular.module('Directives', [])
    // directive for the main navbar
    .controller('NavController', ['$scope', '$rootScope', '$controller', function($scope, $rootScope, $controller) {
        $controller('cartController', {$scope: $scope}); //to make this controller a child of cartController
        // define the assets folder here for ease of change
        $scope.navAssetsDir = $scope.assetsDir + 'img/nav/';
        $scope.navCurrencyDir = $scope.navAssetsDir + 'currency/';
        // these items could be fetched from an api backend
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
        $scope.hcAssetsDir = $scope.assetsDir + 'img/hero-carousel/';
    }])
    .directive('heroCarousel', ['$rootScope', function($rootScope){
        return {
            restrict: 'E',
            transclude: true,
            controller: 'heroCarouselController',
            templateUrl: $rootScope.viewsDir + 'hero-carousel.html'
        };
    }])

    // directive for the trending section
    .controller('trendingController', ['$scope', function($scope) {
        $scope.trendingAssetsDir = $scope.assetsDir + 'img/trending/';
        $scope.trendingPrepared = [];
        // these items could be fetched from an api backend
        let trending = [
            {
                preview: $scope.trendingAssetsDir + 'winter-fashion.png',
                label: 'WINTER FASHION'
            },
            {
                preview: $scope.trendingAssetsDir + 'boots.png',
                label: 'BOOTS'
            },
            {
                preview: $scope.trendingAssetsDir + 'night-out.png',
                label: 'NIGHT OUT'
            },
            {
                preview: $scope.trendingAssetsDir + 'holidays.png',
                label: 'HOLIDAYS'
            },
            {
                preview: $scope.trendingAssetsDir + 'outerwear.png',
                label: 'OUTERWEAR'
            },
            {
                preview: $scope.trendingAssetsDir + 'white-dresses.png',
                label: 'WHITE DRESSES'
            },
            {
                preview: $scope.trendingAssetsDir + 'sweaters.png',
                label: 'SWEATERS'
            },
            {
                preview: $scope.trendingAssetsDir + 'party.png',
                label: 'PARTY'
            }
        ];

        // these can be manipulated but there is no spec as to multiple lines, so it wouldnt work properly for now
        $scope.hashtags = [
            '#Thanksgiving',
            '#NewYears',
            '#Knitted',
            '#Pajamas',
            '#WFH',
            '#FallFashion'
        ];

        // prepare the array for the traversal in DOM
        while (4 < trending.length) {
            $scope.trendingPrepared.push(trending.splice(0, 4));
        };
        
        $scope.trendingPrepared.push(trending); // take the remaining indices
    }])
    .directive('trending', ['$rootScope', function($rootScope){
        return {
            restrict: 'E',
            transclude: true,
            controller: 'trendingController',
            templateUrl: $rootScope.viewsDir + 'trending.html'
        };
    }])

    // directive for the cart/recently bought
    .controller('recentlyBoughtController', ['$scope', '$rootScope', '$controller', function($scope, $rootScope, $controller) {
        $controller('cartController', {$scope: $scope}); //to make this controller a child of cartController
        $scope.recentlyBoughtProducts = $rootScope.recentlyBought;
    }])
    .directive('recentlyBought', ['$rootScope', function($rootScope){
        return {
            restrict: 'E',
            scope: true,
            controller: 'recentlyBoughtController',
            templateUrl: $rootScope.viewsDir + 'recently-bought.html'
        };
    }])

    // insta section controller
    .controller('instaFeedController', ['$scope', '$rootScope', function($scope, $rootScope) {
        let path = $rootScope.imgAssetsDir + 'insta-feed/';

        // sample data set as instagram feed, 
        $scope.instaFeed = [
            { preview: path + 'insta-feed-1.png' },
            { preview: path + 'insta-feed-2.png' },
            { preview: path + 'insta-feed-3.png' },
            { preview: path + 'insta-feed-4.png' },
            { preview: path + 'insta-feed-5.png' },
        ]
    }])
    .directive('instaFeed', ['$rootScope', function($rootScope){
        return {
            restrict: 'E',
            transclude: true,
            controller: 'instaFeedController',
            templateUrl: $rootScope.viewsDir + 'insta-feed.html'
        };
    }])
;