app.factory("adminfactory",function($http,$q){
    var object = {
        getPersonalDetails(URL){
            var defer = $q.defer();
            $http.post(URL).then(function(response){
                defer.resolve(response);
            },function(error){
                defer.reject(error);
            });
            return defer.promise;
        }
    };
    return object;
});