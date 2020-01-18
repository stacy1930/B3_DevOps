import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-cloak",
  templateUrl: "./cloak.component.html",
  styleUrls: ["./cloak.component.css"]
})
export class CloakComponent implements OnInit {
  createCloakForm: FormGroup;
  constructor() {}

  ngOnInit() {}

  onSubmit() {}
}
