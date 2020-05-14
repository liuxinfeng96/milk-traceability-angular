import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsInfoComponent } from './logistics-info.component';

describe('LogisticsInfoComponent', () => {
  let component: LogisticsInfoComponent;
  let fixture: ComponentFixture<LogisticsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogisticsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
