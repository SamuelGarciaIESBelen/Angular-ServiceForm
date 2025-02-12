export interface Evento {
    idEmpleado: number;
    
    id: number;
    nombre: string;
    descripcion: string;
    fecha: Date;
    categoria: "log" | "warn" | "error";
}