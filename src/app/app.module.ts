import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SettingsComponent } from './settings/settings.component';
import { AboutComponent } from './about/about.component';
import { OverviewComponent } from './overview/overview.component';
import { CongregationComponent } from './congregation/congregation.component';
import { LifeAndMinistryComponent } from './life-and-ministry/life-and-ministry.component';
import { PublicTalkComponent } from './public-talk/public-talk.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { OutlinesComponent } from './outlines/outlines.component';
import { SoundComponent } from './sound/sound.component';
import { CleaningComponent } from './cleaning/cleaning.component';
import { OutsideCareComponent } from './outside-care/outside-care.component';
import { TerritoriesComponent } from './territories/territories.component';
import { ServiceGroupsComponent } from './service-groups/service-groups.component';
import { PublicWitnessingComponent } from './public-witnessing/public-witnessing.component';
import { ServiceReportsComponent } from './service-reports/service-reports.component';
import { DataExchangeComponent } from './data-exchange/data-exchange.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    SettingsComponent,
    AboutComponent,
    OverviewComponent,
    CongregationComponent,
    LifeAndMinistryComponent,
    PublicTalkComponent,
    SpeakersComponent,
    OutlinesComponent,
    SoundComponent,
    CleaningComponent,
    OutsideCareComponent,
    TerritoriesComponent,
    ServiceGroupsComponent,
    PublicWitnessingComponent,
    ServiceReportsComponent,
    DataExchangeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/