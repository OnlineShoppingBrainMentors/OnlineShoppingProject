app.controller("imageuploadcontroller",function($scope,adminFactory,IMAGEUPLOADURL){
    $scope.next=function(){
        console.log("Inside imageupload controller");
        let carouselimage = $scope.carouselimage;

       // console.log(" ");
        const imageuploadobject = {"carouselimage":carouselimage};
        console.log(imageuploadobject);
        var promise = adminFactory.doAjaxCall(IMAGEUPLOADURL,imageuploadobject);
        promise.then(function(data){
            //$scope.data = data;
           // $location.path("/cardDetails");
        },function(error){
            //$scope.err = "some server problem"+error;
    
});
}

$scope.validate=function(formName){
if(formName.$valid){
    // $scope.result = "Form is Valid...";
    //let abcd = $scope.carouselimage;
   // console.log(abcd);
   // if(abcd!=undefined)
   // {
        $scope.next();
        console.log("Form is valid");
       // $scope.error="No image uploaded!!!!";
    } 
    else{
    // $scope.result = "Invaid Form ";
         console.log("Invalid Form");
    
   // $scope.next();
    }      
}
//}
});

