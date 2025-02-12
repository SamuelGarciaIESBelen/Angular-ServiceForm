import { Component, inject } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { Evento } from '../../model/Evento';
import { EventService } from '../../service/event.service';

@Component({
  selector: 'app-form',
  imports: [CommonModule, NgIf, ReactiveFormsModule],
  templateUrl: './form.component.html',
})
export class FormComponent {

  private eventService: EventService = inject(EventService);
  private listaEventos: Evento[] = this.eventService.getAllEvents();
  constructor() {}

  eventForm = new FormGroup({
    "asunto": new FormControl("", [Validators.required, Validators.minLength(5)]),
    "descripcion": new FormControl("", [Validators.required, Validators.minLength(10)]),
    "cliente": new FormControl("", [Validators.required, Validators.minLength(3)]),
    "fecha": new FormControl("", [Validators.required, this.fechaValida()]),
    "categoria": new FormControl("", Validators.required),
  });

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

      this.eventService.addEvent(nuevoEvento);
      this.eventForm.reset();
    }
  }


  fechaValida(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const fechaIngresada = new Date(control.value);
      const hoy = new Date();
      const haceUnMes = new Date();
      haceUnMes.setMonth(hoy.getMonth() - 1); // Resta un mes a la fecha actual
  
      // Verifica si la fecha es posterior a hoy
      if (fechaIngresada > hoy) {
        return { fechaPosterior: true }; // Error: La fecha es posterior a hoy
      }
  
      // Verifica si la fecha es anterior a hace un mes
      if (fechaIngresada < haceUnMes) {
        return { fechaAnterior: true }; // Error: La fecha es anterior al último mes
      }
  
      return null; // La fecha es válida
    };
  }

}
