import { Injectable } from '@angular/core';
import { Empleado } from '../model/Empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

    private url = 'http://localhost:3000/empleados';

    constructor() { }
  
    async getAllEmpleados(): Promise<Empleado[]> {
        const data = await fetch(this.url);
        return (await data.json()) ?? [];
    }

    async getEmpleado(id: number): Promise<Empleado | undefined> {
        const data = await fetch(`${this.url}/${id}`);
        return (await data.json()) ?? {};
    }
}