import { Component, OnInit } from '@angular/core';
import { JokeService } from './services/joke.service';
import { JokeData } from './models/joke/joke.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dadjokes';
}
