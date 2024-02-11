import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import  {NavbarComponent}  from './Mywebcomponent/navbar/navbar.component';
import { SidebarComponent } from './Mywebcomponent/sidebar/sidebar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,NavbarComponent,SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'To-do list';
  owner = 'mubin';
}
