//for get
app.factory("indexFactory",($http,$q)=>{
    const object={
        callToserver(url){
          var defer=$q.defer();
           $http.get(url).then(function(response){  
               defer.resolve(response);
            //    console.log("success",response);
           },function(err){
               defer.reject(err);
           });
           return defer.promise;
        }
    }
    return object;
});
//for post
app.factory("adminFactory",function($http,$q){
    var obj ={
        redirectToRegister(path)
        {
            console.log("inside redirectToRegister");
            window.location.href=path;
        },
        doAjaxCall(URL,adminObj){
            console.log("inside ajax call admin object is " );
            console.log(adminObj);
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