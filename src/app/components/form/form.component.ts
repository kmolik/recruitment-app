import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

interface Trigger {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form-component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  selectedValue: string;

  trigger: Trigger[] = [
    {value: 'trigger-0', viewValue: 'Planned Personal Data transfer to other processing entity'},
    {value: 'trigger-1', viewValue: 'Planned Personal Data transfer processing entity'},
    {value: 'trigger-2', viewValue: 'Data Collection/Aquisition Instatnt'},
    {value: 'trigger-3', viewValue: 'Planned Change or new personal data processing purpose'},
    {value: 'trigger-4', viewValue: 'Change(d) or new personal data processing purpose'},
    {value: 'trigger-5', viewValue: 'Purpose/Service start/commencement date -legal/contract start'}
  ];

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  backToList() {
    this.route.navigate(['list']);
  }

}
