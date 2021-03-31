import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './index/contact-us/contact-us.component';
import { HomeComponent } from './index/home/home.component';
import { IndexContainerComponent } from './index/index-container/index-container.component';

const routes: Routes = [
  {
    path: '', component: IndexContainerComponent, children: [
      {path: '', redirectTo: 'home',pathMatch:'full'},
      { path: 'home',component: HomeComponent },
      { path: 'contact-us',component: ContactUsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
