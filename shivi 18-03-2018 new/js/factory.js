 myapp.factory("myfactory", function () {

     const productOperations = {
         productList: [],

         add(itemproduct) {
             this.productList.push(itemproduct);
         }
     };
     return productOperations;

 })