import { Injectable } from '@angular/core';
import {imgUrl, facebookUrl, infoAbout} from './app.constants';

@Injectable({
  providedIn: 'root'
})
export class PictureService {
  image = imgUrl;
  facebook = facebookUrl;
  infoAbout = infoAbout;
  constructor() { }
}
