import { Component, OnInit } from '@angular/core';

declare var particlesJS: any;
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    particlesJS.load('particles-js', '/assets/particles.json', function () {
      console.log('callback - particles.js config loaded');
    });

    $(document).ready(function () {
    $('.flipWrapper').click(function () {
        $(this).find('.card').toggleClass('flipped');
        return false;
    });
});
  }

}
