import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SphereComponent } from './sphere/sphere.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cv', component: CvComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'sphere', component: SphereComponent},


  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
