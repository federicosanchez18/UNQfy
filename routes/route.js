const ApiError = ('../Errors/ApiError');
let router_albums = require('./albums')
let router_artists = require('./artists')
let router_playlists = require('./playlists')
let router_tracks = require('./tracks')
let router_invalidRoute = require('./invalidRoute')

function seteoRutas(app){
    app.use('/api/albums',router_albums);
    app.use('/api/artists',router_artists);
    app.use('/api/tracks',router_tracks);
    app.use('/api/playlists',router_playlists);
    app.use('*', router_invalidRoute);
}
module.exports.seteoRutas = seteoRutas;
