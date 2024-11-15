import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendelesleadasComponent } from './rendelesleadas.component';

describe('RendelesleadasComponent', () => {
  let component: RendelesleadasComponent;
  let fixture: ComponentFixture<RendelesleadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RendelesleadasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RendelesleadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
