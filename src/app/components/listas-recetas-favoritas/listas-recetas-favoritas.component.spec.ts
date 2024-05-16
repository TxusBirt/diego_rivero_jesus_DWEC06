import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasRecetasFavoritasComponent } from './listas-recetas-favoritas.component';

describe('ListasRecetasFavoritasComponent', () => {
  let component: ListasRecetasFavoritasComponent;
  let fixture: ComponentFixture<ListasRecetasFavoritasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListasRecetasFavoritasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListasRecetasFavoritasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
