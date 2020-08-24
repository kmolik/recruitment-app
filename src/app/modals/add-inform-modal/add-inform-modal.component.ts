import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-inform-modal',
  templateUrl: './add-inform-modal.component.html',
  styleUrls: ['./add-inform-modal.component.scss']
})
export class AddInformModalComponent implements OnInit {

  public name: string;

  constructor(public dialogRef: MatDialogRef<AddInformModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit(): void {
    this.name = this.data;
  }

  closeModal() {
    this.dialogRef.close();
  }

}
