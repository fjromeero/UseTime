import { Hora } from "./Hora";

// Representa aquellos intervalos de tiempo en los que se puede asignar una tarea
export class HuecosLibres{
    
    // Dia 
    #dia: Date;

    // Array de intervalos de tiempo asignables a tareas
    #intervalos: Array<[Hora,Hora]>

    constructor(dia: Date, intervalos: Array<[Hora,Hora]>){
        this.#dia = dia;
        this.#intervalos = intervalos;
    }

}