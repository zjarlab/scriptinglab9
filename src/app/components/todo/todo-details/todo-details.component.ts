import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  date:string;
  id:number=0;
  description:string;
  listOfDates=[];
  listOfId=[];
  listOfDescription=[];
  addDetails()
  {
    this.id+=1;
    this.listOfId.push(this.id);
    this.listOfDescription.push(this.description);
    this.listOfDates.push(this.date);
  }
}
