import { Component, OnInit } from '@angular/core';
import { ClienteService } from "../cliente.service";
import { Cliente } from "../cliente.model";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  clientes$:Observable<Cliente[]>;

  constructor( private clienteService: ClienteService,
    private router: Router
 ) {
 
  }

  ngOnInit(): void {
    this.clientes$ = this.clienteService.getClientes();
  }

  //ionViewWillEnter() {
   //this.getCliente();
//}

  remover(cliente: Cliente) {
    this.clienteService.deleteCliente(cliente)
      .subscribe(
        ok => {
          console.log("Apagado");
          this.clientes$ = this.clienteService.getClientes();
        },
        erro => {
          console.log(erro);
        });
  }

  atualizar(cliente: Cliente) {
    //this.clienteService.atualizar(cliente);
    this.router.navigate(['tabs/tab2', cliente.id])
  }

  
  doRefresh(event) {
    console.log('Começou a operação async');
    this.clientes$ = this.clienteService.getClientes();

    setTimeout(() => {
      console.log('Operação Async terminou');
      event.target.complete();
    }, 3000);
  }

}
