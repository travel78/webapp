import {NgModule} from '@angular/core';
import {
  MatTableModule, MatTabsModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,
  MatToolbarModule, MatSelectModule, MatAutocompleteModule, MatOptionModule
} from '@angular/material';

@NgModule({
  imports: [],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatTableModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatOptionModule
  ]
})
export class MaterialModule {

}
