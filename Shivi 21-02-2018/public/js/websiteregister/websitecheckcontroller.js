app.controller("websitecheckcontroller",function($location,adminFactory,WEBSITECHECKURL,SERVERURL)
{
    function checkRegistered()
    {
        console.log("Inside checkRegistered method in websitecheckcontroller");
        const adminObj = {"checkregistered":"check"};
        let promise = adminFactory.doAjaxCall(WEBSITECHECKURL,adminObj);
        promise.then(function(data){
            console.log("websitecheckcontroller inside promise.then");
            console.log(data);
            console.log("Will call register page now with path "+data.data.redirectpath);
            // adminFactory.redirectToRegister("http://localhost:3000"+data.data.redirectpath);
            adminFactory.redirectToRegister(SERVERURL+data.data.redirectpath);
        },function(error){
            console.log("some server problem"+error);
        });
    }
    checkRegistered();
    
    // $scope.register=function(){
    //     // var name = $scope.name;
    //     // var email_id = $scope.email_id;
    //     // var password = $scope.password;
    //     // var phone_no = $scope.phone_no;
    //     // var dob=$scope.dob;
    //     // var photo=$scope.photo;
    //     // var signature=$scope.signature;
    //     // console.log(phone_no+""+dob+""+signature);
    //     // const adminObj = {"name":name,"phone_no":phone_no,"email_id":email_id,"password":password,"dob":dob,"photo":photo,"signature":signature};
    //     // console.log(adminObj);
        
    // }   
});