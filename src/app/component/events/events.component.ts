import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Evento } from '../../model/Evento';
import { EventService } from '../../service/event.service';

@Component({
  selector: 'app-events',
  imports: [CommonModule],
  templateUrl: './events.component.html',
})
export class EventsComponent {
  
  private eventService: EventService = inject(EventService);
  
  listaEventos: Evento[] = [];
  
  constructor() { this.mostrarTodos(); }

  mostrarTodos() {    
    this.eventService.getAllEventos().subscribe((listaEventos: Evento[]) => { this.listaEventos = listaEventos; });
  }
  
  mostrarLogs() {
    this.eventService.getLogs().subscribe((listaLogs: Evento[]) => { this.listaEventos = listaLogs });
  }
  
  mostrarWarnings() {
    this.eventService.getWarns().subscribe((listaWarnings: Evento[]) => { this.listaEventos = listaWarnings });
  }
  
  mostrarErrores() {
    this.eventService.getErrors().subscribe((listaErrors: Evento[]) => { this.listaEventos = listaErrors });
  }

  eliminarEvento(id: number) {
    // No funciona con eventos recién añadidos, hay que reiniciar el JSON Server
    this.eventService.deleteEvento(id).subscribe();
  }
}
