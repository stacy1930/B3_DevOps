import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-leg",
  templateUrl: "./leg.component.html",
  styleUrls: ["./leg.component.css"]
})
export class LegComponent implements OnInit {
  createLegForm: FormGroup;
  constructor() {}

  ngOnInit() {}

  onSubmit() {}
}
