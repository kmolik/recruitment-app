import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-delete-modal',
  templateUrl: './confirm-delete-modal.component.html',
  styleUrls: ['./confirm-delete-modal.component.scss']
})
export class ConfirmDeleteModalComponent implements OnInit {

  private deleteObject: {canDelete: boolean, deletedElement: any};

  constructor(public dialogRef: MatDialogRef<ConfirmDeleteModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: number) {
  }

  ngOnInit(): void {
    this.deleteObject = {canDelete: false, deletedElement: this.data};
  }

  cancel(){
    this.dialogRef.close(this.deleteObject);
  }

  confirm(){
    this.deleteObject.canDelete = true;
    this.dialogRef.close(this.deleteObject);
  }

}
