import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    isVisible=false

    datas=[
        {
            id:1,
            Name:'Harsha',
            Location:'Bangalore'
        },
        {
            id:2,
            Name:'Shiva',
            Location:'Kailash'
        },
        {
            id:3,
            Name:'Krishna',
            Location:'Vikuntam'
        }
    ]

    click(){
        this.isVisible=true
    }
}