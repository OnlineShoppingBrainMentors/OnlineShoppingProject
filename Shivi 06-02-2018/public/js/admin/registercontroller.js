app.controller("registercontroller",function($scope,adminFactory,REGISTERURL){
    $scope.register=function(){
        var name = $scope.name;
        var emailid = $scope.emailid;
        var password = $scope.password;
        var phoneno = $scope.phoneno;
        var dob=$scope.dob;
        /*var photo=$scope.photo;
        var signature=$scope.signature;*/
        console.log(phoneno+""+dob+""+signature);
        const adminObj = {"name":name,"phoneno":phoneno,"emailid":emailid,"password":password,"dob":dob};
        console.log(adminObj);
        var promise = adminFactory.doAjaxCall(REGISTERURL,adminObj);
        promise.then(function(data){
            $scope.data = data;
        },function(error){
            $scope.err = "some server problem"+error;
        });
    }

    $scope.validate=(formName)=>{
        if(formName.$valid){
            $scope.result = "Form is Valid..."
        } 
        else{
            $scope.result = "Invaid Form ";
        }      
    }


});
