app.factory("adminDashboardFactory",($http,$q)=>{
    const object={
        serverCall(url){
            console.log("inside ajax call admin object is " );
          var defer=$q.defer();
          console.log("success************++++++++++++++++++");
           $http.get(url).then(function(response){  
               defer.resolve(response);
                console.log("success************");
           },function(err){
               defer.reject(err);
           });
           return defer.promise;
        }
      }
      return object;
    });