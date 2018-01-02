import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AppRoutingModule }        from './app-routing.module';
import { JobSearchComponent } from './job-search/job-search.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { IndustriesComponent } from './industries/industries.component';
import { ServicesComponent } from './services/services.component';
import { PostJobComponent } from './post-job/post-job.component';
import { UploadResumeComponent } from './upload-resume/upload-resume.component';


import { RegisterEmployerComponent } from './register-employer/register-employer.component';
import { RegisterCandidateComponent } from './register-candidate/register-candidate.component';

import { PortalService } from './portal/portal.service';
import { RouteAndScrollOnClickDirective } from './route-and-scroll-on-click.directive';
import { HomeDetailsComponent } from './home-details/home-details.component';
import { CloudServicesComponent } from './services/cloud-services/cloud-services.component';
import { InformationSecurityComponent } from './services/information-security/information-security.component';
import { ItServicesComponent } from './services/it-services/it-services.component';
import { NetworkServicesComponent } from './services/network-services/network-services.component';
import { ProjectManagementComponent } from './services/project-management/project-management.component';
import { StaffingSolutionsComponent } from './services/staffing-solutions/staffing-solutions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    JobSearchComponent,
    ContactUsComponent,
    IndustriesComponent,
    ServicesComponent,
    PostJobComponent,
    UploadResumeComponent,
    RegisterEmployerComponent,
    RegisterCandidateComponent,
    RouteAndScrollOnClickDirective,
    HomeDetailsComponent,
    CloudServicesComponent,
    InformationSecurityComponent,
    ItServicesComponent,
    NetworkServicesComponent,
    ProjectManagementComponent,
    StaffingSolutionsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    JsonpModule 
  ],
  providers: [PortalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
