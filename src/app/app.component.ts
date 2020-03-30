import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'warn-them';

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.firebaseService.getHero();
  }
}
