import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Todos } from 'src/app/Todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  localItem: string;
  todoss:Todos[];
  constructor() {
    this.localItem = localStorage.getItem("todoss");
    if(this.localItem == null){
      this.todoss = [];
    }
    else{
      this.todoss = JSON.parse(this.localItem);
    }

   }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todos){
    const idx = this.todoss.indexOf(todo);
    this.todoss.splice(idx,1);
    localStorage.setItem("todoss", JSON.stringify(this.todoss));
  }

  addTodo(todo: Todos){
    this.todoss.push(todo);
    localStorage.setItem("todoss", JSON.stringify(this.todoss));
  }
}
