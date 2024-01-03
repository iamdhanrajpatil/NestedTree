import { Injectable } from '@angular/core';
import { ChildNode} from 'src/app/model/childnode.interface';

@Injectable({
  providedIn: 'root'
})
export class TreeDataService {
  data: ChildNode[] = [
    {
      name: 'Total Appointments (ALE Locations)',
      numbers:8638,
      children: [
        {
          name: 'Pre-Scheduled',
          numbers: 8638,
          children: [
            {
              name: 'Call Center',
              numbers:4633,
              children: [
                {
                  name: 'Internal', 
                  numbers:538,
                  children: [
                    {name: 'Inputs', numbers:238},
                    {name: 'Outputs', numbers:300}
                  ]
                }, 
                {
                  name:'Contractors', 
                  numbers:1441,
                  children: [
                    { name: 'Inputs', numbers:54 },
                    { name:'Outputs', numbers:1387 }
                  ]
                }, 
                {name:'IVR Reference', numbers:2653}
              ]
            }, 
            {
              name: 'Online',
              numbers:1779,
              children: [
                {
                  name:'AEG', 
                  numbers:1709
                },
                {
                  name:'zocdoc_New_Existing', 
                  numbers:70,
                  children: [
                   { name: 'New', numbers:58},
                   {name: 'Existing', numbers:12}
                  ]
                }
              ]
            },
            {
              name: 'Practice Staff',
              numbers:1844,
              children:[
                {name:'Outgoing', numbers:239},
                {name:'Incoming or in-office', numbers:1605}
              ]
            },
            {
              name: 'Pre-Appoints',
              numbers:92
            },
            {
              name: 'Others',
              numbers:290
            },
          ],
        },
        {
          name: 'Walk Ins',
          numbers:0
        }
      ],
    },
  ];
  constructor() { }
}
