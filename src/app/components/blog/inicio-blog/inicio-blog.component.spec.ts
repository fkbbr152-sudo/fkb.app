import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioBlogComponent } from './inicio-blog.component';

describe('InicioBlogComponent', () => {
  let component: InicioBlogComponent;
  let fixture: ComponentFixture<InicioBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioBlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
