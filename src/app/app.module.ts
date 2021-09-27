import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DemoComponent } from './components/demo/demo.component';
import { Demo1Component } from './components/demo/demo1/demo1.component';
import { NavComponent } from './shared/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { Demo2Component } from './components/demo/demo2/demo2.component';
import { TemperaturePipe } from './shared/pipes/temperature.pipe';
import { ExercicesComponent } from './components/exercices/exercices.component';
import { Exo1Component } from './components/exercices/exo1/exo1.component';
import { TotimePipe } from './shared/pipes/totime.pipe';
import { Demo3Component } from './components/demo/demo3/demo3.component';
import { Demo4Component } from './components/demo/demo4/demo4.component';
import { SurlignerDirective } from './shared/directives/surligner.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DemoComponent,
    Demo1Component,
    NavComponent,
    Demo2Component,
    TemperaturePipe,
    ExercicesComponent,
    Exo1Component,
    TotimePipe,
    Demo3Component,
    Demo4Component,
    SurlignerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
