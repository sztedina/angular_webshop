import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KosarComponent } from './kosar/kosar.component';

const routes: Routes = [
  {path:"kosar", component:KosarComponent},
  {path:"**", component:KosarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
