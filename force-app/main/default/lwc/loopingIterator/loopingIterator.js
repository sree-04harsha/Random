import City from '@salesforce/schema/Asset.City';
import State from '@salesforce/schema/Asset.State';
import { LightningElement } from 'lwc';

export default class LoopingIterator extends LightningElement {


    list=[{
        id:1,
        city:'Bangalore',
        state:'Kanrnataka'
    },
    {
        id:2,
        city:'Kurnool',
        state:'Andhra Pradesh'
    },
    {
        id:3,
        city:'Hyderabad',
        state:'Telangana'
        }
]
}