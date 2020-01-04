import { Component, OnInit } from '@angular/core';

import {imgUrl, facebookUrl} from '../app.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  image = imgUrl;
  facebook = facebookUrl;

  constructor() { }

  ngOnInit() {
  }

}
