import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// 双向绑定
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemooneComponent } from './demoone/demoone.component';
import { DemotwoComponent } from './demotwo/demotwo.component';

import { AdminModule } from "./admin/admin.module";

@NgModule({
  declarations: [
    AppComponent,
    DemooneComponent,
    DemotwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
