import { Component } from '@angular/core';
import { SongListComponent } from './features/song-list/song-list.component';

@Component({
  selector: 'app-root',
  imports: [SongListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-project';
}
