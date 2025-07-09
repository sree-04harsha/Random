
// these are BLC Base Lightning Component
import { LightningElement } from 'lwc';
import {showToastEvent} from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
export default class LightningRecordForm extends LightningElement {

    objectName= ACCOUNT_OBJECT;
    fields = [NAME_FIELD, PHONE_FIELD, TYPE_FIELD];
    

    handleSuccess(event) {
        //console.log(event.detail.id);
        const notification= new showToastEvent({
            title: 'Success',
            message: "RecordId : "+ event.detail.id,
            variant: "success"
        })
        this.dispatchEvent(notification);
    
    }



    //record edit form

    editFormFields={
        nameField:NAME_FIELD,
        phoneField:PHONE_FIELD,
        typeField:TYPE_FIELD
    }



}