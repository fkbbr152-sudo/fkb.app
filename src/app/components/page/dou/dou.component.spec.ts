import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DouComponent } from './dou.component';

describe('DouComponent', () => {
  let component: DouComponent;
  let fixture: ComponentFixture<DouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DouComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
