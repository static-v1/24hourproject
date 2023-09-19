// Define the `shopApp` module
var shopApp = angular.module('shopApp', ['Directives'])
    .run(function ($rootScope) {
        // we define the variables at rootscope level for easy replacement in future
        $rootScope.title = 'THREADED';
        $rootScope.assetsDir = '/assets/';
        $rootScope.viewsDir = '/app/views/';
        $rootScope.imgAssetsDir = $rootScope.assetsDir + 'img/';
        $rootScope.productAssetsDir = $rootScope.imgAssetsDir + 'products/';
        $rootScope.isCartEmpty = true;
        $rootScope.isCartOpen = false;
        $rootScope.cart = {};
        $rootScope.recentlyBought = {};

        // sample recently bought products, could be pulled from api
        $rootScope.recentlyBought['1001'] = {
            id: '1001',
            preview: $rootScope.productAssetsDir + '1001-preview.png',
            name: 'Festive Looks Rust Red Ribbed Velvet Long Sleeve Bodysuit',
            price: 38,
            salePrice: -1
        };
        $rootScope.recentlyBought['1002'] = {
            id: '1002',
            preview: $rootScope.productAssetsDir + '1002-preview.png',
            name: 'Chevron Flap Crossbody Bag',
            price: 7.34,
            salePrice: 5.77
        };
        $rootScope.recentlyBought['1003'] = {
            id: '1003',
            preview: $rootScope.productAssetsDir + '1003-preview.png',
            name: 'Manila Tan Multi Plaid Oversized Fringe Scarf',
            price: 39,
            salePrice: 29
        };
        $rootScope.recentlyBought['1004'] = {
            id: '1004',
            preview: $rootScope.productAssetsDir + '1004-preview.png',
            name: 'Diamante Puff Sleeve Dress - Black',
            price: 45.99,
            salePrice: -1
        };
        $rootScope.recentlyBought['1005'] = {
            id: '1005',
            preview: $rootScope.productAssetsDir + '1005-preview.png',
            name: 'Banneth Open Front Formal Dress In Black',
            price: 99.95,
            salePrice: 69
        };
    })

    // directive for the cart controller
    .controller('cartController', ['$scope', '$rootScope', function ($scope, $rootScope) {

        // this function adds the product to the cart array
        $scope.addProductToCart = function (productId) {
            $rootScope.isCartEmpty = false;

            // checks if item already in the cart
            if ('undefined' === typeof $rootScope.cart[$rootScope.recentlyBought[productId].id]) {
                $rootScope.cart[$rootScope.recentlyBought[productId].id] = $rootScope.recentlyBought[productId]; // copies over the item that was intended to be bought
                $rootScope.cart[$rootScope.recentlyBought[productId].id]['qty'] = 1;
            } else {
                $rootScope.cart[$rootScope.recentlyBought[productId].id]['qty'] += 1;
            }
        };

        // this function removes an item from the cart
        $scope.removeProductFromCart = function (productId) {
            if (!('undefined' === typeof $rootScope.cart[$rootScope.recentlyBought[productId].id])) { //check if item exists
                $rootScope.cart[$rootScope.recentlyBought[productId].id]['qty'] -= 1;
                if (0 == $rootScope.cart[$rootScope.recentlyBought[productId].id]['qty']) { //check if last qty of the item
                    $rootScope.cart = $scope.removeKey($rootScope.cart, productId);

                    if (Object.keys($rootScope.cart).length === 0 && $rootScope.cart.constructor === Object) { //check if the object is empty
                        $rootScope.isCartEmpty = true;
                    }
                }
            }
        }

        // utility to remove an object from the object array
        $scope.removeKey = function(arrayName, key) {
            let x;
            let tmpArray = {};
            for (x in arrayName) {
                if (x != key) { tmpArray[String(x)] = arrayName[String(x)]; }
            }
            return tmpArray;
        }

        // toggle cart
        $scope.toggleCart = function () {
            if (!$rootScope.isCartEmpty) {
                $rootScope.isCartOpen = $rootScope.isCartOpen ? false : true;
            }
        };
    }])
    ;
