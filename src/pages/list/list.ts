import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ListaProvider } from './../../providers/lista/lista.provider';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { of } from 'rxjs/observable/of';

@Component({
  selector: "page-list",
  templateUrl: "list.html"
})
export class ListPage {
  listaEsportes$: Observable<{ nome: string; icon: string }>;
  errorListaEsportes: string = '';
  itemSelecionado: { nome: string; icon: string };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private listaProvider: ListaProvider
  ) {}

  ionViewDidLoad() {
    this.listaEsportes$ = this.listaProvider.obterListaDeEsportes()
      .catch(() => {
        this.errorListaEsportes = 'Erro ao obter lista de esportes';
        return of(null);
      })
  }

  selecionarItem(item) {
    this.itemSelecionado = item;
  }
}
