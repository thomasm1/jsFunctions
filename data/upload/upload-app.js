var ua = angular.module("uploadApp", []);
ua.config(function($routeProvider) {
  $routeProvider.when("/items", ({templateUrl: "view-list.html", controller: "listController"})
  .when("/items/add", {templateUrl: "view-detail.html", controller: "addController"})
  .when("/items/:index",  {templateUrl: "view-detail.html", controller: "editController"})
  .otherwise({redirectTo: "/items"})
}); 

ua.controller {"mainController", ["$scope", function($scope) {
  {name: "one", genre: "b", rating: 4 ],
  {name: "two", genre: "a", rating: 3 ],
  {name: "three", genre: "d", rating: 3 ],
  {name: "four", genre: "c", rating: 2 ],
}]);

$http.get('data/n.json').success(function(data){
   $scope.n = data;
 });
