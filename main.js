
(function() {
  angular.module('myStarWarsApp', [])  
    .controller('jediController', jediCtrl) //['$scope', function($scope){}]
    
    //pokeCtrl.$inject = ['$scope'] // for $scope injection on John Papa style Angular
    jediCtrl.$inject = ['$http']  // ['$scope,'$http']
    
    function jediCtrl ($http) { //($scope, $http)
        var jCtrl = this
        
        jCtrl.text = 'JediApp'
        
        // jCtrl.searchJedi = function() {
            
            $http.get('https://swapi.co/api/planets/1/')
                .then(function(response){
 
                    jCtrl.tatooine = response.data
                    
                   // jCtrl.jedi = response.data.results
                    // console.log(response.data.results)
                    
                    console.log(jCtrl.tatooine)

                })   
                
             $http.get('https://swapi.co/api/planets/2/')
                .then(function(response){
 
                    jCtrl.alderaan = response.data
                    
                   // jCtrl.jedi = response.data.results
                    // console.log(response.data.results)
                    
                    console.log(jCtrl.alderaan)

                })   
                
            $http.get('https://swapi.co/api/planets/8/')
                .then(function(response){
 
                    jCtrl.naboo = response.data
                    
                   // jCtrl.jedi = response.data.results
                    // console.log(response.data.results)
                    
                    console.log(jCtrl.naboo)

                })            
                
            jCtrl.tatooineShow = function() {
                //console.log('Showing Tatooine')
                var tatooineStr = ""
                tatooineStr = "\nName: " + jCtrl.tatooine.name +
                            "\nPopulation: " + jCtrl.tatooine.population +
                            "\nTerrain: " + jCtrl.tatooine.terrain +
                            "\nClimate: " + jCtrl.tatooine.climate +
                            "\nDiameter: " + jCtrl.tatooine.diameter +
                            "\nOrbital Period: " + jCtrl.tatooine.orbital_period
                            "\nRotation Period: " + jCtrl.tatooine.rotation_period
                            
                jCtrl.tatooineStr = tatooineStr
                
                jCtrl.planetStr = tatooineStr
                
                jCtrl.planetName = jCtrl.tatooine.name
                jCtrl.planetPop = jCtrl.tatooine.population
                jCtrl.planetTerrain = jCtrl.tatooine.terrain
                jCtrl.planetClimate  = jCtrl.tatooine.climate
                jCtrl.planetDiameter = jCtrl.tatooine.diameter
                jCtrl.planetOrbital = jCtrl.tatooine.orbital_period     
                jCtrl.planetGravity = jCtrl.tatooine.gravity              
                            
                console.log(jCtrl.tatooineStr)
            }
            
            jCtrl.alderaanShow = function() {
                //console.log('Showing Alderaan')
                var alderaanStr = ""
                alderaanStr = "\nName: " + jCtrl.alderaan.name +
                            "\nPopulation: " + jCtrl.alderaan.population +
                            "\nTerrain: " + jCtrl.alderaan.terrain +
                            "\nnClimate: " + jCtrl.alderaan.climate +
                            "\nDiameter: " + jCtrl.alderaan.diameter +
                            "\nPeriod: " + jCtrl.alderaan.orbital_period
                            "\nRotation Period: " + jCtrl.alderaan.rotation_period          
                
                jCtrl.alderaanStr = alderaanStr
                
                jCtrl.planetStr = alderaanStr
                
                jCtrl.planetName = jCtrl.alderaan.name
                jCtrl.planetPop = jCtrl.alderaan.population
                jCtrl.planetTerrain = jCtrl.alderaan.terrain
                jCtrl.planetClimate  = jCtrl.alderaan.climate
                jCtrl.planetDiameter = jCtrl.alderaan.diameter
                jCtrl.planetOrbital = jCtrl.alderaan.orbital_period  
                jCtrl.planetGravity = jCtrl.alderaan.gravity
                
                console.log(jCtrl.alderaanStr)    
                
            }
            
            jCtrl.nabooShow = function() {
               //console.log('Showing Naboo')
                var nabooStr = ""
                nabooStr = "\nName: " + jCtrl.naboo.name +
                            "\nPopulation: " + jCtrl.naboo.population +
                            "\nTerrain: " + jCtrl.naboo.terrain +
                            "\nClimate: " + jCtrl.naboo.climate +
                            "\nDiameter: " + jCtrl.naboo.diameter +
                            "\nOrbital Period: " + jCtrl.naboo.orbital_period
                            "\nRotation Period: " + jCtrl.naboo.rotation_period     
                    
                jCtrl.nabooStr = nabooStr
                
                jCtrl.planetStr = nabooStr
                
                 jCtrl.planetName = jCtrl.naboo.name
                jCtrl.planetPop = jCtrl.naboo.population
                jCtrl.planetTerrain = jCtrl.naboo.terrain
                jCtrl.planetClimate  = jCtrl.naboo.climate
                jCtrl.planetDiameter = jCtrl.naboo.diameter
                jCtrl.planetOrbital = jCtrl.naboo.orbital_period     
                jCtrl.planetGravity = jCtrl.naboo.gravity
                
                console.log(jCtrl.nabooStr) 
            }            
                
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



