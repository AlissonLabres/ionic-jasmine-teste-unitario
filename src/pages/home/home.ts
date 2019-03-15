import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Mensagens } from '../../consts/Mensagens.conts';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ListPage } from '../list/list';

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  mensagemDeBoasVindas: SafeHtml;

  constructor(
    public navCtrl: NavController,
    public domSanitizer: DomSanitizer
  ) {}

  ionViewDidLoad() {
    this.mensagemDeBoasVindas = this.domSanitizer.bypassSecurityTrustHtml(
      Mensagens.MENSAGEM_DE_BOAS_VINDAS
    );
  }

  abrirLista() {
    this.navCtrl.push(ListPage);
  }
}
