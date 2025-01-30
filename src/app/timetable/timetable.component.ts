import { Component } from '@angular/core';
import { TimetableService } from '../services/mock-data.service';
import { MonthTimetable } from '../models/event.model';

@Component({
  selector: 'app-timetable',
  standalone: false,
  
  templateUrl: './timetable.component.html',
  styleUrl: './timetable.component.css'
})
export class TimetableComponent {
  months: string[] = [];
  selectedMonth: string = 'March';
  timetable: MonthTimetable = {};

  constructor(private timetableService: TimetableService) {}

  ngOnInit() {
    this.months = this.timetableService.getMonths();
    this.timetable = this.timetableService.getTimetable();
  }

  selectMonth(month: string) {
    this.selectedMonth = month;
  }
}
