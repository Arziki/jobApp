angular.module('jobApp', ['ngAnimate', 'toastr'])
    .controller('candidateCtrl', function($scope, $http, toastr) {
        $scope.candidateInfo = {};


        $scope.submitForm = function(isValid) {

            $http.post('/candidate/', this.candidateInfo)
                .then(function(result) {
                    if (result.data) {
                        toastr.success('have fun!', 'your information is saved');
                        $scope.candidateInfo = {};
                    }
                }, function(err) {
                    if (err) {
                        console.log('yewa gas');
                    }
                });

        }
    });