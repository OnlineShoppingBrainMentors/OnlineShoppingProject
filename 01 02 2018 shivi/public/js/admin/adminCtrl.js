app.controller("registerCtrl",function($scope,adminFactory,REGISTERURL){
    $scope.register=function(){
        var name = $scope.name;
        var email_id = $scope.email_id;
        var password = $scope.password;
        var phone_no = $scope.phone_no;
        var dob=$scope.dob;
        var photo=$scope.photo;
        var signature=$scope.signature;
        console.log(phone_no+""+dob+""+signature);
        const adminObj = {"name":name,"phone_no":phone_no,"email_id":email_id,"password":password,"dob":dob,"photo":photo,"signature":signature};
        console.log(adminObj);
        var promise = adminFactory.doAjaxCall(REGISTERURL,adminObj);
        promise.then(function(data){
            $scope.data = data;
           // $location.path("/demo");
        },function(error){
            $scope.err = "some server problem"+error;
        });
    }

    $scope.clear=function(){
        $scope.name="";
        $scope.email_id="";
         $scope.password="";
        $scope.phone_no="";
        $scope.dob="";
        $scope.photo="";
        $scope.signature="";
    }
});
app.controller("demoCtrl",function($scope,adminFactory,DEMOURL){

});