import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaalumnosComponent } from './listaalumnos.component';

describe('ListaalumnosComponent', () => {
  let component: ListaalumnosComponent;
  let fixture: ComponentFixture<ListaalumnosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaalumnosComponent]
    });
    fixture = TestBed.createComponent(ListaalumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
