import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluseComponent } from './pluse.component';

describe('PluseComponent', () => {
  let component: PluseComponent;
  let fixture: ComponentFixture<PluseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
