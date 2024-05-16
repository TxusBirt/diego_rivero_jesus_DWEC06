import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasGeneradasComponent } from './listas-generadas.component';

describe('ListasGeneradasComponent', () => {
  let component: ListasGeneradasComponent;
  let fixture: ComponentFixture<ListasGeneradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListasGeneradasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListasGeneradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
