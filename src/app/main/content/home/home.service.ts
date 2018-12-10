import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  _url = 'http://192.168.1.230:9085/datasnap/rest/';

  constructor(private _hhtp: HttpClient) { }

  getUser(token, matricule) {
    const obj = { token: token, matricule: matricule };
    return this._hhtp.post(this._url + 'UserServices/GetCollabInfo/', JSON.stringify(obj));
  }



}
