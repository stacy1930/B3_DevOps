import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-torso",
  templateUrl: "./torso.component.html",
  styleUrls: ["./torso.component.css"]
})
export class TorsoComponent implements OnInit {
  createTorsoForm = new FormGroup({
    torsoName: new FormControl(""),
    torsoValue: new FormControl("")
  });
  constructor() {}

  ngOnInit() {}

  onSubmit() {}
}
