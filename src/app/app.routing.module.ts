import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";

import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { GlobalErrorComponent } from "./errors/global-error/global-error.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    loadChildren: "./home/home.module#HomeModule"
  },
  {
    path: "not-found",
    component: NotFoundComponent,
    data: {
      title: "Not Found"
    }
  },
  {
    path: "error",
    component: GlobalErrorComponent,
    data: {
      title: "Error"
    }
  },
  { path: "**", redirectTo: "not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
