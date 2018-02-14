app.controller("cardDetailsController",function($scope,adminFactory,CARDDETAILSURL){
    $scope.next=function(){
        var cardno = $scope.cardno;
        var cardholdername = $scope.cardholdername;
        var cvv = $scope.cvv;
        var cardtype = $scope.cardtype;
        var expirydate=$scope.expirydate;
        var cardprovider=$scope.cardprovider;
        var bank=$scope.bank;
        var branch=$scope.branch;
         
       // console.log(" ");
        const cardDetailsObject = {"cardno":cardno,"cardholdername":cardholdername,"cvv":cvv,"cardtype":cardtype,"expirydate":expirydate,"bank":bank,"branch":branch};
        console.log(cardDetailsObject);
        var promise = adminFactory.doAjaxCall(CARDDETAILSURL,cardDetailsObject);
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