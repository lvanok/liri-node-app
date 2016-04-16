var keys = require('./keys.js')   // looks for a file 

var Twitter = require('twitter');  // --looks for npm psvkshr
 

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets);
  }
});


// var request = require('request');
// request('http://img.omdbapi.com/?apikey=[yourkey]&', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Show the HTML for the Google homepage.
//     var fs = require('fs'); //reads and writes files
//     fs.writeFile("index.html", body, function(err) {
//         if(err) {
//             return console.log(err);
//         }
//     });
//     }
// });


// var request = require('request');
// movie = process.argv[2];
// request("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&r=json", function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Show the HTML for the Google homepage.
//     }
// });
// my-tweets

// spotify-this-song

// movie-this

// do-what-it-says

// So if you succeed, running the following commands in your terminal will do the following things

// node liri.js my-tweets