(function(){
var app = angular.module('store-products', [])

// Directives.


app.directive('productTitle', function(){
  return{
    restrict:'E',
    templateUrl: 'product-title.html'
  };
});
app.directive('productDescription', function(){
  return{
    restrict:'E',
    templateUrl: 'product-description.html'
  };
});
app.directive('productSpecs', function(){
  return{
    restrict:'E',
    templateUrl: 'product-specs.html'
  };
});
app.directive('productReview', function(){
  return{
    restrict:'E',
    templateUrl: 'product-review.html'
  };
});
app.directive('productPanels', function(){
  return{
    restrict:"E",
    templateUrl:"product-panels.html",
    controller:function(){
    this.tab = 1;
    this.selectTab = function(setTab){
      this.tab = setTab;
      };
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  },
    controllerAs: 'panel'
};
});

})();

