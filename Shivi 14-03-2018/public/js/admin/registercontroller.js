app.controller("registercontroller", function ($scope, $location, adminFactory, REGISTERURL) {
    // $scope.register=function(){
    //     var name = $scope.name;
    //     var email_id = $scope.email_id;
    //     var password = $scope.password;
    //     var phone_no = $scope.phone_no;
    //     var dob=$scope.dob;
    //     var photo=$scope.photo;
    //     var signature=$scope.signature;
    //     console.log(phone_no+""+dob+""+signature);
    //     const adminObj = {"name":name,"phone_no":phone_no,"email_id":email_id,"password":password,"dob":dob,"photo":photo,"signature":signature};
    //     console.log(adminObj);
    //     var promise = adminFactory.doAjaxCall(REGISTERURL,adminObj);
    //     promise.then(function(data){
    //         // $scope.data = data;
    //         $location.path("/companydetails");
    //         console.log("Register controller inside promise.then");
    //         console.log(data);
    //     },function(error){
    //         $scope.err = "some server problem"+error;
    //     });
    // }

    $scope.register = function () {
        let name = $scope.name;
        let userid = $scope.userid;
        let registrationuserid = $scope.registrationuserid;
        let oldpassword = $scope.oldpassword;
        let password = "";
        if ($scope.password === $scope.repass)
            password = $scope.password;
        let phoneno = $scope.phoneno;
        let dob = $scope.dob;

        console.log(phoneno + "" + dob);
        const adminObj = { "name": name, "userid": userid, "registrationuserid": registrationuserid, "oldpassword": oldpassword, "password": password, "phoneno": phoneno, "dob": dob };
        console.log(adminObj);
        let promise = adminFactory.doAjaxCall(REGISTERURL, adminObj);
        promise.then(function (data) {
            console.log(data);
            //$scope.data=data;
            if (data.data.result == true)
                $location.path("/companydetails");
        }, function (error) {
            $scope.err = "some server problem" + error;
        });
    }


    // $scope.clear=function(){
    //     $scope.name="";
    //     $scope.email_id="";
    //      $scope.password="";
    //     $scope.phone_no="";
    //     $scope.dob="";
    //     $scope.photo="";
    //     $scope.signature="";
    // }
    $scope.validate = (formName) => {
        if (formName.$valid) {
            if ($scope.password === $scope.repass) {
                console.log("Form is valid");
                $scope.result = "Form is Valid...";
                $scope.register();
            }
        }
        else {
            console.log("Form is invalid");
            $scope.result = "Invalid Form ";
            //$scope.register();
        }
    }
});

