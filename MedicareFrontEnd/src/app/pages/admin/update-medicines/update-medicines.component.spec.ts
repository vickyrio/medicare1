import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMedicinesComponent } from './update-medicines.component';

describe('UpdateMedicinesComponent', () => {
  let component: UpdateMedicinesComponent;
  let fixture: ComponentFixture<UpdateMedicinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMedicinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
