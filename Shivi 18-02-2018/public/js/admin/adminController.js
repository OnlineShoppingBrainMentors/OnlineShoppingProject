app.controller("adminDashboardController", function($scope, adminDashboardFactory,ADMINURL) {
    var admindata =adminDashboardFactory.serverCall(ADMINURL);
    console.log("************inside admin controller");
   // console.log(ADMINURL);
    admindata.then(function (res) {
        $scope.admindashboarddata = res.data.categories;

        console.log("inside admin controller************",res.data.categories);
    }, function (err) {
        $scope.admindashboarddata = err;
    })
});