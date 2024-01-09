import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public configUrl = environment.url_api_host;
  constructor() {}

  // getConfig(): Observable<any> {
  //   return this.http.get<any>(this.configUrl);
  // }
}