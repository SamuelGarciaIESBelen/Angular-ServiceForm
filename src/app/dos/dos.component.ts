import { Component } from '@angular/core';
import {LoggerService} from "../logger.service";

@Component({
  selector: 'app-dos',
  standalone: true,
  imports: [],
  templateUrl: './dos.component.html',
  styleUrl: './dos.component.css'
})
export class DosComponent {
  constructor(private logger: LoggerService) {
    this.logger.warn('Advertencia desde Componente 2.');
  }
}
