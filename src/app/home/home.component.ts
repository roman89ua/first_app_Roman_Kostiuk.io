import { Component, OnInit } from '@angular/core';
import {PictureService} from '../picture.service';

// import {imgUrl, facebookUrl} from '../app.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // image = imgUrl;
  // facebook = facebookUrl;
  public image: string ;
  public facebook: string ;
  constructor(private pictureService: PictureService ) { 

  }

  ngOnInit() {
    this.image = this.pictureService.image;
    this.facebook = this.pictureService.facebook;

  }

}
