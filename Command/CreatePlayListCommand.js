class CreatePlaylistCommand {

    executeCommand(argumentos,unqfy){
    const name = argumentos[0]
    const maxDuration = parseInt(argumentos[1])
    const genres = argumentos.slice(2, argumentos.length)

    unqfy.createPlaylist(name, maxDuration, genres);
    }
}
module.exports = CreatePlaylistCommand;