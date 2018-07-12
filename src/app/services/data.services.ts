import { Injectable } from '@angular/core';
// import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
    constructor(private http: HttpClient) { }

    createUser(data: any) {
        return this.http.get('https://abt-api.azurewebsites.net/api/courses');
    }
}