import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ICliente } from '../interfaces/ICliente'
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

  setToken(pToken): void {
    this.token = pToken
  }

  //Obtener token
  generarToken(pUser: Usuario) {
    return this.http.post(this.url + '/autenticarse', pUser, { responseType: 'text' })
  }


  //Obtener todos los clientes
  getAllClients() {
    const headers = {
      responseType: 'json',
      'token': this.getToken()
    }
    return this.http.get(this.url + '/crud/all_clientes', { headers })
  }

  //Obtener cliente por id
  getClientId(pId: number) {
    const headers = {
      responseType: 'json',
      'token': this.getToken()
    }
    return this.http.get<ICliente>(this.url + '/crud/cliente_id/' + pId, { headers })
  }

  //Obtener cliente por nombre
  getClientName(pName: string) {
    const headers = {
      responseType: 'json',
      'token': this.getToken()
    }
    return this.http.get<ICliente[]>(this.url + '/crud/cliente_nombre/' + pName, { headers })
  }

  //Crear Cliente
  putNewClient(pCliente) {
    const headers = {
      responseType: 'text',
      'token': this.getToken()
    }
    return this.http.put(this.url + '/crud/crear_cliente', pCliente, { headers })
  }

  //Editar Cliente
  putEditClient(pCliente: Cliente) {
    const headers = {
      responseType: 'text',
      'token': this.getToken()
    }
    return this.http.post(this.url + '/crud/actualizar_cliente', pCliente, { headers })
  }

  //Eliminar Cliente
  deleteClient(pId: number) {
    const headers = {
      responseType: 'text',
      'token': this.getToken()
    }
    return this.http.delete(this.url + '/crud/borrar_cliente/' + pId, { headers })
  }


}
