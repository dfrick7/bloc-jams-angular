(function() {
    function SongPlayer(Fixtures) {
        var SongPlayer = {};
/**
* @desc object holds the current song
* @type {object}
*/

         var currentAlbum = Fixtures.getAlbum();
/**
* @desc album the songs are currently being played from
* @type {object}

* @desc buzz object audio file
* @type {Object}
*/
         var currentBuzzObject = null;

         var stopSong = function(){
           currentBuzzObject.stop();
           SongPlayer.currentSong.playing = null;
         }

/**
* @function setSong
* @desc stops current playing song; loads new audio as currentBuzzObject
* @param {Object} song
*/
         var setSong = function(song) {
            if (currentBuzzObject) {
            stopSong();
            }

             currentBuzzObject = new buzz.sound(song.audioUrl, {
                 formats: ['mp3'],
                 preload: true
             });

             SongPlayer.currentSong = song;
         };

/**
* @function playSong
* @desc plays song using the buzz library
* @param {object} song
*/

    var playSong = function(song){
        currentBuzzObject.play();
        song.playing = true;
    }

/**
* @function getSongIndex
* @desc returns index of the song
*@param {Object} song
*/

    var getSongIndex = function(song) {
        return currentAlbum.songs.indexOf(song);
    };


    SongPlayer.currentSong = null;
/**
* @function Songplayer.play
* @desc checks if current song playing
* @param {object} song
*/

        SongPlayer.play = function(song) {
            song = song || SongPlayer.currentSong;
            if (SongPlayer.currentSong !== song) {
                setSong(song);
                currentBuzzObject.play();
                song.playing = true;
            } else if (SongPlayer.currentSong === song) {
                if (currentBuzzObject.isPaused()) {
                    currentBuzzObject.play();
                }
            }
        };

/**
* @function SongPlayer.pause
* @desc pauses the current
* @param {object} song
*/
        SongPlayer.pause = function(song) {
            song = song || SongPlayer.currentSong;
            currentBuzzObject.pause();
            song.playing = false;
        };

/**
* @function Songplayer.previous
* @desc plays the song before the current song
* @param {}
*/

        SongPlayer.previous = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex--;

            if (currentSongIndex < 0) {
                stopSong();

            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };
/**
* @function SongPlayer.next
* @desc plays the next song, stops when it hits the last song
* @param {}
*/
        SongPlayer.next = function(){
            var currentSongIndex = getSongIndex(SongPlayer.currentSong)
            currentSongIndex ++;

            if (currentSongIndex >= currentAlbum.songs){
                stopSong();

            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };

            return SongPlayer;
        }

    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
})();