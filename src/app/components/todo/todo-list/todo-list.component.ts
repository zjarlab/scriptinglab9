import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoDetails
  constructor(private todoServ : TodoService) { }

  ngOnInit(): void {
    this.todoDetails = this.todoServ.todoDetails
  }
  things:string;
  listOfThings=[];
  addToDo()
  {
    this.listOfThings.push(this.things);
  }
}
