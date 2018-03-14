app.factory("admindetailsfactory", function ($http, $q) {
    var obj = {
        // doAjaxCall(URL) {
        //     console.log("inside ajax call admin object is ");
        //     // console.log(adminObj);
        //     var deferObject = $q.defer();
        //     $http.get(URL).then(function (data) {
        //         deferObject.resolve(data);
        //         console.log("success************");
        //     },
        //         function (error) {
        //             deferObject.reject(error);

        //         });

        //     return deferObject.promise
        // }
        doAjaxCall(URL, adminObj) {
            console.log("inside ajax call and will call .post method admin object is ");
            console.log(adminObj);
            var deferObject = $q.defer();
            $http.post(URL, adminObj).then(function (data) {
                deferObject.resolve(data);
            },
                function (error) {
                    deferObject.reject(error);

                });

            return deferObject.promise
        }

    };
    return obj;
})