import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Hero} from '../hero';

export interface HeroRoles {
  type: string;
  value: number;
  hero: Hero;
}

@Component({
  selector: 'app-new-hero-form',
  templateUrl: './new-hero-form.component.html',
  styleUrls: ['./new-hero-form.component.css']
})
export class NewHeroFormComponent implements OnInit {

  formGroup: FormGroup;

  roles: HeroRoles[] = [
    {type: 'Nic', value: 0, hero: {name: '', role: '', life: 0}},
    {type: 'Válečník', value: 1,  hero: {name: this.nameH, role: this.roleH, life: 300}},
    {type: 'Kouzelník', value: 2,  hero: {name: this.nameH, role: this.roleH, life: 150}},
    {type: 'Kejklíř', value: 3,  hero: {name: this.nameH, role: this.roleH, life: 200}}
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      name: '',
      role: ''
    });
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

}
