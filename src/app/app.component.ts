import { Component, OnInit } from '@angular/core';
import { DogApiService, BreedList } from './dogApi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';
  imageObject: string[] = [];
  breeds: BreedList = [];
  choosenBreed: string = '';
  breedImg: string = '';
  title="psintagram"

  addItem(breed: string) {
    this.choosenBreed = breed;
    console.log({ breed });

    this.dogService.getSelectedBreed(breed).subscribe((results: string) => {
      console.log(results);
      this.breedImg = results;
    });
  }

  constructor(private dogService: DogApiService) {}

  ngOnInit() {
    this.breeds = this.dogService.getBreeds();
  }

  imageClickHandler(e: Event) {
    console.log(e);
  }
}
