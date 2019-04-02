import { Component } from '@angular/core';
import { ClienteService } from "../cliente/cliente.service";
import { Cliente } from "../cliente/cliente.model";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  clientes$:Observable<Cliente[]>;

  constructor(
    private clienteService: ClienteService,
     private router: Router, ) {
 
  }

  doRefresh(event) {
    console.log('Começou a operação async');
    this.clientes$ = this.clienteService.getClientes();

    setTimeout(() => {
      console.log('Operação Async terminou');
      event.target.complete();
    }, 3000);
  }


  ngOnInit(): void {
    this.clientes$ = this.clienteService.getClientes();
  }

  //ionViewWillEnter() {
   //this.getCliente();
//}

  remover(cliente: Cliente) {
    //this.clienteService.deleteCliente(cliente);
  }

  atualizar(cliente: Cliente) {
    //this.clienteService.atualizar(cliente);
    this.router.navigate(['tabs/tab2']);
  }
}
