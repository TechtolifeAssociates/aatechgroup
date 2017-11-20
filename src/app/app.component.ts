import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs/Rx';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  routerSubscription: Subscription;

  constructor(private router: Router) { }

  ngOnInit() {
    if (isPlatformBrowser) {
      this.routerSubscription = this.router.events
        .subscribe((event: Event) => {
          if (event instanceof NavigationStart) {
            console.log("Navigation start  -------");
            console.log(event);
            if (event.url) {
              var url = event.url;
              console.log(url);
              if (url.indexOf('home') !== -1) {
                console.log('home page');
              }
              console.log("Navigation start  -------");
            }
          }
          if (event instanceof NavigationEnd) {
            console.log("Navigation end  -------");
            console.log(event);
            if (event.url) {
              var url = event.url;
              console.log(url);

              if (url.indexOf('services') !== -1) {
                console.log('services page');
                var elmnt = document.getElementById("Services");
                console.log(elmnt);
                window.scrollTo(200, 300);

                var scrollDuration = 400;
                var scrollStep = 20 / (scrollDuration / 15),
                  scrollInterval = setInterval(function () {
                    if (window.scrollY != 0) {
                      window.scrollBy(0, scrollStep);
                    }
                    else clearInterval(scrollInterval);
                  }, 15);
              }
              else if (url.indexOf('industries') !== -1) {
                console.log('industries page');
                var elmnt = document.getElementById("Industries");
                console.log(elmnt);
                window.scrollTo(200, 300);

                var scrollDuration = 400;
                var scrollStep = 20 / (scrollDuration / 15),
                  scrollInterval = setInterval(function () {
                    if (window.scrollY != 0) {
                      window.scrollBy(0, scrollStep);
                    }
                    else clearInterval(scrollInterval);
                  }, 15);
              }
              else {
                window.scrollTo(0, 0);
              }
              console.log("Navigation end  -------");
            }
          }
          // NavigationCancel
          // NavigationError
          // RoutesRecognized
        });
    }
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}
