import { Component } from '@angular/core';
import { Carrera } from './models/carrera.model';
import { Piloto } from './models/piloto.model';
import { Auto } from './models/auto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-car-race';

  constructor(){

    const p1 : Piloto = { id : 1, nombre : 'Diego', apellido : 'Da', nacionalidad : 'México' }
    const p2 : Piloto = { id : 2, nombre : 'Carlos', apellido : 'Ca', nacionalidad : 'USA' }
    const p3 : Piloto = { id : 3, nombre : 'Luis', apellido : 'La', nacionalidad : 'Brasil' }
    const p4 : Piloto = { id : 4, nombre : 'Ernesto', apellido : 'Ea', nacionalidad : 'Argentina' }
    
    const a1 : Auto = {id : 11, color : 'Morado', piloto : p1, distanciaRecorrida: 0, estatus : 'Detenido',
      actulizarDistancia( distancia: number ){ 
        (this.distanciaRecorrida>=400)? this.distanciaRecorrida+=50 : this.distanciaRecorrida+=distancia
      },
      arrancar(){ 
        this.estatus = 'Avanzando', this.actulizarDistancia(Math.floor(Math.random() * 51))
      },
      detener(){
        this.estatus = 'Detenido'
      }
    }
    const a2 : Auto = {id : 12, color : 'Rojo', piloto : p2, distanciaRecorrida: 0, estatus : 'Detenido',
      actulizarDistancia( distancia: number ){ 
        (this.distanciaRecorrida>=400)? this.distanciaRecorrida+=50 : this.distanciaRecorrida+=distancia
      },
      arrancar(){ 
        this.estatus = 'Avanzando', this.actulizarDistancia(Math.floor(Math.random() * 51))
      },
      detener(){
        this.estatus = 'Detenido'
      }
    }
    const a3 : Auto = {id : 13, color : 'Verde', piloto : p3, distanciaRecorrida: 0, estatus : 'Detenido',
      actulizarDistancia( distancia: number ){ 
        (this.distanciaRecorrida>=400)? this.distanciaRecorrida+=50 : this.distanciaRecorrida+=distancia
      },
      arrancar(){ 
        this.estatus = 'Avanzando', this.actulizarDistancia(Math.floor(Math.random() * 51))
      },
      detener(){
        this.estatus = 'Detenido'
      }
    }
    const a4 : Auto = {id : 14, color : 'Azul', piloto : p4, distanciaRecorrida: 0, estatus : 'Detenido',
      actulizarDistancia( distancia: number ){ 
        (this.distanciaRecorrida>=400)? this.distanciaRecorrida+=50 : this.distanciaRecorrida+=distancia
      },
      arrancar(){ 
        this.estatus = 'Avanzando', this.actulizarDistancia(Math.floor(Math.random() * 51))
      },
      detener(){
        this.estatus = 'Detenido'
      }
    }
    const a5 : Auto = {id : 15, color : 'Dorado', distanciaRecorrida: 0, estatus : 'Detenido',
      actulizarDistancia( distancia: number ){ 
        (this.distanciaRecorrida>=400)? this.distanciaRecorrida+=50 : this.distanciaRecorrida+=distancia
      },
      arrancar(){ 
        this.estatus = 'Avanzando', this.actulizarDistancia(Math.floor(Math.random() * 51))
      },
      detener(){
        this.estatus = 'Detenido'
      }
    }
    
    const carrera : Carrera = {autos : [a1,a2,a3,a4,a5], vueltas : 4, distancia: 100, estatus : 'Nueva' }

  }


  iniciarCarrera(carrera : Carrera){
    if (carrera.estatus == 'Nueva') {
      carrera.autos.forEach(element => element.arrancar());
      carrera.estatus='En Proceso';
    } else {
      console.log('La carrera no a comenzado');
    }
  }

  actualizar(carrera : Carrera){
    const meta = carrera.distancia * carrera.vueltas;
    let autoFinalizo : number;
    if (carrera.estatus=='En Proceso') {
      while (carrera.estatus == 'Terminada') {
        carrera.autos.forEach(element => element.actulizarDistancia(Math.floor(Math.random() * 51)),
        if (meta == element.distanciaRecorrida) {
          autoFinalizo++;
        })
        
      }
    } else {
        console.log('La carrera ya termino');
    }
  }
}