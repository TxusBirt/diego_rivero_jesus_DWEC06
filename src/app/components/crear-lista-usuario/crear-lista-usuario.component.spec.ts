import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearListaUsuarioComponent } from './crear-lista-usuario.component';

describe('CrearListaUsuarioComponent', () => {
  let component: CrearListaUsuarioComponent;
  let fixture: ComponentFixture<CrearListaUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearListaUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearListaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
