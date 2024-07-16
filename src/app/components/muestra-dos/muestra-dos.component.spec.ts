import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestraDosComponent } from './muestra-dos.component';

describe('MuestraDosComponent', () => {
  let component: MuestraDosComponent;
  let fixture: ComponentFixture<MuestraDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuestraDosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuestraDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
