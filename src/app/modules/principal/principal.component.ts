import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
  standalone:true,
  imports:[RouterOutlet]
})
export class PrincipalComponent {
  constructor() {}

  ngOnInit(): void {}
}
