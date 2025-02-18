import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Evento } from '../model/Evento';

import { EventService } from './event.service';

@Injectable({
  providedIn: 'root'
})

export class ObservableService {
  
  private eventService: EventService = inject(EventService);
  
  listaEventos: Evento[] = [];
  
  private username = new BehaviorSubject<string>("");
  username$ = this.username.asObservable();
  
  contadorLog = 0;
  contadorWarn = 0;
  contadorError = 0;

  private countLog = new BehaviorSubject<number>(this.contadorLog);
  countLog$ = this.countLog.asObservable();
  
  private countWarn = new BehaviorSubject<number>(this.contadorWarn);
  countWarn$ = this.countWarn.asObservable();
  
  private countError = new BehaviorSubject<number>(this.contadorError);
  countError$ = this.countError.asObservable();
  
  constructor() {
    this.eventService.getAllEventos().subscribe((listaEventos: Evento[]) => { this.listaEventos = listaEventos; });

    this.contadorLog = this.listaEventos.filter((e) => e.categoria === "log").length;
    this.contadorWarn = this.listaEventos.filter((e) => e.categoria === "warn").length;
    this.contadorError = this.listaEventos.filter((e) => e.categoria === "error").length;

    this.countLog.next(this.contadorLog);
    this.countWarn.next(this.contadorWarn);
    this.countError.next(this.contadorError);
  }

  emitirLog() {
    this.countLog.next(this.countLog.value + 1);
  }
  
  emitirWarn() {
    this.countWarn.next(this.countWarn.value + 1);
  }
  
  emitirError() {
    this.countError.next(this.countError.value + 1);
  }
  
  emitirUsername(value: any) { this.username.next(value); }
}