import { Component } from '@angular/core';
import arrayWords from '../utils/words';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-gen';
  words ='';
  lim:number=10;
  handleSlideChange=(newlimit:number)=>{
    this.lim=newlimit;
  }
  genarate()
  {
    this.words=arrayWords.slice(0, this.lim).join();
  }

}
