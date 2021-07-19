import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Contenido {
  id?: string;
  Titulo: string;
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class SecondsService {

  API = 'http://localhost:1337/Datos'

  constructor(
   private http: HttpClient
  ) {} 

    getDatos (){
     return this.http.get(this.API)
    }

    getDatosById (id: string){
      return this.http.get<Contenido>(`${this.API}/${id}`);

    }

    createDatos(Titulo: string, descripcion: string) {
        return this.http.post(this.API,{
          Titulo, descripcion
    })
  }

    updateDatos (id: string, contenido: Contenido){
      return this.http.put(`${this.API}/${id}`, contenido);
      
    }
  
    
    deleteDatos (id: string){
      return this.http.delete(`${this.API}/${id}`)
    }

  }

