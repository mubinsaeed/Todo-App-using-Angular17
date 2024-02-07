import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../../service/http.service';
import { subscribe } from 'diagnostics_channel';
import { DatePipe } from '@angular/common';
import { DatetitleComponent } from '../../datetitle/datetitle.component';
import { TaskListComponent } from '../../task-list/task-list.component';
import { StateService } from '../../../service/state.service';

@Component({
  selector: 'app-alltask',
  standalone: true,
  imports: [FormsModule,DatePipe,DatetitleComponent,TaskListComponent],
  templateUrl: './alltask.component.html',
  styleUrl: './alltask.component.css'
})
export class AlltaskComponent {
  entered_task = "";
  tasklist:any[] = [];
  initialtasklist : any[] = [];
  httpservice = inject(HttpService);
  stateservice = inject(StateService);
  ngOnInit(){
    this.stateservice.searchsubject.subscribe((value)=>{//console.log(value);
   if (value){
    this.tasklist = this.tasklist.filter(x=>x.title.toLowerCase().includes(value.toLowerCase()))
   }else{
    this.tasklist  = this.initialtasklist;
   }
     
    })
    this.getalltask();
  
  };
   taskfunction(){
    console.log(this.entered_task)
  this.httpservice.additionoftask(this.entered_task).subscribe(() => {this.entered_task = "";
  this.getalltask();});
 
   }

   getalltask(){
    this.httpservice.getalltask().subscribe((result:any)=>{console.log(result)
    this.initialtasklist = this.tasklist = result;
    });
   }

   oncomplete(emittask:any){
   // console.log("completed task",emittask);
   emittask.completed = true;
    this.httpservice.updatetask(emittask).subscribe(()=>{console.log("updated")});
    this.getalltask();
   }
   onimportant(emittask:any){
   // console.log("important task",emittask);
    emittask.important = true;
    this.httpservice.updatetask(emittask).subscribe(()=>{console.log("updated")});
    this.getalltask();


   }
}
