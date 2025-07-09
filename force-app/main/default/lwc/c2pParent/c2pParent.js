import { LightningElement } from 'lwc';

export default class C2pParent extends LightningElement {

    childMessage = '';  

    
    handleMessage(event) {
        this.childMessage = event.detail.message;  
        console.log('Received message from child:', this.childMessage);  
    }
}