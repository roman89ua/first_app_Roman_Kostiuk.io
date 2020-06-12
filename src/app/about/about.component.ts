import { Component, OnInit } from '@angular/core';
import { PictureService } from '../picture.service';
import { infoAbout } from '../app.constants';

// import {imgUrl, facebookUrl} from '../app.constants';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    // image = imgUrl ;
    // facebook = facebookUrl;
    public image: string;
    public facebook: string;
    public infoAbout: string[];
    constructor(private pictureService: PictureService) {

    }

    ngOnInit() {
        this.image = this.pictureService.image;
        this.facebook = this.pictureService.facebook;
        this.infoAbout = this.pictureService.infoAbout;
    }

}
