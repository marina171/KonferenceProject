konferenceApp.controller('RegistrationCtrl',[
    '$scope','$firebaseSimpleLogin',
    function($scope,$firebaseSimpleLogin) {


    }
]);

konferenceApp.controller('LoginCtrl',[
    '$scope','$firebaseSimpleLogin',
    function($scope,$firebaseSimpleLogin) {
        var firebaseObj = new Firebase("https://konference-46fd0.firebaseio.com");
        var loginObj = $firebaseSimpleLogin(firebaseObj);

        $scope.user = {};
        $scope.SignIn = function (e) {
            e.preventDefault();
            var username = $scope.user.email;
            var password = $scope.user.password;
            loginObj.$login('password', {
                    email: username,
                    password: password
                })
                .then(function (user) {
                    //Success callback
                    console.log('Authentication successful');
                }, function (error) {
                    //Failure callback
                    console.log('Authentication failure');
                });
        }
    }
]);

konferenceApp.controller('MainCtrl',[
    '$scope',
    function ($scope) {

    }
]);

konferenceApp.controller('PartnersCtrl',[
    '$scope',
    function ($scope) {

    }
]);

konferenceApp.controller('SpikersCtrl',[
    '$scope',
    function ($scope) {

    }
]);
konferenceApp.controller('ProfitCtrl',[
    '$scope',
    function ($scope) {

    }
]);


konferenceApp.controller('AbouCtrl',[
    '$scope',
    function ($scope) {

    }
]);

konferenceApp.controller('OrganizerCtrl',[
    '$scope',
    function ($scope) {

    }
]);
konferenceApp.controller('ReasonsCtrl',[
    '$scope',
    function ($scope) {

    }
]);
konferenceApp.controller('ParticipantsCtrl',[
    '$scope',
    function ($scope) {

    }
]);
konferenceApp.controller('ProgramCtrl',[
    '$scope',
    function ($scope) {

    }
]);