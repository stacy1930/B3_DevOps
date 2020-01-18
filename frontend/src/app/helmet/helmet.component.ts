import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-helmet",
  templateUrl: "./helmet.component.html",
  styleUrls: ["./helmet.component.css"]
})
export class HelmetComponent implements OnInit {
  createHelmetForm = new FormGroup({
    helmetName: new FormControl(""),
    helmetValue: new FormControl("")
  });

  constructor() {}

  ngOnInit() {}
  onSubmit() {}
}
