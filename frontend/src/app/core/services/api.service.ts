import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

import { JwtService } from './jwt.service';


@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient,
    private jwtService: JwtService
  ) {}


  get(path: string, params: HttpParams = new HttpParams()) {
    return this.http.get(`${environment.api_url}${path}`);
  }

  put(path: string, body: Object = {}) {
    return this.http.put(
      `${environment.api_url}${path}`,
      JSON.stringify(body)
    );
  }

  post(path: string, body: Object = {}) {
    return this.http.post(
      `${environment.api_url}${path}`,
      JSON.stringify(body)
    );
  }

  delete(path) {
    return this.http.delete(
      `${environment.api_url}${path}`
    );
  }
}
