import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './products/cart/cart.component';
import { UserComponent } from './user/user.component';
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';


const routes: Routes = [
  { path: '', component: UserComponent},
 { path: 'user', component: UserComponent,
     children: [
       { path: '', component: SigninComponent },
       { path: 'signin', component: SigninComponent},
       { path: 'signup', component: SignupComponent}
     ]
 },
 { path: 'products', component: ProductsComponent,
  children: [
       { path: 'cart', component: CartComponent }     ]
 },
 { path: 'admin', component: AdminComponent,
  children: [
       { path: 'products', component: AdminProductsComponent },
       { path: 'users', component: AdminUsersComponent }
     ]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
