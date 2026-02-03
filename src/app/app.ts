import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // protected readonly title = signal('nuev-front-tesis');
  private readonly baseUrl = environment.apiUrl;

  constructor() {
    console.log('Conectado a:', this.baseUrl);
    console.log('Modo producción:', environment.production);
  }
}
