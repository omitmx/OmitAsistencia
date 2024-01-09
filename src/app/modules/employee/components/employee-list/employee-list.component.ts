import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NftAuctionsTableItemComponent } from 'src/app/modules/dashboard/components/nft/nft-auctions-table-item/nft-auctions-table-item.component';
import { Nft } from 'src/app/modules/dashboard/models/nft';

@Component({
  selector: '[app-employee-list]',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  standalone:true,
  imports: [NgFor,AngularSvgIconModule, NftAuctionsTableItemComponent],
})
export class EmployeeListComponent implements OnInit {
  public activeAuction: Nft[] = [];

  constructor() {
    this.activeAuction = [
      {
        id: 1346771,
        title: 'Cripto Cities',
        creator: 'Jenny Wilson',
        image:
          'https://lh3.googleusercontent.com/t_S1sM__cKCFbuhbwQ5JHKNRRggKuPH2O3FM_-1yOxJLRzz9VRMAPaVBibgrumZG3qsB1YxEuwvB7r9rl-F-gI6Km9NlfWhecfPS=h500',
        avatar: 'https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-13.jpg',
        ending_in: '1h 43m 52s',
        last_bid: 22.0,
        price: 35330.9,
        instant_price: 22.0,
      },
    
    ];
  }

  ngOnInit(): void {}
}
