//should be standalone for adding and editing songs
import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  viewChild,
} from '@angular/core';
import { SongService } from '../../core/services/song.service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-song-form',
  imports: [FormsModule],
  templateUrl: './song-form.component.html',
  styleUrl: './song-form.component.css',
})
export class SongFormComponent implements AfterViewInit {
  private songService = inject(SongService);

  private songForm =
    viewChild.required<ElementRef<HTMLFormElement>>('songForm');

  isEditing = this.songService.isEditing
songToEdit = this.songService.songToEdit

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called: form element available');
  }

  songFormHandler(id: number, t: string, art: string, alb: string, g: string, y: number) {
    if (!this.isEditing()) {
      this.songService.addSong(id, t, art, alb, g, y);
      console.log(t, art, alb, g, y);
    } else {
      this.songService.updateSong(id, t, art, alb, g, y); //id songToEdit.id
    }

    this.resetSongFormHandler();
  }

  resetSongFormHandler() {
    this.songForm().nativeElement.reset();
  }
}
