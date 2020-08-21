import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {ListObject} from '../../interface/list-object';
import {ListDataService} from '../../services/list-data.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  private dataSourceSubscription$: Subscription;

  displayedColumns = ['name', 'description', 'trigger_name' , 'interim_trigger_name', 'effective_deadline_info', 'actions'];
  dataSource = new MatTableDataSource<ListObject>();

  constructor(private listDataService: ListDataService) { }

  ngOnInit(): void {
    this.dataSourceSubscription$ = this.listDataService.getData().subscribe(tableData => {
      this.dataSource.data = tableData;
    });
  }

  ngOnDestroy() {
    this.dataSourceSubscription$.unsubscribe();
  }

}
