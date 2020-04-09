(function () {
  'use strict';
  angular.module('ShoppingListApp', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
      var toBuy = this;

      toBuy.items = ShoppingListCheckOffService.getItemsToBuy();

      toBuy.remove = function (itemIndex) {
        ShoppingListCheckOffService.remove(itemIndex);
      };

      toBuy.message = function () {
  	return (toBuy.items == "");
      };
    }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;

    alreadyBought.items = ShoppingListCheckOffService.itemsAlreadyBought;

    alreadyBought.message = function () {
			return (alreadyBought.items == "");
		};

  };

  function ShoppingListCheckOffService() {
    var service = this;

    // List of shopping items
    service.itemsToBuy = [];
    service.itemsAlreadyBought = [];

    service.itemList = [
      {name:"cookies", quantity:"10"},
      {name:"soda", quantity:"10"},
      {name:"milk", quantity:"10"},
      {name:"bread", quantity:"10"},
      {name:"cookies", quantity:"10"}
    ];

    service.getItemsToBuy = function () {
      service.itemsToBuy = service.itemList;
      return service.itemsToBuy;
    };

    service.remove = function (itemIndex) {
			var x = service.itemsToBuy.splice(itemIndex, 1)[0];
			service.itemsAlreadyBought.push(x);
		};

    service.getItemsAlreadyBought = function () {
      return itemsAlreadyBought;
    };
  }

})();
