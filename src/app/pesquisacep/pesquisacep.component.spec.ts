import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisacepComponent } from './pesquisacep.component';

describe('PesquisacepComponent', () => {
  let component: PesquisacepComponent;
  let fixture: ComponentFixture<PesquisacepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesquisacepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesquisacepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
