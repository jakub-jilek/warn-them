import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Trickster, Warrior, Wizard} from '../heroes';
import {FirebaseService} from '../../service/firebase.service';

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
      fullLife: '',
      actualLife: '',
      minStrength: '',
      maxStrength: '',
      defense: ''
     });
  }

  // Tato metoda se provolává dvakrát, jedná se o vlastnost kdy se na event onSelectionChanged zavolá tato metoda ne jen při selektu ale taky při deselektu hodnoty
  roleChanged(role: HeroRoles, event: any) {
    if (!event.isUserInput) {
      return;
    }
    switch (role.value) {
      case 0: {
        this.setValues(null);
        break;
      }
      case 1: {
        this.setValues(Warrior);
        break;
      }
      case 2: {
        this.setValues(Wizard);
        break;
      }
      case 3: {
        this.setValues(Trickster);
        break;
      }
    }
  }

  setValues(hero: any) {
    if (!hero) {
      this.formGroup.reset();
      return;
    }
    this.controls.fullLife.setValue(hero.fullLife);
    this.controls.minStrength.setValue(hero.minStrength);
    this.controls.maxStrength.setValue(hero.maxStrength);
    this.controls.defense.setValue(hero.defense);
  }

  saveHero() {
    this.firebase.createHero({
      name: this.nameH,
      role: this.roleH,
      fullLife: this.lifeH,
      actualLife: this.lifeH,
      minStrength: this.minStrengthH,
      maxStrength: this.maxStrengthH,
      defense: this.defenseH});
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
    return this.controls ? this.controls.fullLife.value : '';
  }

  get minStrengthH() {
    return this.controls ? this.controls.minStrength.value : '';
  }

  get maxStrengthH() {
    return this.controls ? this.controls.maxStrength.value : '';
  }

  get defenseH() {
    return this.controls ? this.controls.defense.value : '';
  }
}
