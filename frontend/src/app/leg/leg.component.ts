import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-leg",
  templateUrl: "./leg.component.html",
  styleUrls: ["./leg.component.css"]
})
export class LegComponent implements OnInit {
  createLegForm = new FormGroup({
    legName: new FormControl(""),
    legValue: new FormControl("")
  });
  constructor() {}

  ngOnInit() {}

  onSubmit() {}
}
