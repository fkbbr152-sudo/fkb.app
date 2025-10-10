import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoNavBarComponent } from './novo-nav-bar.component';

describe('NovoNavBarComponent', () => {
  let component: NovoNavBarComponent;
  let fixture: ComponentFixture<NovoNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovoNavBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
