import { Cliente } from './../cliente/cliente.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ClienteService } from '../cliente/cliente.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  cliente: Cliente = new Cliente();
  clientes: Cliente[] = [];
  confPws: string = "";

  constructor(
    public alertController: AlertController,
    private clienteService: ClienteService
  ) {
    this.cliente = new Cliente;
  }

  addCliente(cliente: Cliente) {
    try {
      this.cliente.validar(this.confPws);

      //this.clientes.push(cliente);
      this.clienteService.addCliente(cliente);
      this.cliente = new Cliente;
      this.confPws = "";


      this.presentAlert("Aviso", "Cadastrado", "Success")

     
    } catch (erros) {
      
      this.presentAlert("ERRO", erros, "Warning");
    }
  

  }


  async presentAlert(tipo:string, texto:string, cor:string) {
    const alert = await this.alertController.create({
      header: tipo,
      //subHeader: 'Subtitle',
      message: texto,
      cssClass: cor,
      buttons: ['OK']
    });

    await alert.present();
  }


}

