import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {ListObject} from '../../interface/list-object';
import {ListDataService} from '../../services/list-data.service';
import {Subscription} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {MatSort} from '@angular/material/sort';


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

  deleteRow(element) {
    this.listDataService.removeElement(element);
  }
}
