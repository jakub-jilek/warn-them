import {Component, OnInit} from '@angular/core';
import {HeroService} from 'src/app/hero/hero.service';

@Component({
  selector: 'game-window',
  templateUrl: './game-window.component.html',
  styleUrls: ['game-window.component.css']
})
export class GameWindowComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  ngOnInit() {
  }

}
