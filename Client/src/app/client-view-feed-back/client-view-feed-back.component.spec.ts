import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientViewFeedBackComponent } from './client-view-feed-back.component';

describe('ClientViewFeedBackComponent', () => {
  let component: ClientViewFeedBackComponent;
  let fixture: ComponentFixture<ClientViewFeedBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientViewFeedBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientViewFeedBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
