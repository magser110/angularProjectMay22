//service to manage songs (crud???)

import { Injectable, signal } from "@angular/core";
import { Song } from "../models/song.model";

@Injectable({
  providedIn: 'root'
})

export class SongService {
  private songs = signal<Song[]>([
    {
      title: 'Lovers In a Past linkedSignalSetFn',
      artist: 'Calvin Harris',
      album: 'Lovers In A Past Life (Remixes)',
      genre: 'Dance/Electonic',
      year: 2024
    },
    {
      title: 'VeLDÁ',
      artist: 'Bad Bunny, Omar Courtz, Dei V',
      album: 'DeBÍ TiRAR MáS FOToS',
      genre: 'Reggaeton',
      year: 2025
    },
    {
      title: 'Closer',
      artist: 'RM, Paul Blanco, Mahalia',
      album: 'Indigo',
      genre: 'Rhythm and blues, K-pop',
      year: 2022
    },
    {
      title: 'Alors on danse',
      artist: 'Stromae',
      album: 'Cheese',
      genre: 'French Indie, Dance/Electronic',
      year: 2010
    },
    {
      title: '＊~アスタリスク~',
      artist: 'ORANGE RANGE',
      album: '＊~アスタリスク~',
      genre: 'J-pop',
      year: 2005
    }
  ]);

  getSongs(){
    return this.songs.asReadonly();
  }

  addSong(t: string, art: string, alb: string, g: string, y: number){
    this.songs.update(s => [...s, {title: t, artist: art, album: alb, genre: g, year: y}]);
    //s is song and i am updating the Songs list to include new song
  }

  removeSong(songName: string){
    this.songs.update(songList => songList.filter(s => s.title !== songName));
    //songList is the entire song list/array, s is the individual song in the filter method

  }
}
