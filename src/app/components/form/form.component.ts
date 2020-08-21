import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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

  registerForm: FormGroup;

  trigger: Trigger[] = [
    {value: 'Planned Personal Data transfer to other processing entity', viewValue: 'Planned Personal Data transfer to other processing entity'},
    {value: 'Planned Personal Data transfer processing entity', viewValue: 'Planned Personal Data transfer processing entity'},
    {value: 'Data Collection/Aquisition Instatnt', viewValue: 'Data Collection/Aquisition Instatnt'},
    {value: 'Planned Change or new personal data processing purpose', viewValue: 'Planned Change or new personal data processing purpose'},
    {value: 'Change(d) or new personal data processing purpose', viewValue: 'Change(d) or new personal data processing purpose'},
    {value: 'Purpose/Service start/commencement date -legal/contract start', viewValue: 'Purpose/Service start/commencement date -legal/contract start'}
  ];

  constructor(
    private route: Router,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      schemeName: ['', [Validators.required]],
      triggerName: ['', Validators.required],
      triggerDateKnown: [''],
      isInterimTrigger: [''],
      interimTriggerName: [''],
      constraintName: ['', [Validators.required]],
      constraintValueKnown: [''],
      effectiveDeadlineInfo: ['', [Validators.required]],
      relatedProcessingBasisReferenceType: [''],
      purma: [''],
      nntm: [''],
      pdb: [''],
      dsart: [''],
      description: ['']
    });
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }

  backToList() {
    this.route.navigate(['list']);
  }

}
