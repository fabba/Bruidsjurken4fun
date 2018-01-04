import {HomeComponent} from './home/home.component';
import {FotosComponent} from './fotos/fotos.component';
import {PriceComponent} from './price/price.component';
import {ContactComponent} from './contact/contact.component';

export const AppRoutes: any = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'fotos', component: FotosComponent },
  { path: 'price', component: PriceComponent },
  { path: 'contact', component: ContactComponent }
];

export const AppComponents: any = [
  HomeComponent,
  FotosComponent,
  PriceComponent,
  ContactComponent
];
