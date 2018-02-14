app.factory("indexFactory",($http,$q)=>{
    const object=
    {
        callToserver(url)
        {
          var defer=$q.defer();
           $http.get(url).then(function(response){  
               defer.resolve(response);
            //    console.log("success",response);
           },function(err){
               defer.reject(err);
           });
           return defer.promise;
        },
        genOtp(url,obj)
        {

          var promise= this.doAjaxCall(url,obj);
           // console.log(promise.resolve);
        },
        verifyOtp(url,obj)
        {

          this.doAjaxCall(url,obj);
            
        },
        doAjaxCall(url,obj)
        {
             var deferObject=$q.defer();
            $http.post(url,obj).then(function(data)
            {
                deferObject.resolve(data);
            },
                function(error){
                    deferObject.reject(error);
                
            });

            return deferObject.promise;
        }     
    }
    return object;
});
    
           
       