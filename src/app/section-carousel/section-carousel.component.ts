import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-carousel',
  templateUrl: './section-carousel.component.html',
  styleUrls: ['./section-carousel.component.css']
})
export class SectionCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'ngbd-carousel-basic',
  templateUrl: './section-carousel.component.html'
})
export class NgbdCarouselBasic {
}


 
@Component({
  selector: 'demo-carousel-basic',
  templateUrl: './section-carousel.component.html'
})
export class DemoCarouseBasicComponent {}