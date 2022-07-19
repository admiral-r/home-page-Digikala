import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'digikala';
  imgNumber:number = 1;
  img:string = '../assets/img/bg-banner' + this.imgNumber + '.jpg';
  imgNum:number = 1;

  prevSlides() {
    if(this.imgNum == 1) {
      this.imgNum = 6; 
    }
    this.imgNum -= this.imgNumber;
    this.img = '../assets/img/bg-banner' + this.imgNum + '.jpg';
  }
  nextSlides() {
    if(this.imgNum == 5) {
      this.imgNum = 0; 
    }
    this.imgNum += this.imgNumber;
    this.img = '../assets/img/bg-banner' + this.imgNum + '.jpg';
  }
  backToTop() {
    window.scroll({ 
            top: 0
     });
 }


}
