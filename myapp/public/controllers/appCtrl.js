app.controller('appCtrl', ['$scope', '$http', '$state', '$location', '$cookies', '$mdDialog', '$mdMedia', '$window', function ($scope, $http, $state, $location, $cookies, $mdDialog, $mdMedia, $window) {
    //$scope.accessToken = 'nHhtIVThV9BEl3EVynDU4N2FAowmVBwYATOwLVL5KDq82qXwk3hbOdSSZoiQsIEu';
    $scope.accessToken = '';
    $scope.username = '';
    $scope.$state = $state;
    $scope.loginFail = false;

    $scope.arrayData = [
        { name: 'Shirel Kadosh', price: 50, views: 1000, date: '1/1/16' },
        { name: 'Ilya Radu', price: 40, views: 100, date: '1/2/16' },
        { name: 'Chiko Chiki', price: 100, views: 500, date: '2/2/16' },
        { name: 'Jingle Bell', price: 50, views: 1000, date: '1/1/16' },
        { name: 'David Cohen', price: 500, views: 800, date: '11/12/16' }
    ];
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
