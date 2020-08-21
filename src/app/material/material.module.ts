import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';

const material = [
  MatButtonModule,
  MatTableModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatCheckboxModule
];


@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
