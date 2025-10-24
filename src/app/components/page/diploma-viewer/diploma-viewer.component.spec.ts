import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomaViewerComponent } from './diploma-viewer.component';

describe('DiplomaViewerComponent', () => {
  let component: DiplomaViewerComponent;
  let fixture: ComponentFixture<DiplomaViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiplomaViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiplomaViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
