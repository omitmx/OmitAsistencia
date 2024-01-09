import { Component } from '@angular/core';
import { ThemeService } from './core/services/theme.service';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { ResponsiveHelperComponent } from './shared/components/responsive-helper/responsive-helper.component';
import { MsgModule } from "./shared/modules/msg/msg.module";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [NgClass, RouterOutlet, ResponsiveHelperComponent, MsgModule]
    
})
export class AppComponent {
  title = 'Omit-Asistencia';

  constructor(public themeService: ThemeService) {}
}
