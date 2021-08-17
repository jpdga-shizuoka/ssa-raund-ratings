import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReloadComponent } from './app-reload';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { RoundsTabsComponent } from './rounds-tabs/rounds-tabs.component';
import { EventsTabsComponent } from './events-tabs/events-tabs.component';
import { StatsTabsComponent } from './stats-tabs/stats-tabs.component';
import { AboutThisSiteComponent } from './about-this-site/about-this-site.component';
import { EventComponent } from './event/event.component';

export type UserData = {
  metaDescription: {
    title?: string;
    description?: string;
    keywords?: string;
  };
}

const routes: Routes = [
  {
    path: '',
    component: DashBoardComponent,
    data: {
      metaDescription: {
        title: 'DG Japan',
        description: 'A database of disc golf events held in Japan',
        keywords: 'disc golf,events,japan,schedule,stats,results,videos'
      }
    }
  },

  {
    path: 'event/:eventId',
    component: EventComponent,
    data: {
      metaDescription: {
        title: 'DG Japan - Disc Golf Event',
        subtitle: 'Event',
        description: 'event information',
        keywords: 'disc golf,official events,japan'
      }
    }
  },

  {
    path: 'events/upcoming',
    component: EventsTabsComponent,
    data: {
      metaDescription: {
        title: 'DG Japan - Disc Golf Events',
        subtitle: 'Schedule',
        description: 'Schedule of the official disc golf events held in Japan.',
        keywords: 'disc golf,official events,japan'
      }
    }
  },
  {
    path: 'events/local',
    component: EventsTabsComponent,
    data: {
      metaDescription: {
        title: 'DG Japan - Local Events',
        subtitle: 'Local Events',
        description: 'Schedule of the local events held in Japan.',
        keywords: 'disc golf,local events,japan'
      }
    }
  },
  {
    path: 'events/monthly',
    component: EventsTabsComponent,
    data: {
      metaDescription: {
        title: 'DG Japan - Monthly Events',
        subtitle: 'Monthly',
        description: 'Schedule of the local monthly events held in Japan.',
        keywords: 'disc golf,monthly events,japan'
      }
    }
  },
  {
    path: 'past', redirectTo: '/past/events', pathMatch: 'full'
  },
  {
    path: 'past/events',
    component: RoundsTabsComponent,
    data: {
      metaDescription: {
        title: 'DG Japan - Event Detail',
        subtitle: 'Event',
        description: 'Results of the official disc golf events held in Japan.',
        keywords: 'disc golf,events,results,japan,video'
      }
    }
  },
  {
    path: 'past/rounds',
    component: RoundsTabsComponent,
    data: {
      metaDescription: {
        title: 'DG Japan - Round Stat',
        subtitle: 'Round Stat',
        description: 'Results of the official disc golf events held in Japan.',
        keywords: 'disc golf,events,results,japan,video'
      }
    }
  },
  {
    path: 'past/videos',
    component: RoundsTabsComponent,
    data: {
      metaDescription: {
        title: 'DG Japan - Video',
        subtitle: 'Video',
        description: 'Results of the official disc golf events held in Japan.',
        keywords: 'disc golf,events,results,japan,video'
      }
    }
  },
  {
    path: 'past/locations',
    component: RoundsTabsComponent,
    data: {
      metaDescription: {
        title: 'DG Japan - Event Location',
        subtitle: 'Location',
        description: 'Results of the official disc golf events held in Japan.',
        keywords: 'disc golf,events,results,japan,video'
      }
    }
  },
  {
    path: 'stats',
    component: StatsTabsComponent,
    data: {
      metaDescription: {
        title: 'DG Japan - Stats',
        subtitle: 'Stats',
        description: 'Stats of the official disc golf events held in Japan.',
        keywords: 'disc golf,events,stats,japan'
      }
    }
  },
  {
    path: 'about',
    component: AboutThisSiteComponent,
    data: {
      metaDescription: {
        title: 'DG Japan - About Us',
        subtitle: 'About this site',
        description: 'About Us, Privacy Policy, Terms, Open Source Software Project.',
        keywords: 'disc golf,ssa,scratch scoring averages,japan'
      }
    }
  },
  {
    path: 'reload', component: ReloadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
