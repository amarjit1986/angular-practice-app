import { Injectable } from '@angular/core';
import { IDataPackage } from './package';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})


export class DataPackageService {
  private dataPackageURL = '';

  constructor(private httpclient : HttpClient) {

  }
    getDataPackage() : Observable<IDataPackage[]> {

        return this.httpclient.get<IDataPackage[]>(this.dataPackageURL);
        
          
    }
}