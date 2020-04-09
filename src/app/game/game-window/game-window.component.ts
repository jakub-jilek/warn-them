import {Component, OnInit} from '@angular/core';
import {HeroService} from 'src/app/hero/hero.service';

@Component({
  selector: 'game-window',
  templateUrl: './game-window.component.html'
})
export class GameWindowComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    console.log('GAME WINDOW ', this.heroService.hero);
  }

}
