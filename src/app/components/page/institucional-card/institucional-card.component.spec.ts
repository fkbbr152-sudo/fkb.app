import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitucionalCardComponent } from './institucional-card.component';

describe('InstitucionalCardComponent', () => {
  let component: InstitucionalCardComponent;
  let fixture: ComponentFixture<InstitucionalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitucionalCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitucionalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
