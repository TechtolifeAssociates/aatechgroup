import { PortalService } from './../portal/portal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-candidate',
  templateUrl: './register-candidate.component.html',
  styleUrls: ['./register-candidate.component.css']
})
export class RegisterCandidateComponent implements OnInit {
  service: PortalService;
  candidate = {};
  fileContent: any;
  constructor(service: PortalService) {
    this.service = service;
  }

  registerCandidate(candidate) {
    candidate['resume'] = this.fileContent;
    this.service.registerCandidate(candidate);
  }

  onChange(event) {
    console.log('onChange');
    var files = event.target.files;
    var file = files[0];
    if (files && file) {
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
    console.log(reader.result);
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.fileContent = btoa(binaryString);    
  }

  ngOnInit() {
  }

}
