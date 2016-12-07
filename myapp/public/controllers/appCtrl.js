app.controller('appCtrl', ['$scope', '$http', '$state', '$location', '$cookies', '$mdDialog', '$mdMedia', '$window', function ($scope, $http, $state, $location, $cookies, $mdDialog, $mdMedia, $window) {
    //$scope.accessToken = 'nHhtIVThV9BEl3EVynDU4N2FAowmVBwYATOwLVL5KDq82qXwk3hbOdSSZoiQsIEu';
    $scope.accessToken = '';
    $scope.username = '';
    $scope.$state = $state;
    $scope.loginFail = false;

    $scope.init = function () {
        // if ($cookies.get("username") === '' || $cookies.get("username") === undefined) {
        //     $location.path('/login');
        //     return;
        // } else {
        //     $scope.username = $cookies.get("username");
        //     $scope.accessToken = $cookies.get("accessToken");
        // }
    };

    $scope.isLogin = function () {
        return $scope.accessToken !== '';
    };

    $scope.login = function (user, pass) {
        // $http.post('http://business.agombi.co.il/api/businessUsers/login', { username: user, password: pass }).then(function (result) {
        //     $scope.accessToken = result.data.id;
        //     $cookies.put("accessToken", $scope.accessToken);
        //     $http.get('http://business.agombi.co.il/api/businessUsers/me?access_token=' + $scope.accessToken).then(function (resultMe) {
        //         $scope.username = resultMe.data.username;
        //         $cookies.put("username", $scope.username);
        //         $location.path('/grid');
        //         $scope.loginFail = false;
        //     }, function (err) {
        //         console.log(err);
        //         $scope.loginFail = true;
        //     });

        // }, function (err) {
        //     console.log(err);
        //     $scope.loginFail = true;
        // });
    };

}]);
