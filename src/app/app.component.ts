import {Component, OnInit} from '@angular/core';
import {FirebaseService} from './service/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'warn-them';

  hero = {name: 'Sarka', age: 25};
  hero2 = {name: 'Maggie', age: 15};

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.firebaseService.createHero(this.hero);
  }
}
