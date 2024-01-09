import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { ClickOutsideDirective } from '../../../../../shared/directives/click-outside.directive';
import { ApiSesionService } from 'src/app/core/services/api/sesion/api.sesion.service';

@Component({
    selector: 'app-profile-menu',
    templateUrl: './profile-menu.component.html',
    styleUrls: ['./profile-menu.component.scss'],
    standalone: true,
    imports: [
        ClickOutsideDirective,
        NgClass,
        RouterLink,
    ],
})
export class ProfileMenuComponent implements OnInit {
  public isMenuOpen = false;

  constructor(private apiacceso: ApiSesionService, private readonly _router: Router) {}

  ngOnInit(): void {}

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  public LogOff(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.apiacceso.logout();
    this._router.navigate(['/']);
  }
}
