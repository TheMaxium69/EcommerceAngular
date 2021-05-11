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
import { TestComponent } from './test/test.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { ClientComponent } from './client/client.component';


const routes: Routes = [
  { path: 'home', component: SupplierComponent   },
  { path: 'art', component: ParentComponent },
  { path: 'test', component: TestComponent },
  { path: 'prod', component: ProductComponent},
  { path: 'client/:id', component: ClientComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  //{ path: '**', component: ParentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductListComponent,
    ProductComponent,
    SupplierComponent,
    ParentComponent,
    EnfantComponent,
    EnfanttComponent,
    TestComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule {

}
