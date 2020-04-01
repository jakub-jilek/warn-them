import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material';
import {SnackDialogComponent} from '../util/snack.dialog.component';

export interface Hero {
  id?: string;
  name: string;
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private http: HttpClient, private toast: MatSnackBar) { }

  getHeroes() {
    return this.http.get<Hero>('https://warn-them.firebaseio.com/hero.json');
  }

  getHeroById() {

  }

  createHero(hero: Hero) {
    this.http.post('https://warn-them.firebaseio.com/hero.json', hero)
      .subscribe(() => {},
        error => { this.involveDialog('Hrdinu se nepodařilo vytvořit', true); },
        () => { this.involveDialog('Hrdina vytvořen', false); });
  }

  deleteHeroById(id: string) {
    this.http.delete('https://warn-them.firebaseio.com/hero/' + id + '.json').subscribe(() => {},
      (error => { this.involveDialog('Hrdinu se nepodařilo smazat', true); }),
      () => { this.involveDialog('Hrdina smazán', false); }
      );
  }

  deleteHeroes() {
    this.http.delete('https://warn-them.firebaseio.com/hero.json')
      .subscribe(() => {},
        (error => { this.involveDialog('Záznamy se nepodařilo smazat', true); }),
        () => { this.involveDialog('Záznamy smazány', false); }
        );
  }

  involveDialog(text: string, isError: boolean) {
    this.toast.openFromComponent(SnackDialogComponent, {duration: 1500, data: {error: isError, textData: text}});
  }
}
