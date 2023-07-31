import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { MapItalyComponent } from './components/map-italy/map-italy.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { BestSellerComponent } from './components/best-seller/best-seller.component';
import { InfoRegComponent } from './components/info-reg/info-reg.component';
import { RegioneComponent } from './pages/regione/regione.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { UserComponent } from './pages/user/user.component';
import { InfoPrdComponent } from './pages/info-prd/info-prd.component';
import { FormsModule } from '@angular/forms';
import { PaymentsComponent } from './components/payments/payments.component';
import { ModalCartComponent } from './components/modal-cart/modal-cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { ProductorsComponent } from './components/productors/productors.component';
import { ProductsCatComponent } from './components/products-cat/products-cat.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    FooterComponent,
    MapItalyComponent,
    LoginComponent,
    HeaderComponent,
    BestSellerComponent,
    InfoRegComponent,
    RegioneComponent,
    CarouselComponent,
    FaqsComponent,
    UserComponent,
    InfoPrdComponent,
    PaymentsComponent,
    ModalCartComponent,
    CheckoutComponent,
    CatalogoComponent,
    ProductorsComponent,
    ProductsCatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
