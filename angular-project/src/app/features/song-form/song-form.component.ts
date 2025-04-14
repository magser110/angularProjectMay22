//should be standalone for adding and editing songs
import { AfterViewInit, Component, ElementRef, inject, viewChild } from '@angular/core';
import { SongService } from '../../core/services/song.service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-song-form',
  imports: [FormsModule],
  templateUrl: './song-form.component.html',
  styleUrl: './song-form.component.css'
})
export class SongFormComponent implements AfterViewInit{
  private songService = inject(SongService);

  private songForm = viewChild.required<ElementRef<HTMLFormElement>>('songForm');

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called: form element available');
  }

  addSongHandler(t: string, art: string, alb: string, g: string, y: number ){
    this.songService.addSong(t, art, alb, g, y)
    console.log(t, art, alb, g, y);

    this.resetSongFormHandler();
  }

  resetSongFormHandler(){
    this.songForm().nativeElement.reset();
  }


}
