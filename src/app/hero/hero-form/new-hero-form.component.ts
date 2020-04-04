import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

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

  roles: HeroRoles[] = [
    {type: 'Nic', value: 0},
    {type: 'Válečník', value: 1},
    {type: 'Kouzelník', value: 2},
    {type: 'Kejklíř', value: 3}
  ];

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      name: '',
      role: ''
    });
  }

}
