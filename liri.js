var twitter = require('twitter')   // -- looks for npm psvkshr
var keys = require('./keys.js')   // looks for a file 

var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets);
  }
});



// my-tweets

// spotify-this-song

// movie-this

// do-what-it-says

// So if you succeed, running the following commands in your terminal will do the following things

// node liri.js my-tweets