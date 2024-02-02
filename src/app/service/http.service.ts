import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  http = inject(HttpClient);
  constructor() {
   }

   additionoftask(task:string){
     return this.http.post("http://localhost:3000/task",{title:task});
   }

   getalltask(){
    return this.http.get("http://localhost:3000/task");
   }

}
