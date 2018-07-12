import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';
import { SkillsComponent } from './skills/skills.component';
import { ResourcesComponent } from './resources/resources.component';
import { SkillDetailComponent } from './skills/skill-detail/skill-detail.component';
import { ResourceDetailsComponent } from './resources/resource-details/resource-details.component';
import { GroupComponent } from './skills/group/group.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      {path: '', redirectTo: 'users'},
      {path: 'users', component: UsersComponent},
      {path: 'skills', component: SkillsComponent},
      {path: 'skills/group', component: GroupComponent},
      {path: 'skills/new', component: SkillDetailComponent},
      {path: 'skills/:id', component: SkillDetailComponent},
      {path: 'resources', component: ResourcesComponent},
      {path: 'resources/new', component: ResourceDetailsComponent},
      {path: 'resources/:id', component: ResourceDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {
}
