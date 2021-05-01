class Album{
    constructor(id,name,year,tracks,duration){
        this._id = id 
        this._name = name 
        this._year= year
        this._tracks = tracks
        this._duration = duration
    }

    get id(){return this._id}
    get name(){return this._name}
    get year(){return this._year }
    get tracks(){return this._tracks}
    get duration(){return this._duration}
    set id(newID){this._id = newID}
    set name(newName){this._name = newName}
    set year(newYear){this._year = newYear}
    set tracks(newTracks){this.tracks = newTracks}
    set duration(newDur){this._duration = newDur}

    printAlbum(){
        let print = 
        `Album: ${this.name}\nID: ${this.id}\nRelease: ${this.year}\nTracks: ${this.allTracks().map(track => track.name)}\nDuration: ${this.duration}`
        console.log(print)
    }

    allTracks(){
        return Object.values(this.tracks)
    }

}

module.exports = Album;