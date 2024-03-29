import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todos } from 'src/app/Todos';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title:string;
  desc: string;
  @Output() todoAdd: EventEmitter<Todos> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const todo = {
      sno : 1,
      title : this.title,
      desc : this.desc,
      active : true
    }
    this.todoAdd.emit(todo);
  }

}
