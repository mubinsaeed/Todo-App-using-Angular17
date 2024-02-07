import { Component, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StateService } from '../../service/state.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

stateservice = inject(StateService);
usersearch = new FormControl("");
ngOnInit(){
  this.usersearch.valueChanges.subscribe((value)=>{//console.log(value);
    this.stateservice.searchsubject.next(value || "");
  })
}
}
