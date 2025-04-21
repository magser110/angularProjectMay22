import { Component, EventEmitter, inject, Output } from '@angular/core';
import { SongService } from '../core/services/song.service';
import { Song } from '../core/models/song.model';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  private songService = inject(SongService);

  // onSearch(s: Song){
  //   this.
  // }
}
