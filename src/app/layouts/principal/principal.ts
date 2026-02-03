import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBar } from '../top-bar/top-bar';
import { SideBar } from '../side-bar/side-bar';

@Component({
  selector: 'app-principal',
  imports: [RouterOutlet, TopBar, SideBar],
  templateUrl: './principal.html',
  styleUrl: './principal.scss',
})
export class Principal {

}
