function ContactController() {
  this.name = "Bill"
  this.email = "email@yahoo"
  this.phone = "1234"
  var vm = this;

  this.changeName = function () {
    vm.name = 'Something else!'
  }
}

angular
  .module('app')
  .controller('ContactController',ContactController);
