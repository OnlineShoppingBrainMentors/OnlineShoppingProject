app.factory("adminFactory",function($http,$q){
    var obj ={
        doAjaxCall(URL,adminObj){
            console.log("Inside do Ajax Call method in admin factory with received object's emailid  : "+adminObj.userid);
            var deferObject=$q.defer();
            $http.post(URL,adminObj).then(function(data){
                deferObject.resolve(data);
            },
                function(error){
                    deferObject.reject(error);
                
            });

            return deferObject.promise
        }
    
    };
    return obj;
});