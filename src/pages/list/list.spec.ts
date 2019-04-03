import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaProvider } from './../../providers/lista/lista.provider';
import { ListPage } from './list';
describe('ListPage', () => {
  let component: ListPage;
  let fixture: ComponentFixture<ListPage>;
  beforeEach(() => {
    const navControllerStub = {};
    const listaProviderStub = {
      // obterListaDeEsportes: () => ({ catch: () => ({}) })
    };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ListPage],
      providers: [
        { provide: NavController, useValue: navControllerStub },
        { provide: ListaProvider, useValue: listaProviderStub }
      ]
    });
    fixture = TestBed.createComponent(ListPage);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  describe('ionViewDidLoad', () => {
    it('makes expected calls', () => {
      const listaProviderStub: ListaProvider = fixture.debugElement.injector.get(
        ListaProvider
      );
      spyOn(listaProviderStub, 'obterListaDeEsportes');
      component.ionViewDidLoad();
      expect(listaProviderStub.obterListaDeEsportes).toHaveBeenCalled();
    });
  });
});
