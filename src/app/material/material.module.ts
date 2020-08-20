import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

const material = [
  MatButtonModule,
  MatTableModule
];


@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
