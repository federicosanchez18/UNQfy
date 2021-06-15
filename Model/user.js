  
class User {
    constructor(id,name,email,password,listenedTracks){
        this._id = id;
        this._name = name;
        this._email = email;
        this._password = password;
        this._listenedTracks = listenedTracks;
        this._listen = '';
    }

    get id(){return this._id}
    get name(){return this._name}
    get email(){return this._email}
    get password(){return this._password}
    get listenedTracks(){return this._listenedTracks}
    set id(newid){this._id = newid}
    set name(newName){this._name = newName}
    set email(newEmail){this._email = newEmail}
    set password(newPassword){this._password = newPassword}
    set listenedTracks(newList){this._listenedTracks = newList}
    get listen(){return this._listen}
    set listen(trackName) { this._listen = trackName}

    listenMusicU(track){
        this.listenedTracks.push(track)
        this.listen = this.name + ' listen : ' + track.name;
        track.countListen = track.countListen + 1 
    }
    timesListenTrack(track){
        return this.listenedTracks.filter( t => t.name == track.name).map(t => t.duration).reduce((a, b) => a + b, 0)
    }

    
    topicsHeard(){
        return new Set(this.listenedTracks.map(t => t.name))
    }
    listenCount(track){
        return this.listenedTracks.filter( t => t.id == track.id).length 
    }
    printUser(){
        let print = 
        `User: ${this._name}\nID: ${this.id}\nEmail: ${this.email}\nListenedTracks: ${this._listenedTracks.map(track => track.name)}`;
        console.log(print);
    }
}

module.exports =User;