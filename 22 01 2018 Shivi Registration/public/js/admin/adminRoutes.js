app.config(function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider.when("/register",{
        templateUrl:"../../views/admin/register.html",
        controller:"registerCtrl"
    }).when("/",{
        templateUrl:"../../views/home.html"
        
    })
    .otherwise({template:"Error Page , No Match Found"});
});