import { Component } from '@angular/core';
import {MatToolbar, MatToolbarRow} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {MatIconButton} from '@angular/material/button';

@Component({
  selector: 'app-menu',
  imports: [MatToolbar, MatToolbarRow, MatIcon, MatMenuTrigger, MatMenu, MatMenuItem, MatIconButton],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  title = 'Menu';
}
