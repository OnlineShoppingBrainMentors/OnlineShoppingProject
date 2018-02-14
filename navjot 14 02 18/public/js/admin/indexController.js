app.controller("indexController", ($scope, indexFactory, DATAURL, MENUURL,CHECKOTPURL) =>
 {
    var promiseData = indexFactory.callToserver(DATAURL);
    var promiseMenuData = indexFactory.callToserver(MENUURL);
    promiseData.then(function (res) {
        $scope.productdata = res.data;
        //console.log(productdata);
    }, function (err) {
        $scope.productdata = err;
    });
    promiseMenuData.then(function (res) {
        $scope.menudata = res.data;
    }, function (err) {
        $scope.menudata = err;
    });
    $scope.showModel=true;
    $scope.hideModel=()=>
    {
        $scope.showModel=!$scope.showModel;
        console.log($scope.showModel);
    }
    $scope.genOtp=()=>
    {
    
        indexFactory.genOtp(CHECKOTPURL,{number:$scope.number});
    };
    $scope.verifyOtp=()=>
    {
        if($scope.enteredOtp.length==5)
        {
            console.log("I am called");
            indexFactory.verifyOtp(CHECKOTPURL+"?verify=true",{otp:$scope.enteredOtp});
        }
                    
    };


});