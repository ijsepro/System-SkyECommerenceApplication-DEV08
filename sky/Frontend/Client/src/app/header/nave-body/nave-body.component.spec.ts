import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaveBodyComponent } from './nave-body.component';

describe('NaveBodyComponent', () => {
  let component: NaveBodyComponent;
  let fixture: ComponentFixture<NaveBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaveBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaveBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
