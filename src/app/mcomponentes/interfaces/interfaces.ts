//-----------------------------------Interfaces de Personajes
export interface ObjectPersonajes {
  personajesdp: Personajesdp[];
}

export interface Personajesdp {
  armas: string;
  chaleco: string;
  debilidad: string;
  descripcion: string;
  id: number;
  nombre: string;
  url: string;
  velocidad: string;
  vida: string;
}
//-----------------------------------Interfaces de Personajes Detalle
export interface ObjectPersonajesDetalle {
    personajesdp?: PersonajesdpDetalle;
  }
  
  export interface PersonajesdpDetalle {
    armas?: string;
    chaleco?: string;
    debilidad?: string;
    descripcion?: string;
    id?: number;
    nombre?: string;
    url?: string;
    velocidad?: string;
    vida?: string;
  }