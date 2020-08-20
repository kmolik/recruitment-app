import { Component } from '@angular/core';
import { ListDataService } from './services/list-data.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recruitment-app';

  constructor(private data: ListDataService) {}

  test() {
    this.data.getData().subscribe(tableData => {
      console.log(tableData);
    });
  }

  test2() {
     this.data.testFunction();
  }
}
