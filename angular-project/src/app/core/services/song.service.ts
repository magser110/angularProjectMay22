//service to manage songs (crud???)

import { Injectable, signal } from "@angular/core";
import { Song } from "../models/song.model";
import { Observable } from "rxjs";
import DUMMY_SONGS from '../../data/data';

@Injectable({
  providedIn: 'root'
})

export class SongService {
songs = signal<Song[]>(DUMMY_SONGS)
isEditing = signal<boolean>(false)
songToEdit = signal<Song | null>(null)

  getSongs(){
    return this.songs.asReadonly();
    // just reading the songs i already have existing
  }

  addSong(id: number, t: string, art: string, alb: string, g: string, y: number){
    this.songs.update(s => [...s, {id: id, title: t, artist: art, album: alb, genre: g, year: y}]);
    //s is song and i am updating the Songs list to include new song
  }

  updateSong(newId: number, t: string, art: string, alb: string, g: string, y: number){
    this.songs.update(songList => songList.map(s => s.id === newId ? {... s, title: t, artist: art, album: alb, genre: g, year: y} : s));
    // this.songs.update(s.find(this.songs.id) )
//songs.update(s.find(song.id === s.id)) song<= when you change anything inside the find method it live updates the originalarry
//s.title === the new enetered titleit should update the array
    //.find!! instead of map
    //using signals update method to update current songs array. using map to loop over songs. inside of my map im comparing my song titles (come back and fix title to id????, which i need to create in models) if song matches it is updated, if not song is left alone.
  }



  removeSong(songName: string){
    this.songs.update(songList => songList.filter(s => s.title !== songName));
    //songList is the entire song list/array, s is the individual song in the filter method
  }
}
