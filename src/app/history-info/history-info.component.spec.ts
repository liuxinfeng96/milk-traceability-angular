import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryInfoComponent } from './history-info.component';

describe('HistoryInfoComponent', () => {
  let component: HistoryInfoComponent;
  let fixture: ComponentFixture<HistoryInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
