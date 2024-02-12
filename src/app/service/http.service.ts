import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/task';
  constructor() {
   }

   additionoftask(task:string){
     return this.http.post("http://localhost:3000/task",{title:task});
   }

   getalltask(){
    return this.http.get("http://localhost:3000/task");
   }
   updatetask(task:any){
    return this.http.put("http://localhost:3000/task/"+task.id,task);
   }

   deleteselected(task:any){
    const url = `${this.apiUrl}/${task.id}`; 
    return this.http.delete(url);
   }
}
