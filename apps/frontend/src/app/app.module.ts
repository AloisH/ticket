import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FrontendCoreGlobalFrameModule } from '@ticket/frontend/core/global-frame';
import { FrontendFeatureLoginPageModule } from '@ticket/frontend/feature/login-page';
import { FrontendUiNavbarModule } from '@ticket/frontend/ui/navbar';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TokenInterceptor } from '@ticket/frontend/core/http-interceptor';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    FrontendFeatureLoginPageModule,
    FrontendCoreGlobalFrameModule,
    FrontendUiNavbarModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
