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
  
  listaEventos: Evento[] = this.eventService.getAllEvents();

  // CREO QUE NO ES EFICIENTE, SEGURO QUE SE PUEDE HACER MEJOR

  mostrarTodos() {
    console.log("Mostrar todos");
    
    this.listaEventos = this.eventService.getAllEvents();
  }
  
  mostrarLogs() {
    this.listaEventos = this.eventService.getAllEvents();
    console.log("Mostrar logs");

    this.listaEventos = this.listaEventos.filter(e => e.categoria === "log");
  }
  
  mostrarWarnings() {
    this.listaEventos = this.eventService.getAllEvents();
    console.log("Mostrar warnings");

    this.listaEventos = this.listaEventos.filter(e => e.categoria === "warn");
  }
  
  mostrarErrores() {
    this.listaEventos = this.eventService.getAllEvents();
    console.log("Mostrar errores");

    this.listaEventos = this.listaEventos.filter(e => e.categoria === "error");
  }
}
