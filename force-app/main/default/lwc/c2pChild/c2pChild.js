import { LightningElement } from 'lwc';

export default class C2pChild extends LightningElement {


    sendMessage() {
        const customEvent = new CustomEvent('message', {  // creating the custome event
            detail: { message: 'Hello Parent, this message is from child' }  
        });
        this.dispatchEvent(customEvent);  // Dispatching the event
    }
 }
