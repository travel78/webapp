import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../../config/material.module';
import { ResourcesComponent } from './resources/resources.component';
import { UsersComponent } from './users/users.component';
import { SkillsComponent } from './skills/skills.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminHttpService } from './admin-http.service';
import { SkillDetailComponent } from './skills/skill-detail/skill-detail.component';
import { ResourceDetailsComponent } from './resources/resource-details/resource-details.component';
import { InterceptorService } from '../../config/interceptor.service';
import { GroupComponent } from './skills/group/group.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    HttpClientModule
  ],
  declarations: [
    ResourcesComponent,
    UsersComponent,
    SkillsComponent,
    AdminComponent,
    SkillDetailComponent,
    ResourceDetailsComponent,
    GroupComponent
  ],
  providers: [
    AdminHttpService,
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ]
})
export class AdminModule {

}
