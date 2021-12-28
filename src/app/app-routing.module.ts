import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CareerWithUsComponent } from './career-with-us/career-with-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CoursesComponent } from './courses/courses.component';
import { AdmissionComponent } from './admission/admission.component'
import { ActivityComponent } from './activity/activity.component'
import{FooterComponent} from './footer/footer.component'
const routes: Routes = [
  {
    component: AboutComponent,
    path: "About"

  }, {
    component: CareerWithUsComponent,
    path: "Career"

  }, {
    component: ContactUsComponent,
    path: "ContactUs"

  }, {
    component: CoursesComponent,
    path: "Courses"

  },
  {
    component: AdmissionComponent,
    path: "Admission"
  },
  {
    component: ActivityComponent,
    path: "Activity"
  },
  {
    component: HomeComponent,
    path: ""
  },
  {
    component:FooterComponent,
    path:"Footer"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
