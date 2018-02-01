app.config(function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider.when("/register",{
        templateUrl:"../../views/admin/register.html",
        controller:"registerCtrl"
    }).when("/demo",{
        templateUrl:"../../views/admin/demo.html",
        controller:"demoCtrl"
    }).when("/",{
        templateUrl:"../../views/home.html"
        
    })
    .otherwise({template:"Error Page , No Match Found"});
});