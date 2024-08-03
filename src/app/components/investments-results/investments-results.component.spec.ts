import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentsResultsComponent } from './investments-results.component';

describe('InvestmentsResultsComponent', () => {
  let component: InvestmentsResultsComponent;
  let fixture: ComponentFixture<InvestmentsResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentsResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
