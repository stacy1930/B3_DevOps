import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HelmetComponent } from "./helmet/helmet.component";
import { CloakComponent } from "./cloak/cloak.component";
import { TorsoComponent } from "./torso/torso.component";
import { LegComponent } from "./leg/leg.component";
import { ArmComponent } from "./arm/arm.component";
import { ArmorComponent } from "./armor/armor.component";
import { HeaderComponent } from "./header/header.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HelmetComponent,
    CloakComponent,
    TorsoComponent,
    LegComponent,
    ArmComponent,
    ArmorComponent,
    HeaderComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
