import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeonForm } from './neon-form';

describe('NeonForm', () => {
  let component: NeonForm;
  let fixture: ComponentFixture<NeonForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeonForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeonForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
