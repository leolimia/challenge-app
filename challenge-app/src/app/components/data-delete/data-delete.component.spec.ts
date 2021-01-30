import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDeleteComponent } from './data-delete.component';

describe('DataDeleteComponent', () => {
  let component: DataDeleteComponent;
  let fixture: ComponentFixture<DataDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
