(function(){
    angular
        .module("Shopify")
        .controller("MainController", MainController);

    function MainController() {
        var vm = this;
        vm.checkemail = checkemail;

        function checkemail(email) {
            if (email == undefined) {
                vm.error = 'Please enter a valid email address';
                vm.message = undefined
            }
            else {
                vm.message = "You are now subscribed to LALALA SHOP Mailing List"
                vm.error = undefined
            }
        }

    }
})();