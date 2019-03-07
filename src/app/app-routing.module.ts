import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemooneComponent } from "./demoone/demoone.component";
import { DemotwoComponent } from "./demotwo/demotwo.component";
import { doesNotThrow } from 'assert';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'demoone'},
  {path:'demoone',component:DemooneComponent },
  {path:'demotwo',component:DemotwoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
