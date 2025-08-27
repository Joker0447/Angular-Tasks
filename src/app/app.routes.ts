import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login/login.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      {
        path: 'roles',
        loadComponent: () =>
          import('./user-management/pages/roles/roles.component').then(
            (m) => m.RolesComponent
          ),
      },
      {
        path: 'groups',
        loadComponent: () =>
          import('./user-management/pages/groups/groups.component').then(
            (m) => m.GroupsComponent
          ),
      },
      {
        path: 'campaign-status',
        loadComponent: () =>
          import('./campaign-status/campaign-status.component').then(
            (m) => m.CampaignStatusComponent
          ),
      },
      {
        path: 'lists',
        loadComponent: () =>
          import('./lists/lists.component').then((m) => m.ListsComponent),
      },
      {
        path: 'lead-reports',
        loadComponent: () =>
          import('./lead-reports/lead-reports.component').then(
            (m) => m.LeadReportsComponent
          ),
      },
    ],
  },
  { path: '**', redirectTo: 'login' },
];
