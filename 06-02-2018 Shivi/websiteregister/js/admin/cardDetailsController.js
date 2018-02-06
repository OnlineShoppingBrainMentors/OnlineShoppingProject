app.controller("cardDetailsController",function($scope,adminFactory,CARDDETAILSURL){
    $scope.next=function(){
        var cardno = $scope.cardno;
        var cardholdername = $scope.cardholdername;
        var cvv = $scope.cvv;
        var cardtype = $scope.cardtype;
        var expirydate=$scope.expirydate;
        var cardprovider=$scope.cardprovider;
        
        
       // console.log(" ");
        const finacialDetailsObj = {"accountno":accountno,"accounttype":accounttype,"holdername":holdername,"bankname":bankname,"branch":branch,"ifsc":ifsc};
        console.log(finacialDetailsObj);
        var promise = adminFactory.doAjaxCall(FINANCIALDETAILSURL,finacialDetailsObj);
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