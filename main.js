
(function() {
  angular.module('myStarWarsApp', [])  
    .controller('jediController', jediCtrl) //['$scope', function($scope){}]
    
    //pokeCtrl.$inject = ['$scope'] // for $scope injection on John Papa style Angular
    jediCtrl.$inject = ['$http']  // ['$scope,'$http']
    
    function jediCtrl ($http) { //($scope, $http)
        var jCtrl = this
        
        jCtrl.text = 'JediApp'
        
        // jCtrl.searchJedi = function() {
            
            $http.get('https://swapi.co/api/planets/1')
                .then(function(response){
 
                   // jCtrl.jedi = response.data.results
                    
                    // console.log(response.data.results)
                    
                    console.log(response)

                })   
                
            // $http.get('https://swapi.co/api/people/')
            //     .then(function(response){
 
            //         jCtrl.jedi = response.data.results
                    
            //         console.log(response.data.results)
                    
            //         // console.log(response)

            //     })            
        // }
        
    }
    
}());









// (function() {
//   angular.module('apiHackApp', [])
//         .controller('apiController', apiCtrl) //['$scope', function($scope){}]
    
//     //pokeCtrl.$inject = ['$scope'] // for $scope injection on John Papa style Angular
    
//     apiCtrl.$inject = ['$http']  // ['$scope,'$http']
    
//     var Spotify = require('spotify-web-api-js');
//     var s = new Spotify();
//     //s.searchTracks()...   
//     var spotifyApi = new SpotifyWebApi();
//     spotifyApi.setAccessToken('6cb34aecc504466b9f10627274343ec2');
    
//     function apiCtrl($http) {
//         var aCtrl = this
        
//         aCtrl.text = 'api Text'
//     }
    
//     // function pokeCtrl ($http) { //($scope, $http)
//     //     var jCtrl = this
        
//     //     jCtrl.text = 'PokeApp'
        
//     //     jCtrl.searchPokemon = function() {
//     //         $http.get('https://pokeapi.co/api/v2/pokemon/' + jCtrl.pokeName)
//     //             .then(function(response){
//     //                 jCtrl.pokemon = response.data
//     //                 jCtrl.pokedex = response.data.pokemon_entries
                    
//     //                 console.log(jCtrl.pokedex)
                    
//     //                 console.log("Response from pokeAPI: ", response)
//     //                 console.log("Bulbasaur Ability 1: ", response.data.abilities[0].ability.name)
//     //                 console.log("Bulbasaur Ability 2: ", response.data.abilities[1].ability.name)           
                    
//     //                 for (var i = 0; i < response.data.moves.length; i++) {
//     //                     console.log("move " + i + ": " + response.data.moves[i].move.name)
//     //                     jCtrl.text = "move " + i + ": " + response.data.moves[i].move.name
//     //                 }
//     //             })            
//     //     }
        
//     //     // LOOK INTO PROMISES -- USEFUL
//     // }
    
// }());



