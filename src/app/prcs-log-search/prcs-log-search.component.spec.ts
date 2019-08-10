import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrcsLogSearchComponent } from './prcs-log-search.component';

describe('PrcsLogSearchComponent', () => {
  let component: PrcsLogSearchComponent;
  let fixture: ComponentFixture<PrcsLogSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrcsLogSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrcsLogSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
