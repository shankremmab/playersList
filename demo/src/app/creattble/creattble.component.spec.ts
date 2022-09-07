import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreattbleComponent } from './creattble.component';

describe('CreattbleComponent', () => {
  let component: CreattbleComponent;
  let fixture: ComponentFixture<CreattbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreattbleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreattbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

