import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
import { SectionProductListComponent } from './section-product-list/section-product-list.component';

const routes: Routes = [

  { path: 'home', component: LayoutsComponent },
  { path: 'produits', component: SectionProductListComponent },
  { path: 'home', component: LayoutsComponent },
  { path: 'home', component: LayoutsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}

];


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }
