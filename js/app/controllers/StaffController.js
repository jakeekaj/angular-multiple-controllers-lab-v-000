function StaffController() {
  this.name = "Steve"
  this.email = "email@steve"
  this.phone = "6789"
  var vm = this;

  this.changeName = function () {
    vm.name = 'Something else!'
  }
}

angular
  .module('app')
  .controller('StaffController',StaffController);
