app.config(function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider.when("/personaldetails",{
        templateUrl:"views/admin/personaldetails.html",
        controller:"personaldetailsctrl"
    }).when("/",{
        templateUrl:"views/home.html"
        
    })
    .otherwise({template:"Error Page , No Match Found"});
});
