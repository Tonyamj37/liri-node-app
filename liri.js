require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

var argsArray = process.argv.slice(2); //remove arguments

songTitle = argsArray[1]
//if songTitle === undefined
if(songTitle === undefined) {
    songTitle = 'The Sign by Ace of Base';
}


// argsArray = [spotify-this-song, 'song name']

spotify.search({ type: 'track', query: argsArray[1] }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    } else { // if no error
        // For loop is for when a track has multiple artists
            for(var i = 0; i < data.tracks.items[0].artists.length; i++) {
                if(i === 0) {
                    console.log("Artist(s):    " + data.tracks.items[0].artists[i].name);
                } else {
                    console.log("              " + data.tracks.items[0].artists[i].name);
                }
            } 
            console.log("Song:         " + data.tracks.items[0].name);
            console.log("Preview Link: " + data.tracks.items[0].preview_url);
            console.log("Album:        " + data.tracks.items[0].album.name);
            console.log("Release date:        " + data.tracks.items[0].album.release_date);
        }
  });