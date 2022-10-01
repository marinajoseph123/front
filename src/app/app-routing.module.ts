import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ProductsComponent } from './pages/products/products.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { RegisterComponent } from './pages/register/register.component'
import {LoginComponent } from './pages/login/login.component'
import {CategoryComponent } from './pages/category/category.component'
import {UsersComponent } from './pages/users/users.component'
import {EditUserComponent } from './pages/edit-user/edit-user.component'
import {AddProductComponent} from './pages/add-product/add-product.component'
import {EditProfileComponent} from './pages/edit-profile/edit-profile.component'
import {LogoutComponent} from './pages/logout/logout.component'
import { CanDeactivateGuard } from './guard/can-deactivate.guard';
const routes: Routes = [
  {path:"" , component:IndexComponent},
  {path:"products" , children:[
    {path:"" , component:ProductsComponent},
    {path:":id" , component:SingleProductComponent}
  ]},
  {path:"register" , component:RegisterComponent,canDeactivate:[CanDeactivateGuard]},
  {path:"login" , component:LoginComponent,canDeactivate:[CanDeactivateGuard]},
  {path:"category" , component:CategoryComponent},
  {path:"users" , component:UsersComponent},
  {path:"edit-user/:id" , component:EditUserComponent},
  {path:'home' , component:IndexComponent},
  {path:'add product' , component:AddProductComponent},
  {path:'Uploading Img' , component:EditProfileComponent},
  {path:'logout' , component:LogoutComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
