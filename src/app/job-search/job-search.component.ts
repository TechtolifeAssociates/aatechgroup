import { Component, OnInit } from '@angular/core';

import { PortalService } from '../portal/portal.service';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css']
})
export class JobSearchComponent implements OnInit {

  constructor(service:PortalService) { 
    this.service = service;
  }
  jobDetails : any;
  service:PortalService;
  ngOnInit() {
      //console.log('&&&&&&&&&&&&&'+this.service.getJobDetails());
      this.service.getJobDetails().subscribe(
        data => {
         console.log('data -- '+data);
         //var responseStr = JSON.stringify(data);
         //console.log(responseStr);
         this.jobDetails = data;        
        },
        error => {
          this.jobDetails = [];
          //this.error_text = "Sorry! No Dealers found. Try again";
          console.error('error -- '+error);
        }
      )
  }
}
