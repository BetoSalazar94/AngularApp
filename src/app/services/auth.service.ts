import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario/usuario.model';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url:string = 'https://identitytoolkit.googleapis.com/v1';
  private apiKey:string = 'AIzaSyDab5Rob2i04RfsGMyx_OESgCq_I367pVE';
  userToken:string;
  //crear nuevo usuario
 //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

//iniciar sesion
//https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]



  constructor(private http:HttpClient) { 
    this.leerToken();
   
  }

logout(){
    
  localStorage.removeItem('token');

}

login(usuario:UsuarioModel){

  const authData = {
    email:usuario.email,
    password:usuario.password,
    returnSecureToken:true

  };
 
  return this.http.post(`${this.url}/accounts:signInWithPassword?key=${this.apiKey}`, authData).
  pipe(
    map(resp => {
      this.guardaToken(resp['idToken']);
      return resp;
    })
  );


}

nuevoUsuario(usuario:UsuarioModel)
{

  
  const authData = {
    email:usuario.email,
    password:usuario.password,
    returnSecureToken:true

  };

  
  return this.http.post(`${this.url}/accounts:signUp?key=${this.apiKey}`, authData).
  pipe(
    map(resp => {
      this.guardaToken(resp['idToken']);
      return resp;
    })
  );

}

 private guardaToken(idToken:string){

    this.userToken = idToken;
    localStorage.setItem('token',idToken);
    let hoy = new Date();
    hoy.setSeconds(3600);
    localStorage.setItem('expira',hoy.getTime().toString())


 }

 leerToken(){

  if (localStorage.getItem('token')){
    this.userToken = localStorage.getItem('token');
  }
  else{this.userToken = '';}

  return this.userToken;

 }

 estaAutenticado():boolean{
  
  if (this.userToken.length < 2 ){
    return false;
  }

  const expira = Number(localStorage.getItem('expira'));
  const expiraDate = new Date();
  expiraDate.setTime(expira);
  
  if (expiraDate > new Date()){
    return true;
  }
  else{
    return false;
  }

 }
}
