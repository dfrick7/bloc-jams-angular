var albumPicasso = {
     title: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { title: 'Blue', duration: 161.71, audioUrl: 'assets/music/blue' },
         { title: 'Green', duration: 103.96, audioUrl: 'assets/music/green' },
         { title: 'Red', duration: 268.45, audioUrl: 'assets/music/red' },
         { title: 'Pink', duration: 153.14, audioUrl: 'assets/music/pink' },
         { title: 'Magenta', duration: 374.22, audioUrl: 'assets/music/magenta' }
     ]
 };

var albumMarconi = {
     title: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21'},
         { title: 'Can you hear me now?', duration: '3:14' },
         { title: 'Wrong phone number', duration: '2:15'}
     ]
 };

var albumAcdc = {
     title: 'Back in Black',
     artist: 'ACDC',
     label: 'Atlantic',
     year: '1980',
     albumArtUrl: 'assets/images/album_covers/ACDC.png',
     songs: [
         { title: 'Hells Bells', duration: '5:10' },
         { title: 'Shoot to Thrill', duration: '5:17' },
         { title: 'Back in Black', duration: '4:14'},
         { title: 'You Shook Me All Night Long', duration: '3:30' },
         { title: 'Rock and Roll Aint Noise Pollution', duration: '2:15'}
     ]
 };
var getAlbum = function(){
    return albumPicasso;
};