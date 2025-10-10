import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexInicioComponent } from './index-inicio.component';

describe('IndexInicioComponent', () => {
  let component: IndexInicioComponent;
  let fixture: ComponentFixture<IndexInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexInicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
