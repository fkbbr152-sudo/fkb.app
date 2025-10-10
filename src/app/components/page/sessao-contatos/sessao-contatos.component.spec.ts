import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessaoContatosComponent } from './sessao-contatos.component';

describe('SessaoContatosComponent', () => {
  let component: SessaoContatosComponent;
  let fixture: ComponentFixture<SessaoContatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessaoContatosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SessaoContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
