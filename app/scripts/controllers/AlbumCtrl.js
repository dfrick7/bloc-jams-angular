(function() {
    function AlbumCtrl() {
        this.albumData = getAlbum();
        console.log(this.albumData);
    }
 
     angular
         .module('blocJams')
         .controller('AlbumCtrl',AlbumCtrl);
 })();