import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatInputModule} from '@angular/material/input';

import {MatButtonModule} from '@angular/material/button';

import {MatPaginatorModule} from '@angular/material/paginator';

import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';

import { MatFormFieldModule } from '@angular/material/form-field';
const myModuleo=[
    MatTableModule,MatPaginatorModule,MatFormFieldModule,MatInputModule,MatSortModule,MatButtonModule
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    myModuleo
  ],
  exports:[myModuleo]
})
export class MaterialModule { }
