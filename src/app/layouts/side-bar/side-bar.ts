import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';

@Component({
  selector: 'app-side-bar',
  imports: [PanelMenuModule],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.scss',
})
export class SideBar {
  items: MenuItem[] = [
    {
      label: 'Home', 
      icon: 'pi pi-fw pi-home', 
      routerLink: '/home'
    },
    { label: 'Investigación', 
      icon: 'pi pi-book', 
      items: [
        { label: 'Metodología', icon: 'pi pi-list' },
        { label: 'Resultados', icon: 'pi pi-chart-bar' }
    ]},
  ]
}
