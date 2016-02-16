(function() {


// Initializer.

var app = angular.module('bball', []);


// Controllers.


app.controller('StoreController', function(){
  this.products = balls;
});

app.controller('PanelController', function(){
  this.tab = 1;
  this.selectTab = function(setTab){
    this.tab = setTab;
  };
  this.isSelected = function(checkTab){
    return this.tab === checkTab;
  };
});

app.controller('ReviewController', function(){
  this.review = {};
  this.addReview = function(product){
    product.reviews.push(this.review);
    this.review = {};
  };
});


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

var balls =
[
  { name: 'Spalding',
    description: 'lorem inpdasn asdkmas kmasdnf najs lorem dsasmdk mkmsd aksm namsdasdmawm kamsdkawkadmasmdkawmk',
    specs: 'ball with 1.25 pull inches and great movement with grass and concret',
    reviews:[],
    price: 50.50
  },
  {
  name: 'Molten',
    description: 'lorem inpdasn asdkmas kmasdnf najs lorem dsasmdk mkmsd aksm namsdasdmawm kamsdkawkadmasmdkawmk',
    specs: 'ball with 1.25 pull inches and great movement with grass and concret',
    reviews:[],
  price: 40.90
  },
  { name: 'Spalding',
    description: 'lorem inpdasn asdkmas kmasdnf najs lorem dsasmdk mkmsd aksm namsdasdmawm kamsdkawkadmasmdkawmk',
    specs: 'ball with 1.25 pull inches and great movement with grass and concret',
    reviews:[],
    price: 50.50
  },
  {
  name: 'Molten',
    description: 'lorem inpdasn asdkmas kmasdnf najs lorem dsasmdk mkmsd aksm namsdasdmawm kamsdkawkadmasmdkawmk',
    specs: 'ball with 1.25 pull inches and great movement with grass and concret',
    reviews:[],
  price: 40.90
  },
  { name: 'Spalding',
    description: 'lorem inpdasn asdkmas kmasdnf najs lorem dsasmdk mkmsd aksm namsdasdmawm kamsdkawkadmasmdkawmk',
    specs: 'ball with 1.25 pull inches and great movement with grass and concret',
    reviews:[],
    price: 50.50
  },
  {
  name: 'Molten',
    description: 'lorem inpdasn asdkmas kmasdnf najs lorem dsasmdk mkmsd aksm namsdasdmawm kamsdkawkadmasmdkawmk',
    specs: 'ball with 1.25 pull inches and great movement with grass and concret',
    reviews:[],
  price: 40.90
  },
  { name: 'Spalding',
    description: 'lorem inpdasn asdkmas kmasdnf najs lorem dsasmdk mkmsd aksm namsdasdmawm kamsdkawkadmasmdkawmk',
    specs: 'ball with 1.25 pull inches and great movement with grass and concret',
    reviews:[],
    price: 50.50
  },
  {
  name: 'Molten',
    description: 'lorem inpdasn asdkmas kmasdnf najs lorem dsasmdk mkmsd aksm namsdasdmawm kamsdkawkadmasmdkawmk',
    specs: 'ball with 1.25 pull inches and great movement with grass and concret',
    reviews:[],
  price: 40.90
  },
  { name: 'Spalding',
    description: 'lorem inpdasn asdkmas kmasdnf najs lorem dsasmdk mkmsd aksm namsdasdmawm kamsdkawkadmasmdkawmk',
    specs: 'ball with 1.25 pull inches and great movement with grass and concret',
    reviews:[],
    price: 50.50
  },
  {
  name: 'Molten',
    description: 'lorem inpdasn asdkmas kmasdnf najs lorem dsasmdk mkmsd aksm namsdasdmawm kamsdkawkadmasmdkawmk',
    specs: 'ball with 1.25 pull inches and great movement with grass and concret',
    reviews:[],
  price: 40.90
  },
  { name: 'Nassau',
    description: 'lorem inpdasn asdkmas kmasdnf najs lorem dsasmdk mkmsd aksm namsdasdmawm kamsdkawkadmasmdkawmk',
    specs: 'ball with 1.25 pull inches and great movement with grass and concret',
    reviews:[],
  price: 34.33
  },
];

})();
