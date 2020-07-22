import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ControlUSRComponent } from './component/control-usr/control-usr.component';
import { JustificantesComponent } from './component/justificantes/justificantes.component';
import { Page404Component } from './component/page404/page404.component';
import {HttpClientModule} from '@angular/common/http';


//services
import { UsuarioServiceService } from './services/usuario-service.service';
import { FormUsrComponent } from './component/form-usr/form-usr.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ControlUSRComponent,
    JustificantesComponent,
    Page404Component,
    FormUsrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UsuarioServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
