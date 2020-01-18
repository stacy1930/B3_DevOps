import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-helmet",
  templateUrl: "./helmet.component.html",
  styleUrls: ["./helmet.component.css"]
})
export class HelmetComponent implements OnInit {
  createHelmetForm: FormGroup;

  constructor() {}

  ngOnInit() {}
  onSubmit() {}
}
