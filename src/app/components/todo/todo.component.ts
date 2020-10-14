import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  count:number = 0;
  name:string = 'Foobar';
  work:string;
  listOfCars = [];
  countIncrement()
  {
    this.count+=1;
  }
  countDecrement()
  {
    this.count-=1;
  }
  doSomething()
  {
    this.listOfCars.push("Apple");
  }
  hai()
  {
    this.listOfCars.push(this.work);
  }
}
