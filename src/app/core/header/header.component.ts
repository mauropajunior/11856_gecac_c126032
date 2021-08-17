import { Component } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "painel-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  constructor(private router: Router) {}
}
