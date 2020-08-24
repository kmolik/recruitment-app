import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ListDataService} from '../../services/list-data.service';
import {AddInformModalComponent} from '../../modals/add-inform-modal/add-inform-modal.component';
import {MatDialog} from '@angular/material/dialog';



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

  isInterimTriggerCheckbox = true;

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
    private fb: FormBuilder,
    private listDataService: ListDataService,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      status: ['', Validators.required],
      triggerDateKnown: [''],
      isInterimTrigger: [false],
      interimTriggerName: [{value: '', disabled: true}],
      modifyBy: ['', [Validators.required]],
      constraintValueKnown: [''],
      modifyDate: ['', [Validators.required]],
      relatedProcessingBasisReferenceType: [''],
      purma: [false],
      nntm: [false],
      pdb: [false],
      dsart: [false],
      description: ['']
    });
  }

  onSubmit() {
    console.log(this.registerForm.value);
    if (this.registerForm.invalid){
      return;
    }
    this.listDataService.addElement(this.registerForm.value);
    this.openModal(name);
  }

  backToList() {
    this.route.navigate(['list']);
  }

  changeCheckbox(){
    this.isInterimTriggerCheckbox = !this.isInterimTriggerCheckbox;
    this.registerForm.controls.interimTriggerName.reset();
    if (this.isInterimTriggerCheckbox) {
      this.registerForm.controls.interimTriggerName.disable();
    } else {
      this.registerForm.controls.interimTriggerName.enable();
    }
  }
  private openModal(name: string) {
    const dialogRef = this.dialog.open(AddInformModalComponent, {
      width: '300px',
      data: name
    });

    dialogRef.afterClosed().subscribe(() => {
      this.backToList();
    });
  }
}
