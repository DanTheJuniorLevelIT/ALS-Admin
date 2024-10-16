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
  getTeacherName(): Observable<any> {
    return this.http.get<any>(this.url + 'api/getTeachersName');
  }

  getAccount(): Observable<any> {
    const headers = {'Authorization': 'Bearer ' + this.token};
    return this.http.get<any>(this.url + 'api/showAccount', { headers });
  }
//home
  getPendingStudent(): Observable<any> {
    return this.http.get<any>(this.url + 'api/showPendingStudent');
  }
  getApproveStudentBLP(): Observable<any> {
    return this.http.get<any>(this.url + 'api/enrol/showApproveStudentBLP');
  }
  getApproveStudentELEM(): Observable<any> {
    return this.http.get<any>(this.url + 'api/enrol/showApproveStudentELEM');
  }
  getApproveStudentJUNIOR(): Observable<any> {
    return this.http.get<any>(this.url + 'api/enrol/showApproveStudentjunior');
  }
  updateStudent(id: number, data: any) {
    return this.http.put(this.url +`api/student/ApproveStudent/${id}`, data);
  }

  getlearner(id:number){
    return this.http.get<any>(this.url + `api/student/retrieveLearner/${id}`);
  }
  updateStudentINFO(id: number, data: any): Observable<any> {
    return this.http.patch(this.url + `api/student/updateStudentInfo/${id}`, data);
  }

  getTeacher(id:number){
    return this.http.get<any>(this.url + `api/student/retrieveTeacher/${id}`);
  }
  
  updateTeacherINFO(id: number, data: any): Observable<any> {
    return this.http.patch(this.url + `api/student/updateTeacherInfo/${id}`, data);
  }

  //classs
  getSubjectBLP(){
    return this.http.get<any>(this.url + `api/getSubjectBLP`);
  }
  getSubjectElem(){
    return this.http.get<any>(this.url + `api/getSubjectElem`);
  }
  getSubjectJunior(){
    return this.http.get<any>(this.url + `api/getSubjectJunior`);
  }

  getlocation(): Observable<any> {
    return this.http.get<any>(this.url + 'api/getLocation');
  }
  saveNewclass(data: any) {
    return this.http.post(this.url + 'api/newClass', data);
  }
  //cccc
  getClassElem(){
    return this.http.get<any>(this.url + `api/getAllClassElem`);
  }
  getClassBLP(){
    return this.http.get<any>(this.url + `api/getAllClassBLP`);
  }
  getClassJunior(){
    return this.http.get<any>(this.url + `api/getAllClassJunior`);
  }

  getTeacherClassBLP(id:number){
    return this.http.get<any>(this.url + `api/teacher/getTeacherClassBLP/${id}`);
  }
  getTeacherClassElem(id:number){
    return this.http.get<any>(this.url + `api/teacher/getTeacherClassElem/${id}`);
  }
  getTeacherClassJunior(id:number){
    return this.http.get<any>(this.url + `api/teacher/getTeacherClassJunior/${id}`);
  }

  getAllTeacherClass(id:number){
    return this.http.get<any>(this.url + `api/teacher/getAllTeacherClass/${id}`);
  }
  getAllSubject(){
    return this.http.get<any>(this.url + `api/getAllSub`);
  }

  uploadFile(adminId:any,file:File){
    const formdata = new FormData();
    formdata.append('admin_id',adminId)
    formdata.append('file',file)

    return this.http.post(this.url + 'api/uploadMedia', formdata);
  }

}



