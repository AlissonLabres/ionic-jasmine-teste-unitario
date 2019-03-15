import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { timer } from 'rxjs/observable/timer';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class ListaProvider {
  constructor(public httpClient: HttpClient) {}

  obterListaDeEsportes(): Observable<{ nome: string; icon: string }> {
    return timer(2000).switchMap(
      () => this.httpClient.get<{ nome: string; icon: string }>("assets/data/lista-esportes.json")
    );
  }
}
