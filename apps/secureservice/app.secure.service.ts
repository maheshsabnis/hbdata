import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthInfo, UserModel } from "./../models/app.auth.model";
@Injectable()
export class AuthService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = "http://localhost:4070";
  }
  createUser(user: UserModel): Observable<AuthInfo> {
    let authInfo: Observable<AuthInfo> = null;
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    authInfo = this.http.post<AuthInfo>(
      `${this.url}/api/users/create`,
      user,
      httpOptions
    );
    return authInfo;
  }
}
