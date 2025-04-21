//standalone for adding and editing songs
import {
  AfterViewInit,
  ChangeDetectionStrategy,
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SongFormComponent implements AfterViewInit {
  private songService = inject(SongService);

  private songForm =
    viewChild.required<ElementRef<HTMLFormElement>>('songForm');

  isEditing = this.songService.isEditing;
  songToEdit = this.songService.songToEdit;

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called: form element available');
  }

  generateNewId(): number {
    let newId = this.songService.getSongs()(); //second () used to unwrap signal and actually get song[]
    let maxId = Math.max(...newId.map((s) => s.id));
    return maxId + 1;
  }

  scrollToForm() {
    this.songForm().nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  songFormHandler(
    id: number,
    t: string,
    art: string,
    alb: string,
    g: string,
    y: number
  ) {
    if (!this.isEditing()) {
      let newId = id || this.generateNewId();

      this.songService.addSong(newId, t, art, alb, g, y);
      console.log(t, art, alb, g, y);
    } else {
      this.songService.updateSong(id!, t, art, alb, g, y);
    }

    this.songService.isEditing.set(false);
    this.songService.songToEdit.set(null);
    this.resetSongFormHandler();

    setTimeout(() => {
      this.scrollToForm();
    }, 100);
  }

  resetSongFormHandler() {
    this.songForm().nativeElement.reset();
  }

  get deBugOutput() {
    console.log('[SongFormComponent] generated');
    return '';
  }
}
