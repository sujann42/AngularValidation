import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"
import {RouterModule} from "@angular/router"
import { MasterPageComponent } from './CustomerApp.MasterPageComponent';
import { HomeComponent } from './CustomerApp.HomeComponent';
import { MainRoutes } from '../Routing/CustomerApp.MainRouting';
import { BaseLogger, DbLogger } from '../Utility/CustomerApp.Logger';
@NgModule({
  declarations: [
      MasterPageComponent,
      HomeComponent
  ],
  imports: [
    RouterModule.forRoot(MainRoutes),
    BrowserModule,FormsModule
  ],
  providers: [{
      provide: BaseLogger,
      useClass: DbLogger
  }],
  bootstrap: [MasterPageComponent]
})
export class MainModule { }
