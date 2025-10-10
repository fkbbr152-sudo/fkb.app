import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaCursoComponent } from './edita-curso.component';

describe('EditaCursoComponent', () => {
  let component: EditaCursoComponent;
  let fixture: ComponentFixture<EditaCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditaCursoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditaCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
