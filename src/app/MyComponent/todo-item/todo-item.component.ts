import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todos } from 'src/app/Todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todos;
  @Output() todoDelete: EventEmitter<Todos> = new EventEmitter;
  constructor() { 
    
  }

  ngOnInit(): void {
  }

  onClick(todo: Todos){
    this.todoDelete.emit(todo);
  }

}
