import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export interface Hero {
  name: string;
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private http: HttpClient) { }

  getHero() {
    this.http.get<Hero>('https://warn-them.firebaseio.com/hero.json')
      .subscribe(hero => {
        console.log(hero)
      });
  }
}
