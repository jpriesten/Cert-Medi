import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { SectionCarouselComponent } from '../section-carousel/section-carousel.component';
import { SectionTeamComponent } from '../section-team/section-team.component';
import { SectionAboutComponent } from '../section-about/section-about.component';
import { SectionProductListComponent } from '../section-product-list/section-product-list.component';
import { SectionAdvicetListComponent } from '../section-advicet-list/section-advicet-list.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { MainMenuComponent } from '../main-menu/main-menu.component';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
