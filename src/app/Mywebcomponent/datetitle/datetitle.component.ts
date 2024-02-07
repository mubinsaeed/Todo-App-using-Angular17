import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-datetitle',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './datetitle.component.html',
  styleUrl: './datetitle.component.css'
})
export class DatetitleComponent {
datecurrent = new Date();
}
