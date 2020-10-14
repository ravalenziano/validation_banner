import { Component, OnInit } from '@angular/core';
import { Subscription, Observable, timer } from 'rxjs';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-validation-banner',
  templateUrl: './validation-banner.component.html',
  styleUrls: ['./validation-banner.component.css']
})
export class ValidationBannerComponent implements OnInit {
  isHidden: boolean = true;
  message: string = '';
    
  private timer: Observable<any> = new Observable<any>();
  private timerSubscription: Subscription = new Subscription();

  constructor() {
    this.isHidden = true;
  }

  ngOnInit(): void {
  }
  show(message: string) {
    if (this.timerSubscription != null) {
      this.timerSubscription.unsubscribe();
    }
    
    this.message = message;
    this.isHidden = false;


    this.timer = timer(5000);
    this.timerSubscription = this.timer.subscribe(() => {
      console.log('hiding');
      this.isHidden = true;
    });
  }

  dismiss() {
    this.isHidden = true;
  }

}
