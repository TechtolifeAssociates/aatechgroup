import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  contentName : string;
  content:any;

  constructor(private route?: ActivatedRoute) {
    
   }

  ngOnInit() {
    if(this.route){
      
      this.contentName = this.route.snapshot.paramMap.get('contentId');
      //this.contentName = this.route.snapshot.data[0]['contentName']; 
    }else{
      this.contentName = 'services';
    }
    console.log('-----------------'+this.contentName);
  }

}
