import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Trickster, Warrior, Wizard} from '../heroes';
import {FirebaseService} from '../../service/firebase.service';
import {Hero} from '../hero';

export interface HeroRoles {
  type: string;
  value: number;
}

@Component({
  selector: 'app-new-hero-form',
  templateUrl: './new-hero-form.component.html',
  styleUrls: ['./new-hero-form.component.css']
})
export class NewHeroFormComponent implements OnInit {

  formGroup: FormGroup;
  assets = 'assets/images/';

  hero: Hero = {
    id: '',
    name: '',
    role: null,
    fullLife: null,
    actualLife: null,
    minStrength: null,
    maxStrength: null,
    defense: null
  };

  roles: HeroRoles[] = [
    {type: 'Nic', value: 0},
    {type: 'Válečník', value: 1},
    {type: 'Kouzelník', value: 2},
    {type: 'Kejklíř', value: 3}
  ];

  constructor(private fb: FormBuilder, private firebase: FirebaseService) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      name: '',
      role: '',
     });
  }

  // Tato metoda se provolává dvakrát, jedná se o vlastnost kdy se na event onSelectionChanged zavolá tato metoda ne jen při selektu ale taky při deselektu hodnoty
  roleChanged(role: HeroRoles, event: any) {
    if (!event.isUserInput) {
      return;
    }
    switch (role.value) {
      case 0: {
        this.setValues(null, null);
        break;
      }
      case 1: {
        this.setValues(Warrior, 1);
        break;
      }
      case 2: {
        this.setValues(Wizard, 2);
        break;
      }
      case 3: {
        this.setValues(Trickster, 3);
        break;
      }
    }
  }

  setValues(role: any, roleValue: number) {
    if (!role) {
      this.formGroup.reset();
      return;
    }
    this.hero.role = roleValue;
    this.hero.fullLife = role.fullLife;
    this.hero.actualLife = role.actualLife;
    this.hero.minStrength = role.minStrength;
    this.hero.maxStrength = role.maxStrength;
    this.hero.defense = role.defense;
  }

  nameChange() {
    this.hero.name = this.formGroup.controls.name.value;
  }

  saveHero() {
    this.firebase.createHero(this.hero)
      .subscribe((heroId) => {this.hero.id = Object.values(heroId).toString(); },
        error => { this.firebase.involveDialog('Hrdinu se nepodařilo vytvořit', true); },
        () => { this.firebase.involveDialog('Hrdina vytvořen', false); });
  }

  updateHero() {
    this.firebase.updateHero(this.hero);
  }

  get controls() {
    return this.formGroup ? this.formGroup.controls : null;
  }

  get nameH() {
    return this.controls ? this.controls.name.value : '';
  }

  get roleH() {
    return this.controls ? this.controls.role.value : '';
  }

  get lifeH() {
    return this.hero.fullLife;
  }

  get minStrengthH() {
    return this.hero.minStrength;
  }

  get maxStrengthH() {
    return this.hero.maxStrength;
  }

  get defenseH() {
    return this.hero.defense;
  }
}
