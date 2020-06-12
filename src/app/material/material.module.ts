import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

const Material = [MatToolbarModule, MatMenuModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...Material],
  exports: Material,
})
export class MaterialModule {}
