app.controller("registercontroller",function($scope,$location,adminFactory,REGISTERURL){
    $scope.register=function(){
        let name = $scope.name;
        let userid = $scope.userid;
        let registrationuserid=$scope.registrationuserid;
        let oldpassword=$scope.oldpassword;
        let password = $scope.password;
        let phoneno = $scope.phoneno;
        let dob=$scope.dob;

        console.log(phoneno+""+dob);
        const adminObj = {"name":name,"userid":userid,"registrationuserid":registrationuserid,"oldpassword":oldpassword,"password":password,"phoneno":phoneno,"dob":dob};
        console.log(adminObj);
        let promise = adminFactory.doAjaxCall(REGISTERURL,adminObj);
        promise.then(function(data){
            console.log(data);
            //$scope.data=data;
            $location.path("/companydetails");
        },function(error){
            $scope.err = "some server problem"+error;
        });
    }

    $scope.validate=(formName)=>{
        if(formName.$valid){
            console.log("Form is valid");
            $scope.result = "Form is Valid...";
            $scope.register();
        } 
        else{
            console.log("Form is invalid");
            $scope.result = "Invalid Form ";
            $scope.register();
        }      
    }


});