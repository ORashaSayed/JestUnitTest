import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchersComponent } from './matchers/matchers.component';
import { TestingAsynchronousCodeComponent } from './testing-asynchronous-code/testing-asynchronous-code.component';
import { SetupandTeardownComponent } from './setupand-teardown/setupand-teardown.component';
import { MockFunctionComponent } from './mock-function/mock-function.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchersComponent,
    TestingAsynchronousCodeComponent,
    SetupandTeardownComponent,
    MockFunctionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
