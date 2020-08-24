import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ListObject} from '../../interface/list-object';

@Component({
  selector: 'app-priview-modal',
  templateUrl: './preview-modal.component.html',
  styleUrls: ['./preview-modal.component.scss']
})
export class PreviewModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PreviewModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ListObject) { }

  ngOnInit(): void {
  }

  closeModal(){
    this.dialogRef.close();
  }
}
