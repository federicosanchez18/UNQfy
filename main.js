

const fs = require('fs'); // necesitado para guardar/cargar unqfy
const unqmod = require('./unqfy'); // importamos el modulo unqfy
const CommandInvoker = require('./Command/CommandInvoker')


// Retorna una instancia de UNQfy. Si existe filename, recupera la instancia desde el archivo.
function getUNQfy(filename = 'data.json') {
  let unqfy = new unqmod.UNQfy();
  if (fs.existsSync(filename)) {
    unqfy = unqmod.UNQfy.load(filename);
  }
  return unqfy;
}

function saveUNQfy(unqfy, filename = 'data.json') {
  unqfy.save(filename);
}





/*
 En esta funcion deberán interpretar los argumentos pasado por linea de comandos
 e implementar los diferentes comandos.

  Se deberán implementar los comandos:
    - Alta y baja de Artista
    - Alta y Baja de Albums
    - Alta y Baja de tracks

    - Listar todos los Artistas
    - Listar todos los albumes de un artista
    - Listar todos los tracks de un album

    - Busqueda de canciones intepretadas por un determinado artista
    - Busqueda de canciones por genero

    - Dado un string, imprimmir todas las entidades (artistas, albums, tracks, playlists) que coincidan parcialmente
    con el string pasado.

    - Dada un nombre de playlist, una lista de generos y una duración máxima, crear una playlist que contenga
    tracks que tengan canciones con esos generos y que tenga como duración máxima la pasada por parámetro.

  La implementacion de los comandos deberá ser de la forma:
   1. Obtener argumentos de linea de comando
   2. Obtener instancia de UNQfy (getUNQFy)
   3. Ejecutar el comando correspondiente en Unqfy
   4. Guardar el estado de UNQfy (saveUNQfy)

*/




function main(filteredArgs) {
  let unqfy = getUNQfy();
  commandInvoker = new CommandInvoker();
  commandInvoker.executeCommand(filteredArgs,unqfy);
  saveUNQfy(unqfy);
}
const filteredArgs = process.argv.slice(2)
main(filteredArgs);

//Pequeño Script para cargar algunas cosas para probar.

main(['AddArtist','Michael Jackson','United States']);
main(['AddArtist','Undertale','United States']);
main(['AddArtist','Death Stranding','United States']);
main(['AddAlbum','Michael Jackson','Bad 25','2012']);
main(['AddAlbum','Michael Jackson','Thriller','1982']);
main(['AddAlbum','Undertale','Game Theme','2015']);
main(['AddAlbum','Undertale','Bad 25','2015']);
main(['AddTrack','Undertale','Game Theme','Death by Glamour',500,'Pop','Games']);
main(['AddTrack','Michael Jackson','Bad 25','Smooth Criminal',500,'Pop']);
main(['AddTrack','Michael Jackson','Bad 25','Thriller',500,'Pop','Rock']);
/*main(['PrintArtist','Michael Jackson']);
main(['PrintAlbum','Bad 25']);
main(['PrintAlbum','Game Theme']);
main(['PrintTrack','Death by Glamour'])*/


/*
main(['GetMatchingPartial','Death'])
main(['GetTracksMatchingGenres','Pop'])
main(['GetTracksMatchingArtist','Undertale'])

*/



