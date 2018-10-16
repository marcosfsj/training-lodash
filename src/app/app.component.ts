import { Component, OnInit } from '@angular/core';
import { groupBy, each } from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'training-lodash';

  numbers: number[] = [2.3, 4.5, 4.8, 4.7, 3.5, 2.5];
  toDisplay: any;

  data = [
    {id: 'x' , prop1: 'prop1', prop2: 'prop2'},
    {id: 'y' , prop1: 'prop1', prop2: 'prop2'},
    {id: 'x' , prop1: 'prop1', prop2: 'prop2'},
    {id: 'x' , prop1: 'prop1', prop2: 'prop2'},
    {id: 'y' , prop1: 'prop1', prop2: 'prop2'},
    {id: 'x' , prop1: 'prop1', prop2: 'prop2'},
  ];

  ngOnInit() {
    this.toDisplay = groupBy(this.numbers, Math.floor);
    console.log(this.toDisplay);
    console.log(groupBy(this.data, 'id'));

    each(this.data, (obj) => { console.log(obj); });

  }

}
