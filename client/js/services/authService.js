angular.module('app.services')
    .factory('AuthService', function ($firebaseAuth, FirebaseUrl, $q) {
        var ref = new Firebase(FirebaseUrl);
        return {
            login: function (username, password, remember) {
                var deferred = $q.defer();
                var user = {
                    email: username,
                    password: password,
                    remember: (remember) ? "default" : "none"
                };
                ref.authWithPassword(user, function (error, authData) {
                    if (error) {
                        deferred.reject(error)
                    } else {
                        deferred.resolve(authData)
                    }
                });

                return deferred.promise;
            },

            createAccount: function (username, password) {
                var deferred = $q.defer();

                ref.createUser({
                    email: username,
                    password: password
                }, function (error, userData) {
                    if (error) {
                        deferred.reject(error)
                    } else {
                        deferred.resolve(userData)
                    }
                });

                return deferred.promise;
            },
            isLoggedIn: function () {
                var authData = ref.getAuth();
                return (authData != null);
            },
            getUid: function () {
                var authData = ref.getAuth();
                return authData.uid;
            }
        }

    });
