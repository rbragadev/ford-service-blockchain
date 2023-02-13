import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './common/primeng/primeng.module';
import { HeaderComponent } from './header/header.component';
import { HomeClientComponent } from './home-client/home-client.component';
import { HomeClientMComponent } from './home-client-m/home-client-m.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeClientComponent, HomeClientMComponent],
  imports: [BrowserModule, AppRoutingModule, PrimengModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [PrimengModule],
})
export class AppModule {}
