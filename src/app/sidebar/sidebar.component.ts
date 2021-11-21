import { Component, OnInit } from '@angular/core';
import { Path } from '../paths';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  paths: typeof Path = Path;
}
