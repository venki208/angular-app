import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule
} from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatMenuModule, MatToolbarModule],
  exports: [MatButtonModule, MatMenuModule, MatToolbarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class MaterialModule {}
