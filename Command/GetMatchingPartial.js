class GetMatchingPartial {
    /*argumentos[0] = Partial name */
    executeCommand(argumentos,unqfy){
        unqfy.getTracksMatchingParcialName(argumentos[0])
        unqfy.getAlbumsMatchingParcialName(argumentos[0])
        unqfy.getArtistsMatchingParcialName(argumentos[0])
    }
}
module.exports = GetMatchingPartial;