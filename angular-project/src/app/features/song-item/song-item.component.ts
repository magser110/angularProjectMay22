import { Component, inject, input } from '@angular/core';
import { SongService } from '../../core/services/song.service';
import { Song } from '../../core/models/song.model';

@Component({
  selector: 'app-song-item',
  imports: [],
  templateUrl: './song-item.component.html',
  styleUrl: './song-item.component.css'
})
export class SongItemComponent {
  private songService = inject(SongService);

  songInfo = input<Song>();

  removeSongHandler(){
    this.songService.removeSong(this.songInfo()!.title);
  }
}
