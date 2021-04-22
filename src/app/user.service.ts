import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class UserService {
  constructor(public http: HttpClient) {}
  getdata() {
    return this.http.get("/assets/userdata.json");
  }
}
