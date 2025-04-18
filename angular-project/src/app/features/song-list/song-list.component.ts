//should be standalone and list all songs
import { Component, inject } from '@angular/core';
import { SongService } from '../../core/services/song.service';
import { SongItemComponent } from '../song-item/song-item.component';
import { SongFormComponent } from '../song-form/song-form.component';

@Component({
  selector: 'app-song-list',
  imports: [SongItemComponent, SongFormComponent],
  templateUrl: './song-list.component.html',
  styleUrl: './song-list.component.css'
})
export class SongListComponent {
  private songService = inject(SongService);

  songs = this.songService.getSongs();
}
