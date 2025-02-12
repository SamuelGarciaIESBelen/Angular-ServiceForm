export interface Evento {
    id: number;
    asunto: string;
    descripcion: string;
    fecha: string;
    cliente: string;
    empleado: string;
    categoria: "log" | "warn" | "error";
    horaCreacion: string;
}