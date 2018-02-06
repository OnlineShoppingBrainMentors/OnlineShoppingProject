app.config(function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider.when("/register",{
        templateUrl:"../../views/admin/register.html",
        controller:"registercontroller"
    }).when("/demo",{
        templateUrl:"../../views/admin/demo.html",
        controller:"demoCtrl"
    }).when("/financialdetails",{
        templateUrl:"../../views/admin/financialdetails.html",
        controller:"financecontroller"
    }).when("/companydetails",{
        templateUrl:"../../views/admin/companydetails.html",
        controller:"companydetailscontroller"
    }).when("/",{
        templateUrl:"../../views/home.html"
        
    })
    .otherwise({template:"Error Page , No Match Found"});
});