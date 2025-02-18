import { Injectable } from '@angular/core';
import { Empleado } from '../model/Empleado';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

    private url = 'http://localhost:3000/empleados';

    constructor(private http: HttpClient) { }
  
    getAllEmpleados() { return this.http.get<Empleado[]>(this.url); }

    getEmpleado(id: number) { return this.http.get<Empleado>(`${this.url}/${id}`); }

    addEmpleado(empleado: Empleado) { return this.http.post<Empleado>(this.url, empleado); }

    updateEmpleado(empleado: Empleado) { return this.http.put<Empleado>(`${this.url}/${empleado.id}`, empleado); }

    deleteEmpleado(id: number) { return this.http.delete(`${this.url}/${id}`); }
}