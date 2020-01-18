import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-torso",
  templateUrl: "./torso.component.html",
  styleUrls: ["./torso.component.css"]
})
export class TorsoComponent implements OnInit {
  createTorsoForm: FormGroup;
  constructor() {}

  ngOnInit() {}

  onSubmit() {}
}
