app.controller("registerCtrl",function($scope,adminFactory,REGISTERURL){
    $scope.register=function(){
        var name = $scope.name;
        var email_id = $scope.email_id;
        var password = $scope.password;
        var contact_no = $scope.contact_no;
        const adminObj = {"name":name,"contact_no":contact_no,"email_id":email_id,"password":password};
        var promise = adminFactory.doAjaxCall(REGISTERURL,adminObj);
        promise.then(function(data){
            $scope.data = data;
        },function(error){
            $scope.err = error;
        });
    }

    $scope.clear=function(){
        $scope.name="";
        $scope.userid="";
         $scope.password="";
        $scope.contact_no="";
    }
});