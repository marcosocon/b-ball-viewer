(function() {
  var app = angular.module('bball', []);

  app.controller('StoreController', function(){
    this.products = balls;
  });

var balls =
[
  { name: 'Spalding',
    price: 50.50
  },
  {
  name: 'Molten',
  price: 40.90
  },
  { name: 'Spalding',
    price: 50.50
  },
  {
  name: 'Molten',
  price: 40.90
  },
  { name: 'Spalding',
    price: 50.50
  },
  {
  name: 'Molten',
  price: 40.90
  },
  { name: 'Spalding',
    price: 50.50
  },
  {
  name: 'Molten',
  price: 40.90
  },
  { name: 'Spalding',
    price: 50.50
  },
  {
  name: 'Molten',
  price: 40.90
  },
  { name: 'Nassau',
  price: 34.33
  },
];

})();
