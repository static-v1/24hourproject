// Define the `shopApp` module
var shopApp = angular.module('shopApp', ['Directives'])
    .run(function ($rootScope) {
        // we define the variables at rootscope level for easy replacement in future
        $rootScope.title = 'THREADED';
        $rootScope.assetDir = '/assets/'
    });
