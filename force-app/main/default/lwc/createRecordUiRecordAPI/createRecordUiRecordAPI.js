import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
export default class CreateRecordUiRecordAPI extends LightningElement {

    name = '';

    nameChangeHandler(event) {
        this.name = event.target.value;
    }

    handleSave() {

        const fields = {};
        fields[NAME_FIELD.fieldApiName] = this.name;
        const recordInput = { apiName: ACCOUNT_OBJECT.objectApiName, fields };
        createRecord(recordInput)
        .then(result => {
            const event = new ShowToastEvent({
                title: 'Account Created',
                message: "Account Record Created Successfully",
                variant: 'success'
            });
            this.dispatchEvent(event);


        })
            .catch(error => {
                const event = new ShowToastEvent({
                    title: 'Account Creation Failed',
                    message: "Failed to creat Account Record",
                    variant: 'error'
                });
                this.dispatchEvent(event);
            });
        
    }
}
    
