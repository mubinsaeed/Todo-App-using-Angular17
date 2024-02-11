import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../../service/http.service';
import { subscribe } from 'diagnostics_channel';
import { DatePipe } from '@angular/common';
import { DatetitleComponent } from '../../datetitle/datetitle.component';
import { TaskListComponent } from '../../task-list/task-list.component';
import { StateService } from '../../../service/state.service';
import { filter } from 'rxjs';
@Component({
  selector: 'app-important',
  standalone: true,
  imports: [FormsModule,DatePipe,DatetitleComponent,TaskListComponent],
  templateUrl: './important.component.html',
  styleUrl: './important.component.css'
})
export class ImportantComponent {
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
  

   getalltask(){
    this.httpservice.getalltask().subscribe((result:any)=>{
    this.initialtasklist = result;
   // console.log(result);
    this.initialtasklist = this.initialtasklist.filter(task=>{return task.important === true});
    //console.log(this.initialtasklist);
    this.tasklist = this.initialtasklist;
    });
   }


}
