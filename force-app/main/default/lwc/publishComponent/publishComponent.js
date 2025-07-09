import demoMessageChannel from '@salesforce/messageChannel/demoMessageChannel__c';
import { MessageContext, publish } from 'lightning/messageService';
import { LightningElement, wire } from 'lwc';

export default class PublishComponent extends LightningElement {

    name='';
    @wire(MessageContext) 
    messageContext;

    changeHandler(event){
        this.name=event.target.value;
    }
    clickHandler(){
        let payload={mName:this.name};// mName from message Channel
       
        publish(this.messageContext,demoMessageChannel,payload)
    }
}