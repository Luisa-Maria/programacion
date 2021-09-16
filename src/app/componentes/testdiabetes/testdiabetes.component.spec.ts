import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestdiabetesComponent } from './testdiabetes.component';

describe('TestdiabetesComponent', () => {
  let component: TestdiabetesComponent;
  let fixture: ComponentFixture<TestdiabetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestdiabetesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestdiabetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
