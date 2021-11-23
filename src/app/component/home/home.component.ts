import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }

  // import { Subscription } from 'rxjs';
  // observable: Subscription;
  // ngOnDestroy() {
  //   this.observable.unsubscribe();
  // }

}
