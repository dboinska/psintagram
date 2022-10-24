import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const DOGAPI_URL = 'https://dog.ceo/api/breeds/list/all';

const DOG_BREED_URL = 'https://dog.ceo/api/breed/{1}/images/random';

export interface Breed {
  name: string;
  url: string;
}
export type BreedList = string[];

interface DogApiResponse {
  message: Record<string, string[]>;
  status: string;
}

interface BreedApiResponse {
  message: string;
  status: string;
}

@Injectable()
export class DogApiService {
  private breeds: BreedList = [];

  constructor(private http: HttpClient) {
    this.getListOfBreeds().subscribe((results: BreedList) => {
      console.log(results);

      this.breeds.push(...results);
    });
  }

  public getBreeds(): BreedList {
    return this.breeds;
  }

  private getListOfBreeds(): Observable<BreedList> {
    return this.http
      .get<any>(DOGAPI_URL)
      .pipe(map((response: DogApiResponse) => Object.keys(response.message)));
  }

  public getSelectedBreed(breed: string): Observable<string> {
    const URL = DOG_BREED_URL.replace('{1}', breed);
    return this.http
      .get<any>(URL)
      .pipe(map((response: BreedApiResponse) => response.message));
  }
}
