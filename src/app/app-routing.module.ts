import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppContainerComponent } from './app-container/app-container.component';

const routes: Routes = [
  { path: 'home', component: AppContainerComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
