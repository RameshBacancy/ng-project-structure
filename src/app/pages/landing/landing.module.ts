import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { CoreModule } from 'src/app/core/core.module';
import { GuideTestComponent } from './guide-test/guide-test.component';
import { LandingHeaderComponent } from './landing-header/landing-header.component';
import { LandingSidebarComponent } from './landing-sidebar/landing-sidebar.component';

@NgModule({
  declarations: [
    LandingComponent,
    GuideTestComponent,
    LandingHeaderComponent,
    LandingSidebarComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    CoreModule
  ]
})
export class LandingModule { }
