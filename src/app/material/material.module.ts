import { NgModule } from '@angular/core';
import * as Material from '@angular/material';

import { MatSliderModule } from '@angular/material/slider';
// /CARDS/;
import { MatCardModule } from '@angular/material/card';
// GRIDLIST
import { MatGridListModule } from '@angular/material/grid-list';
// icon
import { MatIconModule } from '@angular/material/icon';
//table
import { MatTableModule } from '@angular/material/table';

const MaterialSliComponents = [MatSliderModule];
const MaterialCarComponents = [MatCardModule];
const MaterialGriComponents = [MatGridListModule];
const MaterialIcoComponents = [MatIconModule];
const MaterialtabComponents = [MatTableModule];

@NgModule({
  declarations: [],
  imports: [
    MaterialSliComponents,
    MaterialCarComponents,
    MaterialGriComponents,
    MaterialIcoComponents,
    MaterialtabComponents,
  ],
  exports: [
    MaterialCarComponents,
    MaterialCarComponents,
    MaterialGriComponents,
    MaterialIcoComponents,
    MaterialtabComponents,
  ],
})
export class MaterialModule {}
