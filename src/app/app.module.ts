import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProductionListComponent } from './components/production-list/production-list.component';
import { ProductionComponent } from './components/production-list/production/production.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { LinkPipe } from './Pipes/link.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ProductionCommentComponent } from './components/production-list/production-comment/production-comment.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ShopReducer } from './store/reducer';
import { ShopEffects } from './store/effects';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductionListComponent,
    ProductionComponent,
    ShoppingCartComponent,
    LinkPipe,
    ProductionCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ shop: ShopReducer }),
    EffectsModule.forRoot([ShopEffects]),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
