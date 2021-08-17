import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { VMessageModule } from "../shared/components/vmessage/vmessage.module";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home.routing.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, VMessageModule, RouterModule, HomeRoutingModule],
  providers: []
})
export class HomeModule {}
