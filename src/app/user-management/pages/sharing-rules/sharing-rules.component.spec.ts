import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharingRulesComponent } from './sharing-rules.component';

describe('SharingRulesComponent', () => {
  let component: SharingRulesComponent;
  let fixture: ComponentFixture<SharingRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharingRulesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharingRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
