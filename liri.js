// looks for keys file and makes connection
var keys = require('./keys.js') 
var request = require('request');
var fs = require('fs');
// var colors = require('colors');
// var prompt = require('prompt');

// --looks for npm 
var twitter = require('twitter');
var spotify = require('spotify'); 
// Takes in all of the command line arguments
var inputString = process.argv;
// Parses the command line argument to capture the data
var selection = inputString[2];
var argumentOne = process.argv[3];

// Based on the selections we run the appropriate if statement
if (selection == "myTweets"){
	myTweets();
} else if (selection == "spotify-this-song"){
	mySpotify(argumentOne);
} else if (selection == "movie-this"){
	omdb(argumentOne);
} else if (selection == "do-what-it-says"){
	doWhatItSays();
}

//myTweets

var getMyTweets = function(){
	 
	var client = new Twitter(apiKeys.twitterKeys);
	 
	var params = {screen_name: 'lvanok'};
	client.get('statuses/user_timeline', params, function(error, tweets, response){
	  if (!error) {
	    //console.log(tweets);
	  	//debugger; //used to find out what's inside tweets in the iron-node console
	  	for(var i=0; i < tweets.length; i++){
	  		console.log(tweets[i].created_at);
	  		console.log('');
	  		console.log(tweets[i].text);
	  	}
	  }
	});	
}

var getArtistNames = function(artist){
	return artist.name;
}

var getMeSpotify = function(songName){

	if (songName === undefined){
		songName = 'What\'s my age again';
	}
	 
	spotify.search({ type: 'track', query: songName }, function(err, data) {
	    if ( err ) {
	        console.log('Error occurred: ' + err);
	        return;
	    }
	 	//debugger; //used to find out what's inside data in the iron-node console

	    var songs = data.tracks.items;

	    for(var i = 0; i < songs.length; i++){
	    	console.log(i);
	    	console.log('artist(s): ' + songs[i].artists.map(getArtistNames));
	    	console.log('song name: ' + songs[i].name);
	    	console.log('preview song: ' + songs[i].preview_url);
	    	console.log('album: ' + songs[i].album.name);
	    	console.log('-----------------------------------');
	    }
	});
}

