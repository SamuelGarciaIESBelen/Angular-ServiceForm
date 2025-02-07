import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoggerService} from "./logger.service";
import {DosComponent} from "./dos/dos.component";
import {UnoComponent} from "./uno/uno.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DosComponent, UnoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularLogService';

  constructor( private logger:LoggerService) {
    logger.log('Este es un mensaje de prueba.');
    logger.error('Este es un mensaje de error.');
    logger.warn('Este es un mensaje de advertencia.');
  }

  onInit(){
    this.logger.log('Este es un mensaje de prueba 22.');
    this.logger.error('Este es un mensaje de error 22.');
    this.logger.warn('Este es un mensaje de advertencia 22.');
  }
}
