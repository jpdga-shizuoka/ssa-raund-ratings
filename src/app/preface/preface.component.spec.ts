import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrefaceComponent } from './preface.component';

describe('PrefaceComponent', () => {
  let component: PrefaceComponent;
  let fixture: ComponentFixture<PrefaceComponent>;

  beforeEach(waitForAsync(() => TestBed.configureTestingModule({
    declarations: [PrefaceComponent]
  }).compileComponents()));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrefaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => expect(component).toBeTruthy());
});
