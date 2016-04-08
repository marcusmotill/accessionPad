angular.module('app.services')
    .factory('AccessionService', function (FirebaseUrl, $firebaseArray, AuthService) {
        return {
            getAccessions: function () {
                return $firebaseArray(new Firebase(FirebaseUrl).child(AuthService.getUid()).child("accessions"));
            }
        }
    });