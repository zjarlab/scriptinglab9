import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/todo.service';
@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {

  id;
  date;
  title;
  description;
  constructor(private todo : TodoService) { }

  ngOnInit(): void {
  }

  addTodo()
  {
    this.todo.createToDo(this.id,this.date,this.title,this.description);
  }
  removeTodo()
  {
    this.todo.removeToDo(this.id);
  }
}
