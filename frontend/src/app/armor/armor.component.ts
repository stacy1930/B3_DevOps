import { Component, OnInit } from "@angular/core";
<<<<<<< HEAD
import { HttpClient } from "@angular/common/http";
=======
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
>>>>>>> 0946c83735d5a14aab5f1ae275fdc0dc74bd9f28

@Component({
  selector: "app-armor",
  templateUrl: "./armor.component.html",
  styleUrls: ["./armor.component.css"]
})
export class ArmorComponent implements OnInit {
<<<<<<< HEAD
  armors = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get("http://localhost:3000/armor").subscribe(value => {
      for (let i = 0; i < Object.keys(value).length; i++) {
        this.armors.push([value[i].name, value[i]._id, value[i].composition]);
      }
      console.log(this.armors);
    });
=======
  // FORMGROUP - MODIFICATION
  chooseArmForm = new FormGroup({
    armChoice: new FormControl(""),
    armorName: new FormControl(""),
    cloakChoice: new FormControl(""),
    legChoice: new FormControl(""),
    helmetChoice: new FormControl(""),
    torsoChoice: new FormControl("")
  });

  arms = [];
  cloaks = [];
  helmets = [];
  legs = [];
  torsos = [];
  submitted = false;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    // ARM
    this.http.get("http://localhost:3000/arm").subscribe(value => {
      for (let i = 0; i < Object.keys(value).length; i++) {
        this.arms.push([value[i].name, value[i].value, value[i]._id]);
      }
      console.log(this.arms);
    });

    // CLOAK
    this.http.get("http://localhost:3000/cloak").subscribe(value => {
      for (let i = 0; i < Object.keys(value).length; i++) {
        this.cloaks.push([value[i].name, value[i].value, value[i]._id]);
      }
      console.log(this.cloaks);
    });

    // HELMET
    this.http.get("http://localhost:3000/helmet").subscribe(value => {
      for (let i = 0; i < Object.keys(value).length; i++) {
        this.helmets.push([value[i].name, value[i].value, value[i]._id]);
      }
      console.log(this.helmets);
    });

    // LEG
    this.http.get("http://localhost:3000/leg").subscribe(value => {
      for (let i = 0; i < Object.keys(value).length; i++) {
        this.legs.push([value[i].name, value[i].value, value[i]._id]);
      }
      console.log(this.legs);
    });

    // TORSO
    this.http.get("http://localhost:3000/torso").subscribe(value => {
      for (let i = 0; i < Object.keys(value).length; i++) {
        this.torsos.push([value[i].name, value[i].value, value[i]._id]);
      }
      console.log(this.torsos);
    });
  }

  onSubmit() {
    this.submitted = true;
    const jsonArmor = JSON.parse(
      '{"name":"' +
        this.chooseArmForm.value["armorName"] +
        '", "composition": [{' +
        this.chooseArmForm.value["armChoice"] +
        "}," +
        "{" +
        this.chooseArmForm.value["legChoice"] +
        "}," +
        "{" +
        this.chooseArmForm.value["helmetChoice"] +
        "}," +
        "{" +
        this.chooseArmForm.value["torsoChoice"] +
        "}," +
        "{" +
        this.chooseArmForm.value["cloakChoice"] +
        "}," +
        "]" +
        "}"
    );

    console.log(jsonArmor);

    const postUrlArmor = "http://localhost:3000/armor";
    this.http.post(postUrlArmor, jsonArmor).subscribe();
>>>>>>> 0946c83735d5a14aab5f1ae275fdc0dc74bd9f28
  }
}
