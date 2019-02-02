import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

@Injectable()
export class AppGuardService implements CanActivate {
  constructor(private _router: Router) {}
  /* #region comment */
  // the ActivatedRouteSnapshot
  // this represents the route that is being navigates
  // to using properties

  // the RouterStateSnapshot represent the current route
  /* #endregion */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log("canActivate");
    // return true
    // remove comments to return true
    alert(
      "You are not allowed to view this page.You are redirected to Error Page"
    );
    // this._router.navigate(["home"]);
    this._router.navigate(["error"]);

    return false;
  }
}
