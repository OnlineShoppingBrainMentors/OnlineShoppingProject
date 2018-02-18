app.controller("financecontroller",function($scope,$location,adminFactory,FINANCIALDETAILSURL){
        $scope.next=function(){
            let accountno = $scope.accountno;
            let accounttype = $scope.accounttype;
            let holdername = $scope.holdername;
            let bankname = $scope.bankname;
            let branch=$scope.branch;
            let ifsc=$scope.ifsc;
            
           // console.log(" ");
            const finacialDetailsObj = {"accountno":accountno,"accounttype":accounttype,"holdername":holdername,"bankname":bankname,"branch":branch,"ifsc":ifsc};
            console.log(finacialDetailsObj);
            var promise = adminFactory.doAjaxCall(FINANCIALDETAILSURL,finacialDetailsObj);
            promise.then(function(data){
                $scope.data = data;
                $location.path("/cardDetails");
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

});
