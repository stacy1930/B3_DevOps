import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-armor",
  templateUrl: "./armor.component.html",
  styleUrls: ["./armor.component.css"]
})
export class ArmorComponent implements OnInit {
  armors = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get("http://localhost:3000/armor").subscribe(value => {
      for (let i = 0; i < Object.keys(value).length; i++) {
        this.armors.push([value[i].name, value[i]._id, value[i].composition]);
      }
      console.log(this.armors);
    });
  }
}
