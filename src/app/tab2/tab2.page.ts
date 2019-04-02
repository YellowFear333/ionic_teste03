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
  cliente: Cliente;
  confPws: string;

  constructor(
    public alertController: AlertController,
    private clienteService: ClienteService
  ) {
    
  }

  ngOnInit(): void {
    this.cliente = new Cliente;
  }

  formDados(form){
    if (form.valid){
      this.addCliente(this.cliente) ? form.reset() : null;
    }
  }

  addCliente(cliente: Cliente): boolean {
      this.clienteService.addCliente(cliente)
      .subscribe(
        ok=>{
          this.presentAlert("Ebaaaa!", "Cadastro efetuado com Sucesso!", "Success");
          this.cliente = new Cliente;
          this.confPws = "";
    
        },
        erro=>{
          this.presentAlert("ERRO", "", "Danger");
          return false;
        }
      );
      return true
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

