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
  legs = [];
  submitted = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get("http://localhost:3000/leg").subscribe(value => {
      for (let i = 0; i < Object.keys(value).length; i++) {
        this.legs.push([value[i].name, value[i].value, value[i]._id]);
      }
      console.log(this.legs);
    });
  }

  onDeleteLeg() {}

  onSubmit() {
    this.submitted = true;
  }
}
