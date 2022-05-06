import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomizeInputComponent } from './randomize-input/randomize-input.component';
import { DragAndDropComponent } from 'src/app/modules/ramdomize-modul/components/drag-and-drop/drag-and-drop.component';
import { InputTableComponent } from './components/input-table/input-table.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RandomizeInputComponent,
    DragAndDropComponent,
    InputTableComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class RamdomizeModulModule { }
