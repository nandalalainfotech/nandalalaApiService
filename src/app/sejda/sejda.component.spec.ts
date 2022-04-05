import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SejdaComponent } from './sejda.component';

describe('SejdaComponent', () => {
  let component: SejdaComponent;
  let fixture: ComponentFixture<SejdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SejdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SejdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
