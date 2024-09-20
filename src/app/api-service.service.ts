import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private url ="http://localhost:8000/";
  token = localStorage.getItem('authToken')

  constructor(private http: HttpClient) { }

  verifyAdmin(login: any){
    return this.http.post(this.url + 'api/loginAdmin',login);
  }
  // createAssess(data: any){
  //   const headers = {'Authorization': 'Bearer ' + this.token};
  //   return this.http.post(this.url + 'api/subjects/create', data, { headers });
  // }
  enrollUser(data: any) {
    return this.http.post(this.url + 'api/registerLearner', data);
  }

  newTeacher(data: any) {
    return this.http.post(this.url + 'api/registerAdmin', data);
  }
  getData(): Observable<any> {
    return this.http.get<any>(this.url + 'api/showTeacher');
  }

  getAccount(): Observable<any> {
    const headers = {'Authorization': 'Bearer ' + this.token};
    return this.http.get<any>(this.url + 'api/showAccount', { headers });
  }

}



