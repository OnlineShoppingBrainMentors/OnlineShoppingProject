app.config(function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('');
    // $routeProvider.when("register",{
        $routeProvider.when("/",{
        templateUrl:"../../views/admin/register.html",
        controller:"registercontroller"
    }).when("/companydetails",{
        templateUrl:"../../views/admin/companydetails.html",
        controller:"companydetailscontroller"
    }).when("/financialdetails",{
        templateUrl:"../../views/admin/financialdetails.html",
        controller:"financecontroller"
    }).when("/cardDetails",{
        templateUrl:"../../views/admin/cardDetails.html",
        controller:"cardDetailsController"
      }).when("/imageupload",{
            templateUrl:"../../views/admin/imageupload.html",
            controller:"imageuploadcontroller"
       })
     .otherwise({template:"Error Page , No Match Found"});
});