app.controller("indexController", ($scope, indexFactory, DATAURL, MENUURL) => {
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
});