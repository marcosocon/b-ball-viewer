(function() {


// Initializer.

var app = angular.module('bball', ['store-products']);


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

var balls =
[
  { name: 'Spalding',
    description: 'lorem inpdasn asdkmas kmasdnf najs lorem dsasmdk mkmsd aksm namsdasdmawm kamsdkawkadmasmdkawmk',
    specs: 'ball with 1.25 pull inches and great movement with grass and concret',
    reviews:[],
    image: 'http://www.cityofparkland.org/ImageRepository/Document?documentID=9270',
    price: 50.50
  },
  {
  name: 'Molten',
    description: 'lorem inpdasn asdkmas kmasdnf najs lorem dsasmdk mkmsd aksm namsdasdmawm kamsdkawkadmasmdkawmk',
    specs: 'ball with 1.25 pull inches and great movement with grass and concret',
    reviews:[],
    image: 'http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/1UoAAMXQydtTNYPP/$_57.JPG',
    price: 40.90
  },
  { name: 'Spalding',
    description: 'lorem inpdasn asdkmas kmasdnf najs lorem dsasmdk mkmsd aksm namsdasdmawm kamsdkawkadmasmdkawmk',
    specs: 'ball with 1.25 pull inches and great movement with grass and concret',
    reviews:[],
    image: 'http://www.cityofparkland.org/ImageRepository/Document?documentID=9270',
    price: 50.50
  },
  {
  name: 'Molten',
    description: 'lorem inpdasn asdkmas kmasdnf najs lorem dsasmdk mkmsd aksm namsdasdmawm kamsdkawkadmasmdkawmk',
    specs: 'ball with 1.25 pull inches and great movement with grass and concret',
    reviews:[],
    image: 'http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/1UoAAMXQydtTNYPP/$_57.JPG',
  price: 40.90
  },
  { name: 'Spalding',
    description: 'lorem inpdasn asdkmas kmasdnf najs lorem dsasmdk mkmsd aksm namsdasdmawm kamsdkawkadmasmdkawmk',
    specs: 'ball with 1.25 pull inches and great movement with grass and concret',
    reviews:[],
    image: 'http://www.cityofparkland.org/ImageRepository/Document?documentID=9270',
    price: 50.50
  },
  {
  name: 'Molten',
    description: 'lorem inpdasn asdkmas kmasdnf najs lorem dsasmdk mkmsd aksm namsdasdmawm kamsdkawkadmasmdkawmk',
    specs: 'ball with 1.25 pull inches and great movement with grass and concret',
    reviews:[],
    image: 'http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/1UoAAMXQydtTNYPP/$_57.JPG',
  price: 40.90
  },
  { name: 'Spalding',
    description: 'lorem inpdasn asdkmas kmasdnf najs lorem dsasmdk mkmsd aksm namsdasdmawm kamsdkawkadmasmdkawmk',
    specs: 'ball with 1.25 pull inches and great movement with grass and concret',
    reviews:[],
    image: 'http://www.cityofparkland.org/ImageRepository/Document?documentID=9270',
    price: 50.50
  },
  {
  name: 'Molten',
    description: 'lorem inpdasn asdkmas kmasdnf najs lorem dsasmdk mkmsd aksm namsdasdmawm kamsdkawkadmasmdkawmk',
    specs: 'ball with 1.25 pull inches and great movement with grass and concret',
    reviews:[],
    image: 'http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/1UoAAMXQydtTNYPP/$_57.JPG',
  price: 40.90
  },
  { name: 'Spalding',
    description: 'lorem inpdasn asdkmas kmasdnf najs lorem dsasmdk mkmsd aksm namsdasdmawm kamsdkawkadmasmdkawmk',
    specs: 'ball with 1.25 pull inches and great movement with grass and concret',
    reviews:[],
    image: 'http://www.cityofparkland.org/ImageRepository/Document?documentID=9270',
    price: 50.50
  },
  {
  name: 'Molten',
    description: 'lorem inpdasn asdkmas kmasdnf najs lorem dsasmdk mkmsd aksm namsdasdmawm kamsdkawkadmasmdkawmk',
    specs: 'ball with 1.25 pull inches and great movement with grass and concret',
    reviews:[],
    image: 'http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/1UoAAMXQydtTNYPP/$_57.JPG',
  price: 40.90
  },
  { name: 'Nassau',
    description: 'lorem inpdasn asdkmas kmasdnf najs lorem dsasmdk mkmsd aksm namsdasdmawm kamsdkawkadmasmdkawmk',
    specs: 'ball with 1.25 pull inches and great movement with grass and concret',
    reviews:[],
    image: 'http://www.cityofparkland.org/ImageRepository/Document?documentID=9270',
  price: 34.33
  },
];

})();
