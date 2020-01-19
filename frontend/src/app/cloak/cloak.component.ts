import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-cloak",
  templateUrl: "./cloak.component.html",
  styleUrls: ["./cloak.component.css"]
})
export class CloakComponent implements OnInit {
  createCloakForm = new FormGroup({
    cloakName: new FormControl(""),
    cloakValue: new FormControl("")
  });

  cloaks = [];
  submitted = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get("http://localhost:3000/cloak").subscribe(value => {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < Object.keys(value).length; i++) {
        this.cloaks.push([value[i].name, value[i].value, value[i]._id]);
      }
      console.log(this.cloaks);
    });
  }

  onSubmit() {
    this.submitted = true;
    const jsonCloak = JSON.parse(
      '{"name":"' +
        this.createCloakForm.value["cloakName"] +
        '", "value": ' +
        this.createCloakForm.value["cloakValue"] +
        "}"
    );

    console.log(jsonCloak);

    const postUrlCloak = "http://localhost:3000/cloak";
    this.http.post(postUrlCloak, jsonCloak).subscribe();
  }
  onDeleteCloak(cloakId) {
    const urlCloak = "http://localhost:3000/cloak/" + cloakId;
    this.http.delete(urlCloak).subscribe();
  }
}
