import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend, RequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './routing/app.routing';

import { ClAuthGuard } from './guards/client/index';
import { ClAuthenticationService, ClFoodService} from './services/client/index';
import { NotificationService } from './services/notification.service';
import { HttpService } from './services/client/http.interceptor';
import { httpServiceFactory } from './services/client/httpServiceFactory';
import { Store } from '@ngrx/store';
import { Router, RouterModule } from '@angular/router';

import { Ng2FileRequiredModule } from 'ng2-file-required';
import { AgmCoreModule } from '@agm/core';
import { NgxCropperModule } from 'ngx-cropper';
import 'ngx-cropper/dist/ngx-cropper.min.css';
import { NgxMaskModule } from 'ngx-mask';
import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_FORMATS } from 'ng-pick-datetime';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RatingModule } from 'ngx-bootstrap/rating';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { ClFooterComponent } from './components/client/cl-footer/cl-footer.component';
import { ClHeaderComponent } from './components/client/cl-header/cl-header.component';
import { ClHomeComponent } from './components/client/cl-home/cl-home.component';
import { ClContainerComponent } from './components/client/cl-container/cl-container.component';
import { ClWalletComponent } from './components/client/cl-wallet/cl-wallet.component';
import { ClProfileComponent } from './components/client/cl-profile/cl-profile.component';
import { ClLoginRegComponent } from './components/client/cl-login-reg/cl-login-reg.component';

@NgModule({
  declarations: [
    AppComponent,
    
    ClContainerComponent,
    ClFooterComponent,
    ClHeaderComponent,
    ClHomeComponent,
    ClWalletComponent,
    ClProfileComponent,
    ClLoginRegComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    Ng2FileRequiredModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCEk3pZz3v81F7Cr28OQOajy1jW05gdJV8',
      libraries: ['places']
    }),
    NgxCropperModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgxMaskModule.forRoot(),
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    RatingModule.forRoot(),
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [
    ClAuthGuard,
    ClAuthenticationService,
    HttpService,
    Store,
    NotificationService,
    ClFoodService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
