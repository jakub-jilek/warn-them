import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material';
import {SnackDialogComponent} from '../util/snack.dialog.component';
import {Hero} from '../hero/hero';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private FIREBASE_URL = 'https://warn-them.firebaseio.com/';

  constructor(private http: HttpClient, private toast: MatSnackBar) { }

  getHeroes() {
    return this.http.get<Hero>(this.FIREBASE_URL + 'hero.json');
  }

  getHeroById(id: string) {
    return this.http.get<Hero>(this.FIREBASE_URL + 'hero/' + id + '.json')
      .subscribe(() => {},
        (error => { this.involveDialog('Hrdina načten', true); }),
        () => { this.involveDialog('Hrdinu se nepodařilo načíst', false); }
      );
  }

  createHero(hero: Hero) {
    this.http.post(this.FIREBASE_URL + 'hero.json', hero)
      .subscribe(() => {},
        error => { this.involveDialog('Hrdinu se nepodařilo vytvořit', true); },
        () => { this.involveDialog('Hrdina vytvořen', false); });
  }

  updateHero(hero: Hero) {
    this.http.put(this.FIREBASE_URL + 'hero/' + hero.id, hero)
      .subscribe(value => console.log(value));
  }

  deleteHeroById(id: string) {
    this.http.delete(this.FIREBASE_URL + 'hero/' + id + '.json')
      .subscribe(() => {},
      (error => { this.involveDialog('Hrdinu se nepodařilo smazat', true); }),
      () => { this.involveDialog('Hrdina smazán', false); }
      );
  }

  deleteHeroes() {
    this.http.delete(this.FIREBASE_URL + 'hero.json')
      .subscribe(() => {},
        (error => { this.involveDialog('Záznamy se nepodařilo smazat', true); }),
        () => { this.involveDialog('Záznamy smazány', false); }
        );
  }

  involveDialog(text: string, isError: boolean) {
    this.toast.openFromComponent(SnackDialogComponent, {duration: 1500, data: {error: isError, textData: text}});
  }
}
