app.controller("personaldetailsctrl",function($scope,adminfactory,PERSONALDETAILSURL){
    $scope.personaldetails=function(){
        var promise = adminfactory.getPersonalDetails(PERSONALDETAILSURL);
        promise.then(function(response){
            $scope.data = response;
        },function(error){
            $scope.err = error;
        });
    }
})

