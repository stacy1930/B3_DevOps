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
  torsos = [];
  submitted = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get("http://localhost:3000/torso").subscribe(value => {
      for (let i = 0; i < Object.keys(value).length; i++) {
        this.torsos.push([value[i].name, value[i].value, value[i]._id]);
      }
      console.log(this.torsos);
    });
  }

  onSubmit() {
    this.submitted = true;
  }
  onDeleteTorso() {}
}
