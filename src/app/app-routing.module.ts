import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductionComponent } from './components/production-list/production/production.component';
import { ProductionListComponent } from './components/production-list/production-list.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';


const routes: Routes = 
[
  {path:""                        , component:ProductionListComponent},
  {path:"production"              , component:ProductionListComponent},
  {path:"production/detail/:id"   , component:ProductionComponent},
  {path:"shoppingcart"            , component:ShoppingCartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
