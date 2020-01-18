import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArmorComponent } from "./armor/armor.component";
import { ArmComponent } from "./arm/arm.component";
import { HelmetComponent } from "./helmet/helmet.component";
import { CloakComponent } from "./cloak/cloak.component";
import { LegComponent } from "./leg/leg.component";
import { TorsoComponent } from "./torso/torso.component";

const routes: Routes = [
  { path: "", redirectTo: "/armors", pathMatch: "full" },
  { path: "armors", component: ArmorComponent },
  { path: "arms", component: ArmComponent },
  { path: "helmets", component: HelmetComponent },
  { path: "cloaks", component: CloakComponent },
  { path: "legs", component: LegComponent },
  { path: "torsos", component: TorsoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
