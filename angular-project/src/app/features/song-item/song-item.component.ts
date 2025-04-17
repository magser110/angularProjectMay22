import { Component, inject, input } from '@angular/core';
import { SongService } from '../../core/services/song.service';
import { Song } from '../../core/models/song.model';

@Component({
  selector: 'app-song-item',
  imports: [],
  templateUrl: './song-item.component.html',
  styleUrl: './song-item.component.css',
})
export class SongItemComponent {
  private songService = inject(SongService);
  isEditing = this.songService.isEditing;
  songToEdit = this.songService.songToEdit;

  songInfo = input<Song>();

  editClickHandler() {
    this.isEditing.set(true);
    this.songToEdit.set(this.songInfo()!);
    // on this click update a signal in your service something like songToEdit
    // update your isEditing value to true
  }

  removeSongHandler() {
    this.songService.removeSong(this.songInfo()!.title);
  }
}
