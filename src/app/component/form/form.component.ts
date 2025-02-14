import { Component, inject } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { Evento } from '../../model/Evento';
import { EventService } from '../../service/event.service';
import { ObservableService } from '../../service/observable.service';

@Component({
  selector: 'app-form',
  imports: [CommonModule, NgIf, ReactiveFormsModule],
  templateUrl: './form.component.html',
})
export class FormComponent {

  private eventService: EventService = inject(EventService);
  private observableService: ObservableService = inject(ObservableService);
  private listaEventos: Evento[] = this.eventService.getAllEvents();
  
  constructor() {}

  eventForm = new FormGroup({
    "asunto": new FormControl("", [Validators.required, Validators.minLength(5)]),
    "descripcion": new FormControl("", [Validators.required, Validators.minLength(10)]),
    "cliente": new FormControl("", [Validators.required, Validators.minLength(3)]),
    "fecha": new FormControl("", [Validators.required, this.fechaValida()]),
    "categoria": new FormControl("", Validators.required),
  });

  fechaValida(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const fechaIngresada = new Date(control.value);
      const hoy = new Date();
      const haceUnMes = new Date();
      haceUnMes.setMonth(hoy.getMonth() - 1);
      
      if (fechaIngresada > hoy) {
        return { fechaPosterior: true };
      }
      
      if (fechaIngresada < haceUnMes) {
        return { fechaAnterior: true };
      }
      
      return null;
    };
  }

  submit() {
    console.log(this.eventForm.value);

    if (this.eventForm.valid) {
      const nuevoEvento: Evento = {
        id: this.listaEventos.length + 1,
        asunto: this.eventForm.value.asunto!,
        descripcion: this.eventForm.value.descripcion!,
        fecha: this.eventForm.value.fecha!,
        cliente: this.eventForm.value.cliente!,
        empleado: localStorage.getItem("username") ?? "",
        categoria: this.eventForm.value.categoria! as "log" | "warn" | "error",
        horaCreacion: new Date().toLocaleString(),
      }

      if (this.eventForm.value.categoria === "log") this.observableService.emitirLog();
      if (this.eventForm.value.categoria === "warn") this.observableService.emitirWarn();
      if (this.eventForm.value.categoria === "error") this.observableService.emitirError();

      this.eventService.addEvent(nuevoEvento);
      this.eventForm.reset();
    }
  }
}
