import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveComponent } from './active/active.component';
import { CuredComponent } from './cured/cured.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DiscoveredComponent } from './discovered/discovered.component';
import { FatalitiesComponent } from './fatalities/fatalities.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'discovered', component: DiscoveredComponent},
  { path: 'active', component: ActiveComponent},
  { path: 'fatalities', component: FatalitiesComponent},
  { path: 'cured', component: CuredComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
