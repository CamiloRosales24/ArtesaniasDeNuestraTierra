import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestraTresComponent } from './muestra-tres.component';

describe('MuestraTresComponent', () => {
  let component: MuestraTresComponent;
  let fixture: ComponentFixture<MuestraTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuestraTresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuestraTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
