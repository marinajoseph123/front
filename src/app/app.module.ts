import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProductsComponent } from './pages/products/products.component';
import { IndexComponent } from './pages/index/index.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { CategoryComponent } from './pages/category/category.component';
import { UsersComponent } from './pages/users/users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { NgxPaginationModule } from 'ngx-pagination';
import { LogoutComponent } from './pages/logout/logout.component';


// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    IndexComponent,
    SinglePostComponent,
    SingleProductComponent,
    RegisterComponent,
    LoginComponent,
    CategoryComponent,
    UsersComponent,
    EditUserComponent,
    AddProductComponent,
    EditProfileComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [
    { provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi : true }
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
