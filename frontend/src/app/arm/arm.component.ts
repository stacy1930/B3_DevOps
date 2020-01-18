import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-arm",
  templateUrl: "./arm.component.html",
  styleUrls: ["./arm.component.css"]
})
export class ArmComponent implements OnInit {
  createArmForm = new FormGroup({
    armName: new FormControl(""),
    armValue: new FormControl("")
  });

  arms = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get("http://localhost:3000/arm").subscribe(value => {
      for (let i = 0; i < Object.keys(value).length; i++) {
        this.arms.push([value[i].name, value[i].value, value[i]._id]);
      }
      console.log(this.arms);
    });
  }

  onSubmit() {}
}
