import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../../service/http.service';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-alltask',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './alltask.component.html',
  styleUrl: './alltask.component.css'
})
export class AlltaskComponent {
  entered_task = "";
  tasklist:any[] = [];
  httpservice = inject(HttpService);
  ngOnInit(){this.getalltask()};
   taskfunction(){
    console.log(this.entered_task)
  this.httpservice.additionoftask(this.entered_task).subscribe(() => {this.entered_task = "";
  this.getalltask();});
 
   }

   getalltask(){
    this.httpservice.getalltask().subscribe((result:any)=>{console.log(result)
    this.tasklist = result;
    });
   }
}
