import { Component } from '@angular/core';
import {LoggerService} from "../logger.service";

@Component({
  selector: 'app-uno',
  standalone: true,
  imports: [],
  templateUrl: './uno.component.html',
  styleUrl: './uno.component.css'
})
export class UnoComponent {
  constructor(private logger: LoggerService) {
    this.logger.log('Mensaje desde Componente 1.');
  }
}
