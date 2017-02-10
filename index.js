var netflixCategories = angular.module('netflixCategories', []);

netflixCategories.controller('SearchController', function SearchController($scope) {
  $scope.q = {};
  $scope.base_url = "http://www.netflix.com/browse/genre/";
  $scope.categories = CATEGORIES;

  $scope.url = function(id) {
    return $scope.base_url + id;
  };

  $scope.all = function(actual, expected) {
    var tokens = expected.toLowerCase().split(" ");
    var haystack = actual.toLowerCase();
    var match = true;

    tokens.forEach(function(token) {
      if (haystack.indexOf(token) < 0) match = false;
    });

    return match;
  };
});
