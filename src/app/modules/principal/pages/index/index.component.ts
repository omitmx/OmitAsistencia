import { Component } from '@angular/core';
import { IndexHeaderComponent } from '../../components/index/index-header/index-header.component';
import { IndexContentComponent } from '../../components/index/index-content/index-content.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  standalone: true,
  imports:[IndexHeaderComponent,IndexContentComponent],
})
export class IndexComponent {

}
