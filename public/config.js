(function(){
    angular
        .module("Shopify")
        .config(configuration);

    function configuration($routeProvider, $locationProvider, $httpProvider) {
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        $httpProvider.defaults.headers.put['Content-Type'] = 'application/json;charset=utf-8';

        $routeProvider
            .when("/", {
                templateUrl: "home/templates/main-page.view.client.html",
                controller: "MainController",
                controllerAs: "model"
            });

    }


})();