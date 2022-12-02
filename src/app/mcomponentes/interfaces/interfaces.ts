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
  //-----------------interfaces --- SECRETOS
export interface ObjectSecretos {
  secretos: Secreto[];
}

export interface Secreto {
  acertijo: string;
  beneficio: string;
  id: number;
  nombre: string;
  respuesta: string;
  url1: string;
  url2: string;
}
//// -----------interfaces --- detalle -- SECRETOS
export interface ObjectSecretosDetalle {
  secretos?: SecretoDetalle;
}

export interface SecretoDetalle {
  acertijo?: string;
  beneficio?: string;
  id?: number;
  nombre?: string;
  respuesta?: string;
  url1?: string;
  url2?: string;
}

// ---------- interfaces de niveles

export interface ObjectNivel {
  nivel: Nivel[];
}

export interface Nivel {
  descripcion: string;
  enemigos: number;
  id: number;
  items: number;
  nombre: string;
  plataformasEstaticas: number;
  plataformasMoviles: number;
  secretos: number;
  tiempoAproxJuego: number;
  url1: string;
  url2: string;
  url3: string;
  url4: string;
}

//-------------------interfaz de HISTORIA

export interface ObjectHistoria {
  historia: Historia[];
}

export interface Historia {
  id: number;
  nombre: string;
  parrafo1: string;
  parrafo2: string;
  url1: string;
}

//-----------------------------> interfaces de "nosotros"
export interface ObjectNosotros {
  nosotros: Nosotro[];
}
export interface Nosotro {
  apellidoM: string;
  apellidoP: string;
  edad: string;
  email: string;
  id: number;
  img: string;
  nombre: string;
}