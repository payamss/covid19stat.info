import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTotalDataComponent } from './table-total-data.component';

describe('TableTotalDataComponent', () => {
  let component: TableTotalDataComponent;
  let fixture: ComponentFixture<TableTotalDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTotalDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTotalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
