import { Injectable } from '@angular/core';
import { MonthTimetable, TestEvent } from '../models/event.model';

@Injectable({ providedIn: 'root' })
export class TimetableService {
  private timetableData: MonthTimetable = { 
    'March': [
          {
              date: 'Sun 16',
              name: 'CSSE01',
              description: 'Maths, Eng Reading Comp. & Creative Writing',
              testtype: "1st CSSE Style 11+ Mock Test",
              centers: [
                  { name: 'Ilford', time: '3:00 PM - 5:00 PM', url: 'https://www.sehyog.co.uk' },
                  { name: 'Chelmsford', time: '12:30 PM - 1:30 PM', url: 'https://www.sehyog.co.uk' },
                  { name: 'Basildon', time: '5:30 PM - 7:30 PM',url: 'https://www.sehyog.co.uk' },
                  { name: 'Southend-On-Sea', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' },
                  { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
              ]
          },
        {
          date: 'Sun 23',
          name: 'GLBR01',
          testtype: "1st GL Asessment, Redbridge",
          description: 'Maths, Eng, Verbal Reasoning(VR), Non Verbal Reasoning(NVR)',
          centers: [
              { name: 'Ilford', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
              { name: 'Amershem', time: '5:30 PM - 7:30 PM',url: 'https://www.sehyog.co.uk' },
              { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
          ]
      },
      {
        date: 'Sun 23',
        name: 'GLKE01',
        description: 'Maths, English, VR, NVR',
        testtype: "1st GL Asessment, Kent",
        centers: [
            { name: 'Dartford', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
            { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
        ]
    },
    {
      date: 'Sun 30',
      name: 'FSCE01',
      description: 'Maths, Eng, Creative Writing',
      testtype: "1st FSCE Style 11+ Mock Test",
      centers: [
          { name: 'Ilford', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
          { name: 'CHELMSFORD', time: '5:30 PM - 7:30 PM',url: 'https://www.sehyog.co.uk' },
          { name: 'Basildon', time: '5:30 PM - 7:30 PM',url: 'https://www.sehyog.co.uk' },
          { name: 'Amershem', time: '5:30 PM - 7:30 PM',url: 'https://www.sehyog.co.uk' },
          { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
      ]
  },
  {
    date: 'Sun 30',
    name: 'GLQE01',
    description: 'Maths, Eng, Verbal Reasoning(VR)',
    testtype: "1st GL Asessment, QE Barnet",
    centers: [
        { name: 'Ilford', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
        { name: 'CHELMSFORD', time: '5:30 PM - 7:30 PM',url: 'https://www.sehyog.co.uk' },
        { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
      ]
    },
  {
    date: 'Sun 30',
    name: 'GLHBS01',
    description: 'Maths, Eng, VR, NVR',
    testtype: "1st GL Asessment, HBS",
    centers: [
        { name: 'Ilford', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
        { name: 'CHELMSFORD', time: '5:30 PM - 7:30 PM',url: 'https://www.sehyog.co.uk' },
        { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
    ]
}
      ],
'April': [
        {
              date: 'Sun 06',
              name: 'CSSE02',
              description: 'Maths, Eng, Comp., VR, Creative Writing',
              testtype: "2nd CSSE Style 11+ Mock Test",
              centers: [
                  { name: 'Ilford', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
                  { name: 'Chelmsford', time: '5:30 PM - 7:30 PM' ,url: 'https://www.sehyog.co.uk'},
                  { name: 'Basildon', time: '5:30 PM - 7:30 PM',url: 'https://www.sehyog.co.uk' },
                  { name: 'Southend-On-Sea', time: '5:30 PM - 7:30 PM',url: 'https://www.sehyog.co.uk' },
                  { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
              ]
          },
          {
            date: 'Sun 13',
            name: 'GLBR02',
            description: 'Maths, Eng, VR, NVR',
            testtype: "2nd GL Asessment, Redbridge",
            centers: [
                { name: 'Ilford', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
                { name: 'Amerhsam', time: '5:30 PM - 7:30 PM',url: 'https://www.sehyog.co.uk' },
                { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
            ]
        },
        {
          date: 'Sun 13',
          name: 'GLKE02',
          description: 'Maths, Eng, VR, NVR',
          testtype: "2nd GL Asessment, Kent",
          centers: [
              { name: 'Dartford', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
              { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
          ]
      },
      {
        date: 'Sun 27',
        name: 'CSSE03',
        description: 'Maths, Eng, VR, NVR',
        testtype: "3rd CSSE Style 11+ Mock Test",
        centers: [
            { name: 'ILFORD', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
            { name: 'CHELMSFORD', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' },
            { name: 'BASILDON', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' },
            { name: 'Southend-On-Sea', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' },
            { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
        ]
    }
      ],
      'May': [
          {
              date: 'Sun 04',
              name: 'FSCE02',
              description: 'Maths, Eng, Creative Writing',
              testtype: "2nd FSCE Style 11+ Mock Test",
              centers: [
                  { name: 'Ilford', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
                  { name: 'Chelmsford', time: '5:30 PM - 7:30 PM',url: 'https://www.sehyog.co.uk' },
                  { name: 'Basildon', time: '5:30 PM - 7:30 PM',url: 'https://www.sehyog.co.uk' },
                  { name: 'Southend-On-Sea', time: '5:30 PM - 7:30 PM',url: 'https://www.sehyog.co.uk' },
                  { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
              ]
          },
          {
            date: 'Sun 04',
            name: 'GLQE02',
            description: 'Maths, English, VR',
            testtype: "2nd GL Asessment, QE Barnet",
            centers: [
              { name: 'Ilford', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
              { name: 'Chelmsford', time: '5:30 PM - 7:30 PM',url: 'https://www.sehyog.co.uk' },
              { name: 'Basildon', time: '5:30 PM - 7:30 PM',url: 'https://www.sehyog.co.uk' },
              { name: 'Amersham', time: '5:30 PM - 7:30 PM',url: 'https://www.sehyog.co.uk' },
              { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
            ]
        },
        {
          date: 'Sun 04',
          name: 'GLHBS02',
          description: 'Maths, Eng, VR, NVR',
          testtype: "2nd GL Asessment, HBS",
          centers: [
              { name: 'Ilford', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
              { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
          ]
      },
      {
        date: 'Sun 11',
        name: 'CSSE04',
        description: 'Maths, Eng, Comp, VR, Creative Writing',
        testtype: "4th CSSE Style 11+ Mock Test",
        centers: [
          { name: 'ILFORD', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
          { name: 'CHELMSFORD', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' },
          { name: 'BASILDON', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' },
          { name: 'Southend-On-Sea', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' },
          { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
        ]
    },
    {
      date: 'Sun 18',
      name: 'GLRB03',
      description: 'Maths, Eng, VR, NVR',
      testtype: "3rd GL Asessment, Redbridge",
      centers: [
        { name: 'ILFORD', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
        { name: 'Amersham', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' },
        { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
      ]
  },
  {
    date: 'Sun 18',
    name: 'GLKE03',
    description: 'Maths, Eng, VR, NVR',
    testtype: "3rd GL Asessment, Kent",
    centers: [
        { name: 'Dartford', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
        { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
    ]
},
{
  date: 'Sun 25',
  name: 'CSSE05',
  description: 'Maths, English, Comp VR, Creative Writing',
  testtype: "5th CSSE Style 11+ Mock Test",
  centers: [
      { name: 'ILFORD', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
      { name: 'CHELMSFORD', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' },
      { name: 'BASILDON', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' },
      { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
  ]
}
      ],
      'June': [
          {
              date: 'Sun 01',
              name: 'FSCE03',
              description: 'Maths, Eng, Creative Writing',
              testtype: "3rd FSCE Style 11+ Mock Test",
              centers: [
                  { name: 'Ilford', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
                  { name: 'Chelmsford', time: '5:30 PM - 7:30 PM',url: 'https://www.sehyog.co.uk' },
                  { name: 'Basildon', time: '5:30 PM - 7:30 PM',url: 'https://www.sehyog.co.uk' },
                  { name: 'Amershem', time: '5:30 PM - 7:30 PM',url: 'https://www.sehyog.co.uk' },
                  { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
              ]
          },
          {
            date: 'Sun 01',
            name: 'GLQE03',
            description: 'Maths, English, VR',
            testtype: "3rd GL Asessment, QE Barnet",
            centers: [
              { name: 'Ilford', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
              { name: 'Harrow', time: '5:30 PM - 7:30 PM',url: 'https://www.sehyog.co.uk' },
              { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
            ]
        },
        {
          date: 'Sun 01',
          name: 'GLHBS03',
          description: 'Maths, Eng, VR, NVR',
          testtype: "3rd GL Asessment, HBS",
          centers: [
            { name: 'Ilford', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
            { name: 'Harrow', time: '5:30 PM - 7:30 PM',url: 'https://www.sehyog.co.uk' },
            { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
          ]
      },
      {
        date: 'Sun 08',
        name: 'CSSE06',
        description: 'Maths, Eng, Comp, VR, Creative Writing',
        testtype: "6th CSSE Style 11+ Mock Test",
        centers: [
          { name: 'ILFORD', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
          { name: 'CHELMSFORD', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' },
          { name: 'BASILDON', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' },
          { name: 'Southend-On-Sea', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' },
          { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
        ]
    },
    {
      date: 'Sun 15',
      name: 'GLRB04',
      description: 'Maths, Eng, VR, NVR',
      testtype: "4th GL Asessment, Redbridge",
      centers: [
        { name: 'Ilford', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
        { name: 'Amersham', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' },
        { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
      ]
  },
  {
    date: 'Sun 15',
    name: 'GLKE04',
    description: 'Maths, Eng, VR, NVR',
    testtype: "4th GL Asessment, Kent",
    centers: [
        { name: 'Dartford', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
        { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
    ]
},
{
  date: 'Sun 22',
  name: 'CSSE07',
  description: 'Maths, English, Comp VR, Creative Writing',
  testtype: "7th CSSE Style 11+ Mock Test",
  centers: [
    { name: 'ILFORD', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
    { name: 'CHELMSFORD', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' },
    { name: 'BASILDON', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' },
    { name: 'Southend-On-Sea', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' },
    { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
  ]
},
{
  date: 'Sun 29',
  name: 'FSCE04',
  description: 'Maths, English, Creative Writing',
  testtype: "4th FSCE Style 11+ Mock Test",
  centers: [
    { name: 'ILFORD', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
    { name: 'CHELMSFORD', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' },
    { name: 'BASILDON', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' },
    { name: 'Amersham', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' },
    { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
  ]
},
{
  date: 'Sun 29',
  name: 'GLQE04',
  description: 'Maths, English, VR',
  testtype: "4th GL Asessment, QE Barnet",
  centers: [
      { name: 'ILFORD', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
      { name: 'Harrow', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' },
      { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
  ]
}
,
{
  date: 'Sun 29',
  name: 'GLHBS04',
  description: 'Maths, English, VR, NVR',
  testtype: "4th GL Asessment, HBS",
  centers: [
    { name: 'ILFORD', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
    { name: 'Harrow', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' },
    { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
  ]
}
      ],
      'July': [
          {
              date: 'Sun 06',
              name: 'CSSE08',
              description: 'Maths, Eng, Comp, VR, Creative Writing',
              testtype: "8th CSSE Style 11+ Mock Test",
              centers: [
                  { name: 'Ilford', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
                  { name: 'Chelmsford', time: '5:30 PM - 7:30 PM',url: 'https://www.sehyog.co.uk' },
                  { name: 'Basildon', time: '5:30 PM - 7:30 PM',url: 'https://www.sehyog.co.uk' },
                  { name: 'Southend-On-Sea', time: '5:30 PM - 7:30 PM',url: 'https://www.sehyog.co.uk' },
                  { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
              ]
          },
          {
            date: 'Sun 13',
            name: 'GLRB05',
            description: 'Maths, English, VR, NVR',
            testtype: "5th GL Asessment, Redbridge",
            centers: [
              { name: 'Ilford', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
              { name: 'Amersham', time: '5:30 PM - 7:30 PM',url: 'https://www.sehyog.co.uk' },
              { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
            ]
        },
        {
          date: 'Sun 13',
          name: 'GLKE05',
          description: 'Maths, Eng, VR, NVR',
          testtype: "5th GL Asessment, Kent",
          centers: [
            { name: 'Dartford', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
            { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
          ]
      },
      {
        date: 'Sun 13',
        name: 'SET01',
        description: 'SUTTON 1',
        testtype: "Sutton1",
        centers: [
          { name: 'Sutton', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' },
          { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
        ]
    },
    {
      date: 'Sun 20',
      name: 'CSSE09',
      description: 'Maths, Eng, Comp, VR, Cretive Writing',
      testtype: "9th CSSE Style 11+ Mock Test",
      centers: [
        {name: 'ILFORD', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
        { name: 'CHELMSFORD', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' },
        { name: 'BASILDON', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' },
        { name: 'Southend-On-Sea', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' },
        { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
      ]
  },
  {
    date: 'Sun 27',
    name: 'GLQE05',
    description: 'Maths, Eng, VR, NVR',
    testtype: "5th GL Asessment, QE Barnet",
    centers: [
      { name: 'ILFORD', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
      { name: 'Harrow', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' },
      { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
    ]
},
{
  date: 'Sun 27',
  name: 'GLHBS05',
  description: 'Maths, English, Comp VR, Creative Writing',
  testtype: "5th GL Asessment, HBS",
  centers: [
    { name: 'ILFORD', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
    { name: 'Harrow', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' },
    { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
  ]
},
{
  date: 'Sun 27',
  name: 'FSCEO5',
  description: 'Maths, English, Creative Writing',
  testtype: "5th FSCE Style 11+ Mock Test",
  centers: [
    { name: 'ILFORD', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
    { name: 'CHELMSFORD', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' },
    { name: 'BASILDON', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' },
    { name: 'Amersham', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' },
    { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
  ]
},
      ],
      'August': [
          {
              date: 'Sun 03',
              name: 'CSSE10',
              description: 'Maths, Eng, Comp, VR, Creative Writing',
              testtype: "10th CSSE Style 11+ Mock Test",
              centers: [
                  { name: 'Ilford', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
                  { name: 'Chelmsford', time: '5:30 PM - 7:30 PM',url: 'https://www.sehyog.co.uk' },
                  { name: 'Basildon', time: '5:30 PM - 7:30 PM',url: 'https://www.sehyog.co.uk' },
                  { name: 'Southend-On-Sea', time: '5:30 PM - 7:30 PM',url: 'https://www.sehyog.co.uk' },
                  { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
              ]
          },
          {
            date: 'Sun 10',
            name: 'GLRB06',
            description: 'Maths, English, VR, NVR',
            testtype: "6th GL Asessment (Essex/Redbridge)",
            centers: [
              { name: 'Ilford', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
              { name: 'Amersham', time: '5:30 PM - 7:30 PM',url: 'https://www.sehyog.co.uk' },
              { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
            ]
        },
        {
          date: 'Sun 10',
          name: 'GLKE06',
          description: 'Maths, Eng, VR, NVR',
          testtype: "6th GL Asessment Kent",
          centers: [
            { name: 'Dartford', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
            { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
          ]
      },
      {
        date: 'Sun 10',
        name: 'SET02',
        description: 'SUTTON 2',
        testtype: "Sutton 2",
        centers: [
          { name: 'Sutton', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' },
          { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
        ]
    },
    {
      date: 'Sun 17',
      name: 'FSCE06',
      description: 'Maths, Engish, Cretive Writing',
      testtype: "6th FSCE Style 11+ Mock Test",
      centers: [
        {name: 'ILFORD', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
        { name: 'Amersham', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' },
        { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
      ]
  },
  {
    date: 'Sun 17',
    name: 'GLQE06',
    description: 'Maths, Eng, VR',
    testtype: "6th GL Asessment, QE Barnet",
    centers: [
      { name: 'ILFORD', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
      { name: 'Harrow', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' },
      { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
    ]
},
{
  date: 'Sun 17',
  name: 'GLHBS06',
  description: 'Maths, English, VR, NVR',
  testtype: "6th GL Asessment, HBS",
  centers: [
    { name: 'ILFORD', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
    { name: 'Harrow', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' },
    { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
  ]
},
{
  date: 'Sun 24',
  name: 'CSSE11',
  description: 'Maths, English, Comp, VR, Creative Writing',
  testtype: "11th CSSE Style 11+ Mock Test",
  centers: [
    { name: 'ILFORD', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
    { name: 'CHELMSFORD', time: '9:00 AM - 6:00 PM' ,url: 'https://www.sehyog.co.uk'},
    { name: 'BASILDON', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' },
    { name: 'Southend-On-Sea', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' },
    { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
  ]
},
{
  date: 'Sun 31',
  name: 'GLRB07',
  description: 'Maths, English, VR, NVR',
  testtype: "7th GL Asessment (Essex/Redbridge)",
  centers: [
    { name: 'ILFORD', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
    { name: 'Amersham', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' },
    { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
  ]
},
      ],
      'September': [
          {
              date: 'Sun 07',
              name: 'CSSE12',
              description: 'Maths, Eng, Comp, VR, Creative Writing',
              testtype: "12th CSSE Style 11+ Mock Test",
              centers: [
                  { name: 'Ilford', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
                  { name: 'Chelmsford', time: '5:30 PM - 7:30 PM' ,url: 'https://www.sehyog.co.uk'},
                  { name: 'Basildon', time: '5:30 PM - 7:30 PM',url: 'https://www.sehyog.co.uk' },
                  { name: 'Southend-On-Sea', time: '5:30 PM - 7:30 PM',url: 'https://www.sehyog.co.uk' },
                  { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
              ]
          },

    ]
   };

  getMonths(): string[] {
    return ['March', 'April', 'May', 'June', 'July', 'August', 'September'];
  }

  getTimetable(): MonthTimetable {
    return this.timetableData;
  }
}