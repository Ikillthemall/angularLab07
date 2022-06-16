import { ProductComponent } from './product/product.component';
import { ProtectGuard } from './protect.guard';
import { DownloadComponent } from './download/download.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'authLogin', component:LoginComponent},
  { path: 'product', component: ProductComponent},
  { path: 'authRegister', component:RegisterComponent},
  { path: 'authChangePass', component:ChangePassComponent, canActivate:[ProtectGuard]},
  { path: 'download', component:DownloadComponent, canActivate:[ProtectGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
