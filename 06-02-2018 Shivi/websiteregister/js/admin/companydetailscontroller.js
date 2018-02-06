app.controller("companydetailscontroller",function($scope,adminFactory,COMPANYDETAILSURL){
    $scope.next=function(){
        var companyname = $scope.companyname;
        var description = $scope.description;
        var tagline = $scope.tagline;
        var logo = $scope.logo;
        var line1=$scope.line1;
        var line2=$scope.line2;
        var city=$scope.city;
        var state=$scope.state;
        var country=$scope.country;
        var zipcode=$scope.zipcode;
        var maplink=$scope.maplink;
        var longitude=$scope.longitude;
        var latitude=$scope.latitude;
        var contacts=$scope.contacts;
        var officeno=$scope.officeno;
        var emailid=$scope.emailid;
        var fax=$scope.fax;
       // console.log(" ");
        const companyDetailsObj = {"companyname":companyname,"description":description,"tagline":tagline,"logo":logo,"line1":line1,"line2":line2,"city":city,
        "state":state,"country":country,"zipcode":zipcode,"maplink":maplink,"longitude":longitude,"latitude":latitude,"phoneno":contacts,"officeno":officeno,"emailid":emailid,"fax":fax};
        console.log(companyDetailsObj);
        var promise = adminFactory.doAjaxCall(COMPANYDETAILSURL,companyDetailsObj);
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

/*$scope.clear=function(){
    $scope.companyname="";
    $scope.description="";
     $scope.tagline="";
    $scope.logo="";
    $scope.line1="";
    $scope.line2="";
    $scope.city="";
    $scope.state="";
    $scope.country="";
     $scope.zipcode="";
    $scope.longitude="";
    $scope.latitude="";
    $scope.phoneno="";
    $scope.oficeno="";
    $scope.emailid="";
    $scope.fax="";
}*/

$scope.contacts = [{number:""}]
$scope.addContact = function() {
  $scope.contacts.push({number:""})
}
});
