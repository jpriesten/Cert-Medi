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

  onclick(){
    window.alert("hello");
  }
  anchorClick(event) {
    const anchor = event.srcElement.getAttribute('anchor');
    document.getElementById(anchor).scrollIntoView();
  }

}
