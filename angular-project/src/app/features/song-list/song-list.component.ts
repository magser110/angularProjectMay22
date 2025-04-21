//shared component, songform and songitem are imported

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SongService } from '../../core/services/song.service';
import { SongItemComponent } from '../song-item/song-item.component';
import { SongFormComponent } from '../song-form/song-form.component';

@Component({
  selector: 'app-song-list',
  imports: [SongItemComponent, SongFormComponent],
  templateUrl: './song-list.component.html',
  styleUrl: './song-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SongListComponent {
  private songService = inject(SongService);

  songs = this.songService.getSongs();


  get deBugOutput(){
    console.log('[SongListComponent] generated');
    return '';
  }
}
