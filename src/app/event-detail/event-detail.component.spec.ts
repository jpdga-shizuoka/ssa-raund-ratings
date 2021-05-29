import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { EventDetailComponent } from './event-detail.component';
import { GeolinkPipe } from '../geolink.pipe';
import { LocalizePipe } from '../localize.pipe';
import { SchedulePipe } from '../schedule.pipe';

describe('EventDetailComponent', () => {
  let component: EventDetailComponent;
  let fixture: ComponentFixture<EventDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        EventDetailComponent,
        GeolinkPipe,
        LocalizePipe,
        SchedulePipe,
      ],
      imports: [
        RouterTestingModule,
        MatIconModule,
        HttpClientModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailComponent);
    component = fixture.componentInstance;
    component.event = {
      id: 'the9thokinawaopen',
      title: 'The 9th Okinawa Open',
      location: 'nakijinsonsportpark',
      period: {
        from: '2020-02-15',
        to: '2020-02-16'
      },
      jpdga: {
        eventId: '521'
      }
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
