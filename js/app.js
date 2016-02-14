(function() {
  var app = angular.module('bball', []);

  app.controller('StoreController', function(){
    this.products = balls;
  });

var balls =
[
  { name: 'Azurite',
    price: 110.50
  },
  {
  name: 'Bloodstone',
  price: 22.90
  },
  { name: 'Zircon',
  price: 1100
  },
];

})();
