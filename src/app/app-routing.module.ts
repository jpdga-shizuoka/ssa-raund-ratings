import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoundsTabsComponent } from './rounds-tabs/rounds-tabs.component';
import { EventsTabsComponent } from './events-tabs/events-tabs.component';
import { AboutThisSiteComponent } from './about-this-site/about-this-site.component';

const routes: Routes = [
  { path: '', redirectTo: '/events/upcoming', pathMatch: 'full' },
  { path: 'events/upcoming', component: EventsTabsComponent, data: {
    title: 'DG Japan - JPDGA\'s Official Events',
    description: 'Official schedule of the disc golf events held in Japan.',
    keywords: 'disc golf,official tournaments,japan',
    url: 'https://jpdga-shizuoka.github.io/ssa-round-ratings/events/upcoming',
    type: 'article',
  }},
  { path: 'events/local', component: EventsTabsComponent, data: {
    title: 'DG Japan - Local Events',
    description: 'Schedule of the local events held in Japan.',
    keywords: 'disc golf,local events,japan',
    url: 'https://jpdga-shizuoka.github.io/ssa-round-ratings/events/local',
    type: 'article',
  }},
  { path: 'events/monthly', component: EventsTabsComponent, data: {
    title: 'DG Japan - Monthly Events',
    description: 'Schedule of the local monthly events held in Japan.',
    keywords: 'disc golf,monthly events,japan',
    url: 'https://jpdga-shizuoka.github.io/ssa-round-ratings/events/monthly',
    type: 'article',
  }},
  { path: 'past', component: RoundsTabsComponent, data: {
    title: 'DG Japan - Results',
    description: 'Results of the events held in Japan.',
    keywords: 'disc golf,results,japan',
    url: 'https://jpdga-shizuoka.github.io/ssa-round-ratings/past',
    type: 'article',
  }},
  { path: 'about', component: AboutThisSiteComponent, data: {
    title: 'DG Japan - About Us',
    description: 'About Us, Privacy Policy, Terms, Open Source Software Project.',
    keywords: 'disc golf,ssa,scratch scoring averages,japan',
    url: 'https://jpdga-shizuoka.github.io/ssa-round-ratings/about',
    type: 'article',
  }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
