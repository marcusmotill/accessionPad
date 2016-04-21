angular.module('app.services')
    .factory('AccessionService', function (FirebaseUrl, $firebaseArray, AuthService) {
        return {
            getAccessions: function () {
                return $firebaseArray(new Firebase(FirebaseUrl).child(AuthService.getUid()).child("accessions"));
            },
            addAccession: function (result) {
                new Firebase(FirebaseUrl).child(AuthService.getUid()).child("accessions")
                    .push({
                        name: result.summary.Organism.ScientificName,
                        description: result.summary.Description,
                        id: result.id
                    });
            },
            getNotes: function (accessionID) {
                return $firebaseArray(new Firebase(FirebaseUrl)
                    .child(AuthService.getUid())
                    .child("accessions")
                    .child(accessionID)
                    .child("notes"));
            },

            addNote: function (accessionID, note) {
                new Firebase(FirebaseUrl)
                    .child(AuthService.getUid())
                    .child("accessions")
                    .child(accessionID)
                    .child("notes")
                    .push({title: note.title, message: note.message});
            }
        }
    });