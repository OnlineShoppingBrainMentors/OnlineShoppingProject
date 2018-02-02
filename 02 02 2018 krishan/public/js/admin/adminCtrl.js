app.controller("registerCtrl",function($scope,adminFactory,REGISTERURL){
    $scope.register=function(){
        console.log("Inside register ctrl executing register function");
        // var object = new object() ;
        // object.name = $scope.name;
        // var email_id = $scope.email_id;


        // var name = $scope.name;
        // var email_id = $scope.email_id;
        // var password = $scope.password;
        // var phone_no = $scope.phone_no;
        // var dob=$scope.dob;
        // var photo=$scope.photo;
        // var signature=$scope.signature;
        let name = $scope.name;
        let userid = $scope.userid;
        let password = $scope.password;
        let phone_no = $scope.phone_no;
        let dob=$scope.dob;
        let signature=$scope.signature;
        let photo=$scope.photo;
        //console.log(phone_no+""+dob+""+signature);
        const adminObj = {"name":name,"phone_no":phone_no,"userid":userid,"password":password,"dob":dob,"photo":photo,"signature":signature};
        // console.log(adminObj);




        // object.email_id = $scope.userid;
        // object.password = $scope.password;
        // object.phone_no = $scope.phone_no;
        // object.dob=$scope.dob;
        // object.photo=$scope.photo;
        // object.signature=$scope.signature;
        //console.log(phone_no+"dfghj"+dob+""+signature);
        // const adminObj = {"name":name,"phone_no":phone_no,"email_id":email_id,"password":password,"dob":dob,"photo":photo,"signature":signature};
        // const adminObj = {name:object.name,phone_no:object.phone_no,email_id:object.email_id,password:object.password,dob:dob,photo:object.photo,signature:object.signature};
        console.log("adminObject emailid is : "+adminObj.userid);
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