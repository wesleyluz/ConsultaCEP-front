import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarufComponent } from './pesquisaruf.component';

describe('PesquisarufComponent', () => {
  let component: PesquisarufComponent;
  let fixture: ComponentFixture<PesquisarufComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesquisarufComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesquisarufComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
