import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs/Rx';
import 'rxjs/add/operator/filter';
import { PortalService } from './portal/portal.service';
declare var jquery: any;
declare var $: any;
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  routerSubscription: Subscription;
  service:PortalService;
  constructor(private router: Router,service:PortalService) { 
    this.service = service;
  }
 
  ngOnInit() {
    if (isPlatformBrowser) {
      this.routerSubscription = this.router.events
        .subscribe((event: Event) => {
          // if (event instanceof NavigationStart) {
          //   console.log("Navigation start  -------");
          //   console.log(event);
          //   if (event.url) {
          //     var url = event.url;
          //     console.log(url);
          //     if (url.indexOf('home') !== -1) {
          //       console.log('home page');
          //     }
          //     console.log("Navigation start  -------");
          //   }
          // }
          if (event instanceof NavigationEnd) {
            if (event.url) {
              var url = event.url;
              if (url.indexOf('services') !== -1) {
                console.log('services page');
                $(document).ready(function () {
                  // Handler for .ready() called.
                  $('html, body').animate({
                    scrollTop: $('#Services').offset().top
                  }, 'slow');
                });
              }
              else if (url.indexOf('industries') !== -1) {
                console.log('industries page');
                $(document).ready(function () {
                  $('html, body').animate({
                    scrollTop: $('#Industries').offset().top
                  }, 'slow');
                });
              }
              else if (url.indexOf('home') !== -1) {
                $(document).ready(function () {
                  $('html, body').animate({
                    scrollTop: $('#Home').offset().top
                  }, 'slow');                  
                });
              }else{
                 $(document).ready(function () {
                  $('html, body').animate({
                    scrollTop: $('.top-placeholder').offset().top
                  }, 'slow');
                });
              }
            }
          }
          // NavigationCancel
          // NavigationError
          // RoutesRecognized
        });
    }

    var feeds = this.service.getLatestNews();
    console.log('hi '+(feeds));     
  }
 
  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}