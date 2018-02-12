app.controller("companydetailscontroller",function($scope,$location,adminFactory,COMPANYDETAILSURL){
    $scope.next=function(){
        let companyname = $scope.companyname;
        let description = $scope.description;
        let tagline = $scope.tagline;
        let logo = $scope.logo;
        let line1=$scope.line1;
        let city=$scope.city;
        let state=$scope.state;
        let country=$scope.country;
        let zipcode=$scope.zipcode;
        let maplink=$scope.maplink;
        let longitude=$scope.longitude;
        let latitude=$scope.latitude;
        let contacts=$scope.contacts;
        let officeno=$scope.officeno;
        let emailid=$scope.emailid;
        let fax=$scope.fax;
       // console.log(" ");
        const companyDetailsObj = {"companyname":companyname,"description":description,"tagline":tagline,"logo":logo,"line1":line1,"city":city,
        "state":state,"country":country,"zipcode":zipcode,"maplink":maplink,"longitude":longitude,"latitude":latitude,"phoneno":contacts,"officeno":officeno,"emailid":emailid,"fax":fax};
        console.log(companyDetailsObj);
        var promise = adminFactory.doAjaxCall(COMPANYDETAILSURL,companyDetailsObj);
        promise.then(function(data){ 
            $scope.data = data;
            $location.path("/financialdetails");
        },function(error){
            
            $scope.err = "some server problem"+error;
            
          
});
}

$scope.validate=(formName)=>{
if(formName.$valid){
    $scope.result = "Form is Valid...";
   $scope.next();
} 
else{
    $scope.result = "Invaid Form ";
    $scope.next();
}      
}

$scope.contacts = [{number:""}]
$scope.addContact = function() {
  $scope.contacts.push({number:""});
  

}
});
