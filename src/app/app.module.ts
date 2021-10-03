import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MenubarModule} from "primeng/menubar";
import { SharedModule } from 'primeng/api';
import {AppRoutingModule} from "./app-routing.module";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./core/state";
import {EffectsModule} from "@ngrx/effects";
import {UserEffects} from "./core/state/effects";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {OrderListModule} from "primeng/orderlist";
import {DragDropModule} from "primeng/dragdrop";
import {CustomModule} from "./shared/custom.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
      BrowserModule,
      MenubarModule,
      SharedModule,
      OrderListModule,
      DragDropModule,
      CustomModule,
      AppRoutingModule,
      StoreModule.forRoot(reducers),
      EffectsModule.forRoot([UserEffects]),
      HttpClientModule,
      StoreDevtoolsModule.instrument({
        maxAge: 25, // Retains last 25 states
        logOnly: environment.production, // Restrict extension to log-only mode
        autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      }),
    ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
