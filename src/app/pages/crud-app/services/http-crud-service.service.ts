import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ICliente} from '../interfaces/ICliente'
import {IUsuario} from '../interfaces/iusuario'
import { Cliente } from '../model/cliente';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class HttpCrudService {

  private url: string = 'http://localhost:8080'
  private token: string = ''

  constructor(private http: HttpClient) { }

  getToken() {
    return this.token
  }

  private setToken(pToken: string): void {
    this.token = pToken
  }

  //Obtener token
  generarToken(pUser: Usuario): void {
    this.http.post(this.url + '/autenticarse', pUser)
  }


  //Obtener todos los clientes
  getAllClients() {
    return this.http.get(this.url + '/crud/all_clientes')
  }

  //Obtener cliente por id
  getClientId(pId: number) {
    return this.http.get<ICliente>(this.url + '/crud/cliente_id/'+pId)
  }

  //Obtener cliente por nombre
  getClientName(pName: string) {
    return this.http.get<ICliente>(this.url + '/crud/cliente_nombre/'+pName)
  }
  
  //Crear Cliente
  putNewClient(pCliente: Cliente) {
    return this.http.put(this.url + '/crud/crear_cliente', pCliente)
  }

  //Editar Cliente
  putEditClient(pCliente: Cliente) {
    return this.http.post(this.url + '/crud/actualizar_cliente', pCliente)
  }

  //Eliminar Cliente
  deleteClient(pId: number) {
    return this.http.delete(this.url + '/crud/borrar_cliente/'+ pId)
  }

}
