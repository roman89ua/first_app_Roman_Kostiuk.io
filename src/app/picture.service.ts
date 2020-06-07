import { Injectable } from '@angular/core';
import { imgUrl, facebookUrl, infoAbout } from './app.constants';
import { HttpClient } from '@angular/common/http';
import { CurrencyInterface } from './currency-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PictureService {
  image = imgUrl;
  facebook = facebookUrl;
  infoAbout = infoAbout;
  configUrl = 'assets/config.json';

  constructor(private http: HttpClient) { }

  getUrl() {
    return this.http.get(this.configUrl);
  }
  getCurrency(url): Observable<CurrencyInterface[]> {
    return this.http.get<CurrencyInterface[]>(url);
  }
}

