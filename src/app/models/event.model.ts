export interface TestCenter {
  name: string;
  time: string;
  url: string;
}

export interface TestEvent {
  date: string;
  name: string;
  description: string;
  testtype:String;
  centers: TestCenter[];
}

export interface MonthTimetable {
  [key: string]: TestEvent[];
}