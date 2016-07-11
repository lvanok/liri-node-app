# liri-node-app

### Introduction

* LIRI is like SIRI (from an iphone).

* SIRI is a Speech Interpretation and Recognition Interface

* LIRI is a Language Interpretation and Recognition Interface.

* LIRI will be a command line node app that takes in parameters and gives you back data.

### liri.js can take in one of the following arguments

* my-tweets

* spotify-this-song

* movie-this

* do-what-it-says

running the following commands in your terminal will do the following things

```
node liri.js my-tweets
```
* will show your last 20 tweets and when they were created at in the terminal

```
node liri.js spotify-this-song '<song name here>'
```

* shows the following information about the song in the terminal

	* artist(s)
	* song name
	* preview link of the song from spotify
	* album that the song is a part of
	* song name

* if no song is provided then your program will default to
	* "what's my age again" by blink 182

```
node liri.js movie-this '<movie name here>'
```

* this would output the following information to the terminal:

	* Title
	* Year
	* IMDB Rating
	* Country
	* Language
	* Plot
	* Actors
	* Rotten Tomatoes Rating 
	* Rotten Tomatoes URL

	* if no movie is provided then the program will output information for the movie: 'Mr. Nobody'
		
```
node liri.js do-what-it-says 
```

* Using the fs package in node, the program would take the text inside of random.txt and use it to call the first command with the second part as it's parameter

* Currently in random.txt, the following text is there:

```
spotify-this-song,"I Want it That Way"
```

* call the appropriate function and pass in "I Want it That Way" as the song.

* This should work for any function and parameter you use.

* used the following npm packages:
* [twitter](https://www.npmjs.com/package/twitter)
* [spotify](https://www.npmjs.com/package/spotify)
* [request](https://www.npmjs.com/package/request)
	* The request npm package will be used to hit the OMDB API
		* [OMDB API](http://www.omdbapi.com)

* install these npm packages.

```
npm install twitter
npm install spotify
npm install request
```
