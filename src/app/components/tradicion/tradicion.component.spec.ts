import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradicionComponent } from './tradicion.component';

describe('TradicionComponent', () => {
  let component: TradicionComponent;
  let fixture: ComponentFixture<TradicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradicionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
