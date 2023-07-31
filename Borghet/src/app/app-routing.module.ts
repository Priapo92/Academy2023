import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegioneComponent } from './pages/regione/regione.component';
import { ChiSiamoComponent } from './pages/chi-siamo/chi-siamo.component';
import { InfoRegComponent } from './components/info-reg/info-reg.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { UserComponent } from './pages/user/user.component';
import { InfoPrdComponent } from './pages/info-prd/info-prd.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';




const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'regione/:id', component: RegioneComponent },
  { path: 'regione/:id*', component: InfoRegComponent },
  { path: 'chiSiamo', component: ChiSiamoComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'user', component: UserComponent },
  { path: 'infoprd', component: InfoPrdComponent },
  { path: 'Checkout', component: CheckoutComponent },
  { path: 'Catalogo', component: CatalogoComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
