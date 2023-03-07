import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxCheckComponent } from './tax-check.component';

describe('TaxCheckComponent', () => {
  let component: TaxCheckComponent;
  let fixture: ComponentFixture<TaxCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
