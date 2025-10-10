import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupToggleComponent } from './popup-toggle.component';

describe('PopupToggleComponent', () => {
  let component: PopupToggleComponent;
  let fixture: ComponentFixture<PopupToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupToggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
