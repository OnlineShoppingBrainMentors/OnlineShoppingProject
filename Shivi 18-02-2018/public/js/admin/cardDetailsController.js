app.controller("cardDetailsController",function($scope,$location,adminFactory,CARDDETAILSURL){
    $scope.next=function(){
        let cardno = $scope.cardno;
        let cardholdername = $scope.cardholdername;
        let cvv = $scope.cvv;
        let cardtype = $scope.cardtype;
        let expirydate=$scope.expirydate;
        let cardprovider=$scope.cardprovider;
        let bank=$scope.bank;
        let branch=$scope.branch;
        
        const cardDetailsObject = {"cardno":cardno,"cardholdername":cardholdername,"cvv":cvv,"cardtype":cardtype,"expirydate":expirydate,"bank":bank,"branch":branch};
        console.log(cardDetailsObject);
        var promise = adminFactory.doAjaxCall(CARDDETAILSURL,cardDetailsObject);
        promise.then(function(data){
            $scope.data = data;
            $location.path("/imageupload");
        },function(error){
            $scope.err = "some server problem"+error;
    
});
}

    $scope.cardtype=[{type:"Credit Card"},{
        type:"Debit Card"
    }];


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