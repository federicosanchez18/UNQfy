class PlayList {
    constructor(id,name,tracks = {},maxDuration){
        this._id = id;
        this._name = name;
        this._tracks = tracks;
        this._maxDuration = maxDuration; 
    }

    get id(){return this._id}
    set id(newId){return this._id = newId}
    get name(){return this._name}
    set name(newName){  return this._name = newName}
    get tracks(){return this._tracks}
    set tracks(newtracks){return this._tracks = newtracks}
    get maxDuration(){return this._maxDuration}
    set maxDuration(newmaxDuration){  return this._maxDuration = newmaxDuration}

    hasTrack(nameTrack){
        return this.tracks.find(track => track.name === nameTrack)
    }
    duration(){
        return this.tracks.map(track => track.duration).reduce((a, b) => a + b, 0)
    }

    allTracks(){
        return Object.values(this.tracks)
    }
 
    printPlaylist(){
        let print = 
        `PlayList: ${this.name}\nID: ${this.id}\nTracks: ${this.allTracks().map(track => track.name)}\nDuration: ${this.maxDuration}`
        console.log(print)
    }

    deleteTrack(trackId){
        this.tracks[trackId] = undefined
    }

}

module.exports = PlayList;