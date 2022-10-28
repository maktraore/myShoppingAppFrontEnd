import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path: 'category/:cid', component:ProductComponent},
  {path: 'home', component:ProductComponent},
  {path: 'addProduct', component:AddProductComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
