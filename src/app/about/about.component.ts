import { Component, OnInit } from '@angular/core';

import {imgUrl, facebookUrl} from '../app.constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  image = imgUrl ;
  facebook = facebookUrl;
  
  constructor() { }

  ngOnInit() {
  }

}
