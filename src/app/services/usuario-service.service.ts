import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {usr} from '../models/usr';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {
  Usrs: Observable<any>
  Usr:Observable<any>
  api_url ='http://localhost:3000/api'
  constructor(private http:HttpClient) { 

  }

  //obtiente todos los usuarios
  GetAllUsr(){
    return this.http.get(`${this.api_url}/usuarios/`);
  }
  //alt+96=acento grave obtiente usr por el id
  getUsrByMatricula(id: string){
    return this.http.get(`${this.api_url}/usuarios/${id}`);
  }

  //Registra un usuario
  saveUsr(usr: usr){
    return this.http.post(`${this.api_url}/usuarios/`, usr);
  }


  //Actualiza un usuario
  updUser(id : string,usuario:usr): Observable<usr>{
    return this.http.put(`${this.api_url}/usuarios/${id}`, usuario);
  }

  //Desactiva o activa un usuario
  DesActUsr(id : string){
    return this.http.delete(`${this.api_url}/usuarios/${id}`);
  }

}
