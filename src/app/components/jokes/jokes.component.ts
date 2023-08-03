import { Component } from '@angular/core';
import { JokeData } from 'src/app/models/joke/joke.module';
import { JokeService } from 'src/app/services/joke.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss'],
})
export class JokesComponent {
  JokeData?: JokeData;
  activePunchline?: boolean;
  
  constructor(private JokeService: JokeService) {}

  ngOnInit(): void {
    this.getRandomJoke();
  }
  
  getRandomJoke() {
    this.JokeService.getRandomJoke().subscribe({
      next: (response) => {
        console.log(response);
  
        this.JokeData = response;
      },
    });
  }

  showPunchLine() {
    this.activePunchline = true;
  }

  nextJoke(){
    this.getRandomJoke();
    this.activePunchline = false;

  }
}
