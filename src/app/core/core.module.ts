import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { RouterModule } from "@angular/router";
import { AlertModule } from "../shared/components/alert/alert.module";
import { LoadingModule } from "../shared/components/loading/loading.module";
import { MenuModule } from "../shared/components/menu/menu.module";

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, RouterModule, AlertModule, LoadingModule, MenuModule],
  providers: []
})
export class CoreModule {}
