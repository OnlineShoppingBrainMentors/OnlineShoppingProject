app.controller("adminDashboardController", function ($scope, revieworderfactory, REVIEWORDERURL) {
    var orderdata = revieworderfactory.serverCall(REVIEWORDERURL);
    console.log("*inside admin controller");
    // console.log(REVIEWORDERURL);
    orderdata.then(function (res) {
        $scope.orderdata = res.data;

        console.log("inside admin controller", res.data.orders);
    }, function (err) {
        $scope.admindashboarddata = err;
    })
});