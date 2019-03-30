import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ClienteService } from '../cliente/cliente.service';
import { Cliente } from '../cliente/cliente.model';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  cliente:Cliente;
  clientes: Cliente[];

  constructor(
    private clienteService: ClienteService,
    private router: Router, ) {
    this.clientes = this.clienteService.getClientes();
    this.cliente = this.clienteService.cliente;
  }

  remover(cliente:Cliente){
    this.clienteService.remove(cliente);
  }

  atualizar(cliente: Cliente) {
    this.clienteService.atualizar(cliente);
    this.router.navigate(['tabs/tab2'])
  }
}
