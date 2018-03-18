myapp.config(function ($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix(''), // to configure how the application deep linking paths are stored.
        $routeProvider.when("/products", {
            templateUrl: 'views/products.html',
            controller: 'productController'
        }).when("/categories", {
            templateUrl: 'views/categories.html',
            controller: 'categoryController'
        }).otherwise({
            template: 'Something went wrong !!'
        })
});