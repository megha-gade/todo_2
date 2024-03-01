import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { CrudService } from './service/crud.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
declarations: [
AppComponent,
DashboardComponent
],
imports: [
HttpClientModule,
FormsModule,
BrowserModule,
AppRoutingModule
],
providers: [CrudService],
bootstrap: [AppComponent]
})
export class AppModule { }
