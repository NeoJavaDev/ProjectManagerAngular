import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusProjectComponent } from './focus-project.component';

describe('FocusProjectComponent', () => {
  let component: FocusProjectComponent;
  let fixture: ComponentFixture<FocusProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FocusProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FocusProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
