import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {ListObject} from '../interface/list-object';
import {take} from 'rxjs/operators';
import {element} from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class ListDataService {

  private data = require('../../assets/response_1548851123961.json');
  private tableData = new BehaviorSubject<ListObject[]>(this.data);

  private get tableData$(): Observable<ListObject[]> {
    return this.tableData.asObservable();
  }

  constructor() {
  }

  getData(): Observable<ListObject[]> {
    return this.tableData$;
  }

  private addElementToDataTable(tableElement: ListObject): void {
    this.tableData$.pipe(take(1)).subscribe((list: ListObject[]) => {
      list.push(tableElement);
      this.tableData.next(list);
    });
  }

  private removeAt(tableElement: any): void {
    this.tableData$.pipe(take(1)).subscribe((list: ListObject[]) => {
      const elementIndex = list.indexOf(tableElement);
      list.splice(elementIndex, 1);
      this.tableData.next(list);
    });
  }

  public addElement(listObject: ListObject) {
    this.addElementToDataTable(listObject);
  }

  public removeElement(listObject: ListObject) {
    this.removeAt(listObject);
  }
}
