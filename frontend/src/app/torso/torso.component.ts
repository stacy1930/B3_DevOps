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
  modificationTorsoForm = new FormGroup({
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
    const jsonTorso = JSON.parse(
      '{"name":"' +
        this.createTorsoForm.value["torsoName"] +
        '", "value": ' +
        this.createTorsoForm.value["torsoValue"] +
        "}"
    );

    console.log(jsonTorso);

    const postUrlTorso = "http://localhost:3000/torso";
    this.http.post(postUrlTorso, jsonTorso).subscribe();
  }
  onDeleteTorso(torsoId) {
    const urlTorso = "http://localhost:3000/torso/" + torsoId;
    this.http.delete(urlTorso).subscribe();
  }

  onUpdateTorso(torsoId) {
    const urlTorsoModif = "http://localhost:3000/torso/" + torsoId;
    this.http
      .put(
        urlTorsoModif,
        JSON.parse(
          '{"name":"' +
            this.modificationTorsoForm.value["torsoName"] +
            '", "value": ' +
            this.modificationTorsoForm.value["torsoValue"] +
            "}"
        )
      )
      .subscribe();
  }
}
