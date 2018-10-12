import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterhousesComponent } from './filterhouses.component';

describe('FilterhousesComponent', () => {
  let component: FilterhousesComponent;
  let fixture: ComponentFixture<FilterhousesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterhousesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterhousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
