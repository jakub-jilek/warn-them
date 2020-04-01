import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material';
import {HeroCreatedDialogComponent} from '../util/hero.created.dialog.component';

export interface Hero {
  name: string;
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private http: HttpClient, private toast: MatSnackBar) { }

  getHero() {
    this.http.get<Hero>('https://warn-them.firebaseio.com/hero.json')
      .subscribe(hero => {
        console.log(hero);
      });
  }

  createHero(hero: Hero) {
    this.http.post('https://warn-them.firebaseio.com/hero.json', hero)
      .subscribe(() => {},
        error => console.log('Vytvoření postavy se nepodařilo.'),
        () => {this.toast.openFromComponent(HeroCreatedDialogComponent, {duration: 3000});
      });
  }

  deleteHeroes() {
    this.http.delete('https://warn-them.firebaseio.com/hero.json').subscribe(value => console.log('DELETED'));
  }
}
