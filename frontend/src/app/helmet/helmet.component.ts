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

  modificationHelmetForm = new FormGroup({
    helmetName: new FormControl(""),
    helmetValue: new FormControl("")
  });

  helmets = [];
  submitted = false;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get("http://localhost:3000/helmet").subscribe(value => {
      for (let i = 0; i < Object.keys(value).length; i++) {
        this.helmets.push([value[i].name, value[i].value, value[i]._id]);
      }
      console.log(this.helmets);
    });
  }
  onSubmit() {
    this.submitted = true;
    const jsonHelmet = JSON.parse(
      '{"name":"' +
        this.createHelmetForm.value["helmetName"] +
        '", "value": ' +
        this.createHelmetForm.value["helmetValue"] +
        "}"
    );

    console.log(jsonHelmet);

    const postUrlHelmet = "http://localhost:3000/helmet";
    this.http.post(postUrlHelmet, jsonHelmet).subscribe();
  }
  onDeleteHelmet(helmetId) {
    const urlOnDelete = "http://localhost:3000/helmet/" + helmetId;
    this.http.delete(urlOnDelete).subscribe();
    // console.log(urlOnDelete);
  }

  onUpdateHelmet(helmetId) {
    const urlHelmetModif = "http://localhost:3000/helmet/" + helmetId;
    this.http
      .put(
        urlHelmetModif,
        JSON.parse(
          '{"name":"' +
            this.modificationHelmetForm.value["helmetName"] +
            '", "value": ' +
            this.modificationHelmetForm.value["helmetValue"] +
            "}"
        )
      )
      .subscribe();
  }
}
