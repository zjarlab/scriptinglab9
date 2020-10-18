import { Injectable } from '@angular/core'

@Injectable({
    providedIn : 'root'
})

export class TodoService
{
    todoDetails = [

    ]
    createToDo(id,date,title,description)
    {
        this.todoDetails.push({id,date,title,description});
    }
    removeToDo(id)
    {
        this.todoDetails.shift();
    }
}