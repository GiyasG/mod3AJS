(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBayController', ToBayController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBayController.$inject = ['ShoppingListCheckOffService'];
function ToBayController(ShoppingListCheckOffService) {
  var itemToBay = this;

 itemToBay.items = ShoppingListCheckOffService.ShowToBuyItems();
 itemToBay.BayItem = function (itemIndex) { ShoppingListCheckOffService.BayItem(itemIndex);
 };
 itemToBay.checkBasket = ShoppingListCheckOffService.checkBasket();
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var itemBought = this;

  itemBought.boughtitems = ShoppingListCheckOffService.ShowBoughtItems();
  itemBought.checkBasket = ShoppingListCheckOffService.checkBasket();
}

function ShoppingListCheckOffService() {
var service = this;

var items = [
  {'name' : 'Cookies', 'quantity' : '10 bags'},
  {'name' : 'Chips', 'quantity' : '5 bags'},
  {'name' : 'Coke', 'quantity' : '7 bottles'},
  {'name' : 'Sweets', 'quantity' : '15 bags'},
  {'name' : 'Chocolate', 'quantity' : '20 bars'}
];

var boughtitems = [];

var checkBasket={
   showBay : function() {
     if (items.length == 0) {
     return "false"
    }
  },
   showBought : function() {
     if (boughtitems.length == 0) {
     return "true"
      }
   }
  };

console.log(checkBasket);

service.ShowToBuyItems = function () {
  return items;
}

service.BayItem = function (itemInd) {
  boughtitems.push(items[itemInd]);
  items.splice(itemInd, 1);
  return boughtitems;
}

service.ShowBoughtItems = function () {
  return boughtitems;
}

service.checkBasket = function () {
  return checkBasket
}

}
})();

//console.log(boughtitems);
