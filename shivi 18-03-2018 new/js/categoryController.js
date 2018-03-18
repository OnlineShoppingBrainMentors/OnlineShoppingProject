myapp.controller('categoryController', function ($scope, $http, $localStorage) {

    $scope.saveState = false;

    $scope.categories = [{
            "category": "Electronics",
            "desc": "This is electronics category",
            "fields": [{
                "field": "Name"
            }, {
                "field": "Rating"
            }],
            "subcategories": [{
                "subcategory": "Mobiles",
                "sets": [{
                    "field": "Memory"
                }, {
                    "field": "Screen"
                }]
            }, {
                "subcategory": "Television",
                "sets": []
            }, {
                "subcategory": "Remote",
                "sets": []
            }]
        },
        {
            "category": "Clothes",
            "desc": "This is Clothings category",
            "fields": [{
                "field": "price"
            }, {
                "field": "rating"
            }],
            "subcategories": [{
                    "subcategory": "Shirt",
                    "sets": []
                },
                {
                    "subcategory": "Jean",
                    "sets": []
                }
            ]
        }
    ];
    $localStorage.categories = $scope.categories;
    if ($localStorage.categories) {
        $scope.categories = $localStorage.categories;
    }

    $scope.activateSave = function () {
        $scope.saveState = true;
    };

    $scope.removeItem = function (index) {
        $scope.categories.splice(index, 1);
        $scope.activateSave();
    };

    $scope.removeSub = function (obj, index) {
        obj.subcategories.splice(index, 1);
        $scope.activateSave();
    };

    $scope.removeField = function (obj, index) {
        obj.fields.splice(index, 1);
        $scope.activateSave();
    }

    $scope.removeSet = function (obj, index) {
        obj.sets.splice(index, 1);
        $scope.activateSave();
    }

    $scope.saveScope = function () {
        // Ajax Call to save data
        alert('Saved!');
        $scope.saveState = false;
        $localStorage.categories = $scope.categories;
    }
});