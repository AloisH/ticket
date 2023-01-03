import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FrontendFeatureLoginPageModule } from '@ticket/frontend/feature/login-page';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    FrontendFeatureLoginPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
