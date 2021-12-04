import { PaymentComponent } from './pages/user/shopping-cart/payment/payment.component';
import { ShoppingCartComponent } from './pages/user/shopping-cart/shopping-cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ViewMedicinesComponent } from './pages/admin/view-medicines/view-medicines.component';
import { AdminGuard } from './service/admin.guard';
import { NormalGuard } from './service/normal.guard';
import { AddMedicineComponent } from './pages/admin/add-medicine/add-medicine.component';
import { UpdateMedicinesComponent } from './pages/admin/update-medicines/update-medicines.component';
import { UserWelcomeComponent } from './pages/user/user-welcome/user-welcome.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'signup', component: SignupComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'admin', component: DashboardComponent, canActivate:[AdminGuard], 
      children:[{ path : '', component: WelcomeComponent},
                { path : 'profile', component: ProfileComponent},
                { path : 'categories', component: ViewCategoriesComponent},
                { path : 'add-category', component: AddCategoryComponent},
                { path : 'medicines', component: ViewMedicinesComponent},
                { path : 'add-medicine', component: AddMedicineComponent},
                { path : 'medicines/:id', component: UpdateMedicinesComponent},


              ]},
  { path: 'user-dashboard', component: UserDashboardComponent, canActivate:[NormalGuard],
      children:[{ path : '', component:UserWelcomeComponent},
                { path : 'profile', component:ProfileComponent},
                { path : 'payment', component:PaymentComponent},
                { path : 'search/:keyword', component:ShoppingCartComponent},
                { path : ':catId', component:ShoppingCartComponent}
             ]
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
