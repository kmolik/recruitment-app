import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {ListObject} from '../../interface/list-object';
import {ListDataService} from '../../services/list-data.service';
import {element} from 'protractor';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss']
})
export class ListComponentComponent implements OnInit {

  displayedColumns = ['name', 'description', 'trigger_name' , 'interim_trigger_name', 'effective_deadline_info'];
  dataSource = new MatTableDataSource<ListObject>();

  constructor(private listDataService: ListDataService) { }

  ngOnInit(): void {
    this.listDataService.getData().subscribe(tableData => {
      this.dataSource.data = tableData;
    });
  }

}
