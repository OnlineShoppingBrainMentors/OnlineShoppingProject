myapp.controller('productController', function ($scope, myfactory, $localStorage) {
    $scope.str = ['f1', 'f2']
    $scope.productList = myfactory.productList;
    $scope.categories = $localStorage.categories;
    $scope.addSubcategories = function () {
        let category = $scope.selectedCategory;

        $scope.category = $scope.categories.filter((element) => element.category == category)[0];
        $scope.subCategories = $scope.categories.filter((element) => element.category == category)[0].subcategories;
        $scope.subCategoriesKey = $scope.subCategories.filter((element) => element.subcategory == $scope.selectedSubCategory)[0];
        console.log($scope.subCategories, category);
        console.log($scope.subCategoriesKey, $scope.selectedSubCategory);
    }

    $scope.add = function () {
        var id = $scope.id;
        var img = $scope.imgurl;
        var f1 = $scope.f1;
        var f2 = $scope.f2;
        var f3 = $scope.f3;
        var f4 = $scope.f4;
        var f5 = $scope.f5;
        var f6 = $scope.f6;
        var f7 = $scope.f7;
        var f8 = $scope.f8;
        var f9 = $scope.f9;
        var f10 = $scope.f10;
        var f11 = $scope.f11;
        var f12 = $scope.f12;
        var f13 = $scope.f13;
        var f14 = $scope.f14;
        var itemproduct = new item(id, img, f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, f13, f14);
        myfactory.add(itemproduct);

        $scope.id = '';
        $scope.imgurl = '';
        $scope.f1 = '';
        $scope.f2 = '';
        $scope.f3 = '';
        $scope.f4 = '';
        $scope.f5 = '';
        $scope.f6 = '';
        $scope.f7 = '';
        $scope.f8 = '';
        $scope.f9 = '';
        $scope.f10 = '';
        $scope.f11 = '';
        $scope.f12 = '';
        $scope.f13 = '';
        $scope.f14 = '';

        var productJSON = JSON.stringify($scope.productList);
        console.log(productJSON);

    };

    $scope.edit = function (id) {
        var index = getSelectedIndex(id);
        var product = $scope.productList[index];
        $scope.eid = product.id;
        $scope.eimgurl = product.img;
        $scope.ef1 = product.f1;
        $scope.ef2 = product.f2;
        $scope.ef3 = product.f3;
        $scope.ef4 = product.f4;
        $scope.ef5 = product.f5;
        $scope.ef6 = product.f6;
        $scope.ef7 = product.f7;
        $scope.ef8 = product.f8;
        $scope.ef9 = product.f9;
        $scope.ef10 = product.f10;
        $scope.ef11 = product.f11;
        $scope.ef12 = product.f12;
        $scope.ef13 = product.f13;
        $scope.ef14 = product.f14;
    };

    $scope.saveEdit = function () {
        var id = $scope.eid;
        var index = getSelectedIndex(id);
        $scope.productList[index].f1 = $scope.ef1;
        $scope.productList[index].f2 = $scope.ef2;
        $scope.productList[index].f3 = $scope.ef3;
        $scope.productList[index].f4 = $scope.ef4;
        $scope.productList[index].f5 = $scope.ef5;
        $scope.productList[index].f6 = $scope.ef6;
        $scope.productList[index].f7 = $scope.ef7;
        $scope.productList[index].f8 = $scope.ef8;
        $scope.productList[index].f9 = $scope.ef9;
        $scope.productList[index].f10 = $scope.ef10;
        $scope.productList[index].f11 = $scope.ef11;
        $scope.productList[index].f12 = $scope.ef12;
        $scope.productList[index].f13 = $scope.ef13;
        $scope.productList[index].f14 = $scope.ef14;
    };


    $scope.viewDetails = function (id) {
        var index = getSelectedIndex(id);
        var vproduct = $scope.productList[index];
        $scope.vid = vproduct.id;
        $scope.vimgurl = vproduct.img;
        $scope.vf1 = vproduct.f1;
        $scope.vf2 = vproduct.f2;
        $scope.vf3 = vproduct.f3;
        $scope.vf4 = vproduct.f4;
        $scope.vf5 = vproduct.f5;
        $scope.vf6 = vproduct.f6;
        $scope.vf7 = vproduct.f7;
        $scope.vf8 = vproduct.f8;
        $scope.vf9 = vproduct.f9;
        $scope.vf10 = vproduct.f10;
        $scope.vf11 = vproduct.f11;
        $scope.vf12 = vproduct.f12;
        $scope.vf13 = vproduct.f13;
        $scope.vf14 = vproduct.f14;
    };

    $scope.delete = function (id) {
        var index = getSelectedIndex(id);
        $scope.productList.splice(index, 1);
    };

    function getSelectedIndex(id) {
        for (var i = 0; i < $scope.productList.length; i++)
            if ($scope.productList[i].id == id)
                return i;
        return -1;

    };


});