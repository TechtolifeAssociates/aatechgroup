import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class PortalService {
  url:string = "http://www.aatechgroup.com:49152";
  
  constructor(private http:Http) { 
    
  }

  getJobDetails() {

    return this.http.get(this.url+"/jobdetails")
    .map(this.extractData)
    .catch(this.handleError);
  }


  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    //console.log(body.data);
    return body || {};
  }
 
  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  registerEmployer(employerData: any) {
    console.log(employerData);
  }

  registerCandidate(candidateData: any) {
    console.log(candidateData);
  }

  contactUs(contactFormData: any) {
    console.log(contactFormData);
    var urlNew = this.url + "/api/v1/sendemail";
    var data = JSON.parse(JSON.stringify(contactFormData));
    console.log('data -- ');
    console.log(data);
    console.log('data -- ');
    var postData = {
      from:data.email,
      subject:'Message from ' + data.firstName + ' '+data.lastName,
      text:data.message
    };
    console.log(postData);
    this.http.post(urlNew, postData).subscribe(res => console.log(res.json()));
  }

  getContent(contentId: string) {
    console.log(contentId);
  }

  insertEmployerData(employerData: any) {

  }

  insertCandidateData(candidateData: any) {

  }

  insertJobData(jobData: any) {

  }

  insertContent(contentData: any) {

  }

  updateEmployerData(employerData: any) {

  }

  updateCandidateData(candidateData: any) {

  }

  updateJobData(jobData: any) {

  }

  updateContent(contentData: any) {

  }

  deleteEmployerData(employerData: any) {

  }

  deleteCandidateData(candidateData: any) {

  }

  deleteJobData(jobData: any) {

  }

  deleteContent(contentData: any) {

  }

  getLatestNews() {
    return [];
  }
}
