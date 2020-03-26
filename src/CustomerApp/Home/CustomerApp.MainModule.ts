import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MasterPageComponent} from './CustomerApp.MasterPageComponent';
import {HomeComponent} from './CustomerApp.HomeComponent';
import {MainRoutes} from '../Routing/CustomerApp.MainRouting';
import {BaseLogger, DbLogger, FileLogger} from '../Utility/CustomerApp.Logger';
import {ConsoleLogger} from '@angular/compiler-cli/ngcc';
/*Instead of hard coding all those loggers, we can create a collection of provides and inject that into the proivider*/
/*
//Creation:
var providersCollection: any =[];
providersCollection.push({provide: "1", useClass: DbLogger});
providersCollection.push({provide: "2", useClass: ConsoleLogger});
providersCollection.push({provide: BaseLogger, useClass: ConsoleLogger});

//Injection
providers:[providersCollection]
*/

@NgModule({
  declarations: [
      MasterPageComponent,
      HomeComponent
  ],
  imports: [
    RouterModule.forRoot(MainRoutes),
    BrowserModule,FormsModule
  ],
  providers: [
      {
        provide: BaseLogger,
        useClass: DbLogger
      },
      {provide: "1", useClass: FileLogger},
      {provide: "2", useClass: ConsoleLogger},
      {provide: "3", useClass: DbLogger}
  ],
  bootstrap: [MasterPageComponent]
})
export class MainModule { }
