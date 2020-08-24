import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {ListObject} from '../../interface/list-object';
import {ListDataService} from '../../services/list-data.service';
import {Subscription} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {MatSort} from '@angular/material/sort';
import {ConfirmDeleteModalComponent} from '../../modals/confirm-delete-modal/confirm-delete-modal.component';
import {PreviewModalComponent} from '../../modals/preview-modal/preview-modal.component';


@Component({
  selector: 'app-list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterViewInit, OnDestroy {

  private dataSourceSubscription$: Subscription;

  displayedColumns = ['name', 'description', 'status' , 'modifyBy', 'modifyDate', 'actions'];
  dataSource = new MatTableDataSource<ListObject>();

  constructor(
    private listDataService: ListDataService,
    private dialog: MatDialog
  ) { }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.dataSourceSubscription$ = this.listDataService.getData().subscribe(tableData => {
      this.dataSource.data = tableData;
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }


  ngOnDestroy() {
    this.dataSourceSubscription$.unsubscribe();
  }

  private deleteRow(listElement: ListObject) {
    this.listDataService.removeElement(listElement);
  }

  openModal(element: ListObject) {
    const dialogRef = this.dialog.open(ConfirmDeleteModalComponent, {
      width: '300px',
      data: element
    });

    dialogRef.afterClosed().subscribe((res: {canDelete: boolean, deletedElement: any}) => {
      if (res.canDelete) {
        this.deleteRow(res.deletedElement);
      }
    });
  }

  openPreview(element: ListObject) {
    const dialogRef = this.dialog.open(PreviewModalComponent, {
      data: element
    });
  }

  printElement(element: ListObject){
    console.log(element);
  }
}
