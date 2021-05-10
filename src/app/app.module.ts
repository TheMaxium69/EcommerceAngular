import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { SupplierComponent } from './supplier/supplier.component';
import { ParentComponent } from './parent/parent.component';
import { EnfantComponent } from './enfant/enfant.component';
import { EnfanttComponent } from './enfantt/enfantt.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductListComponent,
    ProductComponent,
    SupplierComponent,
    ParentComponent,
    EnfantComponent,
    EnfanttComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
