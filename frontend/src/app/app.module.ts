import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HeaderComponent } from './header/header.component';
=======
import { HelmetComponent } from './helmet/helmet.component';
import { CloakComponent } from './cloak/cloak.component';
import { TorsoComponent } from './torso/torso.component';
import { LegComponent } from './leg/leg.component';
import { ArmComponent } from './arm/arm.component';
import { ArmorComponent } from './armor/armor.component';
>>>>>>> 3b1ea5e9b3bf663648942f0648e954c389e61a37

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HeaderComponent
=======
    HelmetComponent,
    CloakComponent,
    TorsoComponent,
    LegComponent,
    ArmComponent,
    ArmorComponent
>>>>>>> 3b1ea5e9b3bf663648942f0648e954c389e61a37
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
