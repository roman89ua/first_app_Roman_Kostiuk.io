import { Component, OnInit } from '@angular/core';
import { PictureService } from '../picture.service';
import { CurrencyInterface } from '../currency-interface';

@Component({
    selector: 'app-currency',
    templateUrl: './currency.component.html',
    styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
    currensyList: CurrencyInterface[] = [];
    loading = false;
    displayedColumns = ['txt', 'cc', 'rate'];

    constructor(private pictureService: PictureService) { }

    ngOnInit() {
        this.loading = true;
        this.pictureService.getUrl()
            .subscribe((data: any) => {
                const url = data.currencyUrl;
                this.pictureService.getCurrency(url)
                    .subscribe((cur: CurrencyInterface[]) => {
                        this.currensyList = cur;
                        this.loading = false;

                    });
            });
    }
}
