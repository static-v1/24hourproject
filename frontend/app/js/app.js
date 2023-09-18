// Define the `shopApp` module
var shopApp = angular.module('shopApp', ['Directives'])
    .run(function ($rootScope) {
        // we define the variables at rootscope level for easy replacement in future
        $rootScope.title = 'THREADED';
        $rootScope.assetsDir = '/assets/';
        $rootScope.viewsDir = '/app/views/';
        $rootScope.imgAssetsDir = $rootScope.assetsDir + 'img/';
    })

    // .controller('BenefitsBarController', ['$scope', '$rootScope', function($scope, $rootScope) {
    //     $scope.bbAssetsDir = $rootScope.assetsDir + 'img/benefits-bar/';
    // }])
;
