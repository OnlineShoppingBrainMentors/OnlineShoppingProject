app.controller("personaldetailscontroller", function ($scope, admindetailsfactory, ADMINDETAILSURL) {
    let personaldetailsobject = $scope.object;
    var promise = admindetailsfactory.doAjaxCall(ADMINDETAILSURL, personaldetailsobject);

    // $scope.personaldetails = {};

    console.log("*inside admin controller");
    //console.log(ADMINDETAILSURL);
    promise.then(function (res) {
        $scope.admindata = res.data;
        console.log("Res is ", res);
        console.log("*********************inside admin controller", res.data.adminDetails[0]);
        let abcd = res.data.adminDetails[0];
        $scope.personaldetails = { abcd };
        //$scope.name = res.data.name;

    }, function (err) {
        $scope.admindata = err;
    });


    $scope.update = function () {
        // const details = {};
        //let name1 = $scope.name;
        // details.name = name;
        console.log($scope.personaldetails);
    }
});
