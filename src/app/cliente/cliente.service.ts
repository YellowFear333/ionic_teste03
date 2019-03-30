import { Injectable } from '@angular/core';
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  clientes:Cliente[];
  cliente: Cliente;

  constructor() {
    this.clientes = [];
  }


    addCliente(cliente:Cliente): void {
      this.clientes.push(cliente);
    }

    getClientes(){
      return this.clientes;
    }

    remove(cliente:Cliente):void{
      let p = this.clientes.indexOf(cliente);
      this.clientes.splice(p,1);
    }

    atualizar(cliente: Cliente): void {
      this.cliente = cliente;
      console.log(this.cliente);
    }

   }

