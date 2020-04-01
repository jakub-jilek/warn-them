import {Component, OnInit} from '@angular/core';
import {FirebaseService, Hero} from './service/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // hero = {name: 'Sarka', age: 25};
  // hero2 = {name: 'Maggie', age: 15};
  hero: Hero;

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.firebaseService.getHeroes().subscribe(hero => {
      this.hero = hero;
      this.hero.id = Object.keys(hero).toString();
      console.log(hero);
    });

    setTimeout(() => {
      this.firebaseService.deleteHeroById(this.hero.id);
    }, 2000);
  }
}
