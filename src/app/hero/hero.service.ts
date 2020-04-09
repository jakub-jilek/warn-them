import { Injectable } from '@angular/core';
import {Hero} from 'src/app/hero/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  hero: Hero;

  constructor() { }
}
