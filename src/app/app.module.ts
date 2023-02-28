import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './common/primeng/primeng.module';
import { HeaderComponent } from './header/header.component';
import { HomeClientComponent } from './home-client/home-client.component';
import { HomeClientMComponent } from './home-client-m/home-client-m.component';
import { AdminComponent } from './admin/admin.component';
import { ClientCarListComponent } from './client-car-list/client-car-list.component';
import { ServiceListComponent } from './service-list/service-list.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeClientComponent, HomeClientMComponent, AdminComponent, ClientCarListComponent, ServiceListComponent],
  imports: [BrowserModule, AppRoutingModule, PrimengModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [PrimengModule],
})
export class AppModule {}
