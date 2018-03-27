import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
import { SectionProductListComponent } from './section-product-list/section-product-list.component';
import { SectionOurServicesComponent } from './section-our-services/section-our-services.component';
import { SectionAdvicetListComponent } from './section-advicet-list/section-advicet-list.component';
import { SubmenuFourComponent } from './submenu-four/submenu-four.component';
import { SubmenuThreeComponent } from './submenu-three/submenu-three.component';
import { SubmenuTwoComponent } from './submenu-two/submenu-two.component';
import { SubmenuOneComponent } from './submenu-one/submenu-one.component';

const routes: Routes = [

  { path: 'home', component: LayoutsComponent },
  { path: 'produits', component: SectionProductListComponent },
  { path: 'conseils', component: SectionAdvicetListComponent },
  { path: 'services', component: SectionOurServicesComponent },
  { path: 'sub-one', component: SubmenuOneComponent },
  { path: 'sub-two', component: SubmenuTwoComponent },
  { path: 'sub-three', component: SubmenuThreeComponent },
  { path: 'sub-four', component: SubmenuFourComponent },
  
  { path: '', redirectTo: '/home', pathMatch: 'full'}

];


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }
