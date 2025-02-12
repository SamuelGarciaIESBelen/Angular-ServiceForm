import {Injectable} from '@angular/core';

import { Evento } from '../model/Evento';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private listaEventos: Evento[];
  
  /* constructor() { this.listaEventos = [] } */
  
  constructor() { this.listaEventos = [
    {id: 1, asunto: "Incidencia 1", descripcion: "No se ha liado mucho", cliente: "Sam", empleado: "Samuel", fecha: "2025-02-07", categoria: "log", horaCreacion: "12/2/2025, 19:38:25"},
    {id: 2, asunto: "Incidencia 2", descripcion: "Hay que intentar solucionarlo ya", cliente: "Sam", empleado: "Samuel", fecha: "2025-02-07", categoria: "warn", horaCreacion: "12/2/2025, 19:38:25"},
    {id: 3, asunto: "Incidencia 3", descripcion: "La madre del cordero, la que se ha liado", cliente: "Sam", empleado: "Samuel", fecha: "2025-02-07", categoria: "error", horaCreacion: "12/2/2025, 19:38:25"},
  ] }

  getAllEvents() {
    return this.listaEventos;
  }

  addEvent(evento: Evento) {
    this.listaEventos.push(evento);
  }
}