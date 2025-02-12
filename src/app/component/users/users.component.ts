import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';

import { Empleado } from '../../model/Empleado';
import { EmpleadoService } from '../../service/empleado.service';

@Component({
  selector: 'app-users',
  imports: [NgFor, NgIf],
  templateUrl: './users.component.html',
})
export class UsersComponent {
  empleadoService: EmpleadoService = inject(EmpleadoService);
  listEmpleados: Empleado[] = [];

  constructor() { this.empleadoService.getAllEmpleados().then((listEmpleados: Empleado[]) => { this.listEmpleados = listEmpleados; }); }
}