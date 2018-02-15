import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SectionCarouselComponent } from './section-carousel/section-carousel.component';
import { SectionTeamComponent } from './section-team/section-team.component';
import { SectionAboutComponent } from './section-about/section-about.component';
import { SectionProductListComponent } from './section-product-list/section-product-list.component';
import { SectionAdvicetListComponent } from './section-advicet-list/section-advicet-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { MainMenuComponent } from './main-menu/main-menu.component';


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
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
