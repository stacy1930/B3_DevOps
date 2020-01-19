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
    const postUrlArm = "http://localhost:3000/arm/";
    this.http.post(postUrlArm, this.arms).subscribe();
  }

  // console.log(bien);
  // this.posts = this.http
  //   .post(this._url, bien, {
  //     headers: {
  //       Authorization: "bearer " + localStorage.getItem("user_token")
  //     }
  //   })
  //   .pipe(catchError(this.handleError)); // then handle the error;
  // return this.posts;

  onDeleteArm(armId) {
    const urlArm = "http://localhost:3000/arm/" + armId;
    this.http.delete(urlArm).subscribe();
  }
}
