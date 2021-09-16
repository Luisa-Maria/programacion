import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestanemiaComponent } from './testanemia.component';

describe('TestanemiaComponent', () => {
  let component: TestanemiaComponent;
  let fixture: ComponentFixture<TestanemiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestanemiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestanemiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
