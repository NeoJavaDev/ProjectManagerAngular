import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusTaskComponent } from './focus-task.component';

describe('FocusTaskComponent', () => {
  let component: FocusTaskComponent;
  let fixture: ComponentFixture<FocusTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FocusTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FocusTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
