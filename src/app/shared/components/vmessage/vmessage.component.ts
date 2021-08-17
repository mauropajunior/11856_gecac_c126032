import { Component, Input } from "@angular/core";

@Component({
  selector: "painel-vmessage",
  templateUrl: "./vmessage.component.html"
})
export class VMessageComponent {
  @Input() text = "";
}
