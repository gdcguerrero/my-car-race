import { Piloto } from "./piloto.model";

export interface Auto {
  id: number,
  color: string,
  piloto?: Piloto,
  distanciaRecorrida: number,
  estatus: string, // 
  arrancar(): void,
  actulizarDistancia(): void,
  detener() : void
}