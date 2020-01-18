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

@NgModule({
  declarations: [
    AppComponent,
    HelmetComponent,
    CloakComponent,
    TorsoComponent,
    LegComponent,
    ArmComponent,
    ArmorComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
