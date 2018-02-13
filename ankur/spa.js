app.config(function($routeProvider,$locationProvider){
	$locationProvider.hashPrefix('');
	$routeProvider.when("/",{
        templateUrl:"shop.html"
        
    })
	.when("/help",{
		templateUrl:"help.html"
    })
    .when("/contactus",{
		templateUrl:"contactus.html"
	})
	.otherwise({redirectTo:"/"});
	
})