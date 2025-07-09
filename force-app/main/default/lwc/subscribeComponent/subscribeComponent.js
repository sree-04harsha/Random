import demoMessageChannel from '@salesforce/messageChannel/demoMessageChannel__c';
import { MessageContext, subscribe, unsubscribe } from 'lightning/messageService';
import { LightningElement, wire } from 'lwc';

export default class SubscribeComponent extends LightningElement {
    name='';
    subscription=null;

    @wire(MessageContext) messagContext;


    connectedCallback(){
        this.handleSubscribe();
    }

    disconnectedCallback(){
        this.handleUnsubscribe();
    }

    handleSubscribe(){
        if(!this.subscription){
            this.subscription = subscribe(this.messagContext,demoMessageChannel,
                (payload)=>
                    {
                         this.name=payload.mName; //mName is field in Message channel
                    }

            )
        }


    }


    handleUnsubscribe(){
        unsubscribe(this.subscription);
        this.subscription=null;
        }
}