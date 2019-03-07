import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from "./admin.component";
import { UserComponent } from "./user/user.component";
import { EmailComponent } from "./email/email.component";

const routes: Routes = [
  {path:'admin',component:AdminComponent,children:[
    {path:'user',component:UserComponent},
    {path:'email/:ids',component:EmailComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
