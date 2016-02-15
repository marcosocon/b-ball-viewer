(function() {
  var app = angular.module('bball', []);

  app.controller('StoreController', function(){
    this.products = balls;
  });

var balls =
[
  { name: 'Spalding',
    description: 'lorem inpdasn asdkmas kmasdnf najs lorem dsasmdk mkmsd aksm namsdasdmawm kamsdkawkadmasmdkawmk',
    specs: 'ball with 1.25 pull inches and great movement with grass and concret',
    reviews: 'None yet!',
    price: 50.50
  },
  {
  name: 'Molten',
    description: 'lorem inpdasn asdkmas kmasdnf najs lorem dsasmdk mkmsd aksm namsdasdmawm kamsdkawkadmasmdkawmk',
    specs: 'ball with 1.25 pull inches and great movement with grass and concret',
    reviews: 'None yet!',
  price: 40.90
  },
  { name: 'Spalding',
    description: 'lorem inpdasn asdkmas kmasdnf najs lorem dsasmdk mkmsd aksm namsdasdmawm kamsdkawkadmasmdkawmk',
    specs: 'ball with 1.25 pull inches and great movement with grass and concret',
    reviews: 'None yet!',
    price: 50.50
  },
  {
  name: 'Molten',
    description: 'lorem inpdasn asdkmas kmasdnf najs lorem dsasmdk mkmsd aksm namsdasdmawm kamsdkawkadmasmdkawmk',
    specs: 'ball with 1.25 pull inches and great movement with grass and concret',
    reviews: 'None yet!',
  price: 40.90
  },
  { name: 'Spalding',
    description: 'lorem inpdasn asdkmas kmasdnf najs lorem dsasmdk mkmsd aksm namsdasdmawm kamsdkawkadmasmdkawmk',
    specs: 'ball with 1.25 pull inches and great movement with grass and concret',
    reviews: 'None yet!',
    price: 50.50
  },
  {
  name: 'Molten',
    description: 'lorem inpdasn asdkmas kmasdnf najs lorem dsasmdk mkmsd aksm namsdasdmawm kamsdkawkadmasmdkawmk',
    specs: 'ball with 1.25 pull inches and great movement with grass and concret',
    reviews: 'None yet!',
  price: 40.90
  },
  { name: 'Spalding',
    description: 'lorem inpdasn asdkmas kmasdnf najs lorem dsasmdk mkmsd aksm namsdasdmawm kamsdkawkadmasmdkawmk',
    specs: 'ball with 1.25 pull inches and great movement with grass and concret',
    reviews: 'None yet!',
    price: 50.50
  },
  {
  name: 'Molten',
    description: 'lorem inpdasn asdkmas kmasdnf najs lorem dsasmdk mkmsd aksm namsdasdmawm kamsdkawkadmasmdkawmk',
    specs: 'ball with 1.25 pull inches and great movement with grass and concret',
    reviews: 'None yet!',
  price: 40.90
  },
  { name: 'Spalding',
    description: 'lorem inpdasn asdkmas kmasdnf najs lorem dsasmdk mkmsd aksm namsdasdmawm kamsdkawkadmasmdkawmk',
    specs: 'ball with 1.25 pull inches and great movement with grass and concret',
    reviews: 'None yet!',
    price: 50.50
  },
  {
  name: 'Molten',
    description: 'lorem inpdasn asdkmas kmasdnf najs lorem dsasmdk mkmsd aksm namsdasdmawm kamsdkawkadmasmdkawmk',
    specs: 'ball with 1.25 pull inches and great movement with grass and concret',
    reviews: 'None yet!',
  price: 40.90
  },
  { name: 'Nassau',
    description: 'lorem inpdasn asdkmas kmasdnf najs lorem dsasmdk mkmsd aksm namsdasdmawm kamsdkawkadmasmdkawmk',
    specs: 'ball with 1.25 pull inches and great movement with grass and concret',
    reviews: 'None yet!',
  price: 34.33
  },
];

app.controller('PanelController', function(){
    this.tab = 1;
    this.selectTab = function(setTab){
      this.tab = setTab;
    };
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });

})();
