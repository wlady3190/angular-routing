import { Component } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent {
  data:any = [{
    'nombre': 'Wlady',
    'profesion': 'medico',
    'edad': 30,
    'genero': 'M'
  },
  {
    'nombre': 'lili',
    'profesion': 'inge',
    'edad': 36
  }
]
}
