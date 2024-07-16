import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestraUnoComponent } from './muestra-uno.component';

describe('MuestraUnoComponent', () => {
  let component: MuestraUnoComponent;
  let fixture: ComponentFixture<MuestraUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuestraUnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuestraUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
