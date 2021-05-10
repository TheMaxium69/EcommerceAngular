import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfanttComponent } from './enfantt.component';

describe('EnfanttComponent', () => {
  let component: EnfanttComponent;
  let fixture: ComponentFixture<EnfanttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnfanttComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfanttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
