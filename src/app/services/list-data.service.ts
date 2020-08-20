import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {ListObject} from '../interface/list-object';
import {take} from 'rxjs/operators';


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

  public testFunction() {
    const test = {
      id: 1,
      name: 'Contract fix timeframe  - Lawful Basis Start and End date known with Interim Trigger.',
      status: 'ACTIVE',
      modifyBy: 'klg',
      modifyDate: '2019-01-30 12:27:22.000490',
      description: null,
      triggerdateLbman: false,
      triggerdateSvcscat: null,
      triggerdateItem: true,
      isinterimtrigger: false,
      constraintLbman: true,
      constraintSvcscat: null,
      constraintItem: false,
      purma: true,
      nntm: true,
      pdbtm: false,
      dsart: false,
      trigger: 8,
      interimtrigger: 33,
      constraint: 1,
      lbmanEffectivedeadlineinfo: 3,
      lbmanProcbasisref: 1,
      editable: true
    };
    this.addElementToDataTable(test);
  }
}
