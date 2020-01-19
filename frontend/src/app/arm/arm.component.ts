import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";

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

  // FORMGROUP - MODIFICATION
  modificationArmForm = new FormGroup({
    armName: new FormControl(""),
    armValue: new FormControl("")
  });

  arms = [];
  submitted = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get("http://localhost:3000/arm").subscribe(value => {
      for (let i = 0; i < Object.keys(value).length; i++) {
        this.arms.push([value[i].name, value[i].value, value[i]._id]);
      }
      console.log(this.arms);
    });
  }

  onSubmit() {
    this.submitted = true;

    const jsonArm = JSON.parse(
      '{"name":"' +
        this.createArmForm.value["armName"] +
        '", "value": ' +
        this.createArmForm.value["armValue"] +
        "}"
    );

    console.log(jsonArm);

    const postUrlArm = "http://localhost:3000/arm";
    this.http.post(postUrlArm, jsonArm).subscribe();
  }

  onDeleteArm(armId) {
    const urlArm = "http://localhost:3000/arm/" + armId;
    this.http.delete(urlArm).subscribe();
  }

  onUpdateArm(armId) {
    const urlArmModif = "http://localhost:3000/arm/" + armId;
    this.http
      .put(
        urlArmModif,
        JSON.parse(
          '{"name":"' +
            this.modificationArmForm.value["armName"] +
            '", "value": ' +
            this.modificationArmForm.value["armValue"] +
            "}"
        )
      )
      .subscribe();
  }
}
