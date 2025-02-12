import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Evento } from '../model/Evento';

import { EventService } from './event.service';

@Injectable({
  providedIn: 'root'
})

export class ObservableService {
  
  private eventService: EventService = inject(EventService);
  
  listaEventos: Evento[] = this.eventService.getAllEvents();
  
  private username = new BehaviorSubject<string>("");
  username$ = this.username.asObservable();
  
  contadorLog = this.listaEventos.filter((e) => e.categoria === "log").length;
  contadorWarn = this.listaEventos.filter((e) => e.categoria === "warn").length;
  contadorError = this.listaEventos.filter((e) => e.categoria === "error").length;

  private countLog = new BehaviorSubject<number>(this.contadorLog);
  countLog$ = this.countLog.asObservable();
  
  private countWarn = new BehaviorSubject<number>(this.contadorWarn);
  countWarn$ = this.countWarn.asObservable();
  
  private countError = new BehaviorSubject<number>(this.contadorError);
  countError$ = this.countError.asObservable();
  
  constructor() {}

  ngOnInit() {
    this.countLog.next(this.contadorLog);
    this.countWarn.next(this.contadorWarn);
    this.countError.next(this.contadorError);
  }

  emitirLog() {}
  emitirWarn() {}
  emitirError() {}
  
  emitirUsername(value: any) { this.username.next(value); }
}