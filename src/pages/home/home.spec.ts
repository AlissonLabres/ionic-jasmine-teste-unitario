import { HomePage } from './home';
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { NavController } from "ionic-angular";

describe('HomePage', () => {

  let fixture: ComponentFixture<HomePage>;
  let instance: HomePage;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [HomePage],
      providers: [NavController]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    instance = fixture.debugElement.componentInstance;
  });

  it('deve iniciar a página HomePage', () => {
    expect(instance).toBeTruthy();
  });

  it('deve verificar existencia de texto "Bem-Vindos" em elemento h3', () => {
    const elementoH3 = fixture.debugElement.nativeElement.querySelector('h3');

    expect(elementoH3.innerText).toBe('Bem-vindos');
  })
});
