import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
@Input() tasklist : any[] = [];
@Output() important = new EventEmitter<any> (); 
@Output() completed = new EventEmitter<any> ();
markedcompleted(task:any){
 this.completed.emit(task);

}
markedimportant(task:any){
  this.important.emit(task);
}
}
