import { ErrorHandler, Injectable, Injector } from "@angular/core";
import * as StackTrace from "stacktrace-js";
import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { Router } from "@angular/router";
import { environment } from "../../../environments/environment";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(error: any): void {
    const location = this.injector.get(LocationStrategy);
    const url =
      location instanceof PathLocationStrategy ? location.path(false) : "";
    const message = error.message ? error.message : error.toString();
    const router = this.injector.get(Router);
    if (environment.production) router.navigate(["/error"]);

    StackTrace.fromError(error).then((stackFrames) => {
      const stackAsString = stackFrames.map((sf) => sf.toString()).join("\n");
      console.log(message);
      console.log(stackAsString);
      console.log({ message, url, stack: stackAsString });
    });
  }
}
