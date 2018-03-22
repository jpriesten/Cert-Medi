import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

/* importing bootstrap */
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

/* ngx imports */
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

/* importing all app components */
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SectionCarouselComponent } from './section-carousel/section-carousel.component';
import { SectionTeamComponent } from './section-team/section-team.component';
import { SectionAboutComponent } from './section-about/section-about.component';
import { SectionProductListComponent } from './section-product-list/section-product-list.component';
import { SectionAdvicetListComponent } from './section-advicet-list/section-advicet-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SectionOurServicesComponent } from './section-our-services/section-our-services.component';


/* routing imports */
import { AppRoutingModule } from './/app-routing.module';

/* home page layout components importation */
import { LayoutsComponent } from './layouts/layouts.component';

// Service(s) imports
import { ContactService } from './contact.service';
import { ServicesSubmenuComponent } from './services-submenu/services-submenu.component';
import { SubmenuOneComponent } from './submenu-one/submenu-one.component';
import { SubmenuTwoComponent } from './submenu-two/submenu-two.component';
import { SubmenuThreeComponent } from './submenu-three/submenu-three.component';
import { SubmenuFourComponent } from './submenu-four/submenu-four.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SectionCarouselComponent,
    SectionTeamComponent,
    SectionAboutComponent,
    SectionProductListComponent,
    SectionAdvicetListComponent,
    ContactFormComponent,
    MainMenuComponent,
    LayoutsComponent,
    SectionOurServicesComponent,
    ServicesSubmenuComponent,
    SubmenuOneComponent,
    SubmenuTwoComponent,
    SubmenuThreeComponent,
    SubmenuFourComponent
  ], 
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgbModule.forRoot(),
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    AppRoutingModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
