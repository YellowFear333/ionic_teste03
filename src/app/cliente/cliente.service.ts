import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { Cliente } from "./cliente.model";
import { URL_API } from '../app.api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})

export class ClienteService {
  clientes: Cliente[];

  private urlCliente = URL_API + "clientes";

  constructor(
    private http:HttpClient
  ) {
    this.clientes = [];
  }

  addCliente(cliente: Cliente):Observable<Cliente> {
    //this.clientes.push(cliente);
    return this.http.post<Cliente>(this.urlCliente, cliente);
  }

  getClientes():Observable<Cliente[]> {
    //return this.clientes;
    return this.http.get<Cliente[]>(this.urlCliente);
  }

  deleteCliente(cliente: Cliente) {
    //let p = this.clientes.indexOf(cliente);
    //this.clientes.splice(p, 1)
    return this.http.delete<Cliente>(this.urlCliente + "/" + cliente.id);
  }

  validar(cliente: Cliente, confpws: string) {
    let erros: string = "";

    if (cliente.nome == null) {
      erros += "Nome em branco. <br>";
    }
    if (cliente.email == null) {
      erros += "E-mail em branco. <br>";
    }
    if (cliente.pws == null) {
      erros += "Senha em branco. <br>";
    } else if (cliente.pws.length < 5) {
      erros += "Senha Curta. <br>";
    } else if (cliente.pws != confpws) {
      erros += "Senhas diferentes. <br>";
    }

    if (erros != "") throw erros;

    return true;
    
    }
  }

