import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetterHttpServiceComponentComponent } from './better-http-service-component.component';

describe('BetterHttpServiceComponentComponent', () => {
  let component: BetterHttpServiceComponentComponent;
  let fixture: ComponentFixture<BetterHttpServiceComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetterHttpServiceComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetterHttpServiceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
