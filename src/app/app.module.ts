import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppRoutes} from "./app.routing";
import {FotosComponent} from "./fotos/fotos.component";
import {PriceComponent} from "./price/price.component";
import {ContactComponent} from "./contact/contact.component";
import {HomeComponent} from "./home/home.component";
import {AppComponent} from "./app.component";
import {SlideshowModule} from "ng-simple-slideshow";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        FotosComponent,
        PriceComponent,
        ContactComponent
    ],
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        BrowserModule.withServerTransition({appId: 'my-app'}),
        HttpModule,
        SlideshowModule,
        RouterModule,
        RouterModule.forRoot(AppRoutes, {useHash: true})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
